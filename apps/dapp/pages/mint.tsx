import { AppLayout, TokenCard } from '@demo-carbon-credit/components';
import { ReactElement } from 'react';
import { MintBatch } from '@demo-carbon-credit/components';
import { useModalContext } from '@demo-carbon-credit/providers';
import { NextPageWithLayout } from './_app';
import Router from 'next/router';


const Page: NextPageWithLayout = () => {
  const { setModal } = useModalContext();

  return (
    <div>
      <div className='header-area'>
        {/* <div className='add-btn'>
          <button onClick={()=>Router.push("/createToken")} className="create-btn">Create Token</button>
        </div> */}
        <h2>Global Treasury </h2>
      </div>
      <TokenCard />
      <button
        onClick={() =>
          setModal({
            component: (
              <div>
                <MintBatch />
              </div>
            ),
          })
        }
      >
        Mint Batch
      </button>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
export default Page;
