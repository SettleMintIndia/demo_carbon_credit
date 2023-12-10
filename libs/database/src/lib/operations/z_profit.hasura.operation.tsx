import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type CreateProfitMutationVariables = Types.Exact<{
  assetId?: Types.InputMaybe<Types.Scalars['uuid']>;
  totalHolders?: Types.InputMaybe<Types.Scalars['String']>;
  totalProfit?: Types.InputMaybe<Types.Scalars['String']>;
  txHash?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateProfitMutation = { __typename: 'mutation_root', insert_z_profit: { __typename: 'z_profit_mutation_response', returning: Array<{ __typename: 'z_profit', id: string, txHash: string }> } | null };

export type CreateProfitDistributionMutationVariables = Types.Exact<{
  share_in_profit?: Types.InputMaybe<Types.Scalars['String']>;
  tokenHeld?: Types.InputMaybe<Types.Scalars['String']>;
  profitId?: Types.InputMaybe<Types.Scalars['uuid']>;
  name?: Types.InputMaybe<Types.Scalars['String']>;
  userId?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type CreateProfitDistributionMutation = { __typename: 'mutation_root', insert_z_profit_distribution: { __typename: 'z_profit_distribution_mutation_response', returning: Array<{ __typename: 'z_profit_distribution', id: string, name: string }> } | null };

export type GetProfitByAssetIdQueryVariables = Types.Exact<{
  assetId?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type GetProfitByAssetIdQuery = { __typename: 'query_root', z_profit: Array<{ __typename: 'z_profit', id: string, created_at: string, txHash: string, totalProfit: string, totalHolders: string, z_asset: { __typename: 'z_assets', id: string, assetName: string, assetId: string | null }, z_profit_distributions: Array<{ __typename: 'z_profit_distribution', id: string, created_at: string, name: string, profitId: string, share_in_profit: string, tokenHeld: string, userId: string | null, z_user: { __typename: 'z_users', id: string, username: string, address: string } | null }> }> };

export type GetProfitDistributionByUsernameQueryVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetProfitDistributionByUsernameQuery = { __typename: 'query_root', z_profit_distribution: Array<{ __typename: 'z_profit_distribution', id: string, created_at: string, name: string, profitId: string, share_in_profit: string, tokenHeld: string, z_profit: { __typename: 'z_profit', assetId: string, id: string, created_at: string, txHash: string, z_asset: { __typename: 'z_assets', assetId: string | null, assetName: string, id: string } } }> };

export type FilterAssetByUserAndAssetQueryVariables = Types.Exact<{
  profitId?: Types.InputMaybe<Types.Scalars['uuid']>;
  userId?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type FilterAssetByUserAndAssetQuery = { __typename: 'query_root', z_profit_distribution: Array<{ __typename: 'z_profit_distribution', created_at: string, id: string, name: string, share_in_profit: string, tokenHeld: string, profitId: string, userId: string | null, z_user: { __typename: 'z_users', id: string, username: string } | null }> };


export const CreateProfitDocument = /*#__PURE__*/ gql`
    mutation createProfit($assetId: uuid = "", $totalHolders: String = "", $totalProfit: String = "", $txHash: String = "") {
  insert_z_profit(
    objects: {assetId: $assetId, totalHolders: $totalHolders, totalProfit: $totalProfit, txHash: $txHash}
  ) {
    returning {
      id
      txHash
    }
  }
}
    `;
export type CreateProfitMutationFn = Apollo.MutationFunction<CreateProfitMutation, CreateProfitMutationVariables>;

/**
 * __useCreateProfitMutation__
 *
 * To run a mutation, you first call `useCreateProfitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfitMutation, { data, loading, error }] = useCreateProfitMutation({
 *   variables: {
 *      assetId: // value for 'assetId'
 *      totalHolders: // value for 'totalHolders'
 *      totalProfit: // value for 'totalProfit'
 *      txHash: // value for 'txHash'
 *   },
 * });
 */
export function useCreateProfitMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfitMutation, CreateProfitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfitMutation, CreateProfitMutationVariables>(CreateProfitDocument, options);
      }
export type CreateProfitMutationHookResult = ReturnType<typeof useCreateProfitMutation>;
export type CreateProfitMutationResult = Apollo.MutationResult<CreateProfitMutation>;
export type CreateProfitMutationOptions = Apollo.BaseMutationOptions<CreateProfitMutation, CreateProfitMutationVariables>;
export const CreateProfitDistributionDocument = /*#__PURE__*/ gql`
    mutation createProfitDistribution($share_in_profit: String = "", $tokenHeld: String = "", $profitId: uuid = "", $name: String = "", $userId: uuid = "") {
  insert_z_profit_distribution(
    objects: {share_in_profit: $share_in_profit, tokenHeld: $tokenHeld, profitId: $profitId, name: $name, userId: $userId}
  ) {
    returning {
      id
      name
    }
  }
}
    `;
export type CreateProfitDistributionMutationFn = Apollo.MutationFunction<CreateProfitDistributionMutation, CreateProfitDistributionMutationVariables>;

/**
 * __useCreateProfitDistributionMutation__
 *
 * To run a mutation, you first call `useCreateProfitDistributionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfitDistributionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfitDistributionMutation, { data, loading, error }] = useCreateProfitDistributionMutation({
 *   variables: {
 *      share_in_profit: // value for 'share_in_profit'
 *      tokenHeld: // value for 'tokenHeld'
 *      profitId: // value for 'profitId'
 *      name: // value for 'name'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateProfitDistributionMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfitDistributionMutation, CreateProfitDistributionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfitDistributionMutation, CreateProfitDistributionMutationVariables>(CreateProfitDistributionDocument, options);
      }
export type CreateProfitDistributionMutationHookResult = ReturnType<typeof useCreateProfitDistributionMutation>;
export type CreateProfitDistributionMutationResult = Apollo.MutationResult<CreateProfitDistributionMutation>;
export type CreateProfitDistributionMutationOptions = Apollo.BaseMutationOptions<CreateProfitDistributionMutation, CreateProfitDistributionMutationVariables>;
export const GetProfitByAssetIdDocument = /*#__PURE__*/ gql`
    query getProfitByAssetId($assetId: uuid = "") {
  z_profit(where: {assetId: {_eq: $assetId}}, order_by: {created_at: desc}) {
    id
    created_at
    txHash
    totalProfit
    totalHolders
    z_asset {
      id
      assetName
      assetId
    }
    z_profit_distributions {
      id
      created_at
      name
      profitId
      share_in_profit
      tokenHeld
      userId
      z_user {
        id
        username
        address
      }
    }
  }
}
    `;

/**
 * __useGetProfitByAssetIdQuery__
 *
 * To run a query within a React component, call `useGetProfitByAssetIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfitByAssetIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfitByAssetIdQuery({
 *   variables: {
 *      assetId: // value for 'assetId'
 *   },
 * });
 */
export function useGetProfitByAssetIdQuery(baseOptions?: Apollo.QueryHookOptions<GetProfitByAssetIdQuery, GetProfitByAssetIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfitByAssetIdQuery, GetProfitByAssetIdQueryVariables>(GetProfitByAssetIdDocument, options);
      }
export function useGetProfitByAssetIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfitByAssetIdQuery, GetProfitByAssetIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfitByAssetIdQuery, GetProfitByAssetIdQueryVariables>(GetProfitByAssetIdDocument, options);
        }
export type GetProfitByAssetIdQueryHookResult = ReturnType<typeof useGetProfitByAssetIdQuery>;
export type GetProfitByAssetIdLazyQueryHookResult = ReturnType<typeof useGetProfitByAssetIdLazyQuery>;
export type GetProfitByAssetIdQueryResult = Apollo.QueryResult<GetProfitByAssetIdQuery, GetProfitByAssetIdQueryVariables>;
export function refetchGetProfitByAssetIdQuery(variables?: GetProfitByAssetIdQueryVariables) {
      return { query: GetProfitByAssetIdDocument, variables: variables }
    }
export const GetProfitDistributionByUsernameDocument = /*#__PURE__*/ gql`
    query getProfitDistributionByUsername($name: String = "") {
  z_profit_distribution(where: {name: {_eq: $name}}) {
    id
    created_at
    name
    profitId
    share_in_profit
    tokenHeld
    z_profit {
      assetId
      id
      created_at
      txHash
      z_asset {
        assetId
        assetName
        id
      }
    }
  }
}
    `;

/**
 * __useGetProfitDistributionByUsernameQuery__
 *
 * To run a query within a React component, call `useGetProfitDistributionByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfitDistributionByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfitDistributionByUsernameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetProfitDistributionByUsernameQuery(baseOptions?: Apollo.QueryHookOptions<GetProfitDistributionByUsernameQuery, GetProfitDistributionByUsernameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfitDistributionByUsernameQuery, GetProfitDistributionByUsernameQueryVariables>(GetProfitDistributionByUsernameDocument, options);
      }
export function useGetProfitDistributionByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfitDistributionByUsernameQuery, GetProfitDistributionByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfitDistributionByUsernameQuery, GetProfitDistributionByUsernameQueryVariables>(GetProfitDistributionByUsernameDocument, options);
        }
export type GetProfitDistributionByUsernameQueryHookResult = ReturnType<typeof useGetProfitDistributionByUsernameQuery>;
export type GetProfitDistributionByUsernameLazyQueryHookResult = ReturnType<typeof useGetProfitDistributionByUsernameLazyQuery>;
export type GetProfitDistributionByUsernameQueryResult = Apollo.QueryResult<GetProfitDistributionByUsernameQuery, GetProfitDistributionByUsernameQueryVariables>;
export function refetchGetProfitDistributionByUsernameQuery(variables?: GetProfitDistributionByUsernameQueryVariables) {
      return { query: GetProfitDistributionByUsernameDocument, variables: variables }
    }
export const FilterAssetByUserAndAssetDocument = /*#__PURE__*/ gql`
    query filterAssetByUserAndAsset($profitId: uuid = "", $userId: uuid = "") {
  z_profit_distribution(
    where: {profitId: {_eq: $profitId}, userId: {_eq: $userId}}
  ) {
    created_at
    id
    name
    share_in_profit
    tokenHeld
    profitId
    userId
    z_user {
      id
      username
    }
  }
}
    `;

/**
 * __useFilterAssetByUserAndAssetQuery__
 *
 * To run a query within a React component, call `useFilterAssetByUserAndAssetQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterAssetByUserAndAssetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilterAssetByUserAndAssetQuery({
 *   variables: {
 *      profitId: // value for 'profitId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFilterAssetByUserAndAssetQuery(baseOptions?: Apollo.QueryHookOptions<FilterAssetByUserAndAssetQuery, FilterAssetByUserAndAssetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilterAssetByUserAndAssetQuery, FilterAssetByUserAndAssetQueryVariables>(FilterAssetByUserAndAssetDocument, options);
      }
export function useFilterAssetByUserAndAssetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilterAssetByUserAndAssetQuery, FilterAssetByUserAndAssetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilterAssetByUserAndAssetQuery, FilterAssetByUserAndAssetQueryVariables>(FilterAssetByUserAndAssetDocument, options);
        }
export type FilterAssetByUserAndAssetQueryHookResult = ReturnType<typeof useFilterAssetByUserAndAssetQuery>;
export type FilterAssetByUserAndAssetLazyQueryHookResult = ReturnType<typeof useFilterAssetByUserAndAssetLazyQuery>;
export type FilterAssetByUserAndAssetQueryResult = Apollo.QueryResult<FilterAssetByUserAndAssetQuery, FilterAssetByUserAndAssetQueryVariables>;
export function refetchFilterAssetByUserAndAssetQuery(variables?: FilterAssetByUserAndAssetQueryVariables) {
      return { query: FilterAssetByUserAndAssetDocument, variables: variables }
    }