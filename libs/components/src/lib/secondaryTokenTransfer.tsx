import {
  useCheckRecordExistLazyQuery,
  useCreateSecondaryMarketplaceTransferMutation,
  useCreateTokenHolderMutation,
  useGetUserByUsernameLazyQuery,
  useUpdateLastTreadedPriceMutation,
  useUpdateSecondaryMarketPlaceMutation,
  useUpdateTokenHolderMutation,
} from '@demo-carbon-credit/database';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useModalContext } from '@demo-carbon-credit/providers';
type Props = {
  assetId: string;
  sender: string;
  availableToken: string;
  price: string;
  pvtKey: string;
  id: string;
  senderId: string;
  assetUUID: string;
};
export const SecondaryTokenTransaction = ({
  assetId,
  sender,
  availableToken,
  price,
  pvtKey,
  id,
  senderId,
  assetUUID,
}: Props) => {
  const { setModal } = useModalContext();


  //APIs
  // api for secondary market transfer
  const [
    createSecondaryMarketplaceTransferMutation,
    {
      data: secondaryMarketplaceTransferData,
      loading: secondaryMarketplaceTransferDataLoading,
      error: secondaryMarketplaceTransferDataError,
    },
  ] = useCreateSecondaryMarketplaceTransferMutation({});
  // Get data by username
  const [
    getUserByUsernameLazyQuery,
    {
      data: receiverData,
      loading: receiverDataLoading,
      error: receiverDataError,
    },
  ] = useGetUserByUsernameLazyQuery({});

  // api for updating the amount in secondary marketplace (calculate the amount remaining).
  const [
    updateSecondaryMarketPlaceMutation,
    {
      data: updateSecondaryMarketPlaceData,
      loading: updateSecondaryMarketPlaceLoading,
      error: updateSecondaryMarketPlaceError,
    },
  ] = useUpdateSecondaryMarketPlaceMutation({});

  const [
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

  // Update the last treaded price
  const [
    updateLastTreadedPriceMutation,
    {
      data: updateLastTreadedPriceData,
      loading: updateLastTreadedPriceDataLoading,
      error: updateLastTreadedPriceDataError,
    },
  ] = useUpdateLastTreadedPriceMutation({});

  // Transaction history
  //  const [createSecondaryMarketplaceTransferMutation, { data, loading, error }] = useCreateSecondaryMarketplaceTransferMutation({

  //  });
  // Initial call (fetch user by username)
  useEffect(() => {
    getUserByUsernameLazyQuery({
      variables: {
        username: localStorage.getItem('user'),
      },
    });
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
    // console.log('Token Value: ', token);

    // Update in the hasura and call transfer function
    // let sold = false;
    // if (Number(tokenData.amount) - Number(token) < 0) {
    //   throw 'Token value exceeded';
    // } else if (Number(tokenData.amount) - Number(token) === 0) {
    //   sold = true;
    // }

    // first transaction the update in hasura

    // Transfer function
    let tokenInfo = {
      amount: Number(token),
      pvtkey: pvtKey,
      assetId: Number(assetId),
      sender: sender,
      reciever: receiverData?.z_users[0].address,
    };

    console.log('token', {
      amount: Number(token),
      pvtkey: pvtKey,
      assetId: Number(assetId),
      sender: sender,
      reciever: receiverData?.z_users[0].address,
      remaining: String(Number(availableToken) - Number(token)),
    });
    if (Number(availableToken) - Number(token) < 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    // Toast
    toast(
      <div className="loading_image">
        <img src="/PaymentProgress.gif" />
      </div>,
      {
        duration: 10000, // Delay of 2000 milliseconds (2 seconds)
      }
    );

    setTimeout(async () => {
      const tx = await fetch('/api/transfer/transfer', {
        method: 'POST',
        body: JSON.stringify(tokenInfo),
      })
        .then(async (response) => {
          const res = await response.json();
          const settlement_date = Date.now().toString();
          toast.dismiss();
          updateLastTreadedPriceMutation({
            variables: {
              id: assetUUID,
              last_traded_price: price,
            },
          });

          // Create transaction history
          await createSecondaryMarketplaceTransferMutation({
            variables: {
              amount: token,
              assetId: assetUUID,
              price: price,
              receiver: receiverData?.z_users[0].id,
              sender: senderId,
              settlement_date: settlement_date,
              blockNumber: String(res.blockNumber),
              txHash: res.hash,
            },
          });

          // Update the data in token holder

          /*
              Logic . When we purchase from secondary market place . publisher (-ve value), receiver (+ve value) or create a new record
            */

          // For publisher
          await checkRecordExistLazyQuery({
            variables: {
              assetId: assetUUID,
              userId: senderId,
            },
            fetchPolicy: 'network-only',
          }).then((res) => {
            if (res?.data?.z_token_holder[0]?.id === undefined) {
              //Create Admin
              console.log('publisher create', res?.data?.z_token_holder);
              createTokenHolderMutation({
                variables: {
                  amount: token,
                  assetId: assetUUID,
                  userId: senderId,
                },
              });
            } else {
              // Update admin
              console.log('publisher update', res.data.z_token_holder);
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

          // For receiver
          console.log('receiver data bro', receiverData?.z_users);
          await checkRecordExistLazyQuery({
            variables: {
              assetId: assetUUID,
              userId: receiverData?.z_users[0].id,
            },
            fetchPolicy: 'network-only',
          }).then((res) => {
            if (res?.data?.z_token_holder[0]?.id === undefined) {
              console.log('receiver create', res?.data?.z_token_holder);
              // Create user
              createTokenHolderMutation({
                variables: {
                  amount: token,
                  assetId: assetUUID,
                  userId: receiverData?.z_users[0].id,
                },
              });
            } else {
              // Update user
              console.log('receiver update', res?.data?.z_token_holder);
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

          await updateSecondaryMarketPlaceMutation({
            variables: {
              amount: String(Number(availableToken) - Number(token)),
              id: id,
            },
          })
            .then((res) => {
              toast.remove();
              toast(
                <div className="loading_image">
                  <img src="/PurchasedTokens.gif" />
                </div>,
                {
                  duration: 10000, // Delay of 2000 milliseconds (2 seconds)
                }
              );

              return res;
            })
            .then((res) => {
              // Success
              setModal(undefined);
              setTimeout(() => {
                toast.remove();
              }, 3000);

              return res.data;
            })
            .catch((error) => {
              toast.error(`Error, please try again later.${error}`);
              return error;
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }, 4100);

    // updateSoldSecondaryMarketListingTokenMutation({
    //   variables: {
    //     amount: (Number(tokenData.amount) - Number(token)).toString(),
    //     id: tokenData.id,
    //     receiver: userData.filter(
    //       (user: any) => user.username === localStorage.getItem('user')
    //     )[0]?.address,
    //     settlementDate: Date.now().toString(),
    //     sold: sold,
    //   },
    // })
    //   .then((res) => {
    //     setModal(undefined);
    //     return res.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   });
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
                    <input
                      value={token}
                      className="form-control"
                      type="number"
                      placeholder="Enter value"
                      onChange={(e) => setToken(e.target.value)}
                    />
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
