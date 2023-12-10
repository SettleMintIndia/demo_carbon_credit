import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type GetPollByAssetUuidQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type GetPollByAssetUuidQuery = { __typename: 'query_root', z_poll: Array<{ __typename: 'z_poll', id: string, created_at: string, assetId: string, poll_end_date: string, poll_start_date: string, poll_title: string, txHash: string, z_asset: { __typename: 'z_assets', assetId: string | null, assetName: string, id: string, z_token_holders: Array<{ __typename: 'z_token_holder', id: string, amount: string, assetId: string, userId: string, z_asset: { __typename: 'z_assets', id: string, assetName: string }, z_user: { __typename: 'z_users', id: string, username: string, address: string } }> }, z_poll_options: Array<{ __typename: 'z_poll_options', id: string, value: string, created_at: string }>, z_poll_responses: Array<{ __typename: 'z_poll_response', id: string, value: string, created_at: string, z_user: { __typename: 'z_users', id: string, username: string, address: string } }>, z_user_created_by: { __typename: 'z_users', id: string, address: string, username: string } }> };

export type AddPollMutationVariables = Types.Exact<{
  txHash?: Types.InputMaybe<Types.Scalars['String']>;
  poll_title?: Types.InputMaybe<Types.Scalars['String']>;
  poll_start_date?: Types.InputMaybe<Types.Scalars['String']>;
  poll_end_date?: Types.InputMaybe<Types.Scalars['String']>;
  created_by?: Types.InputMaybe<Types.Scalars['uuid']>;
  assetId?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type AddPollMutation = { __typename: 'mutation_root', insert_z_poll: { __typename: 'z_poll_mutation_response', returning: Array<{ __typename: 'z_poll', id: string }> } | null };

export type CreatePollOptionMutationVariables = Types.Exact<{
  pollId?: Types.InputMaybe<Types.Scalars['uuid']>;
  value?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreatePollOptionMutation = { __typename: 'mutation_root', insert_z_poll_options: { __typename: 'z_poll_options_mutation_response', returning: Array<{ __typename: 'z_poll_options', id: string }> } | null };

export type CreatePollResponseMutationVariables = Types.Exact<{
  pollId?: Types.InputMaybe<Types.Scalars['uuid']>;
  response_by?: Types.InputMaybe<Types.Scalars['uuid']>;
  value?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreatePollResponseMutation = { __typename: 'mutation_root', insert_z_poll_response: { __typename: 'z_poll_response_mutation_response', returning: Array<{ __typename: 'z_poll_response', id: string, response_by: string }> } | null };

export type GetResponseOfTokenHolderQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetResponseOfTokenHolderQuery = { __typename: 'query_root', z_poll_response: Array<{ __typename: 'z_poll_response', id: string, pollId: string, response_by: string, created_at: string, value: string, z_poll: { __typename: 'z_poll', id: string, assetId: string }, z_user: { __typename: 'z_users', id: string, address: string, username: string } }> };


export const GetPollByAssetUuidDocument = /*#__PURE__*/ gql`
    query getPollByAssetUUID($id: uuid = "") {
  z_poll(where: {assetId: {_eq: $id}, z_asset: {z_token_holders: {}}}) {
    id
    created_at
    assetId
    poll_end_date
    poll_start_date
    poll_title
    txHash
    z_asset {
      assetId
      assetName
      id
      z_token_holders {
        id
        amount
        assetId
        userId
        z_asset {
          id
          assetName
        }
        z_user {
          id
          username
          address
        }
      }
    }
    z_poll_options {
      id
      value
      created_at
    }
    z_poll_responses {
      id
      value
      created_at
      z_user {
        id
        username
        address
      }
    }
    z_user_created_by {
      id
      address
      username
    }
  }
}
    `;

/**
 * __useGetPollByAssetUuidQuery__
 *
 * To run a query within a React component, call `useGetPollByAssetUuidQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPollByAssetUuidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPollByAssetUuidQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPollByAssetUuidQuery(baseOptions?: Apollo.QueryHookOptions<GetPollByAssetUuidQuery, GetPollByAssetUuidQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPollByAssetUuidQuery, GetPollByAssetUuidQueryVariables>(GetPollByAssetUuidDocument, options);
      }
export function useGetPollByAssetUuidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPollByAssetUuidQuery, GetPollByAssetUuidQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPollByAssetUuidQuery, GetPollByAssetUuidQueryVariables>(GetPollByAssetUuidDocument, options);
        }
export type GetPollByAssetUuidQueryHookResult = ReturnType<typeof useGetPollByAssetUuidQuery>;
export type GetPollByAssetUuidLazyQueryHookResult = ReturnType<typeof useGetPollByAssetUuidLazyQuery>;
export type GetPollByAssetUuidQueryResult = Apollo.QueryResult<GetPollByAssetUuidQuery, GetPollByAssetUuidQueryVariables>;
export function refetchGetPollByAssetUuidQuery(variables?: GetPollByAssetUuidQueryVariables) {
      return { query: GetPollByAssetUuidDocument, variables: variables }
    }
export const AddPollDocument = /*#__PURE__*/ gql`
    mutation addPoll($txHash: String = "", $poll_title: String = "", $poll_start_date: String = "", $poll_end_date: String = "", $created_by: uuid = "", $assetId: uuid = "") {
  insert_z_poll(
    objects: {assetId: $assetId, created_by: $created_by, poll_end_date: $poll_end_date, poll_start_date: $poll_start_date, poll_title: $poll_title, txHash: $txHash}
  ) {
    returning {
      id
    }
  }
}
    `;
export type AddPollMutationFn = Apollo.MutationFunction<AddPollMutation, AddPollMutationVariables>;

/**
 * __useAddPollMutation__
 *
 * To run a mutation, you first call `useAddPollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPollMutation, { data, loading, error }] = useAddPollMutation({
 *   variables: {
 *      txHash: // value for 'txHash'
 *      poll_title: // value for 'poll_title'
 *      poll_start_date: // value for 'poll_start_date'
 *      poll_end_date: // value for 'poll_end_date'
 *      created_by: // value for 'created_by'
 *      assetId: // value for 'assetId'
 *   },
 * });
 */
export function useAddPollMutation(baseOptions?: Apollo.MutationHookOptions<AddPollMutation, AddPollMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPollMutation, AddPollMutationVariables>(AddPollDocument, options);
      }
export type AddPollMutationHookResult = ReturnType<typeof useAddPollMutation>;
export type AddPollMutationResult = Apollo.MutationResult<AddPollMutation>;
export type AddPollMutationOptions = Apollo.BaseMutationOptions<AddPollMutation, AddPollMutationVariables>;
export const CreatePollOptionDocument = /*#__PURE__*/ gql`
    mutation createPollOption($pollId: uuid = "", $value: String = "") {
  insert_z_poll_options(objects: {pollId: $pollId, value: $value}) {
    returning {
      id
    }
  }
}
    `;
export type CreatePollOptionMutationFn = Apollo.MutationFunction<CreatePollOptionMutation, CreatePollOptionMutationVariables>;

/**
 * __useCreatePollOptionMutation__
 *
 * To run a mutation, you first call `useCreatePollOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePollOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPollOptionMutation, { data, loading, error }] = useCreatePollOptionMutation({
 *   variables: {
 *      pollId: // value for 'pollId'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useCreatePollOptionMutation(baseOptions?: Apollo.MutationHookOptions<CreatePollOptionMutation, CreatePollOptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePollOptionMutation, CreatePollOptionMutationVariables>(CreatePollOptionDocument, options);
      }
export type CreatePollOptionMutationHookResult = ReturnType<typeof useCreatePollOptionMutation>;
export type CreatePollOptionMutationResult = Apollo.MutationResult<CreatePollOptionMutation>;
export type CreatePollOptionMutationOptions = Apollo.BaseMutationOptions<CreatePollOptionMutation, CreatePollOptionMutationVariables>;
export const CreatePollResponseDocument = /*#__PURE__*/ gql`
    mutation createPollResponse($pollId: uuid = "", $response_by: uuid = "", $value: String = "") {
  insert_z_poll_response(
    objects: {pollId: $pollId, response_by: $response_by, value: $value}
  ) {
    returning {
      id
      response_by
    }
  }
}
    `;
export type CreatePollResponseMutationFn = Apollo.MutationFunction<CreatePollResponseMutation, CreatePollResponseMutationVariables>;

/**
 * __useCreatePollResponseMutation__
 *
 * To run a mutation, you first call `useCreatePollResponseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePollResponseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPollResponseMutation, { data, loading, error }] = useCreatePollResponseMutation({
 *   variables: {
 *      pollId: // value for 'pollId'
 *      response_by: // value for 'response_by'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useCreatePollResponseMutation(baseOptions?: Apollo.MutationHookOptions<CreatePollResponseMutation, CreatePollResponseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePollResponseMutation, CreatePollResponseMutationVariables>(CreatePollResponseDocument, options);
      }
export type CreatePollResponseMutationHookResult = ReturnType<typeof useCreatePollResponseMutation>;
export type CreatePollResponseMutationResult = Apollo.MutationResult<CreatePollResponseMutation>;
export type CreatePollResponseMutationOptions = Apollo.BaseMutationOptions<CreatePollResponseMutation, CreatePollResponseMutationVariables>;
export const GetResponseOfTokenHolderDocument = /*#__PURE__*/ gql`
    query getResponseOfTokenHolder {
  z_poll_response {
    id
    pollId
    response_by
    created_at
    value
    z_poll {
      id
      assetId
    }
    z_user {
      id
      address
      username
    }
  }
}
    `;

/**
 * __useGetResponseOfTokenHolderQuery__
 *
 * To run a query within a React component, call `useGetResponseOfTokenHolderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResponseOfTokenHolderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResponseOfTokenHolderQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetResponseOfTokenHolderQuery(baseOptions?: Apollo.QueryHookOptions<GetResponseOfTokenHolderQuery, GetResponseOfTokenHolderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResponseOfTokenHolderQuery, GetResponseOfTokenHolderQueryVariables>(GetResponseOfTokenHolderDocument, options);
      }
export function useGetResponseOfTokenHolderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResponseOfTokenHolderQuery, GetResponseOfTokenHolderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResponseOfTokenHolderQuery, GetResponseOfTokenHolderQueryVariables>(GetResponseOfTokenHolderDocument, options);
        }
export type GetResponseOfTokenHolderQueryHookResult = ReturnType<typeof useGetResponseOfTokenHolderQuery>;
export type GetResponseOfTokenHolderLazyQueryHookResult = ReturnType<typeof useGetResponseOfTokenHolderLazyQuery>;
export type GetResponseOfTokenHolderQueryResult = Apollo.QueryResult<GetResponseOfTokenHolderQuery, GetResponseOfTokenHolderQueryVariables>;
export function refetchGetResponseOfTokenHolderQuery(variables?: GetResponseOfTokenHolderQueryVariables) {
      return { query: GetResponseOfTokenHolderDocument, variables: variables }
    }