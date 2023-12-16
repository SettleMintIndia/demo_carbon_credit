import hasuraresult from "./graphql.hasura.helpers";

export * as hasurahelpers from "./graphql.hasura.helpers";
export * as hasuratypes from "./graphql.hasura.types";
export * from './lib/operations/z_users.hasura.operation'
export * from './lib/operations/z_minttokens.hasura.operation'
export * from './lib/operations/z_secondary_marketplace.hasura.operation'
export * from './lib/operations/z_transaction_history.hasura.operation'
export * from './lib/operations/z_token_holder.hasura.operation'

// export * from "./hasura/operations/user.hasura.operation";

export const hasuraPossibleTypes = {
  ...hasuraresult.possibleTypes,
};