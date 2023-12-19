import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type GetAllUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename: 'query_root', z_users: Array<{ __typename: 'z_users', id: string, address: string, pvtKey: string, password: string, username: string }> };

export type CreateUserMutationVariables = Types.Exact<{
  pvtKey: Types.InputMaybe<Types.Scalars['String']>;
  address: Types.InputMaybe<Types.Scalars['String']>;
  username: Types.InputMaybe<Types.Scalars['String']>;
  password: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateUserMutation = { __typename: 'mutation_root', insert_z_users: { __typename: 'z_users_mutation_response', returning: Array<{ __typename: 'z_users', id: string }> } | null };

export type GetLoggedInUserQueryVariables = Types.Exact<{
  username: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetLoggedInUserQuery = { __typename: 'query_root', z_users: Array<{ __typename: 'z_users', username: string, password: string, address: string, id: string, pvtKey: string }> };

export type UsersCountQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UsersCountQuery = { __typename: 'query_root', z_users_aggregate: { __typename: 'z_users_aggregate', aggregate: { __typename: 'z_users_aggregate_fields', count: number } | null } };


export const GetAllUsersDocument = /*#__PURE__*/ gql`
    query getAllUsers {
  z_users {
    id
    address
    pvtKey
    password
    username
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
    mutation createUser($pvtKey: String, $address: String, $username: String, $password: String) {
  insert_z_users(
    objects: {address: $address, pvtKey: $pvtKey, username: $username, password: $password}
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
 *      pvtKey: // value for 'pvtKey'
 *      address: // value for 'address'
 *      username: // value for 'username'
 *      password: // value for 'password'
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
export const GetLoggedInUserDocument = /*#__PURE__*/ gql`
    query getLoggedInUser($username: String) {
  z_users(where: {username: {_eq: $username}}) {
    username
    password
    address
    id
    pvtKey
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
export const UsersCountDocument = /*#__PURE__*/ gql`
    query UsersCount {
  z_users_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useUsersCountQuery__
 *
 * To run a query within a React component, call `useUsersCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersCountQuery(baseOptions?: Apollo.QueryHookOptions<UsersCountQuery, UsersCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersCountQuery, UsersCountQueryVariables>(UsersCountDocument, options);
      }
export function useUsersCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersCountQuery, UsersCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersCountQuery, UsersCountQueryVariables>(UsersCountDocument, options);
        }
export type UsersCountQueryHookResult = ReturnType<typeof useUsersCountQuery>;
export type UsersCountLazyQueryHookResult = ReturnType<typeof useUsersCountLazyQuery>;
export type UsersCountQueryResult = Apollo.QueryResult<UsersCountQuery, UsersCountQueryVariables>;
export function refetchUsersCountQuery(variables?: UsersCountQueryVariables) {
      return { query: UsersCountDocument, variables: variables }
    }