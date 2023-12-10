import {
  useUpdateTotalMintedMutation,
  useGetAdminInfoLazyQuery,
  useGetAdminInfoQuery,
  useMintAssetMutation,
  useCheckRecordExistLazyQuery,
  useCreateTokenHolderMutation,
  useUpdateTokenHolderMutation,
} from '@demo-carbon-credit/database';
import { useModalContext } from '@demo-carbon-credit/providers';
import { InputMaybe } from 'libs/database/src/graphql.graph.types';
import { ChangeEvent, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

interface IToken {
  assetId: string;
  amount: number;
  recipient: string;
  pvtkey: string;
}

interface IMint {
  assetId: string;
  name: string;
  id: string;
  oldMinted: string;
  totalSupply: string;
  burned: string;
  adminBalance: string;
}

export const Mint = function ({
  assetId,
  name,
  id,
  oldMinted,
  totalSupply,
  burned,
  adminBalance,
}: IMint) {
  const [token, setToken] = useState<any | undefined>(undefined);
  const { setModal } = useModalContext();

  const [
    checkRecordExistLazyQuery,
    {
      data: tokenHolderData,
      loading: tokenHolderDataLoading,
      error: tokenHolderDataError,
    },
  ] = useCheckRecordExistLazyQuery({ fetchPolicy: 'network-only' });

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

  const [
    updateTotalMintedMutation,
    {
      data: updateTotalMintedData,
      loading: updateTotalMintedLoading,
      error: updateTotalMintedError,
    },
  ] = useUpdateTotalMintedMutation({});

  // Mint token

  const [
    mintAssetMutation,
    { data: mintAsset, loading: mintAssetLoading, error: mintAssetError },
  ] = useMintAssetMutation({});

  const [getAdminInformation, { data: adminData, loading, error }] =
    useGetAdminInfoLazyQuery({
      variables: {},
    });

  // Initial call for admin data

  useEffect(() => {
    getAdminInformation();
  }, []);

  useEffect(() => {
    if (adminData?.z_users[0].pvtKey) {
      setToken({
        ...token,
        recipient: adminData?.z_users[0].address,
        pvtkey: adminData?.z_users[0].pvtKey,
        assetId: assetId,
      });

      checkRecordExistLazyQuery({
        variables: {
          assetId: id as string,
          userId: adminData?.z_users[0].id as string,
        },
      });
    }
  }, [adminData?.z_users]);

  const handleChange = (name: keyof IToken, value: IToken[keyof IToken]) => {
    setToken({
      ...token,
      [name]: value,
      pvtkey: adminData?.z_users[0].pvtKey,
      assetId: assetId,
    });
  };

  const onSubmit = async () => {
    console.log('Token data:', token);
    toast(
      <div className="loading_image">
        <img src="/Minting.gif" />
      </div>,
      {
        duration: 4000, // Delay of 2000 milliseconds (2 seconds)
      }
    );

    setTimeout(async () => {
      // Mint the token
      const tx = await fetch('/api/mint/mint', {
        method: 'POST',
        body: JSON.stringify(token),
      })
        .then((response) => {
          return response.status;
        })
        .catch((error) => {
          toast.error(`Cannot mint, please try again later.${error}`);
        });
      if (tx === 200) {
        // Update totalMinted
        // updateTotalMintedMutation({
        //   variables: {
        //     id: id,
        //     totalMinted: String(Number(oldMinted) + Number(token.amount)),
        //   },
        // });

        // Mint asset

        mintAssetMutation({
          variables: {
            id: id,
            totalMinted: String(Number(oldMinted) + Number(token.amount)),
            adminBalance: String(Number(adminBalance) + Number(token.amount)),
          },
        });

        // Create the token holder (update if already exist)

        if (tokenHolderData?.z_token_holder[0]?.id) {
          console.log('Updating...');
          // Update the token holder
          updateTokenHolderMutation({
            variables: {
              id: tokenHolderData?.z_token_holder[0]?.id,
              amount: String(
                Number(tokenHolderData?.z_token_holder[0]?.amount) +
                  Number(token?.amount)
              ),
            },
          });
        } else {
          console.log('Creating...');
          // Create  the token holder
          createTokenHolderMutation({
            variables: {
              amount: token?.amount,
              assetId: id,
              userId: adminData?.z_users[0]?.id,
            },
          });
        }

        setModal(undefined);
        toast(
          <div className="loading_image">
            <img src="/Minted.gif" />
          </div>
        );
      } else {
        console.log('Bad request');
        // throw new Error('Bad Request');
      }
    }, 4100);
  };

  console.log('tkh', tokenHolderData);

  // Console
  console.log('token holder', id, adminData?.z_users, token?.amount);

  return (
    <div className="pop-info-base">
      <div>
        <h2>Mint tokens</h2>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-5">
          <div className="logo_image_container">
            <img
              src="/mint.png"
              alt="logo payment"
              className="mint_payment_image w-100"
            />
          </div>
        </div>
        <div className="col-md-7 pt-3">
          <label>Recipient</label>
          <select
            onChange={(e) => {
              handleChange('recipient', e.target.value);
            }}
            className="form-control"
            placeholder="Select User"
          >
            {/* <>
              {localStorage.getItem('user') !== 'admin' ? (
                user_data?.map((item, index) => {
                  return (
                    <>
                      <option value="select">Select</option>
                      <option value={item.address}>
                        {item.username} {'('}
                        {item.address}
                        {')'}
                      </option>
                    </>
                  );
                })
              ) : (
                <option value={admin_address}>admin({admin_address})</option>
              )}
            </> */}
            <option value={adminData?.z_users[0].address}>
              admin({adminData?.z_users[0].address})
            </option>
          </select>
          <div id="commands" className="mt-2">
            <span>Tokens to be minted</span>
            <input
              type="text"
              className="form-control"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleChange('amount', e.target.value);
              }}
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              onClick={() => {
                onSubmit();
                // toast.promise(onSubmit(), {
                //   loading: 'Minting...',
                //   success: (user_detail) => {
                //     createMint({
                //       variables: {
                //         objects: fragment,
                //       },
                //     });
                //     setModal(undefined);
                //     return 'Minted Sucessfully';
                //   },
                //   error: (err) => `Cannot Mint, please try again later.${err}`,
                // });
              }}
            >
              Mint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
