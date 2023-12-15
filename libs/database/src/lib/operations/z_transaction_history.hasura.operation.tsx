import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type CreateTransctionHistoryMutationVariables = Types.Exact<{
  amount: Types.InputMaybe<Types.Scalars['String']>;
  mint_id: Types.InputMaybe<Types.Scalars['uuid']>;
  sender: Types.InputMaybe<Types.Scalars['uuid']>;
  receiver: Types.InputMaybe<Types.Scalars['uuid']>;
  token: Types.InputMaybe<Types.Scalars['String']>;
  tx_hash: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateTransctionHistoryMutation = { __typename: 'mutation_root', insert_z_transaction_history: { __typename: 'z_transaction_history_mutation_response', returning: Array<{ __typename: 'z_transaction_history', id: string }> } | null };

export type GetAllTransactionsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllTransactionsQuery = { __typename: 'query_root', z_transaction_history: Array<{ __typename: 'z_transaction_history', id: string, receiver: string, sender: string, token: string, amount: string, tx_hash: string, created_at: string, z_user_receiver: { __typename: 'z_users', address: string, username: string, password: string }, z_user_sender: { __typename: 'z_users', username: string, password: string, address: string } }> };


export const CreateTransctionHistoryDocument = /*#__PURE__*/ gql`
    mutation createTransctionHistory($amount: String, $mint_id: uuid, $sender: uuid, $receiver: uuid, $token: String, $tx_hash: String) {
  insert_z_transaction_history(
    objects: {amount: $amount, mint_id: $mint_id, sender: $sender, receiver: $receiver, token: $token, tx_hash: $tx_hash}
  ) {
    returning {
      id
    }
  }
}
    `;
export type CreateTransctionHistoryMutationFn = Apollo.MutationFunction<CreateTransctionHistoryMutation, CreateTransctionHistoryMutationVariables>;

/**
 * __useCreateTransctionHistoryMutation__
 *
 * To run a mutation, you first call `useCreateTransctionHistoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransctionHistoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransctionHistoryMutation, { data, loading, error }] = useCreateTransctionHistoryMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      mint_id: // value for 'mint_id'
 *      sender: // value for 'sender'
 *      receiver: // value for 'receiver'
 *      token: // value for 'token'
 *      tx_hash: // value for 'tx_hash'
 *   },
 * });
 */
export function useCreateTransctionHistoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateTransctionHistoryMutation, CreateTransctionHistoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTransctionHistoryMutation, CreateTransctionHistoryMutationVariables>(CreateTransctionHistoryDocument, options);
      }
export type CreateTransctionHistoryMutationHookResult = ReturnType<typeof useCreateTransctionHistoryMutation>;
export type CreateTransctionHistoryMutationResult = Apollo.MutationResult<CreateTransctionHistoryMutation>;
export type CreateTransctionHistoryMutationOptions = Apollo.BaseMutationOptions<CreateTransctionHistoryMutation, CreateTransctionHistoryMutationVariables>;
export const GetAllTransactionsDocument = /*#__PURE__*/ gql`
    query getAllTransactions {
  z_transaction_history {
    id
    receiver
    sender
    token
    amount
    tx_hash
    created_at
    z_user_receiver {
      address
      username
      password
    }
    z_user_sender {
      username
      password
      address
    }
  }
}
    `;

/**
 * __useGetAllTransactionsQuery__
 *
 * To run a query within a React component, call `useGetAllTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTransactionsQuery, GetAllTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTransactionsQuery, GetAllTransactionsQueryVariables>(GetAllTransactionsDocument, options);
      }
export function useGetAllTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTransactionsQuery, GetAllTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTransactionsQuery, GetAllTransactionsQueryVariables>(GetAllTransactionsDocument, options);
        }
export type GetAllTransactionsQueryHookResult = ReturnType<typeof useGetAllTransactionsQuery>;
export type GetAllTransactionsLazyQueryHookResult = ReturnType<typeof useGetAllTransactionsLazyQuery>;
export type GetAllTransactionsQueryResult = Apollo.QueryResult<GetAllTransactionsQuery, GetAllTransactionsQueryVariables>;
export function refetchGetAllTransactionsQuery(variables?: GetAllTransactionsQueryVariables) {
      return { query: GetAllTransactionsDocument, variables: variables }
    }