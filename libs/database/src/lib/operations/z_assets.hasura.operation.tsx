import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type CreateAssetTokenMutationVariables = Types.Exact<{
  totalCapital: Types.InputMaybe<Types.Scalars['String']>;
  managementFee: Types.InputMaybe<Types.Scalars['String']>;
  hurdleRate: Types.InputMaybe<Types.Scalars['String']>;
  document_cid: Types.InputMaybe<Types.Scalars['String']>;
  currency: Types.InputMaybe<Types.Scalars['String']>;
  assetName: Types.InputMaybe<Types.Scalars['String']>;
  txHash: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateAssetTokenMutation = { __typename: 'mutation_root', insert_z_assets: { __typename: 'z_assets_mutation_response', returning: Array<{ __typename: 'z_assets', id: string }> } | null };

export type GetAllAssetsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllAssetsQuery = { __typename: 'query_root', z_assets: Array<{ __typename: 'z_assets', assetId: string | null, assetName: string, burned: string, buyPrice: string | null, created_at: string, currency: string, document_cid: string, hurdleRate: string, id: string, is_fractionalized: boolean, last_traded_price: string | null, managementFee: string, sellPrice: string | null, totalCapital: string, totalMinted: string, totalSupply: string | null, txHash: string, adminBalance: string }> };

export type FractionalizeAssetMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
  buyPrice: Types.InputMaybe<Types.Scalars['String']>;
  sellPrice: Types.InputMaybe<Types.Scalars['String']>;
  totalSupply: Types.InputMaybe<Types.Scalars['String']>;
  last_traded_price: Types.InputMaybe<Types.Scalars['String']>;
  assetId: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type FractionalizeAssetMutation = { __typename: 'mutation_root', update_z_assets_by_pk: { __typename: 'z_assets', is_fractionalized: boolean } | null };

export type UpdateTotalMintedMutationVariables = Types.Exact<{
  totalMinted?: Types.InputMaybe<Types.Scalars['String']>;
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type UpdateTotalMintedMutation = { __typename: 'mutation_root', update_z_assets_by_pk: { __typename: 'z_assets', totalMinted: string, id: string } | null };

export type MintAssetMutationVariables = Types.Exact<{
  totalMinted?: Types.InputMaybe<Types.Scalars['String']>;
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
  adminBalance?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type MintAssetMutation = { __typename: 'mutation_root', update_z_assets_by_pk: { __typename: 'z_assets', totalMinted: string, id: string, adminBalance: string } | null };

export type UpdateAdminBalanceMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
  adminBalance?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type UpdateAdminBalanceMutation = { __typename: 'mutation_root', update_z_assets_by_pk: { __typename: 'z_assets', id: string, adminBalance: string } | null };

export type GetMintedTokenDataQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMintedTokenDataQuery = { __typename: 'query_root', z_assets: Array<{ __typename: 'z_assets', assetId: string | null, assetName: string, burned: string, buyPrice: string | null, created_at: string, currency: string, document_cid: string, hurdleRate: string, id: string, is_fractionalized: boolean, last_traded_price: string | null, managementFee: string, sellPrice: string | null, totalCapital: string, totalMinted: string, totalSupply: string | null, txHash: string, adminBalance: string }> };

export type GetRequiredDataForBurnQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetRequiredDataForBurnQuery = { __typename: 'query_root', z_assets: Array<{ __typename: 'z_assets', id: string, assetId: string | null, assetName: string, burned: string, totalSupply: string | null, totalMinted: string, adminBalance: string }> };

export type BurnAssetMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
  totalSupply?: Types.InputMaybe<Types.Scalars['String']>;
  burned?: Types.InputMaybe<Types.Scalars['String']>;
  adminBalance?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type BurnAssetMutation = { __typename: 'mutation_root', update_z_assets_by_pk: { __typename: 'z_assets', burned: string, id: string } | null };

export type GetMyTokenPageAssetsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMyTokenPageAssetsQuery = { __typename: 'query_root', z_assets: Array<{ __typename: 'z_assets', id: string, assetId: string | null, assetName: string }> };

export type UpdateLastTreadedPriceMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
  last_traded_price?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type UpdateLastTreadedPriceMutation = { __typename: 'mutation_root', update_z_assets_by_pk: { __typename: 'z_assets', id: string, last_traded_price: string | null } | null };


export const CreateAssetTokenDocument = /*#__PURE__*/ gql`
    mutation createAssetToken($totalCapital: String, $managementFee: String, $hurdleRate: String, $document_cid: String, $currency: String, $assetName: String, $txHash: String) {
  insert_z_assets(
    objects: {assetName: $assetName, currency: $currency, document_cid: $document_cid, hurdleRate: $hurdleRate, managementFee: $managementFee, totalCapital: $totalCapital, txHash: $txHash}
  ) {
    returning {
      id
    }
  }
}
    `;
export type CreateAssetTokenMutationFn = Apollo.MutationFunction<CreateAssetTokenMutation, CreateAssetTokenMutationVariables>;

/**
 * __useCreateAssetTokenMutation__
 *
 * To run a mutation, you first call `useCreateAssetTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAssetTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAssetTokenMutation, { data, loading, error }] = useCreateAssetTokenMutation({
 *   variables: {
 *      totalCapital: // value for 'totalCapital'
 *      managementFee: // value for 'managementFee'
 *      hurdleRate: // value for 'hurdleRate'
 *      document_cid: // value for 'document_cid'
 *      currency: // value for 'currency'
 *      assetName: // value for 'assetName'
 *      txHash: // value for 'txHash'
 *   },
 * });
 */
export function useCreateAssetTokenMutation(baseOptions?: Apollo.MutationHookOptions<CreateAssetTokenMutation, CreateAssetTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAssetTokenMutation, CreateAssetTokenMutationVariables>(CreateAssetTokenDocument, options);
      }
export type CreateAssetTokenMutationHookResult = ReturnType<typeof useCreateAssetTokenMutation>;
export type CreateAssetTokenMutationResult = Apollo.MutationResult<CreateAssetTokenMutation>;
export type CreateAssetTokenMutationOptions = Apollo.BaseMutationOptions<CreateAssetTokenMutation, CreateAssetTokenMutationVariables>;
export const GetAllAssetsDocument = /*#__PURE__*/ gql`
    query getAllAssets {
  z_assets {
    assetId
    assetName
    burned
    buyPrice
    created_at
    currency
    document_cid
    hurdleRate
    id
    is_fractionalized
    last_traded_price
    managementFee
    sellPrice
    totalCapital
    totalMinted
    totalSupply
    txHash
    adminBalance
  }
}
    `;

/**
 * __useGetAllAssetsQuery__
 *
 * To run a query within a React component, call `useGetAllAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAssetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAssetsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAssetsQuery, GetAllAssetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAssetsQuery, GetAllAssetsQueryVariables>(GetAllAssetsDocument, options);
      }
export function useGetAllAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAssetsQuery, GetAllAssetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAssetsQuery, GetAllAssetsQueryVariables>(GetAllAssetsDocument, options);
        }
export type GetAllAssetsQueryHookResult = ReturnType<typeof useGetAllAssetsQuery>;
export type GetAllAssetsLazyQueryHookResult = ReturnType<typeof useGetAllAssetsLazyQuery>;
export type GetAllAssetsQueryResult = Apollo.QueryResult<GetAllAssetsQuery, GetAllAssetsQueryVariables>;
export function refetchGetAllAssetsQuery(variables?: GetAllAssetsQueryVariables) {
      return { query: GetAllAssetsDocument, variables: variables }
    }
export const FractionalizeAssetDocument = /*#__PURE__*/ gql`
    mutation fractionalizeAsset($id: uuid!, $buyPrice: String, $sellPrice: String, $totalSupply: String, $last_traded_price: String, $assetId: String) {
  update_z_assets_by_pk(
    pk_columns: {id: $id}
    _set: {is_fractionalized: true, buyPrice: $buyPrice, sellPrice: $sellPrice, totalSupply: $totalSupply, last_traded_price: $last_traded_price, assetId: $assetId}
  ) {
    is_fractionalized
  }
}
    `;
export type FractionalizeAssetMutationFn = Apollo.MutationFunction<FractionalizeAssetMutation, FractionalizeAssetMutationVariables>;

/**
 * __useFractionalizeAssetMutation__
 *
 * To run a mutation, you first call `useFractionalizeAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFractionalizeAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fractionalizeAssetMutation, { data, loading, error }] = useFractionalizeAssetMutation({
 *   variables: {
 *      id: // value for 'id'
 *      buyPrice: // value for 'buyPrice'
 *      sellPrice: // value for 'sellPrice'
 *      totalSupply: // value for 'totalSupply'
 *      last_traded_price: // value for 'last_traded_price'
 *      assetId: // value for 'assetId'
 *   },
 * });
 */
export function useFractionalizeAssetMutation(baseOptions?: Apollo.MutationHookOptions<FractionalizeAssetMutation, FractionalizeAssetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FractionalizeAssetMutation, FractionalizeAssetMutationVariables>(FractionalizeAssetDocument, options);
      }
export type FractionalizeAssetMutationHookResult = ReturnType<typeof useFractionalizeAssetMutation>;
export type FractionalizeAssetMutationResult = Apollo.MutationResult<FractionalizeAssetMutation>;
export type FractionalizeAssetMutationOptions = Apollo.BaseMutationOptions<FractionalizeAssetMutation, FractionalizeAssetMutationVariables>;
export const UpdateTotalMintedDocument = /*#__PURE__*/ gql`
    mutation updateTotalMinted($totalMinted: String = "", $id: uuid = "") {
  update_z_assets_by_pk(pk_columns: {id: $id}, _set: {totalMinted: $totalMinted}) {
    totalMinted
    id
  }
}
    `;
export type UpdateTotalMintedMutationFn = Apollo.MutationFunction<UpdateTotalMintedMutation, UpdateTotalMintedMutationVariables>;

/**
 * __useUpdateTotalMintedMutation__
 *
 * To run a mutation, you first call `useUpdateTotalMintedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTotalMintedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTotalMintedMutation, { data, loading, error }] = useUpdateTotalMintedMutation({
 *   variables: {
 *      totalMinted: // value for 'totalMinted'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateTotalMintedMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTotalMintedMutation, UpdateTotalMintedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTotalMintedMutation, UpdateTotalMintedMutationVariables>(UpdateTotalMintedDocument, options);
      }
export type UpdateTotalMintedMutationHookResult = ReturnType<typeof useUpdateTotalMintedMutation>;
export type UpdateTotalMintedMutationResult = Apollo.MutationResult<UpdateTotalMintedMutation>;
export type UpdateTotalMintedMutationOptions = Apollo.BaseMutationOptions<UpdateTotalMintedMutation, UpdateTotalMintedMutationVariables>;
export const MintAssetDocument = /*#__PURE__*/ gql`
    mutation mintAsset($totalMinted: String = "", $id: uuid = "", $adminBalance: String = "") {
  update_z_assets_by_pk(
    pk_columns: {id: $id}
    _set: {totalMinted: $totalMinted, adminBalance: $adminBalance}
  ) {
    totalMinted
    id
    adminBalance
  }
}
    `;
export type MintAssetMutationFn = Apollo.MutationFunction<MintAssetMutation, MintAssetMutationVariables>;

/**
 * __useMintAssetMutation__
 *
 * To run a mutation, you first call `useMintAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMintAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mintAssetMutation, { data, loading, error }] = useMintAssetMutation({
 *   variables: {
 *      totalMinted: // value for 'totalMinted'
 *      id: // value for 'id'
 *      adminBalance: // value for 'adminBalance'
 *   },
 * });
 */
export function useMintAssetMutation(baseOptions?: Apollo.MutationHookOptions<MintAssetMutation, MintAssetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MintAssetMutation, MintAssetMutationVariables>(MintAssetDocument, options);
      }
export type MintAssetMutationHookResult = ReturnType<typeof useMintAssetMutation>;
export type MintAssetMutationResult = Apollo.MutationResult<MintAssetMutation>;
export type MintAssetMutationOptions = Apollo.BaseMutationOptions<MintAssetMutation, MintAssetMutationVariables>;
export const UpdateAdminBalanceDocument = /*#__PURE__*/ gql`
    mutation updateAdminBalance($id: uuid = "", $adminBalance: String = "") {
  update_z_assets_by_pk(
    pk_columns: {id: $id}
    _set: {adminBalance: $adminBalance}
  ) {
    id
    adminBalance
  }
}
    `;
export type UpdateAdminBalanceMutationFn = Apollo.MutationFunction<UpdateAdminBalanceMutation, UpdateAdminBalanceMutationVariables>;

/**
 * __useUpdateAdminBalanceMutation__
 *
 * To run a mutation, you first call `useUpdateAdminBalanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdminBalanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdminBalanceMutation, { data, loading, error }] = useUpdateAdminBalanceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      adminBalance: // value for 'adminBalance'
 *   },
 * });
 */
export function useUpdateAdminBalanceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdminBalanceMutation, UpdateAdminBalanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAdminBalanceMutation, UpdateAdminBalanceMutationVariables>(UpdateAdminBalanceDocument, options);
      }
export type UpdateAdminBalanceMutationHookResult = ReturnType<typeof useUpdateAdminBalanceMutation>;
export type UpdateAdminBalanceMutationResult = Apollo.MutationResult<UpdateAdminBalanceMutation>;
export type UpdateAdminBalanceMutationOptions = Apollo.BaseMutationOptions<UpdateAdminBalanceMutation, UpdateAdminBalanceMutationVariables>;
export const GetMintedTokenDataDocument = /*#__PURE__*/ gql`
    query getMintedTokenData {
  z_assets(
    where: {is_fractionalized: {_eq: true}, totalMinted: {_neq: "0"}}
    order_by: {created_at: desc}
  ) {
    assetId
    assetName
    burned
    buyPrice
    created_at
    currency
    document_cid
    hurdleRate
    id
    is_fractionalized
    last_traded_price
    managementFee
    sellPrice
    totalCapital
    totalMinted
    totalSupply
    txHash
    adminBalance
  }
}
    `;

/**
 * __useGetMintedTokenDataQuery__
 *
 * To run a query within a React component, call `useGetMintedTokenDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMintedTokenDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMintedTokenDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMintedTokenDataQuery(baseOptions?: Apollo.QueryHookOptions<GetMintedTokenDataQuery, GetMintedTokenDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMintedTokenDataQuery, GetMintedTokenDataQueryVariables>(GetMintedTokenDataDocument, options);
      }
export function useGetMintedTokenDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMintedTokenDataQuery, GetMintedTokenDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMintedTokenDataQuery, GetMintedTokenDataQueryVariables>(GetMintedTokenDataDocument, options);
        }
export type GetMintedTokenDataQueryHookResult = ReturnType<typeof useGetMintedTokenDataQuery>;
export type GetMintedTokenDataLazyQueryHookResult = ReturnType<typeof useGetMintedTokenDataLazyQuery>;
export type GetMintedTokenDataQueryResult = Apollo.QueryResult<GetMintedTokenDataQuery, GetMintedTokenDataQueryVariables>;
export function refetchGetMintedTokenDataQuery(variables?: GetMintedTokenDataQueryVariables) {
      return { query: GetMintedTokenDataDocument, variables: variables }
    }
export const GetRequiredDataForBurnDocument = /*#__PURE__*/ gql`
    query getRequiredDataForBurn {
  z_assets(
    where: {is_fractionalized: {_eq: true}, totalMinted: {_neq: "0"}, adminBalance: {_neq: "0"}}
  ) {
    id
    assetId
    assetName
    burned
    totalSupply
    totalMinted
    adminBalance
  }
}
    `;

/**
 * __useGetRequiredDataForBurnQuery__
 *
 * To run a query within a React component, call `useGetRequiredDataForBurnQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequiredDataForBurnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequiredDataForBurnQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRequiredDataForBurnQuery(baseOptions?: Apollo.QueryHookOptions<GetRequiredDataForBurnQuery, GetRequiredDataForBurnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRequiredDataForBurnQuery, GetRequiredDataForBurnQueryVariables>(GetRequiredDataForBurnDocument, options);
      }
export function useGetRequiredDataForBurnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRequiredDataForBurnQuery, GetRequiredDataForBurnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRequiredDataForBurnQuery, GetRequiredDataForBurnQueryVariables>(GetRequiredDataForBurnDocument, options);
        }
export type GetRequiredDataForBurnQueryHookResult = ReturnType<typeof useGetRequiredDataForBurnQuery>;
export type GetRequiredDataForBurnLazyQueryHookResult = ReturnType<typeof useGetRequiredDataForBurnLazyQuery>;
export type GetRequiredDataForBurnQueryResult = Apollo.QueryResult<GetRequiredDataForBurnQuery, GetRequiredDataForBurnQueryVariables>;
export function refetchGetRequiredDataForBurnQuery(variables?: GetRequiredDataForBurnQueryVariables) {
      return { query: GetRequiredDataForBurnDocument, variables: variables }
    }
export const BurnAssetDocument = /*#__PURE__*/ gql`
    mutation burnAsset($id: uuid = "", $totalSupply: String = "", $burned: String = "", $adminBalance: String = "") {
  update_z_assets_by_pk(
    pk_columns: {id: $id}
    _set: {totalSupply: $totalSupply, burned: $burned, adminBalance: $adminBalance}
  ) {
    burned
    id
  }
}
    `;
export type BurnAssetMutationFn = Apollo.MutationFunction<BurnAssetMutation, BurnAssetMutationVariables>;

/**
 * __useBurnAssetMutation__
 *
 * To run a mutation, you first call `useBurnAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBurnAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [burnAssetMutation, { data, loading, error }] = useBurnAssetMutation({
 *   variables: {
 *      id: // value for 'id'
 *      totalSupply: // value for 'totalSupply'
 *      burned: // value for 'burned'
 *      adminBalance: // value for 'adminBalance'
 *   },
 * });
 */
export function useBurnAssetMutation(baseOptions?: Apollo.MutationHookOptions<BurnAssetMutation, BurnAssetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BurnAssetMutation, BurnAssetMutationVariables>(BurnAssetDocument, options);
      }
export type BurnAssetMutationHookResult = ReturnType<typeof useBurnAssetMutation>;
export type BurnAssetMutationResult = Apollo.MutationResult<BurnAssetMutation>;
export type BurnAssetMutationOptions = Apollo.BaseMutationOptions<BurnAssetMutation, BurnAssetMutationVariables>;
export const GetMyTokenPageAssetsDocument = /*#__PURE__*/ gql`
    query getMyTokenPageAssets {
  z_assets {
    id
    assetId
    assetName
  }
}
    `;

/**
 * __useGetMyTokenPageAssetsQuery__
 *
 * To run a query within a React component, call `useGetMyTokenPageAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyTokenPageAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyTokenPageAssetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyTokenPageAssetsQuery(baseOptions?: Apollo.QueryHookOptions<GetMyTokenPageAssetsQuery, GetMyTokenPageAssetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyTokenPageAssetsQuery, GetMyTokenPageAssetsQueryVariables>(GetMyTokenPageAssetsDocument, options);
      }
export function useGetMyTokenPageAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyTokenPageAssetsQuery, GetMyTokenPageAssetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyTokenPageAssetsQuery, GetMyTokenPageAssetsQueryVariables>(GetMyTokenPageAssetsDocument, options);
        }
export type GetMyTokenPageAssetsQueryHookResult = ReturnType<typeof useGetMyTokenPageAssetsQuery>;
export type GetMyTokenPageAssetsLazyQueryHookResult = ReturnType<typeof useGetMyTokenPageAssetsLazyQuery>;
export type GetMyTokenPageAssetsQueryResult = Apollo.QueryResult<GetMyTokenPageAssetsQuery, GetMyTokenPageAssetsQueryVariables>;
export function refetchGetMyTokenPageAssetsQuery(variables?: GetMyTokenPageAssetsQueryVariables) {
      return { query: GetMyTokenPageAssetsDocument, variables: variables }
    }
export const UpdateLastTreadedPriceDocument = /*#__PURE__*/ gql`
    mutation updateLastTreadedPrice($id: uuid = "", $last_traded_price: String = "") {
  update_z_assets_by_pk(
    pk_columns: {id: $id}
    _set: {last_traded_price: $last_traded_price}
  ) {
    id
    last_traded_price
  }
}
    `;
export type UpdateLastTreadedPriceMutationFn = Apollo.MutationFunction<UpdateLastTreadedPriceMutation, UpdateLastTreadedPriceMutationVariables>;

/**
 * __useUpdateLastTreadedPriceMutation__
 *
 * To run a mutation, you first call `useUpdateLastTreadedPriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLastTreadedPriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLastTreadedPriceMutation, { data, loading, error }] = useUpdateLastTreadedPriceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      last_traded_price: // value for 'last_traded_price'
 *   },
 * });
 */
export function useUpdateLastTreadedPriceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLastTreadedPriceMutation, UpdateLastTreadedPriceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLastTreadedPriceMutation, UpdateLastTreadedPriceMutationVariables>(UpdateLastTreadedPriceDocument, options);
      }
export type UpdateLastTreadedPriceMutationHookResult = ReturnType<typeof useUpdateLastTreadedPriceMutation>;
export type UpdateLastTreadedPriceMutationResult = Apollo.MutationResult<UpdateLastTreadedPriceMutation>;
export type UpdateLastTreadedPriceMutationOptions = Apollo.BaseMutationOptions<UpdateLastTreadedPriceMutation, UpdateLastTreadedPriceMutationVariables>;