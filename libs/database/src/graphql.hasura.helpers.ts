import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export const namedOperations = {
  Query: {
    getAllUsers: 'getAllUsers' as const,
    getLoggedInUser: 'getLoggedInUser' as const
  },
  Mutation: {
    createToken: 'createToken' as const,
    createUser: 'createUser' as const
  }
}
export type mutation_rootKeySpecifier = ('delete_z_minttokens' | 'delete_z_minttokens_by_pk' | 'delete_z_users' | 'delete_z_users_by_pk' | 'insert_z_minttokens' | 'insert_z_minttokens_one' | 'insert_z_users' | 'insert_z_users_one' | 'update_z_minttokens' | 'update_z_minttokens_by_pk' | 'update_z_minttokens_many' | 'update_z_users' | 'update_z_users_by_pk' | 'update_z_users_many' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_z_minttokens?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_minttokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_minttokens?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_minttokens_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_users_one?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_minttokens?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_minttokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_minttokens_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_users_many?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('z_minttokens' | 'z_minttokens_aggregate' | 'z_minttokens_by_pk' | 'z_users' | 'z_users_aggregate' | 'z_users_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	z_minttokens?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttokens_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('z_minttokens' | 'z_minttokens_aggregate' | 'z_minttokens_by_pk' | 'z_minttokens_stream' | 'z_users' | 'z_users_aggregate' | 'z_users_by_pk' | 'z_users_stream' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	z_minttokens?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttokens_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttokens_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_stream?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minttokensKeySpecifier = ('created_at' | 'id' | 'token' | 'tx_hash' | 'user_id' | z_minttokensKeySpecifier)[];
export type z_minttokensFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minttokens_aggregateKeySpecifier = ('aggregate' | 'nodes' | z_minttokens_aggregateKeySpecifier)[];
export type z_minttokens_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minttokens_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | z_minttokens_aggregate_fieldsKeySpecifier)[];
export type z_minttokens_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minttokens_max_fieldsKeySpecifier = ('created_at' | 'id' | 'token' | 'tx_hash' | 'user_id' | z_minttokens_max_fieldsKeySpecifier)[];
export type z_minttokens_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minttokens_min_fieldsKeySpecifier = ('created_at' | 'id' | 'token' | 'tx_hash' | 'user_id' | z_minttokens_min_fieldsKeySpecifier)[];
export type z_minttokens_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minttokens_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_minttokens_mutation_responseKeySpecifier)[];
export type z_minttokens_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_usersKeySpecifier = ('address' | 'created_at' | 'id' | 'password' | 'pvtKey' | 'username' | z_usersKeySpecifier)[];
export type z_usersFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	pvtKey?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_users_aggregateKeySpecifier = ('aggregate' | 'nodes' | z_users_aggregateKeySpecifier)[];
export type z_users_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_users_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | z_users_aggregate_fieldsKeySpecifier)[];
export type z_users_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_users_max_fieldsKeySpecifier = ('address' | 'created_at' | 'id' | 'password' | 'pvtKey' | 'username' | z_users_max_fieldsKeySpecifier)[];
export type z_users_max_fieldsFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	pvtKey?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_users_min_fieldsKeySpecifier = ('address' | 'created_at' | 'id' | 'password' | 'pvtKey' | 'username' | z_users_min_fieldsKeySpecifier)[];
export type z_users_min_fieldsFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	pvtKey?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_users_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_users_mutation_responseKeySpecifier)[];
export type z_users_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	mutation_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | mutation_rootKeySpecifier | (() => undefined | mutation_rootKeySpecifier),
		fields?: mutation_rootFieldPolicy,
	},
	query_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | query_rootKeySpecifier | (() => undefined | query_rootKeySpecifier),
		fields?: query_rootFieldPolicy,
	},
	subscription_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | subscription_rootKeySpecifier | (() => undefined | subscription_rootKeySpecifier),
		fields?: subscription_rootFieldPolicy,
	},
	z_minttokens: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_minttokensKeySpecifier | (() => undefined | z_minttokensKeySpecifier),
		fields?: z_minttokensFieldPolicy,
	},
	z_minttokens_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_minttokens_aggregateKeySpecifier | (() => undefined | z_minttokens_aggregateKeySpecifier),
		fields?: z_minttokens_aggregateFieldPolicy,
	},
	z_minttokens_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_minttokens_aggregate_fieldsKeySpecifier | (() => undefined | z_minttokens_aggregate_fieldsKeySpecifier),
		fields?: z_minttokens_aggregate_fieldsFieldPolicy,
	},
	z_minttokens_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_minttokens_max_fieldsKeySpecifier | (() => undefined | z_minttokens_max_fieldsKeySpecifier),
		fields?: z_minttokens_max_fieldsFieldPolicy,
	},
	z_minttokens_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_minttokens_min_fieldsKeySpecifier | (() => undefined | z_minttokens_min_fieldsKeySpecifier),
		fields?: z_minttokens_min_fieldsFieldPolicy,
	},
	z_minttokens_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_minttokens_mutation_responseKeySpecifier | (() => undefined | z_minttokens_mutation_responseKeySpecifier),
		fields?: z_minttokens_mutation_responseFieldPolicy,
	},
	z_users: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_usersKeySpecifier | (() => undefined | z_usersKeySpecifier),
		fields?: z_usersFieldPolicy,
	},
	z_users_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_users_aggregateKeySpecifier | (() => undefined | z_users_aggregateKeySpecifier),
		fields?: z_users_aggregateFieldPolicy,
	},
	z_users_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_users_aggregate_fieldsKeySpecifier | (() => undefined | z_users_aggregate_fieldsKeySpecifier),
		fields?: z_users_aggregate_fieldsFieldPolicy,
	},
	z_users_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_users_max_fieldsKeySpecifier | (() => undefined | z_users_max_fieldsKeySpecifier),
		fields?: z_users_max_fieldsFieldPolicy,
	},
	z_users_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_users_min_fieldsKeySpecifier | (() => undefined | z_users_min_fieldsKeySpecifier),
		fields?: z_users_min_fieldsFieldPolicy,
	},
	z_users_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_users_mutation_responseKeySpecifier | (() => undefined | z_users_mutation_responseKeySpecifier),
		fields?: z_users_mutation_responseFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    