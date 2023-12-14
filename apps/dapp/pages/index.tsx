import * as React from 'react';
import Router from 'next/router';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import {
  useCreateUserMutation,
  useGetLoggedInUserLazyQuery
} from '@demo-carbon-credit/database';
import toast from 'react-hot-toast';
import { NextPageWithLayout } from './_app';
import { Form } from 'antd';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import AppLogo from '../public/SettleMint_log-bk.png';

interface ILogin {
  username: string;
  password: string;
}
interface IUser {
  email: string;
  username: string;
  password: string;
}

const Page: NextPageWithLayout = () => {
  const [user, setUser] = useState<ILogin | undefined>(undefined);
  const [userErr, setUserErr] = useState('');
  const [passwordErr, setpasswordErr] = useState('');
  const [user_actErr, setUser_acountErr] = useState('');
  const [atLogin, setAtLogin] = useState(true);
  const [passwordType, setPasswordType] = useState('password');

  // const [createUser] = useInsertUsersMutation();
  const [createUserMutation] = useCreateUserMutation({});
  const [getUser] = useGetLoggedInUserLazyQuery()
  const [userDetailSignUp, setuserDetailSignUp] = useState<IUser | undefined>(
    undefined
  );

  const handleChangeSignUp = (name: keyof IUser, value: IUser[keyof IUser]) => {
    setuserDetailSignUp({ ...userDetailSignUp, [name]: value });
  };

  const handleSubmitSignUp = async () => {
    event.preventDefault();

    const response = await fetch('/api/createUser').then((response) =>
      response.json()
    );
    await createUserMutation({
      variables: {
        address: await response.walletID,
        pvtKey: await response.walletKey,
        username: userDetailSignUp.username,
        password: userDetailSignUp.password,

      },
    });
  };


  React.useEffect(() => {

  }, []);

  const handleChange = (name: keyof ILogin, value: ILogin[keyof ILogin]) => {
    setUser({ ...user, [name]: value });
  };



  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const authentication = async () => {
    // event.preventDefault();
    console.log(user);
    let error = false;

    setUser_acountErr('');
    setpasswordErr('');
    setUserErr('');
    if (!user?.password || user?.password == '') {
      setpasswordErr('Please enter password');
      error = true;
    } else {
      setpasswordErr('');
    }
    if (!user?.username || user?.username == '') {
      setUserErr('Please enter username');
      error = true;
    } else {
      setUserErr('');
    }
    if (!error) {

      var password;
      var user_id;
      var address;
      await getUser({
        variables: {
          username: user?.username,
        },
        fetchPolicy: 'network-only',
      }).then((data) => {
        console.log("userdata", data)
        password = data.data?.z_users[0]?.password;
        user_id = data.data?.z_users[0]?.id
        address=data.data ?.z_users[0]?.address

      })

      console.log(password, user_id);
      if (password === undefined || password === null) {
        console.warn('The demo backend is down!');
        localStorage.setItem('user', user?.username);
        localStorage.setItem('password', user?.password);
        alert('Wrong username or password!');
      } else {
        if (password == user?.password) {
          console.log("useraddress",address)
          localStorage.setItem('user', user?.username);
          localStorage.setItem('password', user?.password);
          localStorage.setItem('user_address', address)
          localStorage.setItem('user_id', user_id)

          Router.push('/dashboard')
        } else {
          alert('Wrong username or password!');
        }
      }
    } else {
      console.log('typo', userDetail);
      console.log('this is user', user);
      console.error('Invalid login details');
      // setUser_acountErr('Invalid Login Detail');
      //}
    }
  };


  return (
    <>
      <div className="bg-info">
        <div className="row">
          <div className="col-md-6">
            <div className="right-wrap">
              {atLogin ? (
                <div className="right-box">
                  <div className="logo img">
                    <Image
                      src={AppLogo}
                      alt="preview"
                    />
                  </div>

                  <h2 className="header-text">
                    Carbon Credit Demo
                  </h2>
                  {/* <h3>Sign In</h3> */}
                  <Form>
                    <div className="form-area">
                      <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleChange('username', (e.target.value).toLowerCase());
                          }}
                        />
                        {userErr != '' && (
                          <p className="alert-message">{userErr}</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                          type={passwordType}
                          className="form-control"
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleChange('password', e.target.value);
                          }}
                        />
                        <div className="password-icon-wrap">
                          <span className="password_icon">
                            {passwordType === 'password' ? (
                              <EyeFilled
                                onClick={() => togglePassword()}
                                className="icon_eye"
                              />
                            ) : (
                              <EyeInvisibleFilled
                                onClick={() => togglePassword()}
                                className="icon_eye"
                              />
                            )}
                          </span>
                        </div>{' '}
                        {passwordErr != '' && (
                          <p className="alert-message">{passwordErr}</p>
                        )}
                      </div>

                      <div className="btn-area">
                        <button
                          type="submit"
                          onClick={async () => {
                            await authentication();
                          }}
                        >
                          Login
                        </button>
                      </div>
                      <div className="form-info">
                        {user_actErr != '' && (
                          <p className="alert-message">{user_actErr}</p>
                        )}
                        Do not have an account?&nbsp;
                        <button
                          type="button"
                          onClick={() => {
                            setAtLogin(false);
                          }}
                          className="signup-lnk"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              ) : (
                <div className="right-box">
                  <div className="logo">
                    <img src="/SettleMint_log-bk.png" alt="preview" />
                  </div>
                  <h1>Register</h1>
                  <form>
                    <div className="form-area">
                      <div className="form-group">
                        <label>Username:</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleChangeSignUp('username', (e.target.value).toLowerCase());
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label>Password:</label>
                        <input
                          type={passwordType}
                          className="form-control"
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleChangeSignUp('password', e.target.value);
                          }}
                        />
                        <div>
                          <span className="password_icon">
                            {passwordType === 'password' ? (
                              <EyeFilled
                                onClick={() => togglePassword()}
                                className="icon_eye"
                              />
                            ) : (
                              <EyeInvisibleFilled
                                onClick={() => togglePassword()}
                                className="icon_eye"
                              />
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="btn-area">
                        <button
                          onClick={() => {
                            toast.promise(handleSubmitSignUp(), {
                              loading: 'Signing Up...',
                              success: (data) => {
                                //Router.push('/');
                                location.reload();

                                return 'User Created';
                              },
                              error: (err) =>
                                `Cannot publish post, please try again later.${err}`,
                            });
                          }}
                        >
                          Signup
                        </button>
                      </div>
                      <div className="form-info">
                        Already have an account?{' '}
                        <button
                          type="button"
                          className="signup-lnk"
                          onClick={() => {
                            setAtLogin(true);
                          }}
                        >
                          SignIn
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Page.getLayout = function getLayout(page: ReactElement) {
//   return <AppLayout>{page}</AppLayout>;
// };
export default Page;
