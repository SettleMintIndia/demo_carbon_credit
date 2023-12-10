import {
  useGetAdminInfoLazyQuery,
  useGetRequiredDataForBurnLazyQuery,
  useBurnAssetMutation,
} from '@demo-carbon-credit/database';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { eventNames } from 'process';
import { ChangeEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { NextPageWithLayout } from './_app';

interface IUser {
  amount: string;
  assetInfo: any;
  pvtkey: string;
}

const Page: NextPageWithLayout = () => {
  const [burnDetail, setBurnDetail] = useState<IUser | undefined>(undefined);
  const [asset, setAsset] = useState([]);
  const formatter = new Intl.NumberFormat('en-US', {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    roundingMode: "ceil",
    maximumFractionDigits: 0,
    roundingIncrement: 1, 
  });
  const router = useRouter();

  const handleChange = (key, value) => {
    if (key !== 'amount') {
      setBurnDetail({ ...burnDetail, [key]: assetData.z_assets.filter(item => item.id == value)[0] });
    } else {
      setBurnDetail({ ...burnDetail, [key]: value });
    }
  };

  // Get admin information

  const [
    getAdminInfoLazyQuery,
    { data: adminInfo, loading: adminInfoLoading, error: adminInfoError },
  ] = useGetAdminInfoLazyQuery({
    fetchPolicy: 'network-only',
  });

  // Get filter asset token information
  const [
    getRequiredDataForBurnLazyQuery,
    { data: assetData, loading: assetDataLoading, error: assetDataError },
  ] = useGetRequiredDataForBurnLazyQuery({
    fetchPolicy: 'network-only',
  });

  // Update the asset information
  /*
  Logic : Admin only burn the token . if admin has the token then only he can burn
  totalMinted = totalMinted - 1;
  totalSupply = totalSupply - 1;
  */

  const [
    burnAssetMutation,
    { data: burnAssetData, loading: burnAssetLoading, error: burnAssetError },
  ] = useBurnAssetMutation({});

  // Initial call

  useEffect(() => {
    getAdminInfoLazyQuery();
    getRequiredDataForBurnLazyQuery();
  }, []);

  // Call when admin is fetched

  const [setSelectedToken, setSetSelectedToken] = useState<any>();
  // console.log(getRequiredDataForBurnLazyQuery());

  useEffect(() => {
    if (adminInfo?.z_users) {
      setBurnDetail({ ...burnDetail, pvtkey: adminInfo.z_users[0].pvtKey, 'assetInfo': assetData });
    }
  }, [adminInfo?.z_users, assetData]);

  // Refresh after success
  // useEffect(() => {
  //   getRequiredDataForBurnLazyQuery();
  // }, [burnAssetData?.update_z_assets_by_pk]);

  console.log('asset information', burnDetail);
  console.log('asset data', assetData);
  const handleSubmit = async () => {
    event.preventDefault();

    console.log('Burned state details', burnDetail);

    toast(
      <div className="loading_image">
        <img src="/Burning.gif" />
      </div>,
      {
        duration: 4000, // Delay of 2000 milliseconds (2 seconds)
      }
    );

    setTimeout(async () => {
      await fetch('/api/burntoken', {
        method: 'post',
        body: JSON.stringify({
          amount: burnDetail.amount,
          assetId: burnDetail.assetInfo.assetId,
          pvtkey: burnDetail.pvtkey,
        }),
      })
        .then((response) => {

          // Update burn in burn table
          burnAssetMutation({
            variables: {
              id: burnDetail.assetInfo.id,
              burned: String(Number(burnDetail.amount) + Number(burnDetail.assetInfo.burned)),
              totalSupply: String(
                Number(burnDetail.assetInfo.totalSupply) - Number(burnDetail.amount)
              ),
              adminBalance: String(
                Number(burnDetail.assetInfo.adminBalance) - Number(burnDetail.amount)
              ),
            },
          });
          toast(
            <div className="loading_image">
              <img src="/Destroyed.gif" />
            </div>,
            {
              duration: 4000, // Delay of 2000 milliseconds (2 seconds)
            }
          );
          // router.reload();

          return response.json();
        })
        .catch((error) => {
          toast.error(`Cannot burned, please try again later.${error}`);
        });
    }, 4100);
  };
  return (
    <div className="container">
      <div className="header-area">
        <h2>Burn Token</h2>
      </div>
      <div className="user-info-table">
        <form>
          <label>Select Token</label>
          <select
            onChange={(e) => {
              handleChange('assetInfo', e.target.value);
            }}
            className="form-control"
            placeholder="Select User"
          >
            <>
              <option>Select</option>
              {assetData?.z_assets?.map((item) => {
                return (
                  <option
                    value={item.id}
                    key={item.id}
                  >
                    {item.assetName} {'('}
                    ID:
                    {item.assetId}
                    {')'}
                  </option>
                );
              })}
            </>
          </select>
          {burnDetail?.assetInfo?.adminBalance &&
          <label>
            <b>Balance:</b>{' '}
            {formatter.format(Number(burnDetail?.assetInfo?.adminBalance))}
          </label>}
          <br />
          <label>Tokens to Burn:&nbsp;</label>
          <input
            type="number"
            className="form-control"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleChange('amount', e.target.value);
            }}
          />
          <br />
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            Burn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
