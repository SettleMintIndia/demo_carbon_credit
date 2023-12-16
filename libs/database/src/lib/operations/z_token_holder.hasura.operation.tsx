import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type CreateTokenHolderMutationVariables = Types.Exact<{
  amount: Types.InputMaybe<Types.Scalars['String']>;
  mint_id: Types.InputMaybe<Types.Scalars['uuid']>;
  user_id: Types.InputMaybe<Types.Scalars['uuid']>;
  token: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateTokenHolderMutation = { __typename: 'mutation_root', insert_z_token_holder: { __typename: 'z_token_holder_mutation_response', returning: Array<{ __typename: 'z_token_holder', id: string }> } | null };

export type UpdateTokenHolderMutationVariables = Types.Exact<{
  amount?: Types.InputMaybe<Types.Scalars['String']>;
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type UpdateTokenHolderMutation = { __typename: 'mutation_root', update_z_token_holder_by_pk: { __typename: 'z_token_holder', amount: string, id: string } | null };

export type CheckRecordExistQueryVariables = Types.Exact<{
  mint_id?: Types.InputMaybe<Types.Scalars['uuid']>;
  user_id?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type CheckRecordExistQuery = { __typename: 'query_root', z_token_holder: Array<{ __typename: 'z_token_holder', id: string, user_id: string, mint_id: string, amount: string }> };

export type GetAllTokenHolderDetailsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllTokenHolderDetailsQuery = { __typename: 'query_root', z_users: Array<{ __typename: 'z_users', password: string, username: string, pvtKey: string, id: string, address: string, z_minttokens: Array<{ __typename: 'z_minttokens', z_token_holders: Array<{ __typename: 'z_token_holder', mint_id: string, amount: string, token: string | null }> }> }> };

export type GetTokenDetailsbyuserQueryVariables = Types.Exact<{
  user_id: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type GetTokenDetailsbyuserQuery = { __typename: 'query_root', z_token_holder: Array<{ __typename: 'z_token_holder', amount: string, mint_id: string, user_id: string, token: string | null, z_minttoken: { __typename: 'z_minttokens', id: string, token: string, tx_hash: string, user_id: string } }> };


export const CreateTokenHolderDocument = /*#__PURE__*/ gql`
    mutation createTokenHolder($amount: String, $mint_id: uuid, $user_id: uuid, $token: String) {
  insert_z_token_holder(
    objects: {amount: $amount, mint_id: $mint_id, user_id: $user_id, token: $token}
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
 *      mint_id: // value for 'mint_id'
 *      user_id: // value for 'user_id'
 *      token: // value for 'token'
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
export const UpdateTokenHolderDocument = /*#__PURE__*/ gql`
    mutation updateTokenHolder($amount: String = "", $id: uuid = "") {
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
 *      amount: // value for 'amount'
 *      id: // value for 'id'
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
export const CheckRecordExistDocument = /*#__PURE__*/ gql`
    query checkRecordExist($mint_id: uuid = "", $user_id: uuid = "") {
  z_token_holder(where: {mint_id: {_eq: $mint_id}, user_id: {_eq: $user_id}}) {
    id
    user_id
    mint_id
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
 *      mint_id: // value for 'mint_id'
 *      user_id: // value for 'user_id'
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
export const GetAllTokenHolderDetailsDocument = /*#__PURE__*/ gql`
    query getAllTokenHolderDetails {
  z_users {
    password
    username
    pvtKey
    id
    address
    z_minttokens {
      z_token_holders {
        mint_id
        amount
        token
      }
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
export const GetTokenDetailsbyuserDocument = /*#__PURE__*/ gql`
    query getTokenDetailsbyuser($user_id: uuid) {
  z_token_holder(where: {user_id: {_eq: $user_id}}) {
    amount
    mint_id
    user_id
    token
    z_minttoken {
      id
      token
      tx_hash
      user_id
    }
  }
}
    `;

/**
 * __useGetTokenDetailsbyuserQuery__
 *
 * To run a query within a React component, call `useGetTokenDetailsbyuserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenDetailsbyuserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenDetailsbyuserQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetTokenDetailsbyuserQuery(baseOptions?: Apollo.QueryHookOptions<GetTokenDetailsbyuserQuery, GetTokenDetailsbyuserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTokenDetailsbyuserQuery, GetTokenDetailsbyuserQueryVariables>(GetTokenDetailsbyuserDocument, options);
      }
export function useGetTokenDetailsbyuserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTokenDetailsbyuserQuery, GetTokenDetailsbyuserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTokenDetailsbyuserQuery, GetTokenDetailsbyuserQueryVariables>(GetTokenDetailsbyuserDocument, options);
        }
export type GetTokenDetailsbyuserQueryHookResult = ReturnType<typeof useGetTokenDetailsbyuserQuery>;
export type GetTokenDetailsbyuserLazyQueryHookResult = ReturnType<typeof useGetTokenDetailsbyuserLazyQuery>;
export type GetTokenDetailsbyuserQueryResult = Apollo.QueryResult<GetTokenDetailsbyuserQuery, GetTokenDetailsbyuserQueryVariables>;
export function refetchGetTokenDetailsbyuserQuery(variables?: GetTokenDetailsbyuserQueryVariables) {
      return { query: GetTokenDetailsbyuserDocument, variables: variables }
    }