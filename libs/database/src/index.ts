import hasuraresult from "./graphql.hasura.helpers";

export * as hasurahelpers from "./graphql.hasura.helpers";
export * as hasuratypes from "./graphql.hasura.types";
export * from './lib/operations/z_user.hasura.operation'

// export * from "./hasura/operations/user.hasura.operation";

export const hasuraPossibleTypes = {
  ...hasuraresult.possibleTypes,
};