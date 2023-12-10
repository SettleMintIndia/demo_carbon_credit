import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type GetAllTransactionQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllTransactionQuery = { __typename: 'query_root', z_transaction_history: Array<{ __typename: 'z_transaction_history', id: string, amount: string, blockNumber: string | null, created_at: string, price: string, settlement_date: string | null, txHash: string | null, type: string, z_asset: { __typename: 'z_assets', id: string, assetId: string | null, assetName: string }, z_user_by_receiver: { __typename: 'z_users', id: string, address: string, username: string }, z_user_by_sender: { __typename: 'z_users', id: string, address: string, username: string } }> };

export type CreateDirectTransferMutationVariables = Types.Exact<{
  amount?: Types.InputMaybe<Types.Scalars['String']>;
  assetId?: Types.InputMaybe<Types.Scalars['uuid']>;
  sender?: Types.InputMaybe<Types.Scalars['uuid']>;
  receiver?: Types.InputMaybe<Types.Scalars['uuid']>;
  price?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateDirectTransferMutation = { __typename: 'mutation_root', insert_z_transaction_history: { __typename: 'z_transaction_history_mutation_response', returning: Array<{ __typename: 'z_transaction_history', id: string }> } | null };

export type CreateSecondaryMarketplaceTransferMutationVariables = Types.Exact<{
  amount?: Types.InputMaybe<Types.Scalars['String']>;
  assetId?: Types.InputMaybe<Types.Scalars['uuid']>;
  sender?: Types.InputMaybe<Types.Scalars['uuid']>;
  receiver?: Types.InputMaybe<Types.Scalars['uuid']>;
  price?: Types.InputMaybe<Types.Scalars['String']>;
  settlement_date?: Types.InputMaybe<Types.Scalars['String']>;
  txHash?: Types.InputMaybe<Types.Scalars['String']>;
  blockNumber?: Types.InputMaybe<Types.Scalars['String']>;
  type?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateSecondaryMarketplaceTransferMutation = { __typename: 'mutation_root', insert_z_transaction_history: { __typename: 'z_transaction_history_mutation_response', returning: Array<{ __typename: 'z_transaction_history', id: string }> } | null };

export type GetDirectTransactionByIsApprovedQueryVariables = Types.Exact<{
  is_approved: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type GetDirectTransactionByIsApprovedQuery = { __typename: 'query_root', z_transaction_history: Array<{ __typename: 'z_transaction_history', amount: string, created_at: string, id: string, is_approved: boolean, price: string, txHash: string | null, type: string, settlement_date: string | null, blockNumber: string | null, z_user_by_receiver: { __typename: 'z_users', address: string, pvtKey: string, id: string, username: string }, z_user_by_sender: { __typename: 'z_users', address: string, pvtKey: string, username: string, id: string }, z_asset: { __typename: 'z_assets', assetId: string | null, assetName: string, id: string, adminBalance: string } }> };

export type ApproveDirectTransferMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
  settlement_date?: Types.InputMaybe<Types.Scalars['String']>;
  txHash?: Types.InputMaybe<Types.Scalars['String']>;
  blockNumber?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type ApproveDirectTransferMutation = { __typename: 'mutation_root', update_z_transaction_history_by_pk: { __typename: 'z_transaction_history', is_approved: boolean, id: string } | null };

export type DeleteDirectTransactionMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type DeleteDirectTransactionMutation = { __typename: 'mutation_root', delete_z_transaction_history_by_pk: { __typename: 'z_transaction_history', id: string } | null };

export type GetTransactionHistoryByReceiverQueryVariables = Types.Exact<{
  username?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetTransactionHistoryByReceiverQuery = { __typename: 'query_root', z_transaction_history: Array<{ __typename: 'z_transaction_history', id: string, price: string, assetId: string, amount: string, z_asset: { __typename: 'z_assets', id: string, assetId: string | null, assetName: string, last_traded_price: string | null, sellPrice: string | null }, z_user_by_receiver: { __typename: 'z_users', id: string, address: string, username: string }, z_user_by_sender: { __typename: 'z_users', id: string, address: string, username: string } }> };

export type GetTransactionHistoryBySenderQueryVariables = Types.Exact<{
  username?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetTransactionHistoryBySenderQuery = { __typename: 'query_root', z_transaction_history: Array<{ __typename: 'z_transaction_history', id: string, price: string, amount: string, z_asset: { __typename: 'z_assets', id: string, assetId: string | null, assetName: string, last_traded_price: string | null, sellPrice: string | null }, z_user_by_receiver: { __typename: 'z_users', id: string, address: string, username: string }, z_user_by_sender: { __typename: 'z_users', id: string, address: string, username: string } }> };

export type GetTransactionHistoryByRecieverQueryVariables = Types.Exact<{
  username: Types.Scalars['String'];
}>;


export type GetTransactionHistoryByRecieverQuery = { __typename: 'query_root', z_transaction_history: Array<{ __typename: 'z_transaction_history', amount: string, price: string, z_user_by_receiver: { __typename: 'z_users', username: string }, z_asset: { __typename: 'z_assets', assetName: string } }> };


export const GetAllTransactionDocument = /*#__PURE__*/ gql`
    query getAllTransaction {
  z_transaction_history {
    id
    amount
    blockNumber
    created_at
    price
    settlement_date
    txHash
    type
    z_asset {
      id
      assetId
      assetName
    }
    z_user_by_receiver {
      id
      address
      username
    }
    z_user_by_sender {
      id
      address
      username
    }
  }
}
    `;

/**
 * __useGetAllTransactionQuery__
 *
 * To run a query within a React component, call `useGetAllTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTransactionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTransactionQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTransactionQuery, GetAllTransactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTransactionQuery, GetAllTransactionQueryVariables>(GetAllTransactionDocument, options);
      }
export function useGetAllTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTransactionQuery, GetAllTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTransactionQuery, GetAllTransactionQueryVariables>(GetAllTransactionDocument, options);
        }
export type GetAllTransactionQueryHookResult = ReturnType<typeof useGetAllTransactionQuery>;
export type GetAllTransactionLazyQueryHookResult = ReturnType<typeof useGetAllTransactionLazyQuery>;
export type GetAllTransactionQueryResult = Apollo.QueryResult<GetAllTransactionQuery, GetAllTransactionQueryVariables>;
export function refetchGetAllTransactionQuery(variables?: GetAllTransactionQueryVariables) {
      return { query: GetAllTransactionDocument, variables: variables }
    }
export const CreateDirectTransferDocument = /*#__PURE__*/ gql`
    mutation createDirectTransfer($amount: String = "", $assetId: uuid = "", $sender: uuid = "", $receiver: uuid = "", $price: String = "") {
  insert_z_transaction_history(
    objects: {amount: $amount, assetId: $assetId, type: "direct", sender: $sender, receiver: $receiver, price: $price}
  ) {
    returning {
      id
    }
  }
}
    `;
export type CreateDirectTransferMutationFn = Apollo.MutationFunction<CreateDirectTransferMutation, CreateDirectTransferMutationVariables>;

/**
 * __useCreateDirectTransferMutation__
 *
 * To run a mutation, you first call `useCreateDirectTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDirectTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDirectTransferMutation, { data, loading, error }] = useCreateDirectTransferMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      assetId: // value for 'assetId'
 *      sender: // value for 'sender'
 *      receiver: // value for 'receiver'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useCreateDirectTransferMutation(baseOptions?: Apollo.MutationHookOptions<CreateDirectTransferMutation, CreateDirectTransferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDirectTransferMutation, CreateDirectTransferMutationVariables>(CreateDirectTransferDocument, options);
      }
export type CreateDirectTransferMutationHookResult = ReturnType<typeof useCreateDirectTransferMutation>;
export type CreateDirectTransferMutationResult = Apollo.MutationResult<CreateDirectTransferMutation>;
export type CreateDirectTransferMutationOptions = Apollo.BaseMutationOptions<CreateDirectTransferMutation, CreateDirectTransferMutationVariables>;
export const CreateSecondaryMarketplaceTransferDocument = /*#__PURE__*/ gql`
    mutation createSecondaryMarketplaceTransfer($amount: String = "", $assetId: uuid = "", $sender: uuid = "", $receiver: uuid = "", $price: String = "", $settlement_date: String = "", $txHash: String = "", $blockNumber: String = "", $type: String = "secondary_marketplace") {
  insert_z_transaction_history(
    objects: {amount: $amount, assetId: $assetId, type: $type, sender: $sender, receiver: $receiver, price: $price, is_approved: true, settlement_date: $settlement_date, txHash: $txHash, blockNumber: $blockNumber}
  ) {
    returning {
      id
    }
  }
}
    `;
export type CreateSecondaryMarketplaceTransferMutationFn = Apollo.MutationFunction<CreateSecondaryMarketplaceTransferMutation, CreateSecondaryMarketplaceTransferMutationVariables>;

/**
 * __useCreateSecondaryMarketplaceTransferMutation__
 *
 * To run a mutation, you first call `useCreateSecondaryMarketplaceTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSecondaryMarketplaceTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSecondaryMarketplaceTransferMutation, { data, loading, error }] = useCreateSecondaryMarketplaceTransferMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      assetId: // value for 'assetId'
 *      sender: // value for 'sender'
 *      receiver: // value for 'receiver'
 *      price: // value for 'price'
 *      settlement_date: // value for 'settlement_date'
 *      txHash: // value for 'txHash'
 *      blockNumber: // value for 'blockNumber'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateSecondaryMarketplaceTransferMutation(baseOptions?: Apollo.MutationHookOptions<CreateSecondaryMarketplaceTransferMutation, CreateSecondaryMarketplaceTransferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSecondaryMarketplaceTransferMutation, CreateSecondaryMarketplaceTransferMutationVariables>(CreateSecondaryMarketplaceTransferDocument, options);
      }
export type CreateSecondaryMarketplaceTransferMutationHookResult = ReturnType<typeof useCreateSecondaryMarketplaceTransferMutation>;
export type CreateSecondaryMarketplaceTransferMutationResult = Apollo.MutationResult<CreateSecondaryMarketplaceTransferMutation>;
export type CreateSecondaryMarketplaceTransferMutationOptions = Apollo.BaseMutationOptions<CreateSecondaryMarketplaceTransferMutation, CreateSecondaryMarketplaceTransferMutationVariables>;
export const GetDirectTransactionByIsApprovedDocument = /*#__PURE__*/ gql`
    query getDirectTransactionByIsApproved($is_approved: Boolean) {
  z_transaction_history(
    where: {type: {_eq: "direct"}, is_approved: {_eq: $is_approved}}
    order_by: {settlement_date: desc}
  ) {
    amount
    created_at
    id
    is_approved
    price
    txHash
    type
    settlement_date
    blockNumber
    z_user_by_receiver {
      address
      pvtKey
      id
      username
    }
    z_user_by_sender {
      address
      pvtKey
      username
      id
    }
    z_asset {
      assetId
      assetName
      id
      adminBalance
    }
  }
}
    `;

/**
 * __useGetDirectTransactionByIsApprovedQuery__
 *
 * To run a query within a React component, call `useGetDirectTransactionByIsApprovedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDirectTransactionByIsApprovedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDirectTransactionByIsApprovedQuery({
 *   variables: {
 *      is_approved: // value for 'is_approved'
 *   },
 * });
 */
export function useGetDirectTransactionByIsApprovedQuery(baseOptions?: Apollo.QueryHookOptions<GetDirectTransactionByIsApprovedQuery, GetDirectTransactionByIsApprovedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDirectTransactionByIsApprovedQuery, GetDirectTransactionByIsApprovedQueryVariables>(GetDirectTransactionByIsApprovedDocument, options);
      }
export function useGetDirectTransactionByIsApprovedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDirectTransactionByIsApprovedQuery, GetDirectTransactionByIsApprovedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDirectTransactionByIsApprovedQuery, GetDirectTransactionByIsApprovedQueryVariables>(GetDirectTransactionByIsApprovedDocument, options);
        }
export type GetDirectTransactionByIsApprovedQueryHookResult = ReturnType<typeof useGetDirectTransactionByIsApprovedQuery>;
export type GetDirectTransactionByIsApprovedLazyQueryHookResult = ReturnType<typeof useGetDirectTransactionByIsApprovedLazyQuery>;
export type GetDirectTransactionByIsApprovedQueryResult = Apollo.QueryResult<GetDirectTransactionByIsApprovedQuery, GetDirectTransactionByIsApprovedQueryVariables>;
export function refetchGetDirectTransactionByIsApprovedQuery(variables?: GetDirectTransactionByIsApprovedQueryVariables) {
      return { query: GetDirectTransactionByIsApprovedDocument, variables: variables }
    }
export const ApproveDirectTransferDocument = /*#__PURE__*/ gql`
    mutation approveDirectTransfer($id: uuid = "", $settlement_date: String = "", $txHash: String = "", $blockNumber: String = "") {
  update_z_transaction_history_by_pk(
    pk_columns: {id: $id}
    _set: {is_approved: true, settlement_date: $settlement_date, txHash: $txHash, blockNumber: $blockNumber}
  ) {
    is_approved
    id
  }
}
    `;
export type ApproveDirectTransferMutationFn = Apollo.MutationFunction<ApproveDirectTransferMutation, ApproveDirectTransferMutationVariables>;

/**
 * __useApproveDirectTransferMutation__
 *
 * To run a mutation, you first call `useApproveDirectTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApproveDirectTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [approveDirectTransferMutation, { data, loading, error }] = useApproveDirectTransferMutation({
 *   variables: {
 *      id: // value for 'id'
 *      settlement_date: // value for 'settlement_date'
 *      txHash: // value for 'txHash'
 *      blockNumber: // value for 'blockNumber'
 *   },
 * });
 */
export function useApproveDirectTransferMutation(baseOptions?: Apollo.MutationHookOptions<ApproveDirectTransferMutation, ApproveDirectTransferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ApproveDirectTransferMutation, ApproveDirectTransferMutationVariables>(ApproveDirectTransferDocument, options);
      }
export type ApproveDirectTransferMutationHookResult = ReturnType<typeof useApproveDirectTransferMutation>;
export type ApproveDirectTransferMutationResult = Apollo.MutationResult<ApproveDirectTransferMutation>;
export type ApproveDirectTransferMutationOptions = Apollo.BaseMutationOptions<ApproveDirectTransferMutation, ApproveDirectTransferMutationVariables>;
export const DeleteDirectTransactionDocument = /*#__PURE__*/ gql`
    mutation deleteDirectTransaction($id: uuid = "") {
  delete_z_transaction_history_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteDirectTransactionMutationFn = Apollo.MutationFunction<DeleteDirectTransactionMutation, DeleteDirectTransactionMutationVariables>;

/**
 * __useDeleteDirectTransactionMutation__
 *
 * To run a mutation, you first call `useDeleteDirectTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDirectTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDirectTransactionMutation, { data, loading, error }] = useDeleteDirectTransactionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDirectTransactionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDirectTransactionMutation, DeleteDirectTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDirectTransactionMutation, DeleteDirectTransactionMutationVariables>(DeleteDirectTransactionDocument, options);
      }
export type DeleteDirectTransactionMutationHookResult = ReturnType<typeof useDeleteDirectTransactionMutation>;
export type DeleteDirectTransactionMutationResult = Apollo.MutationResult<DeleteDirectTransactionMutation>;
export type DeleteDirectTransactionMutationOptions = Apollo.BaseMutationOptions<DeleteDirectTransactionMutation, DeleteDirectTransactionMutationVariables>;
export const GetTransactionHistoryByReceiverDocument = /*#__PURE__*/ gql`
    query getTransactionHistoryByReceiver($username: String = "") {
  z_transaction_history(where: {z_user_by_receiver: {username: {_eq: $username}}}) {
    id
    price
    assetId
    amount
    z_asset {
      id
      assetId
      assetName
      last_traded_price
      sellPrice
    }
    z_user_by_receiver {
      id
      address
      username
    }
    z_user_by_sender {
      id
      address
      username
    }
  }
}
    `;

/**
 * __useGetTransactionHistoryByReceiverQuery__
 *
 * To run a query within a React component, call `useGetTransactionHistoryByReceiverQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionHistoryByReceiverQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionHistoryByReceiverQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetTransactionHistoryByReceiverQuery(baseOptions?: Apollo.QueryHookOptions<GetTransactionHistoryByReceiverQuery, GetTransactionHistoryByReceiverQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionHistoryByReceiverQuery, GetTransactionHistoryByReceiverQueryVariables>(GetTransactionHistoryByReceiverDocument, options);
      }
export function useGetTransactionHistoryByReceiverLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionHistoryByReceiverQuery, GetTransactionHistoryByReceiverQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionHistoryByReceiverQuery, GetTransactionHistoryByReceiverQueryVariables>(GetTransactionHistoryByReceiverDocument, options);
        }
export type GetTransactionHistoryByReceiverQueryHookResult = ReturnType<typeof useGetTransactionHistoryByReceiverQuery>;
export type GetTransactionHistoryByReceiverLazyQueryHookResult = ReturnType<typeof useGetTransactionHistoryByReceiverLazyQuery>;
export type GetTransactionHistoryByReceiverQueryResult = Apollo.QueryResult<GetTransactionHistoryByReceiverQuery, GetTransactionHistoryByReceiverQueryVariables>;
export function refetchGetTransactionHistoryByReceiverQuery(variables?: GetTransactionHistoryByReceiverQueryVariables) {
      return { query: GetTransactionHistoryByReceiverDocument, variables: variables }
    }
export const GetTransactionHistoryBySenderDocument = /*#__PURE__*/ gql`
    query getTransactionHistoryBySender($username: String = "") {
  z_transaction_history(where: {z_user_by_sender: {username: {_eq: $username}}}) {
    id
    price
    amount
    z_asset {
      id
      assetId
      assetName
      last_traded_price
      sellPrice
    }
    z_user_by_receiver {
      id
      address
      username
    }
    z_user_by_sender {
      id
      address
      username
    }
  }
}
    `;

/**
 * __useGetTransactionHistoryBySenderQuery__
 *
 * To run a query within a React component, call `useGetTransactionHistoryBySenderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionHistoryBySenderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionHistoryBySenderQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetTransactionHistoryBySenderQuery(baseOptions?: Apollo.QueryHookOptions<GetTransactionHistoryBySenderQuery, GetTransactionHistoryBySenderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionHistoryBySenderQuery, GetTransactionHistoryBySenderQueryVariables>(GetTransactionHistoryBySenderDocument, options);
      }
export function useGetTransactionHistoryBySenderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionHistoryBySenderQuery, GetTransactionHistoryBySenderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionHistoryBySenderQuery, GetTransactionHistoryBySenderQueryVariables>(GetTransactionHistoryBySenderDocument, options);
        }
export type GetTransactionHistoryBySenderQueryHookResult = ReturnType<typeof useGetTransactionHistoryBySenderQuery>;
export type GetTransactionHistoryBySenderLazyQueryHookResult = ReturnType<typeof useGetTransactionHistoryBySenderLazyQuery>;
export type GetTransactionHistoryBySenderQueryResult = Apollo.QueryResult<GetTransactionHistoryBySenderQuery, GetTransactionHistoryBySenderQueryVariables>;
export function refetchGetTransactionHistoryBySenderQuery(variables?: GetTransactionHistoryBySenderQueryVariables) {
      return { query: GetTransactionHistoryBySenderDocument, variables: variables }
    }
export const GetTransactionHistoryByRecieverDocument = /*#__PURE__*/ gql`
    query GetTransactionHistoryByReciever($username: String!) {
  z_transaction_history(where: {z_user_by_receiver: {username: {_eq: $username}}}) {
    amount
    price
    z_user_by_receiver {
      username
    }
    z_asset {
      assetName
    }
  }
}
    `;

/**
 * __useGetTransactionHistoryByRecieverQuery__
 *
 * To run a query within a React component, call `useGetTransactionHistoryByRecieverQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionHistoryByRecieverQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionHistoryByRecieverQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetTransactionHistoryByRecieverQuery(baseOptions: Apollo.QueryHookOptions<GetTransactionHistoryByRecieverQuery, GetTransactionHistoryByRecieverQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionHistoryByRecieverQuery, GetTransactionHistoryByRecieverQueryVariables>(GetTransactionHistoryByRecieverDocument, options);
      }
export function useGetTransactionHistoryByRecieverLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionHistoryByRecieverQuery, GetTransactionHistoryByRecieverQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionHistoryByRecieverQuery, GetTransactionHistoryByRecieverQueryVariables>(GetTransactionHistoryByRecieverDocument, options);
        }
export type GetTransactionHistoryByRecieverQueryHookResult = ReturnType<typeof useGetTransactionHistoryByRecieverQuery>;
export type GetTransactionHistoryByRecieverLazyQueryHookResult = ReturnType<typeof useGetTransactionHistoryByRecieverLazyQuery>;
export type GetTransactionHistoryByRecieverQueryResult = Apollo.QueryResult<GetTransactionHistoryByRecieverQuery, GetTransactionHistoryByRecieverQueryVariables>;
export function refetchGetTransactionHistoryByRecieverQuery(variables: GetTransactionHistoryByRecieverQueryVariables) {
      return { query: GetTransactionHistoryByRecieverDocument, variables: variables }
    }