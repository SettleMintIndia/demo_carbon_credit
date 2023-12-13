import React, { useEffect, useState } from 'react';
import {
  useCreateSecondaryMarketPlaceMutation,
} from '@demo-carbon-credit/database';
import { useModalContext } from '@demo-carbon-credit/providers';
import toast from 'react-hot-toast';
import Router from 'next/router';
type Props = {
  assetId: string;
  price: string;
  balance: string;
  token: String
};
export const SecondaryTransferModal = ({ assetId, price, balance, token }: Props) => {
  const { setModal } = useModalContext();
  const [formValues, setFormValues] = useState({
    price: '',
    token: ''
  });

  // Get user by username ( get the user uuid )
  /* const [
    getUserByUsernameLazyQuery,
    { data: userData, loading: userDataLoading, error: userDataError },
  ] = useGetUserByUsernameLazyQuery({}); */

  // Create a record in secondary mkt place

  //console.log('user info', userData);

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
    /*  getUserByUsernameLazyQuery({
       variables: {
         username: localStorage.getItem('user'),
       }, 
     });*/
  }, []);

  const onChangeInputFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  const submitSecondaryTransfer = async () => {
    // Toast
    await toast(
      <div className="loading_image">
        <img src="/ListingOnMarket.gif" />
      </div>,
      {
        duration: 4000, // Delay of 2000 milliseconds (2 seconds)
      }
    );
    console.log(formValues)

    setTimeout(async () => {
      createSecondaryMarketPlaceMutation({
        variables: {
          minttoken_id: assetId, // value for 'minttoken_id'
          amount: formValues.price,// value for 'amount'
          tokens: formValues.token.toString(), // value for 'tokens'
          owner_id: localStorage.getItem('user_id'),// value for 'owner_id'
          tx_hash: '#000' // value for 'tx_hash'
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
          Router.push('/tokenmarketplace');
        })
        .catch((error) => {
          toast.error(`Cannot published, please try again later.${error}`);
          throw error;
        });
    }, 4100);
  };
  return (
    <div>
      <div>
        <h4>Sell Tokens</h4>
        <hr />
      </div>
      <ul className="token_data_box">
        <li>
          <h5>No of Tokens :</h5>
          <p>{token}</p>
        </li>

      </ul>

      <div className="form-control-info">
        <label className="secondary-transfer-modal-label" htmlFor="">
          No of tokens to sell
        </label>
        <input
          type="number"
          name="token"
          className="form-control"
          onChange={onChangeInputFields}
        />
      </div>
      <div className="form-control-info">
        <label className="secondary-transfer-modal-label" htmlFor="">
          Selling price
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
