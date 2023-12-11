import { Router, useRouter } from 'next/router';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { AppModal } from './modal';
import { Link } from '@mui/material';
import { Options, User } from '@demo-carbon-credit/components';
import { useGetDataLazyQuery } from '@demo-carbon-credit/database';
import AppLogo from '../../../../apps/dapp/public/SettleMint_log.png';

type AppLayoutProps = {
  children?: React.ReactNode;
};

// const ipfsPrefix = 'https://ipfs-90d4.gke-europe.settlemint.com/gateway/ipfs';

export const AppLayout = ({ children }: AppLayoutProps) => {
  const router = useRouter();
  const [isLogin, setLogin] = useState<boolean>(false);
  // const [ipfsCid, setIpfsCid] = useState<string>('');
  // const [ipfsPath, setIpfsPath] = useState<string>('');

  // User Setting data
  const [getDataLazyQuery, { data, loading, error }] = useGetDataLazyQuery({
    fetchPolicy: 'network-only',
  });
  const admin = localStorage.getItem('user') == 'admin' ? true : false;
  const user =
    localStorage.getItem('user') != `${localStorage.getItem('user')}`
      ? true
      : false;

  useEffect(() => {
    getDataLazyQuery();
    if (localStorage.getItem('user')) {
      setLogin(true);
    }
    // if (data?.user_setting[0]) {
    //   setIpfsCid(data?.user_setting[0].cid);
    //   setIpfsPath(ipfsPrefix + '/' + ipfsCid + '?filename=' + ipfsCid);
    // } else {
    //   setIpfsPath('/preview.png');
    // }
    // console.log(ipfsPath);
  }, [admin, user]);

  const handleLogin = async () => {
    if (!isLogin) {
      router.push('/');
    } else {
      setLogin(false);
      localStorage.clear();
      router.push('/');
    }
  };

  return (
    <div className="base-container">
      {/* Left sidebar */}
      <div className="left-side">
        <div className="link-container">
          <div className="logo-name">Carbon Credit</div>
          <ul className="dashboard-list">
            <a href="/dashboard" className="link">
              <li className="active-left-nav">
                <div
                  className="link-item
              "
                >
                  <img src="dashboard.svg" alt="" />
                  Dashboard
                </div>
              </li>
            </a>
            <a href="/minttoken" className="link">
              <li>
                <div
                  className="link-item
              "
                >
                  <img src="mint.svg" alt="" />
                  Mint Token
                </div>
              </li>
            </a>
            <a href="/transactionlog" className="link">
              <li>
                <div
                  className="link-item
              "
                >
                  <img src="transaction.svg" alt="" />
                  Transactions
                </div>
              </li>
            </a>
            <a href="/" className="link">
              <li>
                <div
                  className="link-item
              "
                >
                  <img src="setting.svg" alt="" />
                  Token Marketplace
                </div>
              </li>
            </a>
            <a href="/" className="link">
              <li>
                <div
                  className="link-item
              "
                >
                  <img src="notification.svg" alt="" />
                  Notifications
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>

      {/* Right page contain */}
      <div className="right-side">
        {/* Top bar */}
        <div className="navbar-contain">
          <div className="title-container">
            <h3>Dashboard</h3>
          </div>
          <div className="nav-right">
            <div>
              <button className="mint-button">Mint Token</button>
            </div>
            <div className="logout-container">
              <div>
                <img src="logout.svg" alt="" />
              </div>
              <div>
                <p>LOGOUT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
