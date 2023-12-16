import { ChangeEvent, useEffect, useState } from 'react';
/* import {
  useFractionalizeAssetMutation,
  useGetUserByUsernameQuery,
} from '@demo-carbon-credit/database'; */
import toast from 'react-hot-toast';
import { useModalContext } from '@demo-carbon-credit/providers';
interface IToken {
  assetId: string | undefined;
  maturityStamp: number | undefined;
  totalSupply: number | undefined;
  faceValue: string | undefined;

  pvtkey: string | undefined;
}
interface IAsset {
  name: string;
  id: string;
  activeSupply: string;
  type: string;
  totalAsset: number;
}

export const CreateToken = ({
  activeSupply,
  id,
  type,
  totalAsset
}: IAsset) => {
  const [token, setToken] = useState<IToken | undefined>(undefined);
  const { setModal } = useModalContext();

  useEffect(() => {
    setSellPrice(String(Math.round(totalAsset / Number(token?.totalSupply))));
    setBuyPrice(String(Math.round(totalAsset / Number(token?.totalSupply))));
  }, [token?.totalSupply]);

  /* const [
    fractionalizeAssetMutation,
    {
      data: fractionalizeAsset,
      loading: fractionalizeAssetLoading,
      error: fractionalizeAssetError,
    },
  ] = useFractionalizeAssetMutation({
    fetchPolicy: 'network-only',
  }); */

  // Buy and Sell
  const [buyPrice, setBuyPrice] = useState<string>();
  const [sellPrice, setSellPrice] = useState<string>();

  /* const { data, loading, error } = useGetUserByUsernameQuery({
    variables: { username: localStorage.getItem('user') },
    fetchPolicy: 'network-only',
  }); */

/*   if (error) return <p>{error.message}</p>
  if (loading) return <p>Loading...</p>;

  const userDetail = data?.z_users[0].pvtKey; */

  const handleChange = (name: keyof IToken, value: IToken[keyof IToken]) => {
    setToken({
      ...token,
      [name]: value,
      //pvtkey: userDetail,
      assetId: String(Math.floor(Math.random() * (9999 - 100 + 1) + 100)),
      maturityStamp: 64065557711,
      faceValue: String(Math.round(totalAsset / Number(value))),
    } as any);
  };
  const formatter = new Intl.NumberFormat('en-US');

  const onSubmit = async () => {
    toast(
      <div className="loading_image">
        <img src="/Fractionalizing.gif" />
      </div>,
      {
        duration: 4000, // Delay of 2000 milliseconds (2 seconds)
      }
    );

    setTimeout(async () => {
      const tx = await fetch('/api/createAsset/createAsset', {
        method: 'POST',
        body: JSON.stringify(token),
      })
        .then((response) => {
          return response.status;
        })
        .catch((error) => {
          toast.error(`Cannot fractionalize, please try again later.${error}`);
        });
      if (tx === 200) {
        // Update on hasura database

        /* fractionalizeAssetMutation({
          variables: {
            assetId: String(token?.assetId),
            buyPrice: String(buyPrice),
            sellPrice: String(sellPrice),
            id: id,
            last_traded_price: sellPrice as string,
            totalSupply: String(token?.totalSupply),
          },
        }); */

        setModal(undefined);
        // Loading success
        toast(
          <div className="loading_image">
            <img src="/FractionalizingSuccess.gif" />
          </div>,
          {
            duration: 2000,
          }
        );
      } else {
        throw new Error('Bad Request');
      }
    }, 4100);
  };

  return (
    <>
      <div className="header-area">
        <h2>Fractionalize Asset</h2>
      </div>
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="logo_image_fractionalize_container">
              <img
                src="/paichart.webp"
                alt="logo"
                className="fractionalize_image"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div id="commands" className="">
              <div>
                <span>Total Supply</span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleChange('totalSupply', e.target.value);
                  }}
                />

                <div className="tokenarea">
                  <label htmlFor="">Per Token Value: </label>
                  <span>
                    {token?.totalSupply
                      ? formatter.format(
                          Math.round(totalAsset / Number(token?.totalSupply))
                        )
                      : '0'}
                  </span>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <span>Buy Price</span>
                    <input
                      type="number"
                      name="buyPrice"
                      className="form-control"
                      value={buyPrice}
                      onChange={(e) => setBuyPrice(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <span>Sell Price</span>
                    <input
                      type="number"
                      name="sellPrice"
                      className="form-control"
                      value={sellPrice}
                      onChange={(e) => setSellPrice(e.target.value)}
                    />
                  </div>
                </div>

                <div className="rtbtn">
                  <button
                    type="submit"
                    onClick={() => {
                      onSubmit();
                      // toast.promise(onSubmit(), {
                      //   loading: 'Fractionalizing Bond...',
                      //   success: (data) => {
                      //     return 'Successfully Fractionalized';
                      //   },
                      //   error: (err) =>
                      //     `Cannot create Token, please try again later.${err}`,
                      // });
                    }}
                  >
                    Fractionalize Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};