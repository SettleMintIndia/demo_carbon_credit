import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type CreateTokenMutationVariables = Types.Exact<{
  token: Types.InputMaybe<Types.Scalars['String']>;
  tx_hash: Types.InputMaybe<Types.Scalars['String']>;
  user_id: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type CreateTokenMutation = { __typename: 'mutation_root', insert_z_minttokens: { __typename: 'z_minttokens_mutation_response', returning: Array<{ __typename: 'z_minttokens', id: string }> } | null };

export type GettokensQueryVariables = Types.Exact<{
  user_id: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type GettokensQuery = { __typename: 'query_root', z_minttokens: Array<{ __typename: 'z_minttokens', id: string, token: string, tx_hash: string, created_at: string, z_user: { __typename: 'z_users', password: string, pvtKey: string, address: string, username: string, id: string } }> };

export type UpdateMintTokensMutationVariables = Types.Exact<{
  token?: Types.InputMaybe<Types.Scalars['String']>;
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type UpdateMintTokensMutation = { __typename: 'mutation_root', update_z_minttokens_by_pk: { __typename: 'z_minttokens', token: string, id: string } | null };


export const CreateTokenDocument = /*#__PURE__*/ gql`
    mutation createToken($token: String, $tx_hash: String, $user_id: uuid) {
  insert_z_minttokens(
    objects: {token: $token, tx_hash: $tx_hash, user_id: $user_id}
  ) {
    returning {
      id
    }
  }
}
    `;
export type CreateTokenMutationFn = Apollo.MutationFunction<CreateTokenMutation, CreateTokenMutationVariables>;

/**
 * __useCreateTokenMutation__
 *
 * To run a mutation, you first call `useCreateTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTokenMutation, { data, loading, error }] = useCreateTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *      tx_hash: // value for 'tx_hash'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useCreateTokenMutation(baseOptions?: Apollo.MutationHookOptions<CreateTokenMutation, CreateTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTokenMutation, CreateTokenMutationVariables>(CreateTokenDocument, options);
      }
export type CreateTokenMutationHookResult = ReturnType<typeof useCreateTokenMutation>;
export type CreateTokenMutationResult = Apollo.MutationResult<CreateTokenMutation>;
export type CreateTokenMutationOptions = Apollo.BaseMutationOptions<CreateTokenMutation, CreateTokenMutationVariables>;
export const GettokensDocument = /*#__PURE__*/ gql`
    query gettokens($user_id: uuid) {
  z_minttokens(where: {user_id: {_eq: $user_id}}) {
    id
    token
    tx_hash
    created_at
    z_user {
      password
      pvtKey
      address
      username
      id
    }
  }
}
    `;

/**
 * __useGettokensQuery__
 *
 * To run a query within a React component, call `useGettokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useGettokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGettokensQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGettokensQuery(baseOptions?: Apollo.QueryHookOptions<GettokensQuery, GettokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GettokensQuery, GettokensQueryVariables>(GettokensDocument, options);
      }
export function useGettokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GettokensQuery, GettokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GettokensQuery, GettokensQueryVariables>(GettokensDocument, options);
        }
export type GettokensQueryHookResult = ReturnType<typeof useGettokensQuery>;
export type GettokensLazyQueryHookResult = ReturnType<typeof useGettokensLazyQuery>;
export type GettokensQueryResult = Apollo.QueryResult<GettokensQuery, GettokensQueryVariables>;
export function refetchGettokensQuery(variables?: GettokensQueryVariables) {
      return { query: GettokensDocument, variables: variables }
    }
export const UpdateMintTokensDocument = /*#__PURE__*/ gql`
    mutation updateMintTokens($token: String = "", $id: uuid = "") {
  update_z_minttokens_by_pk(pk_columns: {id: $id}, _set: {token: $token}) {
    token
    id
  }
}
    `;
export type UpdateMintTokensMutationFn = Apollo.MutationFunction<UpdateMintTokensMutation, UpdateMintTokensMutationVariables>;

/**
 * __useUpdateMintTokensMutation__
 *
 * To run a mutation, you first call `useUpdateMintTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMintTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMintTokensMutation, { data, loading, error }] = useUpdateMintTokensMutation({
 *   variables: {
 *      token: // value for 'token'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateMintTokensMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMintTokensMutation, UpdateMintTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMintTokensMutation, UpdateMintTokensMutationVariables>(UpdateMintTokensDocument, options);
      }
export type UpdateMintTokensMutationHookResult = ReturnType<typeof useUpdateMintTokensMutation>;
export type UpdateMintTokensMutationResult = Apollo.MutationResult<UpdateMintTokensMutation>;
export type UpdateMintTokensMutationOptions = Apollo.BaseMutationOptions<UpdateMintTokensMutation, UpdateMintTokensMutationVariables>;