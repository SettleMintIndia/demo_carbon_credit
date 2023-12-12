import { useGetAllAssetsLazyQuery } from '@demo-carbon-credit/database';
import { NextPageWithLayout } from './_app';
import { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import Router from 'next/router';
import React from 'react';
const Page: NextPageWithLayout = () => {
  // Fetch assets data

  // Initial call
  return (
    <>
      <div className="dashboard-contain">
        <div className="card-container">
          <div className="card avg-cc">
            <div className="card-item-container">
              <div className="card-info">
                <p className="title">Average CC Token Price</p>
                <h1>&#36;2.500,00</h1>
                <p>Up to 5% from Last Year </p>
              </div>
            </div>
          </div>
          <div className="card total-cc">
            <div className="card-item-container">
              <div className="card-info">
                <p className="title">Total CC Tokens Minted</p>
                <h1>12300</h1>
                <p>Up to 5% from Last Year </p>
              </div>
            </div>
          </div>
          <div className="card total-users">
            <div className="card-item-container">
              <div className="card-info">
                <p className="title">Total Users</p>
                <h1>1200</h1>
                <p>Up to 5% from Last Year </p>
              </div>
            </div>
          </div>
        </div>
        <div className="graph-container">
          <div className="graph-chart-container">
            <h4>CC Tokens</h4>
            <div className="bar-chart"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
