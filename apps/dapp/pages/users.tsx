import {
  useGetUserByApprovedStatusLazyQuery,
  useDisapproveUserMutation,
  useApproveUserMutation,
} from '@demo-carbon-credit/database';
import { NextPageWithLayout } from './_app';
import { useModalContext } from '@demo-carbon-credit/providers';
import { User } from '@demo-carbon-credit/components';
import { useEffect, useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { id } from 'ethers/lib/utils';

import { ethers } from 'ethers';
import router, { useRouter } from 'next/router';
import toast from 'react-hot-toast';
const contractAbi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
    ],
    name: 'addCustomer',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'str1',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'str2',
        type: 'string',
      },
    ],
    name: 'compare',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'i',
        type: 'uint256',
      },
    ],
    name: 'kycApprove',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
    ],
    name: 'removeCustomer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'i',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'link',
        type: 'string',
      },
    ],
    name: 'setIPFSAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const provider = new ethers.providers.JsonRpcProvider(
  `https://node-1-4d3b.gke-europe.settlemint.com/bpaas-593499Ee5d10f1EEad81348775fa4c182D310008`
);

const adminWallet = new ethers.Wallet(
  '0x908e18cc8f9024d5a41e707e88d9a2fc51a1fe612a80130cbbfc10a7b49a299e',
  provider
);
const contract = new ethers.Contract(
  '0x3Ae9a4092280B4799891Eae8D1a1ae6E85e9509E',
  contractAbi,
  provider
);

const contractWithAdminWallet = contract.connect(adminWallet);

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
        <div className="add-btn">
          <button
            onClick={() => router.push('/createUser')}
            className="create-btn"
          >
            Create User
          </button>
        </div>
        <h2>User Management </h2>
      </div>
      <div>
        <h5> New Registered Users </h5>
      </div>
      <Row>
        <Col className="table_head">
          <Table className="tablelist" responsive>
            <thead>
              <th>User Name</th>
              <th>CIF Number</th>
              {/* <th>CASA Number</th> */}
              <th>Customer Segment</th>
              <th>Role</th>
              <th>KYC Status</th>
              <th>Document</th>
              <th className="text-right">Update KYC</th>
            </thead>
            <tbody></tbody>
            <tbody>
              {tableData2 &&
                tableData2.map((v, i) => (
                  <tr key={i}>
                    <td>{v.username}</td>
                    <td>{v.cif}</td>
                    {/* <td>{v.casa}</td> */}
                    <td>{v.segment}</td>
                    <td>{v.role}</td>
                    <td>Pending</td>
                    {/* <td>{v.document_cid}</td> */}
                    <td>
                      <div className="token-address">
                        <a
                          target="_blank"
                          href={`${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/gateway/ipfs/${v.document_cid}`}
                        >
                          link
                        </a>
                      </div>
                    </td>
                    <td className="text-right">
                      <button
                        className="btn-success"
                        onClick={() => {
                          toast.promise(ApproveStatus(v.id, v.username), {
                            loading: 'Approving...',
                            success: (_data) => {
                              return 'Approved';
                            },
                            error: (err) => 'Cannot approve please try again',
                          });
                        }}
                      >
                        Approve
                      </button>
                      &nbsp;
                      <button
                        className="btn-danger"
                        onClick={() => {
                          toast.promise(RejectStatus(v.id), {
                            loading: 'Approving...',
                            success: (_data) => {
                              return 'Rejected';
                            },
                            error: (err) => 'Cannot reject please try again',
                          });
                        }}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          {tableData && tableData.length != 0 && (
            <div className="pagging-area">
              <div className="pagination_row_div">
                <p className="pagination_title">Showing items per page:</p>
                <div className="pagination_input_div">
                  <select
                    className="pagination_select"
                    style={{ margin: 0, background: 'transparent' }}
                    name="pagination_value"
                    value={perPage}
                    onChange={handlerowsperPage}
                  >
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                  </select>
                </div>
              </div>
              <div className="pagination_row_right_div">
                <p className="pagination_total">
                  Showing {offset + 1} to{' '}
                  {searchData.length < offset + perPage && (
                    <span>{searchData.length}</span>
                  )}
                  {searchData.length > offset + perPage && (
                    <span>{offset + perPage} </span>
                  )}{' '}
                  of {searchData.length} items
                </p>
                <ReactPaginate
                  previousLabel={
                    <ArrowBackIosIcon
                      className="pagination_prev_btn"
                      style={{ color: '#2438a7' }}
                    />
                  }
                  nextLabel={
                    <ArrowForwardIosIcon
                      className="pagination_next_btn"
                      style={{ color: '#2438a7' }}
                    />
                  }
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={'pagination'}
                  /*  subContainerClassName={"pages pagination"} */
                  activeClassName={'active'}
                  forcePage={currentPage}
                />
              </div>
            </div>
          )}
        </Col>
      </Row>

      <div>
        <h5>Approved Users</h5>
      </div>

      <Row>
        <Col>
          <Table className="tablelist" responsive>
            <thead>
              <th>User Name</th>
              <th>CIF Number</th>
              {/* <th>CASA Number</th> */}
              <th>Segement</th>
              <th>Role</th>
              <th>Password</th>
              <th>Document</th>
              <th>txHash</th>
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

          {tableData && tableData.length != 0 && (
            <div className="pagging-area">
              <div className="pagination_row_div">
                <p className="pagination_title">Showing items per page:</p>
                <div className="pagination_input_div">
                  <select
                    className="pagination_select"
                    style={{ margin: 0, background: 'transparent' }}
                    name="pagination_value"
                    value={perPage}
                    onChange={handlerowsperPage}
                  >
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                  </select>
                </div>
              </div>
              <div className="pagination_row_right_div">
                <p className="pagination_total">
                  Showing {offset + 1} to{' '}
                  {searchData.length < offset + perPage && (
                    <span>{searchData.length}</span>
                  )}
                  {searchData.length > offset + perPage && (
                    <span>{offset + perPage} </span>
                  )}{' '}
                  of {searchData.length} items
                </p>
                <ReactPaginate
                  previousLabel={
                    <ArrowBackIosIcon
                      className="pagination_prev_btn"
                      style={{ color: '#2438a7' }}
                    />
                  }
                  nextLabel={
                    <ArrowForwardIosIcon
                      className="pagination_next_btn"
                      style={{ color: '#2438a7' }}
                    />
                  }
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={'pagination'}
                  /*  subContainerClassName={"pages pagination"} */
                  activeClassName={'active'}
                  forcePage={currentPage}
                />
              </div>
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};
export default Page;
