import {
  useCreateDirectTransferMutation,
  useGetAdminInfoLazyQuery,
  useGetUsersInfoLazyQuery,
} from '@demo-carbon-credit/database';
import { useModalContext } from '@demo-carbon-credit/providers';
import { ChangeEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { QrReader } from 'react-qr-reader';

interface IToken {
  assetId: number;
  amount: number;
  receiver: string;
  sender: string;
  pvtKey: string;
  id: string;
}

interface ITransfer {
  assetId: number;
  name: string;
  balance: string;
  price: string;
}

export const Transfer = function ({
  assetId,
  name,
  balance,
  price,
}: ITransfer) {
  const [token, setToken] = useState<any | undefined>(undefined);

  const { setModal } = useModalContext();
  const [scan, setScan] = useState<boolean>(false);

  // >> Get all user`s information
  const [
    getUsersInfoLazyQuery,
    { data: usersInfo, loading: usersInfoLoading, error: usersInfoError },
  ] = useGetUsersInfoLazyQuery({
    variables: {},
    fetchPolicy: 'network-only',
  });

  // >> Get admin information

  const [
    getAdminInfoLazyQuery,
    { data: adminInfo, loading: adminInfoLoading, error: adminInfoError },
  ] = useGetAdminInfoLazyQuery({
    variables: {},
  });

  // >> Create a direct transaction

  const [
    createDirectTransferMutation,
    {
      data: createDirectTransfer,
      loading: createDirectTransferLoading,
      error: createDirectTransferError,
    },
  ] = useCreateDirectTransferMutation({});

  // Initial call
  useEffect(() => {
    getUsersInfoLazyQuery();
    getAdminInfoLazyQuery();
  }, []);

  // Set require information

  useEffect(() => {
    setToken({
      assetId: assetId,
      sender: adminInfo?.z_users[0].id,
      price: price,
    });
  }, [adminInfo?.z_users]);

  const handleChange = (name: keyof IToken, value: IToken[keyof IToken]) => {
    setToken({
      ...token,
      [name]: value,
    });
  };

  // const onSubmit = async () => {
  //   const tx = await fetch('/api/transfer/transfer', {
  //     method: 'POST',
  //     body: JSON.stringify(token),
  //   }).then((response) => {
  //     return response.status;
  //   });
  //   if (tx !== 200) {
  //     throw new Error('Bad Request');
  //   }
  // };

  const onSubmitHasura = async () => {
    console.log('transaction token information ', token);

    // Toast
    toast(
      <div className="loading_image">
        <img src="/TokenTransferRequest.gif" />
      </div>,
      {
        duration: 2000, // Delay of 2000 milliseconds (2 seconds)
      }
    );

    const timeout = setTimeout(async () => {
      // Initiate transaction
      createDirectTransferMutation({
        variables: {
          amount: token.amount,
          assetId: token.assetId,
          price: token.price,
          receiver: token.receiver,
          sender: token.sender,
        },
      })
        .then((res) => {
          toast(
            <div className="loading_image">
              <img src="/SentForApproval.gif" />
            </div>,
            {
              duration: 1500,
            }
          );
          clearTimeout(timeout);
          setModal(undefined);
        })
        .catch((error) => {
          toast.error(`Cannot transfer, please try again later.${error}`);
        });
    }, 4100);
  };

  console.log('Token', token);
  return (
    <div className="batch-wrap">
      <div>
        <h4>Direct Transfer</h4>
        <hr />
      </div>

      <div className="row">
        <div className="col-md-6 ">
          <div className="logo_image_container">
            <img
              src="/transfer.png"
              alt="logo payment"
              className="transfer_payment_image"
            />
          </div>
          <div className="bg-gray">
            <ul className="list-info-token">
              <li>
                <label htmlFor="">
                  <b> Token Name: </b>
                </label>
                <span> {name}</span>
              </li>
              <li>
                <label htmlFor="">
                  <b> From: </b>
                </label>
                <span> {adminInfo?.z_users[0].username}</span>
              </li>
              <li>
                <label htmlFor="">
                  <b> Balance:</b>{' '}
                </label>
                <span> {balance}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-green">
            <div className="form-area">
              <div className="form-control-info">
                <label htmlFor="">Tokens to be Transferred</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleChange('amount', e.target.value);
                  }}
                />
              </div>
              <div className="form-control-info">
                <label htmlFor="">Recipient Address*</label>
                <select
                  value={token?.receiver}
                  onChange={(e) => {
                    handleChange('receiver', e.target.value);
                  }}
                  className="form-control"
                  placeholder="Select User"
                >
                  <option>Select</option>
                  {usersInfo?.z_users?.map((item, index) => {
                    return (
                      <option value={item.id}>
                        {item.username} {'('}
                        {item.address}
                        {')'}
                      </option>
                    );
                  })}
                </select>
                <div>
                  <button onClick={() => setScan(!scan)}>Scan QR Code</button>
                </div>
                <div className="qrvideo">
                  {scan && (
                    <QrReader
                      onResult={(recipient, error) => {
                        if (recipient) {
                          handleChange('receiver', String(recipient));
                          setScan(false);
                        }

                        if (error) {
                          console.info(error);
                        }
                      }}
                      constraints={{ facingMode: 'environment' }}
                    />
                  )}
                </div>
              </div>
              {/* <div className='btn-center'>
              <button
                type="submit"
                onClick={() => {
                  toast.promise(onSubmit(), {
                    loading: 'Transfering...',
                    success: (data) => {
                      setModal(undefined)
                      return 'Transfered';
                    },
                    error: (err) => `Cannot Transfer, please try again later.${err}`,
                  });
                }}
              >
                Transfer
              </button>
            </div> */}

              {/* Store the transfer tokens in hasura */}

              <div className="btn-center">
                <button
                  type="submit"
                  onClick={() => {
                    onSubmitHasura();
                    //   toast.promise(onSubmitHasura(), {
                    //     loading: 'Processing your request...',
                    //     success: (data) => {
                    //       setModal(undefined);
                    //       return 'Sent for approval';
                    //     },
                    //     error: (err) =>
                    //       `Cannot Transfer, please try again later.${err}`,
                    //   });
                  }}
                >
                  Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
