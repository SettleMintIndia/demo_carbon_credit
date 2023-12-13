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