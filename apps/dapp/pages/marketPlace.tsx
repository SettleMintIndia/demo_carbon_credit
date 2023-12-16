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
      <div className="marketplace">
        <h2>Transfer</h2>
        <div className="token-marketplace">
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <div className="marketplace-input-container">
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="in USD"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="tokens">Number of tokens</label>
            <div className="marketplace-input-container">
              <input type="text" className="form-control" id="tokens" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="User">Select User</label>
            <div className="marketplace-input-container">
              <input type="text" className="form-control" id="User" />
            </div>
          </div>
          <div className="btn-wrap">
            <button className="transfer">Transfer</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
