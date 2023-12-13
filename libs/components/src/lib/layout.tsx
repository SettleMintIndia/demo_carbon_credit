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

  const admin = localStorage.getItem('user') == 'admin' ? true : false;
  const user =
    localStorage.getItem('user') != `${localStorage.getItem('user')}`
      ? true
      : false;

  useEffect(() => {
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

  const handleLogout=()=>{
    localStorage.clear();
    router.push('/');
  }
 
  return (
    <div>
      {!router.asPath.endsWith('/') && !router.asPath.endsWith('/signup') ? (
        <div className="sideba_content">
          <Box sx={{ flexGrow: 1 }}>
            <div className="base-container">
              {/* Left sidebar */}
              <div className="left-side">
                <div className="link-container">
                  <div className="logo-name">Carbon Credit</div>
                  <ul className="dashboard-list">
                    <a href="/dashboard" className="link">
                      <li>
                        <div
                          className="link-item
              "
                        >
                          <img src="dashboard.svg" alt="" />
                          Dashboard
                        </div>
                      </li>
                    </a>

                    <a href="/mytoken" className="link">
                      <li>
                        <div
                          className="link-item
              "
                        >
                          <img src="mint.svg" alt="" />
                          My Tokens
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
                    <a href="/transactionslog" className="link">
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
                    <a href="/tokenmarketplace" className="link">
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
                    <a href="/notifications" className="link">
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
                    <div className="logout-container" onClick={()=>handleLogout()}>
                      <div>
                        <img src="logout.svg" alt="" />
                      </div>
                      <div>
                        <p>LOGOUT</p>
                      </div>
                    </div>
                  </div>
                </div>
                {children}
              </div>
            </div>
            {/*  <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link href="/listAsset">
                    <div className="logo-wrap">
                      <div className="logo-img">
                        <Image
                          src={AppLogo}
                          alt="preview"
                        />
                      </div>
                    </div>
                  </Link>
                  <span className="textmiddle">
                    Carbon Credit Demo                  </span>
                </Typography>
                <div className="user-name">
                  Logged in as: <span>{localStorage.getItem('user')}</span>
                </div>
                {isLogin ? (
                  <Button onClick={() => handleLogin()} color="inherit">
                    Logout
                  </Button>
                ) : (
                  ''
                )}
              </Toolbar>
            </AppBar> */}
            {/*  <div className="outer-wrap">
              <div className="row">
                <div className="col-md-2 ">
                <div className="logo-name">Carbon Credit</div>

                  <Options />
                </div>
                <div className="col-md-10">
                  {children}
                  <div className="footer">
                    Copyright ©️2023 SettleMint. All Rights Reserved.
                  </div>
                </div>
              </div>
            </div> */}
          </Box>
          <AppModal />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};
