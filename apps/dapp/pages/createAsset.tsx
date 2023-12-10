import * as React from 'react';
import { ChangeEvent, ReactElement, useState } from 'react';
import {
  useCreateAssetTokenMutation,
} from '@demo-carbon-credit/database';
import toast from 'react-hot-toast';
import { NextPageWithLayout } from './_app';
import { AppLayout, uploadToipfs } from '@demo-carbon-credit/components';
import CurrencyInput from 'react-currency-input-field';
import { create } from 'ipfs-http-client';
import { useRouter } from 'next/router';

import { ethers } from 'ethers';
const contractAbi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
    ],
    name: 'addFund',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'str1',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'str2',
        type: 'string',
      },
    ],
    name: 'compare',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
    ],
    name: 'getFund',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'param1',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'param2',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'param3',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'param4',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'param5',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'param6',
            type: 'string',
          },
        ],
        internalType: 'struct FundDetails.Details',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
    ],
    name: 'removeFund',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'param1',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'param2',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'param3',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'param4',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'param5',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'param6',
            type: 'string',
          },
        ],
        internalType: 'struct FundDetails.Details',
        name: 'details',
        type: 'tuple',
      },
    ],
    name: 'updateFund',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
const provider = new ethers.providers.JsonRpcProvider(
  `https://node-1-4d3b.gke-europe.settlemint.com/bpaas-593499Ee5d10f1EEad81348775fa4c182D310008`
);

const adminWallet = new ethers.Wallet(
  '0x908e18cc8f9024d5a41e707e88d9a2fc51a1fe612a80130cbbfc10a7b49a299e',
  provider
);
const contract = new ethers.Contract(
  '0x52314a1424262355CEef3eB744E21a9da2273d7a',
  contractAbi,
  provider
);

const contractWithAdminWallet = contract.connect(adminWallet);
interface IToken {
  totalCapital: string;
  managementFee: string;
  hurdleRate: string;
  document_cid: string;
  currency: string;
  assetName: string;
}

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const [token, setToken] = useState<IToken | undefined>(undefined);
  const [createAssetTokenMutation] = useCreateAssetTokenMutation({});

  // const changeFormat = (value:any) =>{
  //   return new Intl.NumberFormat().format(Number(value)) ;
  // }

  const handleChange = (name: keyof IToken, value: IToken[keyof IToken]) => {
    setToken({ ...token, [name]: value });
  };

  // Upload image

  const [file, setFile] = useState(null);
  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('File : ', e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const onSubmit = async () => {
    console.log('token values', token);
    // upload to ipfs

    toast(
      <div className="loading_image">
        <img src="/addAsset.gif" />
      </div>,
      {
        duration: 11000, // Delay of 2000 milliseconds (2 seconds)
      }
    );
    const cid = await uploadToipfs(file);

    setTimeout(async () => {
      // Direct blockchain call

      const gasLimit = await contractWithAdminWallet.estimateGas.addFund(
        token.assetName
      );
      const gasLimitString = gasLimit.toString();
      const tx = await contractWithAdminWallet.addFund(token.assetName, {
        gasPrice: 0,
        gasLimit: gasLimitString,
      });
      const txReceipt = await tx.wait(1);

      console.log('txHash', txReceipt);

      await createAssetTokenMutation({
        variables: {
          // ...token,
          document_cid: cid,
          txHash: txReceipt.transactionHash,
          assetName: token.assetName,
          currency: token.currency,
          hurdleRate: token.hurdleRate,
          managementFee: token.managementFee,
          totalCapital: token.totalCapital,
        },
      })
        .then((res) => {
          toast.remove();
          toast(
            <div className="loading_image">
              <img src="/assetAdded.gif" />
            </div>
          );
          router.push('/listAsset');
        })
        .catch((error) => {
          toast.error(
            `Cannot create the token, please try again later.${error}`
          );
        });
    }, 4100);
  };

  const AssetType = ['PE', 'Shares', 'Gold', 'Real Estate', 'Generic Asset'];
  const currency = ['EUR', 'USD', 'SGD', 'AED', 'INR'];

  return (
    <>
      <div className="header-area">
        <h2>Add a New Private Equity Fund</h2>
      </div>
      <div>
        <div className="user-info-table">
          <div id="commands" className="">
            <div className="row">
              <div className="col-md-12">
                <span>Fund Name</span>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleChange('assetName', e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6">
                <span>Total Capital</span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleChange('totalCapital', e.target.value);
                  }}
                />
                {/* Currency format */}
                {token?.totalCapital && (
                  <p>
                    {new Intl.NumberFormat().format(
                      Number(token?.totalCapital)
                    )}
                  </p>
                )}
              </div>

              <div className="col-md-6">
                <span>Currency</span>
                <select
                  className="form-control"
                  onChange={(e) => {
                    handleChange('currency', e.target.value);
                  }}
                >
                  <option>Select</option>
                  {currency.map((v, i) => (
                    <option key={i}>{v}</option>
                  ))}
                </select>
              </div>

              {/* New fields */}
              <div className="col-md-6">
                <span>Management Fee (%)</span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleChange('managementFee', e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6">
                <span>Hurdle Rate (%)</span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleChange('hurdleRate', e.target.value);
                  }}
                />
              </div>

              {/* File should be upload in IPFS */}
              <div className="col-md-12 input-box-styling">
                <span>Upload Document</span>
                <div className="file-info">
                  <input
                    onChange={(e) => uploadImage(e)}
                    accept="image/*,.pdf"
                    type="file"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="user-info-table">
          <div id="commands" className="">
            <div className="row">
              <div className="col-md-12 mt-2">
                <button
                  type="submit"
                  onClick={() => {
                    onSubmit();
                    // toast.promise(onSubmit(), {
                    //   // loading: <img src="/assetAdded.gif" />,
                    //   loading: '.',
                    //   success: (data) => {
                    //     return 'Successfully added';
                    //   },
                    //   error: (err) =>
                    //     `Cannot create the token, please try again later.${err}`,
                    // });
                  }}
                >
                  Add A New Fund
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
export default Page;
