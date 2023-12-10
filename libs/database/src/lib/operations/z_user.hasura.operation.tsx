import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type GetAllUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename: 'query_root', z_users: Array<{ __typename: 'z_users', id: string, address: string, pvtKey: string, password: string, username: string, document_cid: string | null }> };

export type CreateUserMutationVariables = Types.Exact<{
  role: Types.InputMaybe<Types.Scalars['String']>;
  pvtKey: Types.InputMaybe<Types.Scalars['String']>;
  document_cid: Types.InputMaybe<Types.Scalars['String']>;
  address: Types.InputMaybe<Types.Scalars['String']>;
  username: Types.InputMaybe<Types.Scalars['String']>;
  segment: Types.InputMaybe<Types.Scalars['String']>;
  password: Types.InputMaybe<Types.Scalars['String']>;
  casa: Types.InputMaybe<Types.Scalars['String']>;
  cif: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateUserMutation = { __typename: 'mutation_root', insert_z_users: { __typename: 'z_users_mutation_response', returning: Array<{ __typename: 'z_users', id: string }> } | null };

export type ApproveUserMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
  txHash: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type ApproveUserMutation = { __typename: 'mutation_root', update_z_users_by_pk: { __typename: 'z_users', id: string } | null };

export type DisapproveUserMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
}>;


export type DisapproveUserMutation = { __typename: 'mutation_root', delete_z_users_by_pk: { __typename: 'z_users', id: string } | null };

export type GetUserByApprovedStatusQueryVariables = Types.Exact<{
  is_approved: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type GetUserByApprovedStatusQuery = { __typename: 'query_root', z_users: Array<{ __typename: 'z_users', address: string, casa: string | null, cif: string | null, created_at: string, document_cid: string | null, id: string, is_approved: boolean, password: string, pvtKey: string, role: string | null, segment: string | null, txHash: string | null, username: string }> };

export type GetUserByUsernameQueryVariables = Types.Exact<{
  username: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetUserByUsernameQuery = { __typename: 'query_root', z_users: Array<{ __typename: 'z_users', id: string, address: string, pvtKey: string, username: string, password: string }> };

export type GetLoggedInUserQueryVariables = Types.Exact<{
  username: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetLoggedInUserQuery = { __typename: 'query_root', z_users: Array<{ __typename: 'z_users', username: string, password: string }> };

export type GetAdminInfoQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAdminInfoQuery = { __typename: 'query_root', z_users: Array<{ __typename: 'z_users', id: string, address: string, pvtKey: string, username: string }> };

export type GetUsersInfoQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUsersInfoQuery = { __typename: 'query_root', z_users: Array<{ __typename: 'z_users', id: string, pvtKey: string, address: string, username: string }> };


export const GetAllUsersDocument = /*#__PURE__*/ gql`
    query getAllUsers {
  z_users {
    id
    address
    pvtKey
    password
    username
    document_cid
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export function refetchGetAllUsersQuery(variables?: GetAllUsersQueryVariables) {
      return { query: GetAllUsersDocument, variables: variables }
    }
export const CreateUserDocument = /*#__PURE__*/ gql`
    mutation createUser($role: String, $pvtKey: String, $document_cid: String, $address: String, $username: String, $segment: String, $password: String, $casa: String, $cif: String) {
  insert_z_users(
    objects: {address: $address, pvtKey: $pvtKey, document_cid: $document_cid, role: $role, username: $username, segment: $segment, password: $password, casa: $casa, cif: $cif}
  ) {
    returning {
      id
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      role: // value for 'role'
 *      pvtKey: // value for 'pvtKey'
 *      document_cid: // value for 'document_cid'
 *      address: // value for 'address'
 *      username: // value for 'username'
 *      segment: // value for 'segment'
 *      password: // value for 'password'
 *      casa: // value for 'casa'
 *      cif: // value for 'cif'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const ApproveUserDocument = /*#__PURE__*/ gql`
    mutation approveUser($id: uuid!, $txHash: String) {
  update_z_users_by_pk(
    pk_columns: {id: $id}
    _set: {is_approved: true, txHash: $txHash}
  ) {
    id
  }
}
    `;
export type ApproveUserMutationFn = Apollo.MutationFunction<ApproveUserMutation, ApproveUserMutationVariables>;

/**
 * __useApproveUserMutation__
 *
 * To run a mutation, you first call `useApproveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApproveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [approveUserMutation, { data, loading, error }] = useApproveUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      txHash: // value for 'txHash'
 *   },
 * });
 */
export function useApproveUserMutation(baseOptions?: Apollo.MutationHookOptions<ApproveUserMutation, ApproveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ApproveUserMutation, ApproveUserMutationVariables>(ApproveUserDocument, options);
      }
export type ApproveUserMutationHookResult = ReturnType<typeof useApproveUserMutation>;
export type ApproveUserMutationResult = Apollo.MutationResult<ApproveUserMutation>;
export type ApproveUserMutationOptions = Apollo.BaseMutationOptions<ApproveUserMutation, ApproveUserMutationVariables>;
export const DisapproveUserDocument = /*#__PURE__*/ gql`
    mutation disapproveUser($id: uuid!) {
  delete_z_users_by_pk(id: $id) {
    id
  }
}
    `;
export type DisapproveUserMutationFn = Apollo.MutationFunction<DisapproveUserMutation, DisapproveUserMutationVariables>;

/**
 * __useDisapproveUserMutation__
 *
 * To run a mutation, you first call `useDisapproveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisapproveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disapproveUserMutation, { data, loading, error }] = useDisapproveUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDisapproveUserMutation(baseOptions?: Apollo.MutationHookOptions<DisapproveUserMutation, DisapproveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DisapproveUserMutation, DisapproveUserMutationVariables>(DisapproveUserDocument, options);
      }
export type DisapproveUserMutationHookResult = ReturnType<typeof useDisapproveUserMutation>;
export type DisapproveUserMutationResult = Apollo.MutationResult<DisapproveUserMutation>;
export type DisapproveUserMutationOptions = Apollo.BaseMutationOptions<DisapproveUserMutation, DisapproveUserMutationVariables>;
export const GetUserByApprovedStatusDocument = /*#__PURE__*/ gql`
    query getUserByApprovedStatus($is_approved: Boolean) {
  z_users(where: {is_approved: {_eq: $is_approved}}) {
    address
    casa
    cif
    created_at
    document_cid
    id
    is_approved
    password
    pvtKey
    role
    segment
    txHash
    username
  }
}
    `;

/**
 * __useGetUserByApprovedStatusQuery__
 *
 * To run a query within a React component, call `useGetUserByApprovedStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByApprovedStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByApprovedStatusQuery({
 *   variables: {
 *      is_approved: // value for 'is_approved'
 *   },
 * });
 */
export function useGetUserByApprovedStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetUserByApprovedStatusQuery, GetUserByApprovedStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByApprovedStatusQuery, GetUserByApprovedStatusQueryVariables>(GetUserByApprovedStatusDocument, options);
      }
export function useGetUserByApprovedStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByApprovedStatusQuery, GetUserByApprovedStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByApprovedStatusQuery, GetUserByApprovedStatusQueryVariables>(GetUserByApprovedStatusDocument, options);
        }
export type GetUserByApprovedStatusQueryHookResult = ReturnType<typeof useGetUserByApprovedStatusQuery>;
export type GetUserByApprovedStatusLazyQueryHookResult = ReturnType<typeof useGetUserByApprovedStatusLazyQuery>;
export type GetUserByApprovedStatusQueryResult = Apollo.QueryResult<GetUserByApprovedStatusQuery, GetUserByApprovedStatusQueryVariables>;
export function refetchGetUserByApprovedStatusQuery(variables?: GetUserByApprovedStatusQueryVariables) {
      return { query: GetUserByApprovedStatusDocument, variables: variables }
    }
export const GetUserByUsernameDocument = /*#__PURE__*/ gql`
    query getUserByUsername($username: String) {
  z_users(where: {username: {_eq: $username}}) {
    id
    address
    pvtKey
    username
    password
  }
}
    `;

/**
 * __useGetUserByUsernameQuery__
 *
 * To run a query within a React component, call `useGetUserByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserByUsernameQuery(baseOptions?: Apollo.QueryHookOptions<GetUserByUsernameQuery, GetUserByUsernameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByUsernameQuery, GetUserByUsernameQueryVariables>(GetUserByUsernameDocument, options);
      }
export function useGetUserByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByUsernameQuery, GetUserByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByUsernameQuery, GetUserByUsernameQueryVariables>(GetUserByUsernameDocument, options);
        }
export type GetUserByUsernameQueryHookResult = ReturnType<typeof useGetUserByUsernameQuery>;
export type GetUserByUsernameLazyQueryHookResult = ReturnType<typeof useGetUserByUsernameLazyQuery>;
export type GetUserByUsernameQueryResult = Apollo.QueryResult<GetUserByUsernameQuery, GetUserByUsernameQueryVariables>;
export function refetchGetUserByUsernameQuery(variables?: GetUserByUsernameQueryVariables) {
      return { query: GetUserByUsernameDocument, variables: variables }
    }
export const GetLoggedInUserDocument = /*#__PURE__*/ gql`
    query getLoggedInUser($username: String) {
  z_users(where: {username: {_eq: $username}, is_approved: {_eq: true}}) {
    username
    password
  }
}
    `;

/**
 * __useGetLoggedInUserQuery__
 *
 * To run a query within a React component, call `useGetLoggedInUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoggedInUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoggedInUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetLoggedInUserQuery(baseOptions?: Apollo.QueryHookOptions<GetLoggedInUserQuery, GetLoggedInUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLoggedInUserQuery, GetLoggedInUserQueryVariables>(GetLoggedInUserDocument, options);
      }
export function useGetLoggedInUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoggedInUserQuery, GetLoggedInUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLoggedInUserQuery, GetLoggedInUserQueryVariables>(GetLoggedInUserDocument, options);
        }
export type GetLoggedInUserQueryHookResult = ReturnType<typeof useGetLoggedInUserQuery>;
export type GetLoggedInUserLazyQueryHookResult = ReturnType<typeof useGetLoggedInUserLazyQuery>;
export type GetLoggedInUserQueryResult = Apollo.QueryResult<GetLoggedInUserQuery, GetLoggedInUserQueryVariables>;
export function refetchGetLoggedInUserQuery(variables?: GetLoggedInUserQueryVariables) {
      return { query: GetLoggedInUserDocument, variables: variables }
    }
export const GetAdminInfoDocument = /*#__PURE__*/ gql`
    query getAdminInfo {
  z_users(where: {username: {_eq: "admin"}}) {
    id
    address
    pvtKey
    username
  }
}
    `;

/**
 * __useGetAdminInfoQuery__
 *
 * To run a query within a React component, call `useGetAdminInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminInfoQuery, GetAdminInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminInfoQuery, GetAdminInfoQueryVariables>(GetAdminInfoDocument, options);
      }
export function useGetAdminInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminInfoQuery, GetAdminInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminInfoQuery, GetAdminInfoQueryVariables>(GetAdminInfoDocument, options);
        }
export type GetAdminInfoQueryHookResult = ReturnType<typeof useGetAdminInfoQuery>;
export type GetAdminInfoLazyQueryHookResult = ReturnType<typeof useGetAdminInfoLazyQuery>;
export type GetAdminInfoQueryResult = Apollo.QueryResult<GetAdminInfoQuery, GetAdminInfoQueryVariables>;
export function refetchGetAdminInfoQuery(variables?: GetAdminInfoQueryVariables) {
      return { query: GetAdminInfoDocument, variables: variables }
    }
export const GetUsersInfoDocument = /*#__PURE__*/ gql`
    query getUsersInfo {
  z_users(where: {username: {_neq: "admin"}}) {
    id
    pvtKey
    address
    username
  }
}
    `;

/**
 * __useGetUsersInfoQuery__
 *
 * To run a query within a React component, call `useGetUsersInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersInfoQuery, GetUsersInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersInfoQuery, GetUsersInfoQueryVariables>(GetUsersInfoDocument, options);
      }
export function useGetUsersInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersInfoQuery, GetUsersInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersInfoQuery, GetUsersInfoQueryVariables>(GetUsersInfoDocument, options);
        }
export type GetUsersInfoQueryHookResult = ReturnType<typeof useGetUsersInfoQuery>;
export type GetUsersInfoLazyQueryHookResult = ReturnType<typeof useGetUsersInfoLazyQuery>;
export type GetUsersInfoQueryResult = Apollo.QueryResult<GetUsersInfoQuery, GetUsersInfoQueryVariables>;
export function refetchGetUsersInfoQuery(variables?: GetUsersInfoQueryVariables) {
      return { query: GetUsersInfoDocument, variables: variables }
    }