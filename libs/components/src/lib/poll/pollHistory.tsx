import React, { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import { Table } from 'react-bootstrap';
import { useGetResponseOfTokenHolderLazyQuery } from '@demo-carbon-credit/database';
type Props = {
  pollResponse: any;
  pollId: string;
  pollOptions: any;
};
const pollHistory = ({ pollResponse, pollId, pollOptions }: Props) => {
  // Get all token history

  const [
    getResponseOfTokenHolderQuery,
    {
      data: allTokenHolders,
      loading: allTokenHoldersLoading,
      error: allTokenHoldersError,
    },
  ] = useGetResponseOfTokenHolderLazyQuery({
    variables: {},
    fetchPolicy: 'network-only',
  });

  const [countedOptionData, setCountedOptionData] = useState();

  // calculate count
  const calculateOptionCount = (data: any) => {
    const optionCountedData = {};
    for (const item of pollResponse) {
      const optionValue = item.value;

      const counter = 1;

      if (optionCountedData.hasOwnProperty(optionValue)) {
        optionCountedData[optionValue] += counter;
      } else {
        optionCountedData[optionValue] = counter;
      }
    }
    return optionCountedData;
  };

  useEffect(() => {
    // count each response count
    getResponseOfTokenHolderQuery();
    // @ts-ignore
    pollResponse && setCountedOptionData(calculateOptionCount());
  }, []);

  console.log('counted option data', countedOptionData);
  console.log('all token holders', allTokenHolders);

  return (
    <div className="pop-info-base">
      <div>
        <h4>Poll Response</h4>
        <hr />
      </div>
      <div>
        <Table className="tablelist" responsive>
          <thead>
            <tr className="table_wrap">
              <th>Options</th>
              <th>Votes</th>
              {/* <th>Weighage</th> */}
            </tr>
          </thead>
          <tbody>
            {pollOptions.map((v: any) => (
              <tr key={v?.id}>
                <td>{v?.value}</td>
                <td>
                  {countedOptionData && countedOptionData[`${v?.value}`]
                    ? countedOptionData[`${v?.value}`]
                    : '0'}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default pollHistory;
