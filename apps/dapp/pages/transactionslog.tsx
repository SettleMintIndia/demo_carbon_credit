import { useGetAllAssetsLazyQuery } from '@demo-carbon-credit/database';
import { NextPageWithLayout } from './_app';
import { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import Router from 'next/router';
import React from 'react';
import { Table } from 'react-bootstrap';
const Page: NextPageWithLayout = () => {
  // Fetch assets data

  // Initial call
  return (
    <>
      <Table className="tablelist" responsive>
        <thead>
          <tr className="table_wrap">
            <th>Token for sale</th>
            <th>Seller</th>
            <th>Amount</th>
            <th>Listing Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
export default Page;
