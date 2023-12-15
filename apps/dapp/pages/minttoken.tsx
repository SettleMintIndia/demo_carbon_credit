import { NextPageWithLayout } from './_app';
import { useEffect, useState, ChangeEvent } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import Router from 'next/router';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import toast from 'react-hot-toast';
import {
  useCreateTokenMutation,
} from '@demo-carbon-credit/database';
import { Button, Modal } from 'react-bootstrap';


const Page: NextPageWithLayout = () => {
  // Fetch assets data
  const [cc_base_emission, setcc_base_emission] = useState('');
  const [cc_actual_emission, setcc_actual_emission] = useState('');
  const [cc_actual_emissionerr, setcc_actual_emissionerr] = useState('');
  const [cc_base_emissionerr, setcc_base_emissionerr] = useState('');
  const [cc_emission_factor, setcc_emission_factor] = useState('');
  const [cc_emission_factorerr, setcc_emission_factorerr] = useState('');
  const [cc_timeperiod, setcc_timeperiod] = useState('');
  const [cc_timeperioderr, setcc_timeperioderr] = useState('');

  const [ee_base_emission, setee_base_emission] = useState('');
  const [ee_actual_emission, setee_actual_emission] = useState('');
  const [ee_actual_emissionerr, setee_actual_emissionerr] = useState('');
  const [ee_base_emissionerr, setee_base_emissionerr] = useState('');
  const [ee_emission_factor, setee_emission_factor] = useState('');
  const [ee_emission_factorerr, setee_emission_factorerr] = useState('');
  const [ee_timeperiod, setee_timeperiod] = useState('');
  const [ee_timeperioderr, setee_timeperioderr] = useState('');

  const [co2_amount, setco2_amount] = useState('');
  const [co2_amounterr, setco2_amounterr] = useState('');

  const [ccus_factor, setccus_factor] = useState('');
  const [ccus_factorerr, setccus_factorerr] = useState('');

  const [cci_timeperiod, setcci_timeperiod] = useState('');
  const [cci_timeperioderr, setcci_timeperioderr] = useState('');

  const [createTokenMutation] = useCreateTokenMutation()
  const [show, setShow] = useState(false);
  const [eeshow, seteeShow] = useState(false);
  const [ccshow, setccShow] = useState(false);


  const [token, setToken] = useState('')

  const handleClose = () => setShow(false);
  const handleeeClose = () => seteeShow(false)
  const handleccClose = () => setccShow(false)

  const handleShow = () => setShow(true);
  const handleeeShow = () => seteeShow(true);




  const handleCpUpload = () => {
    let error = false;
    setcc_base_emissionerr('');
    setcc_actual_emissionerr('');
    setcc_emission_factorerr('');
    setcc_timeperioderr('');
    if (cc_base_emission == '') {
      setcc_base_emissionerr('Please enter baseline emission');
      error = true;
    } else {
      setcc_base_emissionerr('');
    }
    if (cc_actual_emission == '') {
      setcc_actual_emissionerr('Please enter actual emission');
      error = true;
    } else {
      setcc_actual_emissionerr('');
    }
    if (cc_emission_factor == '') {
      setcc_emission_factorerr('Please enter emission factor');
      error = true;
    } else {
      setcc_emission_factorerr('');
    }
    if (cc_timeperiod == '') {
      setcc_timeperioderr('Please enter time period');
      error = true;
    } else {
      setcc_timeperioderr('');
    }
    if (!error) {
      let tokens: any = (Number(cc_base_emission) - Number(cc_actual_emission)) * Number(cc_emission_factor) * Number(cc_timeperiod)

      console.log(tokens);
      setShow(true)
      setToken(tokens);

      //handleMint(tokens);



    } else {

    }
  }


  const handleEeUpload = () => {

    let error = false;
    setee_base_emissionerr('');
    setee_actual_emissionerr('');
    setee_emission_factor('');
    setee_timeperiod('');
    if (ee_base_emission == '') {
      setee_base_emissionerr('Please enter baseline consumption');
      error = true;
    } else {
      setee_base_emissionerr('');
    }
    if (ee_actual_emission == '') {
      setee_actual_emissionerr('Please enter actual consumption');
      error = true;
    } else {
      setee_actual_emissionerr('');
    }
    if (ee_emission_factor == '') {
      setee_emission_factorerr('Please enter emission factor');
      error = true;
    } else {
      setee_emission_factorerr('');
    }
    if (ee_timeperiod == '') {
      setee_timeperioderr('Please enter time period');
      error = true;
    } else {
      setee_timeperioderr('');
    }
    if (!error) {

      let tokens: any = (Number(ee_base_emission) - Number(ee_actual_emission)) * Number(ee_emission_factor) * Number(ee_timeperiod)

      console.log(tokens);
      seteeShow(true)
      setToken(tokens);


      //handleMint(tokens);

    } else {

    }

  }

  const handleCCIUpload = () => {

    let error = false;
    setco2_amounterr('');
    setccus_factorerr('');
    setcci_timeperioderr('');
    if (co2_amount == '') {
      setco2_amounterr('Please enter CO2 amount');
      error = true;
    } else {
      setco2_amounterr('');
    }
    if (ccus_factor == '') {
      setccus_factorerr('Please enter CCUS factor');
      error = true;
    } else {
      setccus_factorerr('');
    }

    if (cci_timeperiod == '') {
      setcci_timeperioderr('Please enter time period');
      error = true;
    } else {
      setcci_timeperioderr('');
    }
    if (!error) {
      let tokens: any = Number(co2_amount) * Number(ccus_factor) * Number(cci_timeperiod)

      console.log(tokens);
      setToken(tokens);
      setccShow(true);
      // handleMint();


    } else {

    }


  }

  const handleMint = async () => {
    let user_id = localStorage.getItem('user_id');
    console.log('user_id', user_id);
    let tokens_str = token.toString();
    toast(
      <div className="loading_image">
        <img src="/Minting.gif" />
      </div>,
      {
        duration: 4000, // Delay of 2000 milliseconds (2 seconds)
      }
    );

    const response = await fetch('/api/mint', {
      method: 'post',
      body: JSON.stringify({
        tokenCount: tokens_str,
        recipient: localStorage.getItem('user_address'),
      }),
    })
    console.log("response", response);
    const data = await response.json();
    console.log("Data", data);



    try {
      const addusertokenpromise = async () => {
        await createTokenMutation({
          variables: {
            token: tokens_str, // value for 'token'
            tx_hash: data?.txHash, // value for 'tx_hash'
            user_id: user_id // value for 'user_id'
          },
        })

      };
      toast.promise(addusertokenpromise(), {
        loading: 'Creating CC Tokens...',
        success: (data) => `Token created successfully`,
        error: (err) => `Cannot publish token, please try again later.`,
      });

      toast(
        <div className="loading_image">
          <img src="/Minted.gif" />
        </div>
      );
       Router.push('/mytoken');

    } catch (error: any) {
      toast.error(error.message);

    }
  }


  // Initial call
  return (
    <>
      <div className="mint-token">
        <Tabs>
          <TabList>
            <Tab>Cleaner Production</Tab>
            <Tab>Energy Efficiency</Tab>
            <Tab>Carbon Capture</Tab>
          </TabList>

          <TabPanel>
            <div className="form-group">
              <label htmlFor="baseline">Baseline emissions</label>
              {/* <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="tons of CO2/month"
              /> */}
              <div className="input-container">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setcc_base_emission(e.target.value);
                  }} />
                {cc_base_emissionerr != '' && (
                  <p className="alert-message">{cc_base_emissionerr}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="actual">Actual emissions</label>
              {/*  <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="tons of CO2/month"
              /> */}
              <div className="input-container">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setcc_actual_emission(e.target.value);
                  }} />
                {cc_actual_emissionerr != '' && (
                  <p className="alert-message">{cc_actual_emissionerr}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="factor">Emission factor</label>
              {/*  <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="tons of CO2/month"
              /> */}
              <div className="input-container">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setcc_emission_factor(e.target.value);
                  }} />
                {cc_emission_factorerr != '' && (
                  <p className="alert-message">{cc_emission_factorerr}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="time">Time period</label>
              {/* <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="months"
              /> */}
              <div className="input-container1">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setcc_timeperiod(e.target.value);
                  }} />
                {cc_timeperioderr != '' && (
                  <p className="alert-message">{cc_timeperioderr}</p>
                )}
              </div>
            </div>

            <div className="btn-wrap">
              <button className="upload">Upload Document</button>
              <button className="calculate" onClick={() => handleCpUpload()}>Calculate Carbon Credit</button>
              <Modal
                className="cleaner-production"
                show={show}
                onHide={handleClose}
              >
                <Modal.Header closeButton closeVariant="white">
                  <Modal.Title>You can mint {token} Tokens</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {' '}
                  <p>
                    Formula: <br />
                    <span style={{ fontWeight: 'bold' }}>
                      Carbon credits ={' '}
                    </span>{' '}
                    (Baseline emissions - Actual emissions) * Emission factor *
                    Time period
                  </p>
                </Modal.Body>
                <div className="modal-button">
                  <Button variant="primary" onClick={handleMint}>
                    Mint
                  </Button>
                </div>
              </Modal>


            </div>

          </TabPanel>
          <TabPanel>
            <div className="form-group">
              <label htmlFor="baseline">Baseline energy consumption</label>
              {/* <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="kwh"
              /> */}

              <div className="input-container2">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setee_base_emission(e.target.value);
                  }} />
                {ee_base_emissionerr != '' && (
                  <p className="alert-message">{ee_base_emissionerr}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="actual">Actual energy consumption</label>
              {/* <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="kwh"
              /> */}

              <div className="input-container2">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setee_actual_emission(e.target.value);
                  }} />
                {ee_actual_emissionerr != '' && (
                  <p className="alert-message">{ee_actual_emissionerr}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="factor">Emission factor</label>
              {/*  <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="tons of CO2/month"
              /> */}

              <div className="input-container3">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setee_emission_factor(e.target.value);
                  }} />
                {ee_emission_factorerr != '' && (
                  <p className="alert-message">{ee_emission_factorerr}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="time">Time period</label>
              {/*  <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="months"
              /> */}

              <div className="input-container1">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setee_timeperiod(e.target.value);
                  }} />
                {ee_timeperioderr != '' && (
                  <p className="alert-message">{ee_timeperioderr}</p>
                )}
              </div>
            </div>

            <div className="btn-wrap">
              <button className="upload">Upload Document</button>
              <button className="calculate" onClick={() => handleEeUpload()}>Calculate Carbon Credit</button>
              <Modal
                className="energy-efficiency"
                show={eeshow}
                onHide={handleeeClose}
              >
                <Modal.Header closeButton closeVariant="white">
                  <Modal.Title>You can mint {token} Tokens</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {' '}
                  <p>
                    Formula: <br />
                    <span style={{ fontWeight: 'bold' }}>
                      Carbon credits ={' '}
                    </span>{' '}
                    (Baseline energy consumption - Actual energy consumption) *
                    Emission factor * Time period
                  </p>
                </Modal.Body>
                <div className="modal-button">
                  <Button variant="primary" onClick={handleMint}>
                    Mint
                  </Button>
                </div>
              </Modal>

            </div>
          </TabPanel>
          <TabPanel>
            <div className="form-group">
              <label htmlFor="baseline">Captured carbon dioxide</label>
              {/*  <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="tons of CO2/month"
              /> */}
              <div className="input-container">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setco2_amount(e.target.value);
                  }} />
                {co2_amounterr != '' && (
                  <p className="alert-message">{co2_amounterr}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="actual">CCUS efficiency factor</label>
              {/*  <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="tons of CO2/month"
              /> */}
              <div className="input-container">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setccus_factor(e.target.value);
                  }} />
                {ccus_factorerr != '' && (
                  <p className="alert-message">{ccus_factorerr}</p>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="time">Time period</label>
              {/* <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="months"
              /> */}
              <div className="input-container1">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setcci_timeperiod(e.target.value);
                  }} />
                {cci_timeperioderr != '' && (
                  <p className="alert-message">{ee_timeperioderr}</p>
                )}
              </div>
            </div>

            <div className="btn-wrap">
              <button className="upload">Upload Document</button>
              <button className="calculate" onClick={() => handleCCIUpload()}>Calculate Carbon Credit</button>

              <Modal
                className="carbon-capture"
                show={ccshow}
                onHide={handleccClose}
              >
                <Modal.Header closeButton closeVariant="white">
                  <Modal.Title>You can mint {token} Tokens</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {' '}
                  <p>
                    Formula: <br />
                    <span style={{ fontWeight: 'bold' }}>
                      Carbon credits ={' '}
                    </span>{' '}
                    Amount of captured carbon dioxide * Carbon capture
                    utilization and storage (CCUS) efficiency factor * Time
                    period
                  </p>
                </Modal.Body>
                <div className="modal-button">
                  <Button variant="primary" onClick={handleMint}>
                    Mint
                  </Button>
                </div>
              </Modal>

            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
export default Page;