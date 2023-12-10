import React from 'react';
import { Table } from 'react-bootstrap';
type Props = {
  data: any;
};
const profitDistributionBreakup = ({ data }: Props) => {
  const formatter = new Intl.NumberFormat('en-US');

  return (
    <div className="pop-info-base">
      <div>
        <h4>Profit Distribution</h4>
        <hr />
      </div>

      <div className="profit_table_container">
        <Table className="tablelist" responsive>
          <thead>
            <tr className="table_wrap">
              <th>Name</th>
              <th>Username</th>
              <th>Tokens Held</th>
              <th>Share in Profit</th>
            </tr>
          </thead>
          {localStorage.getItem('user') === 'admin' ? (
            <tbody>
              {data.map((v: any) => (
                <tr>
                  <td>{v?.name}</td>
                  <td>{v.z_user.username}</td>
                  <td>{formatter.format(Number(v?.tokenHeld))}</td>
                  <td>{formatter.format(Number(v?.share_in_profit))}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {data.map(
                (v: any) =>
                  v?.z_user?.username.toLowerCase() ===
                    localStorage.getItem('user')?.toLowerCase() && (
                    <tr>
                      <td>{v?.name}</td>
                      <td>{v.z_user.username}</td>
                      <td>{v?.tokenHeld}</td>
                      <td>{v?.share_in_profit}</td>
                    </tr>
                  )
              )}
            </tbody>
          )}
        </Table>
      </div>
    </div>
  );
};

export default profitDistributionBreakup;
