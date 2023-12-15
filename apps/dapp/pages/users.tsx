import {
  useGetUserByApprovedStatusLazyQuery,
  useDisapproveUserMutation,
} from '@demo-carbon-credit/database';
import { NextPageWithLayout } from './_app';
import { useModalContext } from '@demo-carbon-credit/providers';
import { User } from '@demo-carbon-credit/components';
import { useEffect, useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { ethers } from 'ethers';
import router, { useRouter } from 'next/router';
import toast from 'react-hot-toast';


const Page: NextPageWithLayout = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchData2, setSearchData2] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [offset2, setOffSet2] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [tableData2, setTableData2] = useState([]);

  const [orgtableData, setOrgTableData] = useState([]);
  const [orgtableData2, setOrgTableData2] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [perPage2, setPerPage2] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [pageCount2, setPageCount2] = useState(0);
  const [searchKey, setSearchKey] = useState('n');
  const [searchKeyTable, setSearchKeyTable] = useState('');
  const [status, setStatus] = useState('Registered');

  const router = useRouter();

  const [
    approveUserMutation,
    { data: makeApprove, loading: makeApproveLoading, error: makeApproveError },
  ] = useApproveUserMutation({});

  // Define query
  const [
    getUserByApprovedStatusLazyQuery,
    {
      data: approvedData,
      loading: approvedDataLoading,
      error: approvedDataError,
    },
  ] = useGetUserByApprovedStatusLazyQuery({
    variables: {
      is_approved: true,
    },
    fetchPolicy: 'network-only',
  });
  const [
    getUserByDisapprovedStatusLazyQuery,
    {
      data: disapprovedData,
      loading: disapprovedDataLoading,
      error: disapprovedDataError,
    },
  ] = useGetUserByApprovedStatusLazyQuery({
    variables: {
      is_approved: false,
    },
    fetchPolicy: 'network-only',
  });

  //Reject Status

  const [
    disapproveUserMutation,
    {
      data: makeDisapprove,
      loading: makeDisapproveLoading,
      error: makeDisapproveError,
    },
  ] = useDisapproveUserMutation({});

  //Approve Status
  const ApproveStatus = async (id: string, name: string) => {
    try {
      // Store in blockchain
      // const retVal = await fetch('/api/kyc/performKYC', {
      //   method: 'POST',

      //   body: JSON.stringify({
      //     name: name,
      //     email: id,  //for now, use id instead of email
      //   }),
      // });
      // const txResponse = await retVal.json();
      // console.log(txResponse)

      // Direct Call SC
      const gasLimit = await contractWithAdminWallet.estimateGas.addCustomer(
        name,
        id
      );
      const gasLimitString = gasLimit.toString();
      const tx = await contractWithAdminWallet.addCustomer(name, id, {
        gasPrice: 0,
        gasLimit: gasLimitString,
      });
      console.log(tx);

      const txReceipt = await tx.wait(1);

      console.log('tx hash', txReceipt);

      // Recall users data
      getUserByApprovedStatusLazyQuery();
      getUserByDisapprovedStatusLazyQuery();

      approveUserMutation({
        variables: {
          id: id,
          txHash: txReceipt.transactionHash,
        },
      });

      toast.success('KYC performed successfully');
      // router.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const RejectStatus = async (id: string) => {
    disapproveUserMutation({
      variables: {
        id: id,
      },
    });
    // Recall users data
    // router.reload();
    getUserByApprovedStatusLazyQuery();
    getUserByDisapprovedStatusLazyQuery();
  };

  useEffect(() => {
    getUserByApprovedStatusLazyQuery();
    getUserByDisapprovedStatusLazyQuery();
  }, []);

  useEffect(() => {
    // if (disapprovedDataLoading) {
    //   <p>Loading...</p>;
    // } else {
    const sortArray2 = disapprovedData?.z_users;
    const slice2 = sortArray2?.slice(offset2, offset2 + perPage2);
    console.log(Math.ceil(sortArray2?.length / perPage2));
    setPageCount2(Math.ceil(sortArray2?.length / perPage2));
    setOrgTableData2(sortArray2);
    setSearchData2(sortArray2);
    setTableData2(slice2);
    // }
  }, [disapprovedData?.z_users, approvedData?.z_users]);

  useEffect(() => {
    // if (approvedDataLoading) {
    //   <p>Loading...</p>;
    // } else {
    const sortArray = approvedData?.z_users;
    const slice = sortArray?.slice(offset, offset + perPage);
    console.log(Math.ceil(sortArray?.length / perPage));
    setPageCount(Math.ceil(sortArray?.length / perPage));
    setOrgTableData(sortArray);
    setSearchData(sortArray);
    setTableData(slice);
    // }
  }, [approvedData?.z_users, disapprovedData?.z_users]);

  const { setModal } = useModalContext();
  const handlerowsperPage = (e) => {
    const showperpage = e.currentTarget.value;
    setPerPage(parseInt(showperpage));
    setCurrentPage(0);
    if (searchKey == 'y') {
      /* const slice = searchKeyTable?.slice(0, 0 + e.currentTarget.value);
      setPageCount(Math.ceil(searchKeyTable.length / e.currentTarget.value))
      setTableData(slice);
      setOffSet(0);
      setSearchData(searchKeyTable); */
    } else {
      const slice = orgtableData?.slice(0, 0 + e.currentTarget.value);
      setPageCount(Math.ceil(orgtableData.length / e.currentTarget.value));
      setTableData(slice);
      setOffSet(0);
      setSearchData(orgtableData);
    }
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offsetdata = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOffSet(offsetdata);
    loadMoreData(offsetdata);
  };

  const loadMoreData = (offsetdata) => {
    const data = orgtableData;
    if (searchKey == 'y') {
      /* const slice = searchKeyTable.slice(offsetdata, offsetdata + perPage);
      setPageCount(Math.ceil(searchKeyTable.length / perPage))
      setTableData(slice);
      setOffSet(offsetdata);
      setSearchData(searchKeyTable); */
    } else {
      const slice = data.slice(offsetdata, offsetdata + perPage);
      setPageCount(Math.ceil(data.length / perPage));
      setOffSet(offsetdata);
      setTableData(slice);
      setSearchData(data);
    }
  };
  if (approvedDataLoading || disapprovedDataLoading) {
    return <p>Loading ... </p>;
  }
  console.log(tableData);
  return (
    <>
      <div className="header-area">
        
        <h2>User Management </h2>
      </div>
    
     

      <div>
        <h5> Users</h5>
      </div>

      <Row>
        <Col>
          <Table className="tablelist" responsive>
            <thead>
              <th>User Name</th>
              <th>Password</th>
              <th></th>
            </thead>
            <tbody></tbody>

            <tbody>
              {tableData &&
                tableData.filter((v) => v.username !== 'admin').map((v, i) => (
                  <tr key={i}>
                    <td>{v.username}</td>
                    <td>{v.cif}</td>
                    {/* <td>{v.casa}</td> */}
                    <td>{v.segment}</td>
                    <td>{v.role}</td>
                    <td>
                      <a href='#' onClick={() => alert(`Password is : ${v.password}`)}>
                        View
                      </a>
                    </td>
                    <td>
                      <div className="token-address">
                        <a
                          target="_blank"
                          href={`${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/gateway/ipfs/${v.document_cid}`}
                        >
                          Link
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="token-address">
                        <a
                          target="_blank"
                          href={`${process.env.NEXT_PUBLIC_EXPLORER_HOST}/tx/${v.txHash}`}
                        >
                          {v.txHash}
                        </a>
                      </div>
                    </td>
                    <td className="text-right users-listing-btns">
                      <button
                        className="btn btn-viewmore table-btn"
                        onClick={() => {
                          setModal({
                            component: <User username={v.username} />,
                          });
                        }}
                      >
                        View Funds
                      </button>{' '}
                      &nbsp;
                      <button
                        className="btn btn-viewmore table-btn"
                        onClick={() => {
                          setModal({
                            component: (
                              <div className="wallet-info">
                                <h2>Wallet Address</h2>
                                <p>{v.address}</p>
                              </div>
                            ),
                          });
                        }}
                      >
                        Wallet Address
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>

       
        </Col>
      </Row>
    </>
  );
};
export default Page;
