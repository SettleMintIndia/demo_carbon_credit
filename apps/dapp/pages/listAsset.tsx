import {
  useGetAllAssetsLazyQuery,
} from '@demo-carbon-credit/database';
import { NextPageWithLayout } from './_app';
import { useEffect, useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useModalContext } from '@demo-carbon-credit/providers';
import Router from 'next/router';
import React from 'react';
import { Dropdown } from '@nextui-org/react';
import { Coupon, CreateToken, Mint } from '@demo-carbon-credit/components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CouponScheduleDetails from 'libs/components/src/lib/couponScheduleDetails';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import moment from 'moment';
const Page: NextPageWithLayout = () => {
  // Fetch assets data

  const [
    getAllAssetsLazyQueryQuery,
    { data: assetData, loading: assetDataLoading, error: assetDataError },
  ] = useGetAllAssetsLazyQuery({
    fetchPolicy: 'network-only',
    pollInterval: 2000,
  });

  console.log('asset data: ', assetData);

  const { setModal, modal } = useModalContext();

  // Selected action usestate
  const [selectedAction, setSelectedAction] = useState(null);

  const [searchData, setSearchData] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [orgtableData, setOrgTableData] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchKey, setSearchKey] = useState('n');

  // const Data = mintedData?.token;

  console.log('modal', modal);

  // Initial call
  useEffect(() => {
    getAllAssetsLazyQueryQuery();
  }, []);

  useEffect(() => {
    // Old data
    const Data: any[] = [];
    assetData?.z_assets.map((v) => {
      Data.push(v);
    });
    const sortArray = Data?.sort((a, b) => {
      return b.tokenId - a.tokenId;
    });
    // setTransaction([...sortArray]);
    console.log(sortArray);
    const slice = sortArray.slice(offset, offset + perPage);
    setPageCount(Math.ceil(sortArray.length / perPage));
    setOrgTableData(sortArray);
    setSearchData(sortArray);
    setTableData(slice);
  }, [assetData?.z_assets]);

  const handlerowsperPage = (e) => {
    const showperpage = e.currentTarget.value;
    setPerPage(parseInt(showperpage));
    setCurrentPage(0);
    if (searchKey == 'y') {
      /*  const slice = searchKeyTable.slice(0, 0 + e.currentTarget.value);
       setPageCount(Math.ceil(searchKeyTable.length / e.currentTarget.value))
       setTableData(slice);
       setOffSet(0);
       setSearchData(searchKeyTable); */
    } else {
      const slice = orgtableData.slice(0, 0 + e.currentTarget.value);
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
      /*  const slice_det = searchKeyTable.slice(offsetdata, offsetdata + perPage);
       setPageCount(Math.ceil(searchKeyTable.length / perPage))
       setTableData(slice_det);
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
  const formatter = new Intl.NumberFormat('en-US');

  // Select the targated row

  const changeSelectedRow = (data: any) => {
    if (selectedAction === null || data != selectedAction) {
      setSelectedAction(data);
    }
    if (data === selectedAction) {
      setSelectedAction(null);
    }
  };

  // Sorting the table

  const [bondNameSort, setBondNameSort] = useState(true);
  const sortByBondName = () => {
    if (bondNameSort) {
      tableData.sort((a, b) => b.Name.localeCompare(a.Name));
    } else {
      tableData.sort((a, b) => a.Name.localeCompare(b.Name));
    }
    setBondNameSort(!bondNameSort);
  };

  const [nominalValueSort, setNominalValueSort] = useState(true);
  const sortByNominalValue = () => {
    if (nominalValueSort) {
      tableData.sort((a, b) => Number(b.Value) - Number(a.Value));
    } else {
      tableData.sort((a, b) => Number(a.Value) - Number(b.Value));
    }
    setNominalValueSort(!nominalValueSort);
  };
  // per token
  const [perTokenValueSort, setPerTokenValueSort] = useState(true);
  const sortByPerTokenValue = () => {
    if (perTokenValueSort) {
      tableData.sort((a, b) => Number(b.Value) - Number(a.Value));
    } else {
      tableData.sort((a, b) => Number(a.Value) - Number(b.Value));
    }
    setPerTokenValueSort(!nominalValueSort);
  };

  // max supply
  const [maxSupplyValueSort, setMaxSupplyValueSort] = useState(true);
  const sortByMaxSupplyValue = () => {
    if (maxSupplyValueSort) {
      tableData.sort((a, b) => Number(b.Value) - Number(a.Value));
    } else {
      tableData.sort((a, b) => Number(a.Value) - Number(b.Value));
    }
    setMaxSupplyValueSort(!nominalValueSort);
  };
  // minted token
  const [mintedTokenValueSort, setMintedTokenValueSort] = useState(true);
  const sortByMintedTokenValue = () => {
    if (mintedTokenValueSort) {
      tableData.sort((a, b) => Number(b.Value) - Number(a.Value));
    } else {
      tableData.sort((a, b) => Number(a.Value) - Number(b.Value));
    }
    setMintedTokenValueSort(!nominalValueSort);
  };

  // console.log('Asset details', tableData);
  // if (assetDataLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="header-area">
        <h2>Fund Management</h2>
        <div className="add-btn">
          <button
            onClick={() => Router.push('/createAsset')}
            className="create-btn"
          >
            Add a new Fund
          </button>
        </div>
      </div>
      <Row>
        <Col className="table_head">
          <Table className="tablelist" responsive>
            <thead>
              <tr className="table_wrap">
                <th onClick={sortByBondName} className="sort_column">
                  Fund Name{' '}
                  {bondNameSort ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                </th>
                <th onClick={sortByNominalValue} className="sort_column">
                  Fund Size{' '}
                  {nominalValueSort ? (
                    <ArrowDownwardIcon />
                  ) : (
                    <ArrowUpwardIcon />
                  )}
                </th>
                <th onClick={sortByPerTokenValue}>
                  Per Token Value{' '}
                  {perTokenValueSort ? (
                    <ArrowDownwardIcon />
                  ) : (
                    <ArrowUpwardIcon />
                  )}
                </th>
                <th onClick={sortByMaxSupplyValue}>
                  Supply{' '}
                  {maxSupplyValueSort ? (
                    <ArrowDownwardIcon />
                  ) : (
                    <ArrowUpwardIcon />
                  )}
                </th>
                <th onClick={sortByMintedTokenValue}>
                  Minted{' '}
                  {mintedTokenValueSort ? (
                    <ArrowDownwardIcon />
                  ) : (
                    <ArrowUpwardIcon />
                  )}
                </th>

                {/* <th>Burned</th> */}
                {/* <th>Buy Price</th>
                <th>Sell Price</th> */}
                <th>Circulation</th>
                {/* <th>Maturity</th> */}
                <th>Issue Date</th>
                <th>Dropdown</th>
              </tr>
            </thead>
            {tableData?.map((v, i) => (
              <>
                <tr key={i} className="table_wrap">
                  <td>
                    {/* {v?.Name.length > 10
                      ? `${v?.Name.slice(0, 4)}...${v.Name.slice(
                          v?.Name.length - 2,
                          v?.Name.length
                        )} `
                      : v?.Name} */}
                    {v.assetName}
                  </td>
                  <td>{formatter.format(v?.totalCapital)}</td>
                  <td>{v.is_fractionalized ? formatter.format(v.sellPrice) : 'Not Tokenized'}</td>
                  <td>
                    {v.is_fractionalized ? formatter.format(v.totalSupply) : 'Not Tokenized'}
                  </td>
                  <td>{v.is_fractionalized ? formatter.format(v.totalMinted) : 'Not Minted'}</td>
                  {/* <td>{v?.burned}</td> */}

                  {/* <td>{formatter.format(v.buyPrice)}</td>
                  <td>{formatter.format(v.sellPrice)}</td> */}
                  <td>
                    {v.is_fractionalized
                      ? formatter.format(Number(v.totalMinted) - Number(v.burned))
                      : 'Not Minted'}
                  </td>
                  <td>{moment(String(v?.created_at)).format('DD-MMM-YY')}</td>
                  <td>
                    {/* <Dropdown>
                    <Dropdown.Button flat>Action</Dropdown.Button>
                    <Dropdown.Menu aria-label="Actions">
                      <Dropdown.Item key="new">
                        <span
                          onClick={() => {
                            setModal({
                              component: <Coupon />,
                            });
                          }}
                        >
                          Coupon Schedule
                        </span>
                      </Dropdown.Item>
                      {!v?.tokenized ? (
                        <Dropdown.Item key="copy">
                          <span
                            onClick={() => {
                              setModal({
                                component: (
                                  <CreateToken
                                    name={v?.Name}
                                    totalAsset={v?.Value}
                                    type={v?.Type}
                                    activeSupply={v?.Available}
                                  />
                                ),
                              });
                            }}
                          >
                            Fractionilize
                          </span>
                        </Dropdown.Item>
                      ) : (
                        // Data?.find((n) => n?.assetId === v?.assetId)?.supply -
                        //   Data?.find((n) => n?.assetId === v?.assetId)
                        //     ?.totalSupply !=
                        //   0 && (
                        <Dropdown.Item key="edit">
                          <span
                            onClick={() => {
                              setModal({
                                component: (
                                  <Mint assetId={v?.assetId} name={v?.Name} />
                                ),
                              });
                            }}
                          >
                            Mint
                          </span>{' '}
                        </Dropdown.Item>
                        // )
                      )}
                    </Dropdown.Menu>
                  </Dropdown> */}
                    {!v?.is_fractionalized ? (
                      <button
                        className="fractionalized_btn"
                        onClick={() => {
                          setModal({
                            component: (
                              <CreateToken
                                name={v?.assetName}
                                totalAsset={v?.totalCapital}
                                type={v?.Type}
                                activeSupply={v?.Available}
                                id={v?.id}
                              />
                            ),
                          });
                        }}
                      >
                        {' '}
                        Fractionalize
                      </button>
                    ) : (
                      <button
                        className="mint_btn"
                        onClick={() => {
                          setModal({
                            component: (
                              <Mint
                                assetId={v?.assetId}
                                name={v?.assetName}
                                id={v.id}
                                oldMinted={v.totalMinted}
                                totalSupply={v.totalSupply}
                                burned={v.burned}
                                adminBalance={v.adminBalance}
                              />
                            ),
                          });
                        }}
                      >
                        Mint Tokens
                      </button>
                    )}

                    <span
                      className="expand_action_btn"
                      onClick={() => changeSelectedRow(i)}
                    >
                      {' '}
                      {selectedAction && i == selectedAction ? (
                        <ExpandLessIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </span>
                  </td>
                </tr>
                {/* Expand area */}
                {i === selectedAction && (
                  <tr className="expand_box_row">
                    <td colSpan={9}>
                      <div className="expand_box">
                        <div className="extra_info">
                          <p className="orange_btn">Burned : {v?.burned}</p>
                          <p className="red_btn">Base Price : {v?.buyPrice}</p>
                          <p className="green_btn">
                            Last Traded Price : {v?.last_traded_price}
                          </p>
                          <p className="blue_btn">
                            Tx Hash:{' '}
                            <a
                              target="_blank"
                              href={`${process.env.NEXT_PUBLIC_EXPLORER_HOST}/tx/${v.txHash}`}
                            >
                              view
                            </a>
                          </p>
                          <a
                            className="document_text"
                            href={`${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/gateway/ipfs/${v.document_cid}`}
                            target="_blank"
                          >
                            <button>View Documents</button>
                          </a>
                        </div>
                        {/* <div className="other-btns">
                        
                            
                          <a
                            className="document_text"
                            href={`${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/gateway/ipfs/${v.document_cid}?filename=demo.jpeg`}
                            target="_blank"
                          >
                            <button>View Documents</button>
                          </a>
                        </div> */}

                        {/* Here we apply condition */}
                        {/* {!v?.tokenized ? (
                          <button
                            onClick={() => {
                              setModal({
                                component: (
                                  <CreateToken
                                    name={v?.Name}
                                    totalAsset={v?.Value}
                                    type={v?.Type}
                                    activeSupply={v?.Available}
                                  />
                                ),
                              });
                            }}
                          >
                            {' '}
                            Fractionilize
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setModal({
                                component: (
                                  <Mint assetId={v?.assetId} name={v?.Name} />
                                ),
                              });
                            }}
                          >
                            Mint Tokens
                          </button>
                        )} */}
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </Table>
          {tableData.length != 0 && (
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
                  /* subContainerClassName={"pages pagination"} */
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
