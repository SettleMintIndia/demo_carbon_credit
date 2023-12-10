import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type UpdateSettingsMutationVariables = Types.Exact<{
  companyName: Types.Scalars['String'];
  cid: Types.Scalars['String'];
  id: Types.Scalars['Int'];
}>;


export type UpdateSettingsMutation = { __typename: 'mutation_root', update_user_setting: { __typename: 'user_setting_mutation_response', affected_rows: number } | null };

export type GetDataQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetDataQuery = { __typename: 'query_root', user_setting: Array<{ __typename: 'user_setting', cid: string, companyName: string }> };


export const UpdateSettingsDocument = /*#__PURE__*/ gql`
    mutation UpdateSettings($companyName: String!, $cid: String!, $id: Int!) {
  update_user_setting(
    where: {id: {_eq: $id}}
    _set: {companyName: $companyName, cid: $cid}
  ) {
    affected_rows
  }
}
    `;
export type UpdateSettingsMutationFn = Apollo.MutationFunction<UpdateSettingsMutation, UpdateSettingsMutationVariables>;

/**
 * __useUpdateSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSettingsMutation, { data, loading, error }] = useUpdateSettingsMutation({
 *   variables: {
 *      companyName: // value for 'companyName'
 *      cid: // value for 'cid'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSettingsMutation, UpdateSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSettingsMutation, UpdateSettingsMutationVariables>(UpdateSettingsDocument, options);
      }
export type UpdateSettingsMutationHookResult = ReturnType<typeof useUpdateSettingsMutation>;
export type UpdateSettingsMutationResult = Apollo.MutationResult<UpdateSettingsMutation>;
export type UpdateSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateSettingsMutation, UpdateSettingsMutationVariables>;
export const GetDataDocument = /*#__PURE__*/ gql`
    query getData {
  user_setting {
    cid
    companyName
  }
}
    `;

/**
 * __useGetDataQuery__
 *
 * To run a query within a React component, call `useGetDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDataQuery(baseOptions?: Apollo.QueryHookOptions<GetDataQuery, GetDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDataQuery, GetDataQueryVariables>(GetDataDocument, options);
      }
export function useGetDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDataQuery, GetDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDataQuery, GetDataQueryVariables>(GetDataDocument, options);
        }
export type GetDataQueryHookResult = ReturnType<typeof useGetDataQuery>;
export type GetDataLazyQueryHookResult = ReturnType<typeof useGetDataLazyQuery>;
export type GetDataQueryResult = Apollo.QueryResult<GetDataQuery, GetDataQueryVariables>;
export function refetchGetDataQuery(variables?: GetDataQueryVariables) {
      return { query: GetDataDocument, variables: variables }
    }