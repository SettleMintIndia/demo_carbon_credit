import {
  useAddPollMutation,
  useCreatePollOptionMutation,
  useGetUserByUsernameLazyQuery,
} from '@demo-carbon-credit/database';
import { type } from 'os';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useModalContext } from '@demo-carbon-credit/providers';
import { ethers } from 'ethers';

const contractAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'BeaconUpgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'unique_id',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'token_id',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'token_name',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'poll_start_date',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'poll_end_date',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'options',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'poll_response',
        type: 'string',
      },
    ],
    name: 'CreatePoll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_unique_id',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_token_id',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_token_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_poll_start_date',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_poll_end_date',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_options',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_poll_response',
        type: 'string',
      },
    ],
    name: 'createPoll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol_',
        type: 'string',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_unique_id',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_token_id',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_token_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_poll_start_date',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_poll_end_date',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_options',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_poll_response',
        type: 'string',
      },
    ],
    name: 'updatePoll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
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
  '0x24F6e042c8E7548FA3dA2464B6D2195968402AEE',
  contractAbi,
  provider
);

const contractWithAdminWallet = contract.connect(adminWallet);
type Props = {
  id: string;
  username: string;
};

const createPollModal = ({ id, username }: Props) => {
  const { setModal } = useModalContext();
  const [blockChainTransaction, setBlockChainTransaction] = useState(false);

  const [options, setOptions] = useState({
    option_1: '',
    option_2: '',
    option_3: '',
    option_4: '',
  });
  const [pollInputs, setPollInputs] = useState({
    assetId: '',
    created_by: '',
    poll_title: '',
    poll_start_date: '',
    poll_end_date: '',
  });

  // Create poll
  const [
    addPollMutation,
    { data: addPollData, loading: addPollDataLoading, error: addPollDataError },
  ] = useAddPollMutation({});

  // Create Option
  const [
    createPollOptionMutation,
    {
      data: createPollOptionData,
      loading: createPollOptionDataLoading,
      error: createPollOptionDataError,
    },
  ] = useCreatePollOptionMutation({});

  // Get user by username
  const [getUserByUsernameLazyQuery, { data: userData, loading, error }] =
    useGetUserByUsernameLazyQuery({});

  // Initial Call

  useEffect(() => {
    getUserByUsernameLazyQuery({
      variables: {
        username: username,
      },
    });
  }, []);

  // Call when we get user data
  useEffect(() => {
    if (userData?.z_users) {
      setPollInputs({
        assetId: id,
        created_by: userData?.z_users[0].id,
        poll_end_date: '',
        poll_start_date: '',
        poll_title: '',
      });
    }
  }, [userData?.z_users]);

  const onChangeInputFields = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPollInputs({ ...pollInputs, [event.target.name]: event.target.value });
  };

  const onChangeOptionFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptions({ ...options, [event.target.name]: event.target.value });
  };

  const onSubmit = async () => {
    // Some validation

    console.log('poll input', pollInputs);

    console.log('poll options', options);
    if (
      options['option_1'] === '' ||
      options['option_2'] === '' ||
      options['option_3'] === '' ||
      options['option_4'] === '' ||
      pollInputs.poll_title === '' ||
      pollInputs.poll_start_date === '' ||
      pollInputs.poll_end_date === ''
    ) {
      toast.error('Please enter all the fields');
      return;
    } else if (pollInputs.poll_end_date < pollInputs.poll_start_date) {
      toast.error('Please enter the valid date');
      return;
    } else {
      // Submit both poll and options
      try {
        // Store in blockchain
        setBlockChainTransaction(true);
        // const hash = await fetch('/api/vote/createPoll', {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     unique_id: '',
        //     token_id: pollInputs.token_id,
        //     token_name: pollInputs.token_name,
        //     poll_start_date: pollInputs.poll_start_date,
        //     poll_end_date: pollInputs.poll_end_date,
        //     options: JSON.stringify(options),
        //     poll_response: '',
        //   }),
        // });
        // const txResponse = await hash.json();
        // Direct contract call
        const gasLimit = await contractWithAdminWallet.estimateGas.createPoll(
          '',
          pollInputs.assetId,
          pollInputs.created_by,
          pollInputs.poll_start_date,
          pollInputs.poll_end_date,
          JSON.stringify(options),
          ''
        );
        const gasLimitString = gasLimit.toString();
        const tx = await contractWithAdminWallet.createPoll(
          '',
          pollInputs.assetId,
          pollInputs.created_by,
          pollInputs.poll_start_date,
          pollInputs.poll_end_date,
          JSON.stringify(options),
          '',
          {
            gasPrice: 0,
            gasLimit: gasLimitString,
          }
        );
        const txReceipt = await tx.wait(1);
        const pollId = await addPollMutation({
          variables: { ...pollInputs, txHash: txReceipt.transactionHash },
        });
        for (var i = 1; i <= 4; i++) {
          let option: string = 'option_' + i;
          const pollOptionId = await createPollOptionMutation({
            variables: {
              pollId: pollId.data?.insert_z_poll?.returning[0].id!,
              value: options[option],
            },
          });
        }
        setBlockChainTransaction(true);
        toast.success('Poll Added Successfully');
        setModal(undefined);
      } catch (error) {
        toast.error(`${error}`);
      }
    }
  };
  return (
    <div className="pop-info-base">
      <div>
        <h4>Create Poll</h4>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="poll-box">
            <label>Poll Title</label>
            <div className="input-box">
              <textarea
                onChange={onChangeInputFields}
                name="poll_title"
                className="form-control"
              />
            </div>
          </div>

          <div className="poll-box">
            <label>Start Date</label>
            <div className="input-box">
              <input
                onChange={onChangeInputFields}
                name="poll_start_date"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className="form-control"
              />
            </div>
          </div>
          <div className="poll-box">
            <label>End Date</label>
            <div className="input-box">
              <input
                onChange={onChangeInputFields}
                name="poll_end_date"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="poll-box">
            <label>Enter Options</label>
            <div className="poll-contain">
              <div className="poll-opt">
                <input
                  name="option_1"
                  onChange={onChangeOptionFields}
                  placeholder="Option 1"
                  type="text"
                />
              </div>
              <div className="poll-opt">
                <input
                  name="option_2"
                  onChange={onChangeOptionFields}
                  placeholder="Option 2"
                  type="text"
                />
              </div>
              <div className="poll-opt">
                <input
                  name="option_3"
                  onChange={onChangeOptionFields}
                  placeholder="Option 3"
                  type="text"
                />
              </div>
              <div className="poll-opt">
                <input
                  name="option_4"
                  onChange={onChangeOptionFields}
                  placeholder="Option 4"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <button onClick={onSubmit}>
          {addPollDataLoading ||
          createPollOptionDataLoading ||
          blockChainTransaction
            ? `Submitting`
            : 'Create'}
        </button>
      </div>
    </div>
  );
};

export default createPollModal;
