import { NextPageWithLayout } from './_app';
import { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import Router from 'next/router';
import React from 'react';
import { useUsersCountQuery, useGetAllTransactionsLazyQuery } from '@demo-carbon-credit/database'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const Page: NextPageWithLayout = () => {
  // Fetch assets data

  const [totalamount, setTotalAmount] = useState(0);
  const [totalminttokens, setTotalminttokens] = useState(0);
  const [monthlyvalues, setMonthlyValues] = useState<any>([])
  const { data, loading, error } = useUsersCountQuery({
    fetchPolicy: 'network-only',
  })
  console.log(data);

  var users_count = data?.z_users_aggregate?.aggregate?.count

  // Initial call

  const [getAllTransactionLazyQuery, { data: transaction }] =
    useGetAllTransactionsLazyQuery({
      variables: {},
      fetchPolicy: 'network-only',
    });

  var totalTransactions = transaction?.z_transaction_history;
  console.log(totalTransactions);
  // Initial call
  useEffect(() => {
    getAllTransactionLazyQuery();
    var amount = 0;
    var minttokens = 0;

    var monthlyTotals = new Array(12).fill(0);

    totalTransactions?.map((v) => {
      amount = amount + Number(v?.amount);
      minttokens = minttokens + Number(v?.token);
      let obj = v;
      console.log(v)
      let fromMonth = new Date(obj['created_at']).getMonth();
      console.log("fromMonth", fromMonth)

      if (fromMonth) {
        monthlyTotals[fromMonth] += Number(v?.token);
      }

      console.log("monthlyTotals", monthlyTotals)
      setMonthlyValues(monthlyTotals)



    })
    console.log(amount, minttokens);

    setTotalAmount(amount);
    setTotalminttokens(minttokens)


    /*  for (let i = 0; i < totalTransactions?.length; i++) {
       let obj = totalTransactions[i];
       let fromMonth = new Date(obj['Period From']).getMonth();
       let toMonth = new Date(obj['Period To']).getMonth();
     
       if (fromMonth === toMonth) {
         monthlyTotals[fromMonth] += obj.Quantity * obj.Revenue;
       }
     } */


  }, [totalTransactions]);





  var options = {
    responsive: true,

    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
      title: {
        display: true,
        text: 'CC Tokens',
      },
    },
  }

  
  var chartdata = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    datasets: [{
      label: 'CC Tokens',
      data: monthlyvalues,
      fill: false,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderWidth: 2,
      tension: 0.4,
    }]
  };



  return (
    <>
      <div className="dashboard-contain">
        <div className="card-container">
          <div className="card avg-cc">
            <div className="card-item-container">
              <div className="card-info">
                <p className="title">Average CC Token Price</p>
                <h1>&#36;{totalamount}</h1>
                <p>Up to 5% from Last Year </p>
              </div>
            </div>
          </div>
          <div className="card total-cc">
            <div className="card-item-container">
              <div className="card-info">
                <p className="title">Total CC Tokens Minted</p>
                <h1>{totalminttokens}</h1>
                <p>Up to 5% from Last Year </p>
              </div>
            </div>
          </div>
          <div className="card total-users">
            <div className="card-item-container">
              <div className="card-info">
                <p className="title">Total Users</p>
                <h1>{users_count}</h1>
                <p>Up to 5% from Last Year </p>
              </div>
            </div>
          </div>
        </div>
        <div className="graph-container">
          <div className="graph-chart-container">
            <h4>CC Tokens</h4>
            <div className="bar-chart">
              <Line
                data={chartdata}
                height={400}
                options={options}
              />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
