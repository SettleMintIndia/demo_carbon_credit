import { useGetAllAssetsLazyQuery } from '@demo-carbon-credit/database';
import { NextPageWithLayout } from './_app';
import { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import Router from 'next/router';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Page: NextPageWithLayout = () => {
  // Fetch assets data

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
              <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="tons of CO2/month"
              />
            </div>
            <div className="form-group">
              <label htmlFor="actual">Actual emissions</label>
              <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="tons of CO2/month"
              />
            </div>
            <div className="form-group">
              <label htmlFor="factor">Emission factor</label>
              <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="tons of CO2/month"
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time period</label>
              <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="months"
              />
            </div>

            <div className="btn-wrap">
              <button className="upload">Upload Document</button>
              <button className="calculate">Calculate Carbon Credit</button>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="form-group">
              <label htmlFor="baseline">Baseline energy consumption</label>
              <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="kwh"
              />
            </div>
            <div className="form-group">
              <label htmlFor="actual">Actual energy consumption</label>
              <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="kwh"
              />
            </div>
            <div className="form-group">
              <label htmlFor="factor">Emission factor</label>
              <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="tons of CO2/month"
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time period</label>
              <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="months"
              />
            </div>

            <div className="btn-wrap">
              <button className="upload">Upload Document</button>
              <button className="calculate">Calculate Carbon Credit</button>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="form-group">
              <label htmlFor="baseline">Captured carbon dioxide</label>
              <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="tons of CO2/month"
              />
            </div>
            <div className="form-group">
              <label htmlFor="actual">CCUS efficiency factor</label>
              <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="tons of CO2/month"
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time period</label>
              <input
                type="text"
                className="form-control"
                id="Baseline"
                placeholder="months"
              />
            </div>

            <div className="btn-wrap">
              <button className="upload">Upload Document</button>
              <button className="calculate">Calculate Carbon Credit</button>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
export default Page;
