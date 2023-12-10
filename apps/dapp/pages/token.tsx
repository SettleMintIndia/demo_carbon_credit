import { TransferCard, TranferBatch, AppLayout, TransferCardNew } from '@demo-carbon-credit/components';
import { useModalContext } from '@demo-carbon-credit/providers';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';


const Page: NextPageWithLayout = () => {
  const { setModal } = useModalContext();

  return (
    <>
    {/* <div className='header-area'>
       <div className='add-btn'>
       <button className='create-btn'
        onClick={() =>
          setModal({
            component: (
               <TranferBatch />
            ),
          })
        }
      >
        Batch Transfer
      </button>
       </div>
       <h2>Your Token</h2>


     </div> */}
     {/* <div className='header-area'><h2>Your Token</h2></div> */}
      <TransferCardNew />
      {/* <div className='transfer-btn-botm'>
      <button className='create-btn'
        onClick={() =>
          setModal({
            component: (

                <TranferBatch />

            ),
          })
        }
      >
        Batch Transfer
      </button>
      </div> */}
    </>
  );
}

// Page.getLayout = function getLayout(page: ReactElement) {
//   return <AppLayout>{page}</AppLayout>;
// };
export default Page;
