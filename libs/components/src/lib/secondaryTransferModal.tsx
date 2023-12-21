import React, { useEffect, useState } from 'react';
import { useCreateSecondaryMarketPlaceMutation, useUpdateMintTokensMutation } from '@demo-carbon-credit/database';
import { useModalContext } from '@demo-carbon-credit/providers';
import toast from 'react-hot-toast';
import Router from 'next/router';
type Props = {
  assetId: string;
  price: string;
  balance: string;
  totaltoken: String;
  remainingtoken:String
};
export const SecondaryTransferModal = ({
  assetId,
  price,
  balance,
  totaltoken,
  remainingtoken
}: Props) => {
  const { setModal } = useModalContext();
  const [formValues, setFormValues] = useState({
    price: '',
    token: '',
  });
  const [priceErr, setPriceErr] = useState('');
  const [tokenErr, setTokenErr] = useState('');
  const [err, setErr] = useState('');

  const [updateMintTokensMutation] = useUpdateMintTokensMutation()

  const [createSecondaryMarketPlaceMutation] = useCreateSecondaryMarketPlaceMutation();
  const onChangeInputFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  const submitSecondaryTransfer = async () => {
    let error = false;
    if (formValues.price == "") {
      setPriceErr("Please enter amount");
      error = true;
    } else {
      setPriceErr("");
    }
    if (formValues.token == "") {
      setTokenErr("Please enter tokens");
      error = true;
    } else {
      setTokenErr("");
    }

    if (!error) {

      if (Number(remainingtoken) >= Number(formValues.token)) {
        setErr('')
        // Toast
        await toast(
          <div className="loading_image">
            <img src="/ListingOnMarket.gif" />
          </div>,
          {
            duration: 2000, // Delay of 2000 milliseconds (2 seconds)
          }
        );
        console.log(formValues);

        setTimeout(async () => {
          let remaining_tokens=Number(remainingtoken)-Number(formValues.token)

          

          createSecondaryMarketPlaceMutation({
            variables: {
              minttoken_id: assetId, // value for 'minttoken_id'
              amount: formValues.price, // value for 'amount'
              tokens: formValues.token.toString(), // value for 'tokens'
              owner_id: localStorage.getItem('user_id'), // value for 'owner_id'
            },
          })

          updateMintTokensMutation({
            variables: {
              remaining_token:remaining_tokens.toString(),
              id:assetId, // value for 'tx_hash'
              token:totaltoken.toString()
            },
          }).then((res) => {
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
              toast.error(`Cannot sell token, please try again later.${error}`);
              throw error;
            });


        }, 4100);
      } else {
        setErr('Tokens not sufficient')
      }
    }
  };
  return (
    <div>
      <div className="sell-token">
        <div>
          <h4>Sell Tokens</h4>
          <hr />
        </div>
        <ul className="token_data_box">
          <li>
            <h5>No of Tokens :</h5>
            <p>{remainingtoken}</p>
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
          {tokenErr != '' && (
            <p className="alert-message">{tokenErr}</p>
          )}
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
          {priceErr != '' && (
            <p className="alert-message">{priceErr}</p>
          )}
        </div>

        <div>
          {err != '' && (
            <p className="alert-message">{err}</p>
          )}
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
    </div>
  );
};
