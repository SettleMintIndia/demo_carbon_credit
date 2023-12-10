import React, { useEffect, useState } from 'react';
import {
  useGetUserByUsernameLazyQuery,
  useCreateSecondaryMarketPlaceMutation,
} from '@demo-carbon-credit/database';
import { useModalContext } from '@demo-carbon-credit/providers';
import toast from 'react-hot-toast';
type Props = {
  assetId: string;
  price: string;
  balance: string;
};
export const SecondaryTransferModal = ({ assetId, price, balance }: Props) => {
  const { setModal } = useModalContext();
  const [formValues, setFormValues] = useState({
    amount: '',
    price: '',
  });

  // Get user by username ( get the user uuid )
  const [
    getUserByUsernameLazyQuery,
    { data: userData, loading: userDataLoading, error: userDataError },
  ] = useGetUserByUsernameLazyQuery({});

  // Create a record in secondary mkt place

  console.log('user info', userData);

  const [
    createSecondaryMarketPlaceMutation,
    {
      data: createSecondaryMarketPlaceData,
      loading: createSecondaryMarketPlaceLoading,
      error: createSecondaryMarketPlaceError,
    },
  ] = useCreateSecondaryMarketPlaceMutation({});


  // Initial call
  useEffect(() => {
    getUserByUsernameLazyQuery({
      variables: {
        username: localStorage.getItem('user'),
      },
    });
  }, []);

  const onChangeInputFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  const submitSecondaryTransfer = async () => {
    // Toast

    console.log({
      amount: formValues.amount,
      price: price + '',
      assetId: assetId,
      per_token_value: formValues.price,
      publisher: userData?.z_users[0].id,
    });

    await toast(
      <div className="loading_image">
        <img src="/ListingOnMarket.gif" />
      </div>,
      {
        duration: 4000, // Delay of 2000 milliseconds (2 seconds)
      }
    );

    setTimeout(async () => {
      createSecondaryMarketPlaceMutation({
        variables: {
          amount: formValues.amount,
          price: price + '',
          assetId: assetId,
          per_token_value: formValues.price,
          publisher: userData?.z_users[0].id,
        },
      })
        .then((res) => {
          toast(
            <div className="loading_image">
              <img src="/Listed.gif" />
            </div>,
            {
              duration: 4000, // Delay of 2000 milliseconds (2 seconds)
            }
          );

          setModal(undefined);
        })
        .catch((error) => {
          toast.error(`Cannot published, please try again later.${error}`);
          throw error;
        });
    }, 4100);
  };
  return (
    <div>
      {/* form */}
      <div>
        <h4>Sell Tokens</h4>
        <hr />
      </div>

      <ul className="token_data_box">
        <li>
          <h5>Per Token Value :</h5>
          <p>{price}</p>
        </li>
        <li>
          <h5>Total Balance :</h5>
          <p>{balance}</p>
        </li>
      </ul>

      <div className="form-control-info">
        <label className="secondary-transfer-modal-label" htmlFor="">
          No of tokens to sell
        </label>
        <input
          type="number"
          name="amount"
          className="form-control"
          onChange={onChangeInputFields}
        />
      </div>
      <div className="form-control-info">
        <label className="secondary-transfer-modal-label" htmlFor="">
          Selling price per token
        </label>
        <input
          type="number"
          name="price"
          className="form-control"
          onChange={onChangeInputFields}
        />
      </div>

      <div className="form-control-info">
        <button
          onClick={() => {
            submitSecondaryTransfer();
          }}
        >
          Sell Token
        </button>
      </div>
    </div>
  );
};
