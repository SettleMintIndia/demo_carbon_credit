import {
    useGetAllAssetsLazyQuery,
  } from '@demo-carbon-credit/database';
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
        <div className="header-area">
          <h2>Transactions</h2>
          
        </div>
       
      </>
    );
  };
  export default Page;
  