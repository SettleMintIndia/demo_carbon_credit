import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type GetTokenHolderDetailsQueryVariables = Types.Exact<{
  assetId?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type GetTokenHolderDetailsQuery = { __typename: 'query_root', z_token_holder: Array<{ __typename: 'z_token_holder', id: string, created_at: string, updated_at: string, userId: string, assetId: string, amount: string, z_asset: { __typename: 'z_assets', id: string, assetId: string | null, assetName: string }, z_user: { __typename: 'z_users', id: string, address: string, username: string } }> };

export type CheckRecordExistQueryVariables = Types.Exact<{
  assetId?: Types.InputMaybe<Types.Scalars['uuid']>;
  userId?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type CheckRecordExistQuery = { __typename: 'query_root', z_token_holder: Array<{ __typename: 'z_token_holder', id: string, userId: string, assetId: string, amount: string }> };

export type UpdateTokenHolderMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
  amount?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type UpdateTokenHolderMutation = { __typename: 'mutation_root', update_z_token_holder_by_pk: { __typename: 'z_token_holder', amount: string, id: string } | null };

export type CreateTokenHolderMutationVariables = Types.Exact<{
  amount?: Types.InputMaybe<Types.Scalars['String']>;
  assetId?: Types.InputMaybe<Types.Scalars['uuid']>;
  userId?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type CreateTokenHolderMutation = { __typename: 'mutation_root', insert_z_token_holder: { __typename: 'z_token_holder_mutation_response', returning: Array<{ __typename: 'z_token_holder', id: string }> } | null };

export type GetTokenHoldersByUsernameQueryVariables = Types.Exact<{
  username?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetTokenHoldersByUsernameQuery = { __typename: 'query_root', z_token_holder: Array<{ __typename: 'z_token_holder', amount: string, created_at: string, id: string, updated_at: string, userId: string, z_asset: { __typename: 'z_assets', assetId: string | null, assetName: string, currency: string, id: string, managementFee: string } }> };

export type GetAllTokenHolderDetailsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllTokenHolderDetailsQuery = { __typename: 'query_root', z_token_holder: Array<{ __typename: 'z_token_holder', id: string, z_asset: { __typename: 'z_assets', id: string, assetId: string | null, assetName: string } }> };


export const GetTokenHolderDetailsDocument = /*#__PURE__*/ gql`
    query getTokenHolderDetails($assetId: uuid = "") {
  z_token_holder(where: {assetId: {_eq: $assetId}}) {
    id
    created_at
    updated_at
    userId
    assetId
    amount
    z_asset {
      id
      assetId
      assetName
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
 * __useGetTokenHolderDetailsQuery__
 *
 * To run a query within a React component, call `useGetTokenHolderDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenHolderDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenHolderDetailsQuery({
 *   variables: {
 *      assetId: // value for 'assetId'
 *   },
 * });
 */
export function useGetTokenHolderDetailsQuery(baseOptions?: Apollo.QueryHookOptions<GetTokenHolderDetailsQuery, GetTokenHolderDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTokenHolderDetailsQuery, GetTokenHolderDetailsQueryVariables>(GetTokenHolderDetailsDocument, options);
      }
export function useGetTokenHolderDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTokenHolderDetailsQuery, GetTokenHolderDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTokenHolderDetailsQuery, GetTokenHolderDetailsQueryVariables>(GetTokenHolderDetailsDocument, options);
        }
export type GetTokenHolderDetailsQueryHookResult = ReturnType<typeof useGetTokenHolderDetailsQuery>;
export type GetTokenHolderDetailsLazyQueryHookResult = ReturnType<typeof useGetTokenHolderDetailsLazyQuery>;
export type GetTokenHolderDetailsQueryResult = Apollo.QueryResult<GetTokenHolderDetailsQuery, GetTokenHolderDetailsQueryVariables>;
export function refetchGetTokenHolderDetailsQuery(variables?: GetTokenHolderDetailsQueryVariables) {
      return { query: GetTokenHolderDetailsDocument, variables: variables }
    }
export const CheckRecordExistDocument = /*#__PURE__*/ gql`
    query checkRecordExist($assetId: uuid = "", $userId: uuid = "") {
  z_token_holder(where: {assetId: {_eq: $assetId}, userId: {_eq: $userId}}) {
    id
    userId
    assetId
    amount
  }
}
    `;

/**
 * __useCheckRecordExistQuery__
 *
 * To run a query within a React component, call `useCheckRecordExistQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckRecordExistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckRecordExistQuery({
 *   variables: {
 *      assetId: // value for 'assetId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCheckRecordExistQuery(baseOptions?: Apollo.QueryHookOptions<CheckRecordExistQuery, CheckRecordExistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckRecordExistQuery, CheckRecordExistQueryVariables>(CheckRecordExistDocument, options);
      }
export function useCheckRecordExistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckRecordExistQuery, CheckRecordExistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckRecordExistQuery, CheckRecordExistQueryVariables>(CheckRecordExistDocument, options);
        }
export type CheckRecordExistQueryHookResult = ReturnType<typeof useCheckRecordExistQuery>;
export type CheckRecordExistLazyQueryHookResult = ReturnType<typeof useCheckRecordExistLazyQuery>;
export type CheckRecordExistQueryResult = Apollo.QueryResult<CheckRecordExistQuery, CheckRecordExistQueryVariables>;
export function refetchCheckRecordExistQuery(variables?: CheckRecordExistQueryVariables) {
      return { query: CheckRecordExistDocument, variables: variables }
    }
export const UpdateTokenHolderDocument = /*#__PURE__*/ gql`
    mutation updateTokenHolder($id: uuid = "", $amount: String = "") {
  update_z_token_holder_by_pk(pk_columns: {id: $id}, _set: {amount: $amount}) {
    amount
    id
  }
}
    `;
export type UpdateTokenHolderMutationFn = Apollo.MutationFunction<UpdateTokenHolderMutation, UpdateTokenHolderMutationVariables>;

/**
 * __useUpdateTokenHolderMutation__
 *
 * To run a mutation, you first call `useUpdateTokenHolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTokenHolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTokenHolderMutation, { data, loading, error }] = useUpdateTokenHolderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useUpdateTokenHolderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTokenHolderMutation, UpdateTokenHolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTokenHolderMutation, UpdateTokenHolderMutationVariables>(UpdateTokenHolderDocument, options);
      }
export type UpdateTokenHolderMutationHookResult = ReturnType<typeof useUpdateTokenHolderMutation>;
export type UpdateTokenHolderMutationResult = Apollo.MutationResult<UpdateTokenHolderMutation>;
export type UpdateTokenHolderMutationOptions = Apollo.BaseMutationOptions<UpdateTokenHolderMutation, UpdateTokenHolderMutationVariables>;
export const CreateTokenHolderDocument = /*#__PURE__*/ gql`
    mutation createTokenHolder($amount: String = "", $assetId: uuid = "", $userId: uuid = "") {
  insert_z_token_holder(
    objects: {amount: $amount, assetId: $assetId, userId: $userId}
  ) {
    returning {
      id
    }
  }
}
    `;
export type CreateTokenHolderMutationFn = Apollo.MutationFunction<CreateTokenHolderMutation, CreateTokenHolderMutationVariables>;

/**
 * __useCreateTokenHolderMutation__
 *
 * To run a mutation, you first call `useCreateTokenHolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTokenHolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTokenHolderMutation, { data, loading, error }] = useCreateTokenHolderMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      assetId: // value for 'assetId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateTokenHolderMutation(baseOptions?: Apollo.MutationHookOptions<CreateTokenHolderMutation, CreateTokenHolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTokenHolderMutation, CreateTokenHolderMutationVariables>(CreateTokenHolderDocument, options);
      }
export type CreateTokenHolderMutationHookResult = ReturnType<typeof useCreateTokenHolderMutation>;
export type CreateTokenHolderMutationResult = Apollo.MutationResult<CreateTokenHolderMutation>;
export type CreateTokenHolderMutationOptions = Apollo.BaseMutationOptions<CreateTokenHolderMutation, CreateTokenHolderMutationVariables>;
export const GetTokenHoldersByUsernameDocument = /*#__PURE__*/ gql`
    query getTokenHoldersByUsername($username: String = "") {
  z_token_holder(where: {z_user: {username: {_eq: $username}}}) {
    amount
    created_at
    id
    updated_at
    userId
    z_asset {
      assetId
      assetName
      currency
      id
      managementFee
    }
  }
}
    `;

/**
 * __useGetTokenHoldersByUsernameQuery__
 *
 * To run a query within a React component, call `useGetTokenHoldersByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenHoldersByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenHoldersByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetTokenHoldersByUsernameQuery(baseOptions?: Apollo.QueryHookOptions<GetTokenHoldersByUsernameQuery, GetTokenHoldersByUsernameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTokenHoldersByUsernameQuery, GetTokenHoldersByUsernameQueryVariables>(GetTokenHoldersByUsernameDocument, options);
      }
export function useGetTokenHoldersByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTokenHoldersByUsernameQuery, GetTokenHoldersByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTokenHoldersByUsernameQuery, GetTokenHoldersByUsernameQueryVariables>(GetTokenHoldersByUsernameDocument, options);
        }
export type GetTokenHoldersByUsernameQueryHookResult = ReturnType<typeof useGetTokenHoldersByUsernameQuery>;
export type GetTokenHoldersByUsernameLazyQueryHookResult = ReturnType<typeof useGetTokenHoldersByUsernameLazyQuery>;
export type GetTokenHoldersByUsernameQueryResult = Apollo.QueryResult<GetTokenHoldersByUsernameQuery, GetTokenHoldersByUsernameQueryVariables>;
export function refetchGetTokenHoldersByUsernameQuery(variables?: GetTokenHoldersByUsernameQueryVariables) {
      return { query: GetTokenHoldersByUsernameDocument, variables: variables }
    }
export const GetAllTokenHolderDetailsDocument = /*#__PURE__*/ gql`
    query getAllTokenHolderDetails {
  z_token_holder {
    id
    z_asset {
      id
      assetId
      assetName
    }
  }
}
    `;

/**
 * __useGetAllTokenHolderDetailsQuery__
 *
 * To run a query within a React component, call `useGetAllTokenHolderDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTokenHolderDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTokenHolderDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTokenHolderDetailsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTokenHolderDetailsQuery, GetAllTokenHolderDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTokenHolderDetailsQuery, GetAllTokenHolderDetailsQueryVariables>(GetAllTokenHolderDetailsDocument, options);
      }
export function useGetAllTokenHolderDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTokenHolderDetailsQuery, GetAllTokenHolderDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTokenHolderDetailsQuery, GetAllTokenHolderDetailsQueryVariables>(GetAllTokenHolderDetailsDocument, options);
        }
export type GetAllTokenHolderDetailsQueryHookResult = ReturnType<typeof useGetAllTokenHolderDetailsQuery>;
export type GetAllTokenHolderDetailsLazyQueryHookResult = ReturnType<typeof useGetAllTokenHolderDetailsLazyQuery>;
export type GetAllTokenHolderDetailsQueryResult = Apollo.QueryResult<GetAllTokenHolderDetailsQuery, GetAllTokenHolderDetailsQueryVariables>;
export function refetchGetAllTokenHolderDetailsQuery(variables?: GetAllTokenHolderDetailsQueryVariables) {
      return { query: GetAllTokenHolderDetailsDocument, variables: variables }
    }