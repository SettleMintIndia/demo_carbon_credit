import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export const namedOperations = {
  Query: {
    gettokens: 'gettokens' as const,
    getSecondayMarketPlace: 'getSecondayMarketPlace' as const,
    checkRecordExist: 'checkRecordExist' as const,
    getAllTokenHolderDetails: 'getAllTokenHolderDetails' as const,
    getTokenDetailsbyuser: 'getTokenDetailsbyuser' as const,
    getAllTransactions: 'getAllTransactions' as const,
    getAllUsers: 'getAllUsers' as const,
    getLoggedInUser: 'getLoggedInUser' as const,
    UsersCount: 'UsersCount' as const
  },
  Mutation: {
    createToken: 'createToken' as const,
    updateMintTokens: 'updateMintTokens' as const,
    createSecondaryMarketPlace: 'createSecondaryMarketPlace' as const,
    updateSecondayMarketPlace: 'updateSecondayMarketPlace' as const,
    createTokenHolder: 'createTokenHolder' as const,
    updateTokenHolder: 'updateTokenHolder' as const,
    createTransctionHistory: 'createTransctionHistory' as const,
    createUser: 'createUser' as const
  }
}
export type mutation_rootKeySpecifier = ('delete_z_minttokens' | 'delete_z_minttokens_by_pk' | 'delete_z_secondary_marketplace' | 'delete_z_secondary_marketplace_by_pk' | 'delete_z_token_holder' | 'delete_z_token_holder_by_pk' | 'delete_z_totaltokens' | 'delete_z_totaltokens_by_pk' | 'delete_z_transaction_history' | 'delete_z_transaction_history_by_pk' | 'delete_z_users' | 'delete_z_users_by_pk' | 'insert_z_minttokens' | 'insert_z_minttokens_one' | 'insert_z_secondary_marketplace' | 'insert_z_secondary_marketplace_one' | 'insert_z_token_holder' | 'insert_z_token_holder_one' | 'insert_z_totaltokens' | 'insert_z_totaltokens_one' | 'insert_z_transaction_history' | 'insert_z_transaction_history_one' | 'insert_z_users' | 'insert_z_users_one' | 'update_z_minttokens' | 'update_z_minttokens_by_pk' | 'update_z_minttokens_many' | 'update_z_secondary_marketplace' | 'update_z_secondary_marketplace_by_pk' | 'update_z_secondary_marketplace_many' | 'update_z_token_holder' | 'update_z_token_holder_by_pk' | 'update_z_token_holder_many' | 'update_z_totaltokens' | 'update_z_totaltokens_by_pk' | 'update_z_totaltokens_many' | 'update_z_transaction_history' | 'update_z_transaction_history_by_pk' | 'update_z_transaction_history_many' | 'update_z_users' | 'update_z_users_by_pk' | 'update_z_users_many' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_z_minttokens?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_minttokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_secondary_marketplace?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_secondary_marketplace_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_token_holder?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_token_holder_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_totaltokens?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_totaltokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_transaction_history?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_transaction_history_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_minttokens?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_minttokens_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_secondary_marketplace?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_secondary_marketplace_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_token_holder?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_token_holder_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_totaltokens?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_totaltokens_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_transaction_history?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_transaction_history_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_users_one?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_minttokens?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_minttokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_minttokens_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_secondary_marketplace?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_secondary_marketplace_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_secondary_marketplace_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_token_holder?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_token_holder_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_token_holder_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_totaltokens?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_totaltokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_totaltokens_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_transaction_history?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_transaction_history_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_transaction_history_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_users_many?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('z_minttokens' | 'z_minttokens_aggregate' | 'z_minttokens_by_pk' | 'z_secondary_marketplace' | 'z_secondary_marketplace_aggregate' | 'z_secondary_marketplace_by_pk' | 'z_token_holder' | 'z_token_holder_aggregate' | 'z_token_holder_by_pk' | 'z_totaltokens' | 'z_totaltokens_aggregate' | 'z_totaltokens_by_pk' | 'z_transaction_history' | 'z_transaction_history_aggregate' | 'z_transaction_history_by_pk' | 'z_users' | 'z_users_aggregate' | 'z_users_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	z_minttokens?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttokens_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplace?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplace_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplace_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holder?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holder_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holder_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_totaltokens?: FieldPolicy<any> | FieldReadFunction<any>,
	z_totaltokens_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_totaltokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_history?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_history_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_history_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('z_minttokens' | 'z_minttokens_aggregate' | 'z_minttokens_by_pk' | 'z_minttokens_stream' | 'z_secondary_marketplace' | 'z_secondary_marketplace_aggregate' | 'z_secondary_marketplace_by_pk' | 'z_secondary_marketplace_stream' | 'z_token_holder' | 'z_token_holder_aggregate' | 'z_token_holder_by_pk' | 'z_token_holder_stream' | 'z_totaltokens' | 'z_totaltokens_aggregate' | 'z_totaltokens_by_pk' | 'z_totaltokens_stream' | 'z_transaction_history' | 'z_transaction_history_aggregate' | 'z_transaction_history_by_pk' | 'z_transaction_history_stream' | 'z_users' | 'z_users_aggregate' | 'z_users_by_pk' | 'z_users_stream' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	z_minttokens?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttokens_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttokens_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplace?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplace_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplace_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplace_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holder?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holder_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holder_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holder_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_totaltokens?: FieldPolicy<any> | FieldReadFunction<any>,
	z_totaltokens_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_totaltokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_totaltokens_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_history?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_history_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_history_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_history_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_stream?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minttokensKeySpecifier = ('created_at' | 'id' | 'remaining_token' | 'token' | 'tx_hash' | 'user_id' | 'z_token_holders' | 'z_token_holders_aggregate' | 'z_user' | z_minttokensKeySpecifier)[];
export type z_minttokensFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	remaining_token?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holders?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holders_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user?: FieldPolicy<any> | FieldReadFunction<any>
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
export type z_minttokens_max_fieldsKeySpecifier = ('created_at' | 'id' | 'remaining_token' | 'token' | 'tx_hash' | 'user_id' | z_minttokens_max_fieldsKeySpecifier)[];
export type z_minttokens_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	remaining_token?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minttokens_min_fieldsKeySpecifier = ('created_at' | 'id' | 'remaining_token' | 'token' | 'tx_hash' | 'user_id' | z_minttokens_min_fieldsKeySpecifier)[];
export type z_minttokens_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	remaining_token?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minttokens_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_minttokens_mutation_responseKeySpecifier)[];
export type z_minttokens_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_secondary_marketplaceKeySpecifier = ('amount' | 'created_at' | 'id' | 'minttoken_id' | 'owner_id' | 'tokens' | 'z_minttoken' | 'z_user' | z_secondary_marketplaceKeySpecifier)[];
export type z_secondary_marketplaceFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	minttoken_id?: FieldPolicy<any> | FieldReadFunction<any>,
	owner_id?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttoken?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_secondary_marketplace_aggregateKeySpecifier = ('aggregate' | 'nodes' | z_secondary_marketplace_aggregateKeySpecifier)[];
export type z_secondary_marketplace_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_secondary_marketplace_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | z_secondary_marketplace_aggregate_fieldsKeySpecifier)[];
export type z_secondary_marketplace_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_secondary_marketplace_max_fieldsKeySpecifier = ('amount' | 'created_at' | 'id' | 'minttoken_id' | 'owner_id' | 'tokens' | z_secondary_marketplace_max_fieldsKeySpecifier)[];
export type z_secondary_marketplace_max_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	minttoken_id?: FieldPolicy<any> | FieldReadFunction<any>,
	owner_id?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_secondary_marketplace_min_fieldsKeySpecifier = ('amount' | 'created_at' | 'id' | 'minttoken_id' | 'owner_id' | 'tokens' | z_secondary_marketplace_min_fieldsKeySpecifier)[];
export type z_secondary_marketplace_min_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	minttoken_id?: FieldPolicy<any> | FieldReadFunction<any>,
	owner_id?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_secondary_marketplace_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_secondary_marketplace_mutation_responseKeySpecifier)[];
export type z_secondary_marketplace_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_token_holderKeySpecifier = ('amount' | 'created_at' | 'id' | 'mint_id' | 'token' | 'updated_at' | 'user_id' | 'z_minttoken' | 'z_user' | z_token_holderKeySpecifier)[];
export type z_token_holderFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mint_id?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttoken?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_token_holder_aggregateKeySpecifier = ('aggregate' | 'nodes' | z_token_holder_aggregateKeySpecifier)[];
export type z_token_holder_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_token_holder_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | z_token_holder_aggregate_fieldsKeySpecifier)[];
export type z_token_holder_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_token_holder_max_fieldsKeySpecifier = ('amount' | 'created_at' | 'id' | 'mint_id' | 'token' | 'updated_at' | 'user_id' | z_token_holder_max_fieldsKeySpecifier)[];
export type z_token_holder_max_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mint_id?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_token_holder_min_fieldsKeySpecifier = ('amount' | 'created_at' | 'id' | 'mint_id' | 'token' | 'updated_at' | 'user_id' | z_token_holder_min_fieldsKeySpecifier)[];
export type z_token_holder_min_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mint_id?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_token_holder_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_token_holder_mutation_responseKeySpecifier)[];
export type z_token_holder_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_totaltokensKeySpecifier = ('created_at' | 'id' | 'mint_id' | 'remaining_tokens' | 'total_tokens' | 'updated_at' | 'user_id' | z_totaltokensKeySpecifier)[];
export type z_totaltokensFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mint_id?: FieldPolicy<any> | FieldReadFunction<any>,
	remaining_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	total_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_totaltokens_aggregateKeySpecifier = ('aggregate' | 'nodes' | z_totaltokens_aggregateKeySpecifier)[];
export type z_totaltokens_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_totaltokens_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | z_totaltokens_aggregate_fieldsKeySpecifier)[];
export type z_totaltokens_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_totaltokens_max_fieldsKeySpecifier = ('created_at' | 'id' | 'mint_id' | 'remaining_tokens' | 'total_tokens' | 'updated_at' | 'user_id' | z_totaltokens_max_fieldsKeySpecifier)[];
export type z_totaltokens_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mint_id?: FieldPolicy<any> | FieldReadFunction<any>,
	remaining_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	total_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_totaltokens_min_fieldsKeySpecifier = ('created_at' | 'id' | 'mint_id' | 'remaining_tokens' | 'total_tokens' | 'updated_at' | 'user_id' | z_totaltokens_min_fieldsKeySpecifier)[];
export type z_totaltokens_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mint_id?: FieldPolicy<any> | FieldReadFunction<any>,
	remaining_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	total_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_totaltokens_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_totaltokens_mutation_responseKeySpecifier)[];
export type z_totaltokens_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_transaction_historyKeySpecifier = ('amount' | 'created_at' | 'id' | 'mint_id' | 'receiver' | 'sender' | 'token' | 'tx_hash' | 'z_minttoken' | 'z_user_receiver' | 'z_user_sender' | z_transaction_historyKeySpecifier)[];
export type z_transaction_historyFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mint_id?: FieldPolicy<any> | FieldReadFunction<any>,
	receiver?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttoken?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_receiver?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_sender?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_transaction_history_aggregateKeySpecifier = ('aggregate' | 'nodes' | z_transaction_history_aggregateKeySpecifier)[];
export type z_transaction_history_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_transaction_history_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | z_transaction_history_aggregate_fieldsKeySpecifier)[];
export type z_transaction_history_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_transaction_history_max_fieldsKeySpecifier = ('amount' | 'created_at' | 'id' | 'mint_id' | 'receiver' | 'sender' | 'token' | 'tx_hash' | z_transaction_history_max_fieldsKeySpecifier)[];
export type z_transaction_history_max_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mint_id?: FieldPolicy<any> | FieldReadFunction<any>,
	receiver?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_transaction_history_min_fieldsKeySpecifier = ('amount' | 'created_at' | 'id' | 'mint_id' | 'receiver' | 'sender' | 'token' | 'tx_hash' | z_transaction_history_min_fieldsKeySpecifier)[];
export type z_transaction_history_min_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mint_id?: FieldPolicy<any> | FieldReadFunction<any>,
	receiver?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_transaction_history_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_transaction_history_mutation_responseKeySpecifier)[];
export type z_transaction_history_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_usersKeySpecifier = ('address' | 'created_at' | 'id' | 'password' | 'pvtKey' | 'username' | 'z_minttokens' | 'z_minttokens_aggregate' | 'z_token_holders' | 'z_token_holders_aggregate' | z_usersKeySpecifier)[];
export type z_usersFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	pvtKey?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttokens?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minttokens_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holders?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holders_aggregate?: FieldPolicy<any> | FieldReadFunction<any>
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
	z_secondary_marketplace: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_secondary_marketplaceKeySpecifier | (() => undefined | z_secondary_marketplaceKeySpecifier),
		fields?: z_secondary_marketplaceFieldPolicy,
	},
	z_secondary_marketplace_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_secondary_marketplace_aggregateKeySpecifier | (() => undefined | z_secondary_marketplace_aggregateKeySpecifier),
		fields?: z_secondary_marketplace_aggregateFieldPolicy,
	},
	z_secondary_marketplace_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_secondary_marketplace_aggregate_fieldsKeySpecifier | (() => undefined | z_secondary_marketplace_aggregate_fieldsKeySpecifier),
		fields?: z_secondary_marketplace_aggregate_fieldsFieldPolicy,
	},
	z_secondary_marketplace_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_secondary_marketplace_max_fieldsKeySpecifier | (() => undefined | z_secondary_marketplace_max_fieldsKeySpecifier),
		fields?: z_secondary_marketplace_max_fieldsFieldPolicy,
	},
	z_secondary_marketplace_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_secondary_marketplace_min_fieldsKeySpecifier | (() => undefined | z_secondary_marketplace_min_fieldsKeySpecifier),
		fields?: z_secondary_marketplace_min_fieldsFieldPolicy,
	},
	z_secondary_marketplace_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_secondary_marketplace_mutation_responseKeySpecifier | (() => undefined | z_secondary_marketplace_mutation_responseKeySpecifier),
		fields?: z_secondary_marketplace_mutation_responseFieldPolicy,
	},
	z_token_holder: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_token_holderKeySpecifier | (() => undefined | z_token_holderKeySpecifier),
		fields?: z_token_holderFieldPolicy,
	},
	z_token_holder_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_token_holder_aggregateKeySpecifier | (() => undefined | z_token_holder_aggregateKeySpecifier),
		fields?: z_token_holder_aggregateFieldPolicy,
	},
	z_token_holder_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_token_holder_aggregate_fieldsKeySpecifier | (() => undefined | z_token_holder_aggregate_fieldsKeySpecifier),
		fields?: z_token_holder_aggregate_fieldsFieldPolicy,
	},
	z_token_holder_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_token_holder_max_fieldsKeySpecifier | (() => undefined | z_token_holder_max_fieldsKeySpecifier),
		fields?: z_token_holder_max_fieldsFieldPolicy,
	},
	z_token_holder_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_token_holder_min_fieldsKeySpecifier | (() => undefined | z_token_holder_min_fieldsKeySpecifier),
		fields?: z_token_holder_min_fieldsFieldPolicy,
	},
	z_token_holder_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_token_holder_mutation_responseKeySpecifier | (() => undefined | z_token_holder_mutation_responseKeySpecifier),
		fields?: z_token_holder_mutation_responseFieldPolicy,
	},
	z_totaltokens: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_totaltokensKeySpecifier | (() => undefined | z_totaltokensKeySpecifier),
		fields?: z_totaltokensFieldPolicy,
	},
	z_totaltokens_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_totaltokens_aggregateKeySpecifier | (() => undefined | z_totaltokens_aggregateKeySpecifier),
		fields?: z_totaltokens_aggregateFieldPolicy,
	},
	z_totaltokens_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_totaltokens_aggregate_fieldsKeySpecifier | (() => undefined | z_totaltokens_aggregate_fieldsKeySpecifier),
		fields?: z_totaltokens_aggregate_fieldsFieldPolicy,
	},
	z_totaltokens_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_totaltokens_max_fieldsKeySpecifier | (() => undefined | z_totaltokens_max_fieldsKeySpecifier),
		fields?: z_totaltokens_max_fieldsFieldPolicy,
	},
	z_totaltokens_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_totaltokens_min_fieldsKeySpecifier | (() => undefined | z_totaltokens_min_fieldsKeySpecifier),
		fields?: z_totaltokens_min_fieldsFieldPolicy,
	},
	z_totaltokens_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_totaltokens_mutation_responseKeySpecifier | (() => undefined | z_totaltokens_mutation_responseKeySpecifier),
		fields?: z_totaltokens_mutation_responseFieldPolicy,
	},
	z_transaction_history: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_transaction_historyKeySpecifier | (() => undefined | z_transaction_historyKeySpecifier),
		fields?: z_transaction_historyFieldPolicy,
	},
	z_transaction_history_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_transaction_history_aggregateKeySpecifier | (() => undefined | z_transaction_history_aggregateKeySpecifier),
		fields?: z_transaction_history_aggregateFieldPolicy,
	},
	z_transaction_history_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_transaction_history_aggregate_fieldsKeySpecifier | (() => undefined | z_transaction_history_aggregate_fieldsKeySpecifier),
		fields?: z_transaction_history_aggregate_fieldsFieldPolicy,
	},
	z_transaction_history_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_transaction_history_max_fieldsKeySpecifier | (() => undefined | z_transaction_history_max_fieldsKeySpecifier),
		fields?: z_transaction_history_max_fieldsFieldPolicy,
	},
	z_transaction_history_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_transaction_history_min_fieldsKeySpecifier | (() => undefined | z_transaction_history_min_fieldsKeySpecifier),
		fields?: z_transaction_history_min_fieldsFieldPolicy,
	},
	z_transaction_history_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_transaction_history_mutation_responseKeySpecifier | (() => undefined | z_transaction_history_mutation_responseKeySpecifier),
		fields?: z_transaction_history_mutation_responseFieldPolicy,
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
    