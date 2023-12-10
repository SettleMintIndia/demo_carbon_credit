import { from } from '@apollo/client';
import graphresult from './graphql.graph.helpers';
import hasuraresult from './graphql.hasura.helpers';
export * as graphhelpers from './graphql.graph.helpers';
export * as graphtypes from './graphql.graph.types';
export * as hasurahelpers from './graphql.hasura.helpers';
export * as hasuratypes from './graphql.hasura.types';
export * from './lib/operations/erc115.graph.operation';
export * from './lib/operations/user-setting.hasura.operation';

// New Setup
export * from './lib/operations/z_user.hasura.operation';
export * from './lib/operations/z_assets.hasura.operation';
export * from './lib/operations/z_transaction_history.hasura.operation';
export * from './lib/operations/z_poll.hasura.operation';
export * from './lib/operations/z_secondary_marketplace.hasura.operation';
export * from './lib/operations/z_token_holder.hasura.operation';
export * from './lib/operations/z_profit.hasura.operation';

export const hasuraPossibleTypes = {
  ...hasuraresult.possibleTypes,
  ...graphresult.possibleTypes,
};
