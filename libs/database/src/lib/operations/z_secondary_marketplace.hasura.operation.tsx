import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type CreateSecondaryMarketPlaceMutationVariables = Types.Exact<{
  amount?: Types.InputMaybe<Types.Scalars['String']>;
  assetId?: Types.InputMaybe<Types.Scalars['uuid']>;
  per_token_value?: Types.InputMaybe<Types.Scalars['String']>;
  price?: Types.InputMaybe<Types.Scalars['String']>;
  publisher?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type CreateSecondaryMarketPlaceMutation = { __typename: 'mutation_root', insert_z_secondary_marketplace: { __typename: 'z_secondary_marketplace_mutation_response', returning: Array<{ __typename: 'z_secondary_marketplace', id: string }> } | null };

export type UpdateSecondaryMarketPlaceMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
  amount?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type UpdateSecondaryMarketPlaceMutation = { __typename: 'mutation_root', update_z_secondary_marketplace_by_pk: { __typename: 'z_secondary_marketplace', id: string, amount: string } | null };

export type GetAllSecondaryMarketPlaceQueryVariables = Types.Exact<{
  publisher?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type GetAllSecondaryMarketPlaceQuery = { __typename: 'query_root', z_secondary_marketplace: Array<{ __typename: 'z_secondary_marketplace', id: string, created_at: string, amount: string, per_token_value: string, price: string, z_asset: { __typename: 'z_assets', id: string, assetId: string | null, assetName: string }, z_user_publisher: { __typename: 'z_users', id: string, address: string, pvtKey: string, username: string } }> };


export const CreateSecondaryMarketPlaceDocument = /*#__PURE__*/ gql`
    mutation createSecondaryMarketPlace($amount: String = "", $assetId: uuid = "", $per_token_value: String = "", $price: String = "", $publisher: uuid = "") {
  insert_z_secondary_marketplace(
    objects: {amount: $amount, assetId: $assetId, per_token_value: $per_token_value, price: $price, publisher: $publisher}
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
 *      amount: // value for 'amount'
 *      assetId: // value for 'assetId'
 *      per_token_value: // value for 'per_token_value'
 *      price: // value for 'price'
 *      publisher: // value for 'publisher'
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
export const UpdateSecondaryMarketPlaceDocument = /*#__PURE__*/ gql`
    mutation updateSecondaryMarketPlace($id: uuid = "", $amount: String = "") {
  update_z_secondary_marketplace_by_pk(
    pk_columns: {id: $id}
    _set: {amount: $amount}
  ) {
    id
    amount
  }
}
    `;
export type UpdateSecondaryMarketPlaceMutationFn = Apollo.MutationFunction<UpdateSecondaryMarketPlaceMutation, UpdateSecondaryMarketPlaceMutationVariables>;

/**
 * __useUpdateSecondaryMarketPlaceMutation__
 *
 * To run a mutation, you first call `useUpdateSecondaryMarketPlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSecondaryMarketPlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSecondaryMarketPlaceMutation, { data, loading, error }] = useUpdateSecondaryMarketPlaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useUpdateSecondaryMarketPlaceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSecondaryMarketPlaceMutation, UpdateSecondaryMarketPlaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSecondaryMarketPlaceMutation, UpdateSecondaryMarketPlaceMutationVariables>(UpdateSecondaryMarketPlaceDocument, options);
      }
export type UpdateSecondaryMarketPlaceMutationHookResult = ReturnType<typeof useUpdateSecondaryMarketPlaceMutation>;
export type UpdateSecondaryMarketPlaceMutationResult = Apollo.MutationResult<UpdateSecondaryMarketPlaceMutation>;
export type UpdateSecondaryMarketPlaceMutationOptions = Apollo.BaseMutationOptions<UpdateSecondaryMarketPlaceMutation, UpdateSecondaryMarketPlaceMutationVariables>;
export const GetAllSecondaryMarketPlaceDocument = /*#__PURE__*/ gql`
    query getAllSecondaryMarketPlace($publisher: uuid = "") {
  z_secondary_marketplace(where: {amount: {_neq: "0"}}) {
    id
    created_at
    amount
    per_token_value
    price
    z_asset {
      id
      assetId
      assetName
    }
    z_user_publisher {
      id
      address
      pvtKey
      username
    }
  }
}
    `;

/**
 * __useGetAllSecondaryMarketPlaceQuery__
 *
 * To run a query within a React component, call `useGetAllSecondaryMarketPlaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSecondaryMarketPlaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSecondaryMarketPlaceQuery({
 *   variables: {
 *      publisher: // value for 'publisher'
 *   },
 * });
 */
export function useGetAllSecondaryMarketPlaceQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSecondaryMarketPlaceQuery, GetAllSecondaryMarketPlaceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSecondaryMarketPlaceQuery, GetAllSecondaryMarketPlaceQueryVariables>(GetAllSecondaryMarketPlaceDocument, options);
      }
export function useGetAllSecondaryMarketPlaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSecondaryMarketPlaceQuery, GetAllSecondaryMarketPlaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSecondaryMarketPlaceQuery, GetAllSecondaryMarketPlaceQueryVariables>(GetAllSecondaryMarketPlaceDocument, options);
        }
export type GetAllSecondaryMarketPlaceQueryHookResult = ReturnType<typeof useGetAllSecondaryMarketPlaceQuery>;
export type GetAllSecondaryMarketPlaceLazyQueryHookResult = ReturnType<typeof useGetAllSecondaryMarketPlaceLazyQuery>;
export type GetAllSecondaryMarketPlaceQueryResult = Apollo.QueryResult<GetAllSecondaryMarketPlaceQuery, GetAllSecondaryMarketPlaceQueryVariables>;
export function refetchGetAllSecondaryMarketPlaceQuery(variables?: GetAllSecondaryMarketPlaceQueryVariables) {
      return { query: GetAllSecondaryMarketPlaceDocument, variables: variables }
    }