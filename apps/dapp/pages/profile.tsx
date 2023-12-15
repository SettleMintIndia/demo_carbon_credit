import { useGetLoggedInUserLazyQuery } from '@demo-carbon-credit/database';
import { NextPageWithLayout } from './_app';
import { AppLayout } from '@demo-carbon-credit/components';
import { ReactElement, useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

const Page: NextPageWithLayout = () => {
  const [getUserByUsernameLazyQuery, { data: userData, loading, error }] =
  useGetLoggedInUserLazyQuery({
      variables: {
        username: localStorage.getItem('user'),
      },
      fetchPolicy: 'network-only',
    });
  const [show, setShow] = useState<boolean>(false);
  const [copy, setCopy] = useState<string>('Copy');

  useEffect(() => {
    getUserByUsernameLazyQuery();
  }, []);
  console.log('user data', userData);
  return (
    <>
      <div className="content-area">
        {userData?.z_users?.map((user) => {
          return (
            <>
              <div key={user.address} className="userpanel">
                <div className="header-area">
                {/*   <h2>User Profile</h2> */}
                </div>
                <div className="profile-area">
                  <div className="profile-base">
                    <div className="qrinfo">
                      <QRCode
                        size={256}
                        style={{
                          height: 'auto',
                          maxWidth: '100%',
                          width: '100%',
                        }}
                        value={user.id}
                        viewBox={`0 0 256 256`}
                      />
                      <h3>Wallet Address</h3>
                    </div>
                    <ul className="profile-info">
                      <li>
                        <label htmlFor="username"> Username: </label>
                        <span>{user.username}</span>
                      </li>
                      <li>
                        <label htmlFor="password">
                          Public Key (Wallet Address):
                        </label>
                        <span> {user.address} </span>
                      </li>
                      <li>
                        <label htmlFor="password">Private Key:</label>
                        {/* <span> {user.pvtkey} </span> */}
                        <span>
                          {show ? user.pvtKey : '***************'}{' '}
                          <button
                            className="viewbtn-pvt"
                            onClick={() => {
                              setShow(!show);
                            }}
                          >
                            {show ? 'Hide' : 'View'}
                          </button>{' '}
                          <button
                            className="viewbtn-pvt"
                            onClick={async () => {
                              await navigator.clipboard.writeText(user.pvtKey);
                              setCopy('Copied');
                            }}
                          >
                            {copy}
                          </button>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
