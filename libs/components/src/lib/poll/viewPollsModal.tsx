//import { useGetPollByAssetUuidLazyQuery } from '@demo-carbon-credit/database';
import React, { useEffect } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import { Table } from 'react-bootstrap';
import moment from 'moment';
import ResponsePollModal from './responsePollModal';
import PollHistory from './pollHistory';
type Props = {
  id: string;
};
const viewPollsModal = ({ id }: Props) => {
  const { setModal } = useModalContext();

  // Get poll data by uuid
 /*  const [
    getPollByAssetUuidLazyQuery,
    { data: pollData, loading: pollDataLoading, error: pollDataError },
  ] = useGetPollByAssetUuidLazyQuery({ fetchPolicy: 'network-only' });
  // initial call
  useEffect(() => {
    getPollByAssetUuidLazyQuery({
      variables: {
        id: id,
      },
    });
  }, []);

  console.log('poll data ', pollData?.z_poll);
 */
  // Get today date
  const compareTimeWithCurrent = (timeString: any) => {
    const givenTime = new Date(timeString);

    const currentTime = new Date();

    if (givenTime > currentTime) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="pop-info-base">
      <div>
        <h4>View Polls</h4>
        <hr />
      </div>
      <div>
        <Table className="tablelist" responsive>
          <thead>
            <tr className="table_wrap">
              <th>Title</th>
              <th>Last Date</th>
              <th>txHash</th>
              <th>View Poll and Vote</th>
              <th>Completed Polls</th>
            </tr>
          </thead>
          <tbody>
            {/* {pollData?.z_poll.map((v) => (
              <tr key={v?.id}>
                <td>{v.poll_title}</td>
                <td> {moment(String(v?.poll_end_date)).format('DD-MMM-YY')}</td>
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
                <td
                  onClick={() => {
                    setModal({
                      component: (
                        <ResponsePollModal
                          pollId={v?.id}
                          pollTitle={v?.poll_title}
                          options={v?.z_poll_options}
                        />
                      ),
                    });
                  }}
                  className="review_poll"
                >
                  {compareTimeWithCurrent(v?.poll_end_date) &&
                    'Submit Response'}
                </td>
                <td
                  onClick={() => {
                    setModal({
                      component: (
                        <PollHistory
                          pollId={v?.id}
                          pollOptions={v?.z_poll_options}
                          pollResponse={v?.z_poll_responses}
                        />
                      ),
                    });
                  }}
                  className="review_poll"
                >
                  View History
                </td>
              </tr>
            ))} */}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default viewPollsModal;
