import React, { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
/* import {
  useCreatePollResponseMutation,
  useGetUserByUsernameLazyQuery,
} from '@demo-carbon-credit/database'; */
import toast from 'react-hot-toast';
type Props = {
  pollTitle: string;
  options: any;
  pollId: string;
};
const responsePollModal = ({ pollTitle, options, pollId }: Props) => {
  const [value, setValue] = useState('');
  const { setModal } = useModalContext();
  const [userId, setUserId] = useState('');

  // const [createResponseMutation, { data, loading, error }] =
  //   useCreateResponseMutation({});

  // Get user by username
  /* const [getUserByUsernameLazyQuery, { data: userData, loading, error }] =
    useGetUserByUsernameLazyQuery({ fetchPolicy: 'network-only' });
  // Add response to the poll

  const [
    createPollResponseMutation,
    {
      data: createPollResponseData,
      loading: createPollResponseDataLoading,
      error: createPollResponseDataError,
    },
  ] = useCreatePollResponseMutation({});
 */
  //  Initial call

  /* useEffect(() => {
    getUserByUsernameLazyQuery({
      variables: {
        username: localStorage.getItem('user'),
      },
    })
      .then((res) => {
        setUserId(res.data?.z_users[0].id!);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  const onSubmit = async () => {
    console.log(value, pollId, userId);

    try {
     /*  const responseId = await createPollResponseMutation({
        variables: {
          pollId: pollId,
          response_by: userId,
          value: value,
        },
      }); */
      toast.success('Poll response Added Successfully');
      setModal(undefined);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <div className="pop-info-base">
      <div>
        <h4>Poll Response</h4>
        <hr />
      </div>
      <div>
        <h2>{pollTitle}</h2>
        {/* Options radio button */}
        <div>
          {options.map((v: any) => (
            <div key={v?.id}>
              <input
                onChange={(e) => setValue(e.target.value)}
                type="radio"
                id={v?.id}
                name="fav_language"
                value={v?.value}
                className="option_input_field"
              />
              <label htmlFor={v?.id}>{v?.value}</label>
            </div>
          ))}
        </div>

        <div className="text-right">
         {/*  <button onClick={onSubmit}>
            {createPollResponseDataLoading ? 'Submitting' : 'Submit'}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default responsePollModal;
