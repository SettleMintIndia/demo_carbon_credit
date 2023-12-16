import {
  useCheckRecordExistLazyQuery,
  //useCreateSecondaryMarketplaceTransferMutation,
  useCreateTokenHolderMutation,
/*   useGetAdminInfoLazyQuery,
  useGetUserByUsernameLazyQuery,
  useUpdateAdminBalanceMutation, */
  useUpdateTokenHolderMutation,
} from '@demo-carbon-credit/database';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useModalContext } from '@demo-carbon-credit/providers';
type Props = {
  availableToken: string;
  price: string;
  assetUUID: string;
  assetId: string;
};
export const PrimaryTokenTransaction = ({
  availableToken,
  price,
  assetUUID,
  assetId,
}: Props) => {
  const { setModal } = useModalContext();

  // New apis for purchase from secondary marketplace

  // Get admin data
 /*  const [
    getAdminInfoLazyQuery,
    { data: adminData, loading: adminDataLoading, error: adminDataError },
  ] = useGetAdminInfoLazyQuery({ fetchPolicy: 'network-only' });

  // Get user data by username
  const [
    getUserByUsernameLazyQuery,
    { data: userDetail, loading: userDetailLoading, error: userDetailError },
  ] = useGetUserByUsernameLazyQuery({ fetchPolicy: 'network-only' });

  //Create secondary marketplace transfer
  const [
    createSecondaryMarketplaceTransferMutation,
    {
      data: secondaryMarketplaceTransferData,
      loading: secondaryMarketplaceTransferDataLoading,
      error: secondaryMarketplaceTransferDataError,
    },
  ] = useCreateSecondaryMarketplaceTransferMutation({});

  // Update admin balance
  const [
    updateAdminBalanceMutation,
    {
      data: updateAdminBalanceData,
      loading: updateAdminBalanceLoading,
      error: updateAdminBalanceError,
    },
  ] = useUpdateAdminBalanceMutation({});

  */ const [
    checkRecordExistLazyQuery,
    {
      data: tokenHolderData,
      loading: tokenHolderDataLoading,
      error: tokenHolderDataError,
    },
  ] = useCheckRecordExistLazyQuery();

  const [
    createTokenHolderMutation,
    {
      data: createTokenHolderData,
      loading: createTokenHolderDataLoading,
      error: createTokenHolderDataError,
    },
  ] = useCreateTokenHolderMutation({});

  const [
    updateTokenHolderMutation,
    {
      data: updateTokenHolderData,
      loading: updateTokenHolderLoading,
      error: updateTokenHolderError,
    },
  ] = useUpdateTokenHolderMutation({});

  // Initial Call
  useEffect(() => {
   /*  getAdminInfoLazyQuery();
    getUserByUsernameLazyQuery({
      variables: {
        username: localStorage.getItem('user'),
      },
    }); */
  }, []);

  const [token, setToken] = useState('0');

  const [step, setStep] = useState(1);

  const nextPage = () => {
    if (step === 1) {
      setStep((prev) => prev + 1);
    }
  };
  const previousPage = () => {
    if (step === 2) {
      setStep((prev) => prev - 1);
    }
  };

  const onSubmit = async () => {
    // e.preventDefault();

    // Update in the hasura and call transfer function
    // let sold = false;
    // if (Number(availableToken) - Number(token) < 0) {
    //   throw 'Token value exceeded';
    // } else if (Number(availableToken) - Number(token) === 0) {
    //   sold = true;
    // }

    // first transaction the update in hasura

    // Transfer function
   /*  let tokenInfo = {
      amount: Number(token),
      pvtkey: adminData?.z_users[0].pvtKey,
      assetId: Number(assetId),
      sender: adminData?.z_users[0].address,
      reciever: userDetail?.z_users[0].address,
    };
    if (Number(availableToken) - Number(token) < 0) {
      toast.error('Please enter a valid amount');
      return;
    } */
    // Toast
    toast(
      <div className="loading_image">
        <img src="/PaymentProgress.gif" />
      </div>,
      {
        duration: 120000, // Delay of 2000 milliseconds (2 seconds)
      }
    );

   /*  setTimeout(async () => {
      const tx = await fetch('/api/transfer/transfer', {
        method: 'POST',
        body: JSON.stringify(tokenInfo),
      })
        .then(async (response) => {
          const res = await response.json();
          const settlement_date = Date.now().toString();

          // Create a transaction history
          await createSecondaryMarketplaceTransferMutation({
            variables: {
              amount: token,
              assetId: assetUUID,
              price: price,
              receiver: userDetail?.z_users[0].id,
              sender: adminData?.z_users[0].id,
              settlement_date: settlement_date,
              blockNumber: String(res.blockNumber),
              txHash: res.hash,
              type: 'direct',
            },
          });
          // Update admin balance of the bond
          await updateAdminBalanceMutation({
            variables: {
              adminBalance: String(Number(availableToken) - Number(token)),
              id: assetUUID,
            },
          });

         
          await checkRecordExistLazyQuery({
            variables: {
              assetId: assetUUID,
              userId: adminData?.z_users[0].id,
            },
            fetchPolicy: 'network-only',
          }).then((res) => {
            if (res?.data?.z_token_holder[0]?.id === undefined) {
              //Create Admin
              console.log('admin create', res?.data?.z_token_holder);
              createTokenHolderMutation({
                variables: {
                  amount: token,
                  assetId: assetUUID,
                  userId: adminData?.z_users[0].id,
                },
              });
            } else {
              // Update admin
              console.log('admin update', res.data.z_token_holder);
              updateTokenHolderMutation({
                variables: {
                  id: res.data?.z_token_holder[0].id,
                  amount: String(
                    Number(res.data?.z_token_holder[0].amount) - Number(token)
                  ),
                },
              });
            }
          });

          // For User
          await checkRecordExistLazyQuery({
            variables: {
              assetId: assetUUID,
              userId: userDetail?.z_users[0].id,
            },
            fetchPolicy: 'network-only',
          }).then((res) => {
            if (res?.data?.z_token_holder[0]?.id === undefined) {
              console.log('user create', res?.data?.z_token_holder);
              // Create user
              createTokenHolderMutation({
                variables: {
                  amount: token,
                  assetId: assetUUID,
                  userId: userDetail?.z_users[0].id,
                },
              });
            } else {
              // Update user
              console.log('user update', res?.data?.z_token_holder);
              updateTokenHolderMutation({
                variables: {
                  id: res.data?.z_token_holder[0].id,
                  amount: String(
                    Number(res.data?.z_token_holder[0].amount) + Number(token)
                  ),
                },
              });
            }
          });

          toast.remove();
        })
        .then(() => {
          // close the modal
          setModal(undefined);
          // Show the transfer success message
          toast(
            <div className="loading_image">
              <img src="/PurchasedTokens.gif" />
            </div>,
            {
              duration: 4000, // Delay of 2000 milliseconds (2 seconds)
            }
          );
        })
        .catch((error) => {
          throw error;
        });
    }, 4100); */
  };
  return (
    <div>
      <div className="container">
        <ul className="progressbar boxarea">
          <li className={`${step >= 1 && 'active'}`}> Step 1</li>
          <li className={`${step > 1 && 'active'}`}> Step 2</li>
        </ul>
        <div className="row">
          <div className="col-md-4">
            <div className="logo_image_container">
              <img
                src="/payment.jpg"
                alt="logo payment"
                className="payment_image"
              />
            </div>
          </div>
          <div className="col-md-8">
            <ul className="token_data_box">
              <li>
                <h5>Per Token Value</h5>
                <p>{price}</p>
              </li>
              <li>
                <h5>Total Balance</h5>
                <p>{availableToken}</p>
              </li>
            </ul>

            {/* Form  */}
            <div className="action-infobtns">
              {/* Step 1 */}
              {step === 1 && (
                <div className="step_1">
                  <div className="form-group">
                    <label className="step_input_label">
                      How many tokens to purchase?
                    </label>
                   {/*  <input
                      value={token}
                      className="form-control"
                      type="number"
                      placeholder="Enter value"
                      onChange={(e) => setToken(e.target.value)} 
                    />*/}
                  </div>
                </div>
              )}

              {/* Control the pages */}
            </div>
            {/* Total cost */}
            <h4>Total Cost: {Number(token) * Number(price)}</h4>
            {/* Step 2 */}

            {step === 2 && (
              <div className="step_2">
                {/* <form onSubmit={onSubmit}> */}
                <button
                  className="btn-success btn-lg"
                  onClick={() => {
                    onSubmit();
                    // toast.promise(onSubmit(), {
                    //   loading: 'Purchasing...',
                    //   success: (data) => {
                    //     return 'Purchased';
                    //   },
                    //   error: (err) =>
                    //     `Cannot Purchase, please try again later.${err}`,
                    // });
                  }}
                >
                  Pay Now
                </button>
                {/* </form> */}
              </div>
            )}
            <div className="step_controller">
              <div className="goback-btn">
                {step != 1 && (
                  <button onClick={previousPage} className="prebtn">
                    Go Back
                  </button>
                )}
              </div>
              <div>
                {step !== 2 && <button onClick={nextPage}>Next</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
