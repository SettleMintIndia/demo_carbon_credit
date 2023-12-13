import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type CreateSecondaryMarketPlaceMutationVariables = Types.Exact<{
  minttoken_id: Types.InputMaybe<Types.Scalars['uuid']>;
  amount: Types.InputMaybe<Types.Scalars['String']>;
  tokens: Types.InputMaybe<Types.Scalars['String']>;
  owner_id: Types.InputMaybe<Types.Scalars['uuid']>;
  tx_hash: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateSecondaryMarketPlaceMutation = { __typename: 'mutation_root', insert_z_secondary_marketplace: { __typename: 'z_secondary_marketplace_mutation_response', returning: Array<{ __typename: 'z_secondary_marketplace', id: string }> } | null };

export type GetSecondayMarketPlaceQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetSecondayMarketPlaceQuery = { __typename: 'query_root', z_secondary_marketplace: Array<{ __typename: 'z_secondary_marketplace', amount: string, buyer_id: string | null, created_at: string, id: string, minttoken_id: string, owner_id: string, tokens: string, tx_hash: string, z_buyer_user: { __typename: 'z_users', address: string, password: string, pvtKey: string, id: string, created_at: string, username: string } | null, z_minttoken: { __typename: 'z_minttokens', created_at: string, id: string, token: string, tx_hash: string, user_id: string, z_user: { __typename: 'z_users', address: string, id: string, password: string, pvtKey: string, username: string } }, z_user: { __typename: 'z_users', address: string, created_at: string, id: string, password: string, pvtKey: string, username: string } }> };


export const CreateSecondaryMarketPlaceDocument = /*#__PURE__*/ gql`
    mutation createSecondaryMarketPlace($minttoken_id: uuid, $amount: String, $tokens: String, $owner_id: uuid, $tx_hash: String) {
  insert_z_secondary_marketplace(
    objects: {minttoken_id: $minttoken_id, amount: $amount, tokens: $tokens, owner_id: $owner_id, tx_hash: $tx_hash}
  ) {
    returning {
      id
    }
  }
}
    `;
export type CreateSecondaryMarketPlaceMutationFn = Apollo.MutationFunction<CreateSecondaryMarketPlaceMutation, CreateSecondaryMarketPlaceMutationVariables>;

/**
 * __useCreateSecondaryMarketPlaceMutation__
 *
 * To run a mutation, you first call `useCreateSecondaryMarketPlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSecondaryMarketPlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSecondaryMarketPlaceMutation, { data, loading, error }] = useCreateSecondaryMarketPlaceMutation({
 *   variables: {
 *      minttoken_id: // value for 'minttoken_id'
 *      amount: // value for 'amount'
 *      tokens: // value for 'tokens'
 *      owner_id: // value for 'owner_id'
 *      tx_hash: // value for 'tx_hash'
 *   },
 * });
 */
export function useCreateSecondaryMarketPlaceMutation(baseOptions?: Apollo.MutationHookOptions<CreateSecondaryMarketPlaceMutation, CreateSecondaryMarketPlaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSecondaryMarketPlaceMutation, CreateSecondaryMarketPlaceMutationVariables>(CreateSecondaryMarketPlaceDocument, options);
      }
export type CreateSecondaryMarketPlaceMutationHookResult = ReturnType<typeof useCreateSecondaryMarketPlaceMutation>;
export type CreateSecondaryMarketPlaceMutationResult = Apollo.MutationResult<CreateSecondaryMarketPlaceMutation>;
export type CreateSecondaryMarketPlaceMutationOptions = Apollo.BaseMutationOptions<CreateSecondaryMarketPlaceMutation, CreateSecondaryMarketPlaceMutationVariables>;
export const GetSecondayMarketPlaceDocument = /*#__PURE__*/ gql`
    query getSecondayMarketPlace {
  z_secondary_marketplace {
    amount
    buyer_id
    created_at
    id
    minttoken_id
    owner_id
    tokens
    tx_hash
    z_buyer_user {
      address
      password
      pvtKey
      id
      created_at
      username
    }
    z_minttoken {
      created_at
      id
      token
      tx_hash
      user_id
      z_user {
        address
        id
        password
        pvtKey
        username
      }
    }
    z_user {
      address
      created_at
      id
      password
      pvtKey
      username
    }
  }
}
    `;

/**
 * __useGetSecondayMarketPlaceQuery__
 *
 * To run a query within a React component, call `useGetSecondayMarketPlaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSecondayMarketPlaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSecondayMarketPlaceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSecondayMarketPlaceQuery(baseOptions?: Apollo.QueryHookOptions<GetSecondayMarketPlaceQuery, GetSecondayMarketPlaceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSecondayMarketPlaceQuery, GetSecondayMarketPlaceQueryVariables>(GetSecondayMarketPlaceDocument, options);
      }
export function useGetSecondayMarketPlaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSecondayMarketPlaceQuery, GetSecondayMarketPlaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSecondayMarketPlaceQuery, GetSecondayMarketPlaceQueryVariables>(GetSecondayMarketPlaceDocument, options);
        }
export type GetSecondayMarketPlaceQueryHookResult = ReturnType<typeof useGetSecondayMarketPlaceQuery>;
export type GetSecondayMarketPlaceLazyQueryHookResult = ReturnType<typeof useGetSecondayMarketPlaceLazyQuery>;
export type GetSecondayMarketPlaceQueryResult = Apollo.QueryResult<GetSecondayMarketPlaceQuery, GetSecondayMarketPlaceQueryVariables>;
export function refetchGetSecondayMarketPlaceQuery(variables?: GetSecondayMarketPlaceQueryVariables) {
      return { query: GetSecondayMarketPlaceDocument, variables: variables }
    }