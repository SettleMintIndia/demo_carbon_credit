/* import {
  useGetMintedTokenDataLazyQuery,
  useGetAllTokenHolderDetailsLazyQuery,
} from '@demo-carbon-credit/database'; */
import { NextPageWithLayout } from './_app';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useModalContext } from '@demo-carbon-credit/providers';
//import { Dropdown } from '@nextui-org/react';
import Profit from 'libs/components/src/lib/profit';
import ProfitDistribution from 'libs/components/src/lib/profitDistribution';
import CreatePollModal from 'libs/components/src/lib/poll/createPollModal';
import ViewPollsModal from 'libs/components/src/lib/poll/viewPollsModal';
import {
  PrimaryTokenTransaction,
  Token,
  TokenTransaction,
  
} from '@demo-carbon-credit/components';
// import TokenTransaction from 'libs/components/src/lib/tokenTransaction';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CouponScheduleDetails from 'libs/components/src/lib/couponScheduleDetails';
import { assert } from 'console';
const Page: NextPageWithLayout = () => {
  // Get tokenized funds data
 /*  const [
    getMintedTokenDataLazyQuery,
    { data: fundData, loading: fundDataLoading, error: fundDataError },
  ] = useGetMintedTokenDataLazyQuery({
    fetchPolicy: 'network-only',
  }); */

  // Get Initial data
 /*  useEffect(() => {
    getMintedTokenDataLazyQuery();
  }, []); */

  const { setModal } = useModalContext();

  const [selectedAction, setSelectedAction] = useState(null);

  const [searchData, setSearchData] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [orgtableData, setOrgTableData] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchKey, setSearchKey] = useState('n');
  const [searchKeyTable, setSearchKeyTable] = useState('');

  // console.log('block chain data', data?.erc1155Tokens);

  /* const [
    getAllTokenHolderDetailsLazyQuery,
    {
      data: tokenHoldersData,
      loading: tokenHoldersDataLoading,
      error: tokenHoldersDataError,
    },
  ] = useGetAllTokenHolderDetailsLazyQuery({
    fetchPolicy: 'network-only',
  });
 */
  // initial call
  /* useEffect(() => {
    getAllTokenHolderDetailsLazyQuery();
  }, []); */

  /* useEffect(() => {
    const Data: any[] = [];
    // Set holders data
    fundData?.z_assets.map((v) => {
      let holders: any = [];
      holders = tokenHoldersData?.z_token_holder.filter(
        (h) => h.z_asset.assetId === v.assetId
      );
      console.log("holders", tokenHoldersData);

      if (holders) {
        Data.push({ ...v, countHolder: holders.length });
      }
    });

    const sortArray = Data?.sort((a, b) => {
      return b.tokenId - a.tokenId;
    });
    // setTransaction([...sortArray]);
    const slice = sortArray.slice(offset, offset + perPage);
    setPageCount(Math.ceil(sortArray.length / perPage));
    setOrgTableData(sortArray);
    setSearchData(sortArray);
    setTableData(slice);
    // }, [data?.erc1155Tokens, nameDate?.minted, CouponData?.assets]);
  }, [fundData?.z_assets, tokenHoldersData?.z_token_holder]); */

  console.log('Table data', tableData);
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

  const changeSelectedRow = (data: any) => {
    if (selectedAction === null || data != selectedAction) {
      setSelectedAction(data);
    }
    if (data === selectedAction) {
      setSelectedAction(null);
    }
  };

  console.log('table data', tableData);

 /*  if (fundDataLoading) return <p>loading...</p>; */

  return (
    <>
      <div className="header-area">
        <h2>Tokenized Funds</h2>
      </div>
     {/*  */}
    </>
  );
};
export default Page;
