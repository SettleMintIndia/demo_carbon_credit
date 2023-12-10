import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export const namedOperations = {
  Query: {
    getData: 'getData' as const,
    getAllAssets: 'getAllAssets' as const,
    getMintedTokenData: 'getMintedTokenData' as const,
    getRequiredDataForBurn: 'getRequiredDataForBurn' as const,
    getMyTokenPageAssets: 'getMyTokenPageAssets' as const,
    getPollByAssetUUID: 'getPollByAssetUUID' as const,
    getResponseOfTokenHolder: 'getResponseOfTokenHolder' as const,
    getProfitByAssetId: 'getProfitByAssetId' as const,
    getProfitDistributionByUsername: 'getProfitDistributionByUsername' as const,
    filterAssetByUserAndAsset: 'filterAssetByUserAndAsset' as const,
    getAllSecondaryMarketPlace: 'getAllSecondaryMarketPlace' as const,
    getTokenHolderDetails: 'getTokenHolderDetails' as const,
    checkRecordExist: 'checkRecordExist' as const,
    getTokenHoldersByUsername: 'getTokenHoldersByUsername' as const,
    getAllTokenHolderDetails: 'getAllTokenHolderDetails' as const,
    getAllTransaction: 'getAllTransaction' as const,
    getDirectTransactionByIsApproved: 'getDirectTransactionByIsApproved' as const,
    getTransactionHistoryByReceiver: 'getTransactionHistoryByReceiver' as const,
    getTransactionHistoryBySender: 'getTransactionHistoryBySender' as const,
    GetTransactionHistoryByReciever: 'GetTransactionHistoryByReciever' as const,
    getAllUsers: 'getAllUsers' as const,
    getUserByApprovedStatus: 'getUserByApprovedStatus' as const,
    getUserByUsername: 'getUserByUsername' as const,
    getLoggedInUser: 'getLoggedInUser' as const,
    getAdminInfo: 'getAdminInfo' as const,
    getUsersInfo: 'getUsersInfo' as const
  },
  Mutation: {
    UpdateSettings: 'UpdateSettings' as const,
    createAssetToken: 'createAssetToken' as const,
    fractionalizeAsset: 'fractionalizeAsset' as const,
    updateTotalMinted: 'updateTotalMinted' as const,
    mintAsset: 'mintAsset' as const,
    updateAdminBalance: 'updateAdminBalance' as const,
    burnAsset: 'burnAsset' as const,
    updateLastTreadedPrice: 'updateLastTreadedPrice' as const,
    addPoll: 'addPoll' as const,
    createPollOption: 'createPollOption' as const,
    createPollResponse: 'createPollResponse' as const,
    createProfit: 'createProfit' as const,
    createProfitDistribution: 'createProfitDistribution' as const,
    createSecondaryMarketPlace: 'createSecondaryMarketPlace' as const,
    updateSecondaryMarketPlace: 'updateSecondaryMarketPlace' as const,
    updateTokenHolder: 'updateTokenHolder' as const,
    createTokenHolder: 'createTokenHolder' as const,
    createDirectTransfer: 'createDirectTransfer' as const,
    createSecondaryMarketplaceTransfer: 'createSecondaryMarketplaceTransfer' as const,
    approveDirectTransfer: 'approveDirectTransfer' as const,
    deleteDirectTransaction: 'deleteDirectTransaction' as const,
    createUser: 'createUser' as const,
    approveUser: 'approveUser' as const,
    disapproveUser: 'disapproveUser' as const
  }
}
export type mutation_rootKeySpecifier = ('delete_user_setting' | 'delete_user_setting_by_pk' | 'delete_z_assets' | 'delete_z_assets_by_pk' | 'delete_z_minted_history' | 'delete_z_minted_history_by_pk' | 'delete_z_poll' | 'delete_z_poll_by_pk' | 'delete_z_poll_options' | 'delete_z_poll_options_by_pk' | 'delete_z_poll_response' | 'delete_z_poll_response_by_pk' | 'delete_z_profit' | 'delete_z_profit_by_pk' | 'delete_z_profit_distribution' | 'delete_z_profit_distribution_by_pk' | 'delete_z_secondary_marketplace' | 'delete_z_secondary_marketplace_by_pk' | 'delete_z_token_holder' | 'delete_z_token_holder_by_pk' | 'delete_z_transaction_history' | 'delete_z_transaction_history_by_pk' | 'delete_z_user_token' | 'delete_z_user_token_by_pk' | 'delete_z_users' | 'delete_z_users_by_pk' | 'insert_user_setting' | 'insert_user_setting_one' | 'insert_z_assets' | 'insert_z_assets_one' | 'insert_z_minted_history' | 'insert_z_minted_history_one' | 'insert_z_poll' | 'insert_z_poll_one' | 'insert_z_poll_options' | 'insert_z_poll_options_one' | 'insert_z_poll_response' | 'insert_z_poll_response_one' | 'insert_z_profit' | 'insert_z_profit_distribution' | 'insert_z_profit_distribution_one' | 'insert_z_profit_one' | 'insert_z_secondary_marketplace' | 'insert_z_secondary_marketplace_one' | 'insert_z_token_holder' | 'insert_z_token_holder_one' | 'insert_z_transaction_history' | 'insert_z_transaction_history_one' | 'insert_z_user_token' | 'insert_z_user_token_one' | 'insert_z_users' | 'insert_z_users_one' | 'update_user_setting' | 'update_user_setting_by_pk' | 'update_user_setting_many' | 'update_z_assets' | 'update_z_assets_by_pk' | 'update_z_assets_many' | 'update_z_minted_history' | 'update_z_minted_history_by_pk' | 'update_z_minted_history_many' | 'update_z_poll' | 'update_z_poll_by_pk' | 'update_z_poll_many' | 'update_z_poll_options' | 'update_z_poll_options_by_pk' | 'update_z_poll_options_many' | 'update_z_poll_response' | 'update_z_poll_response_by_pk' | 'update_z_poll_response_many' | 'update_z_profit' | 'update_z_profit_by_pk' | 'update_z_profit_distribution' | 'update_z_profit_distribution_by_pk' | 'update_z_profit_distribution_many' | 'update_z_profit_many' | 'update_z_secondary_marketplace' | 'update_z_secondary_marketplace_by_pk' | 'update_z_secondary_marketplace_many' | 'update_z_token_holder' | 'update_z_token_holder_by_pk' | 'update_z_token_holder_many' | 'update_z_transaction_history' | 'update_z_transaction_history_by_pk' | 'update_z_transaction_history_many' | 'update_z_user_token' | 'update_z_user_token_by_pk' | 'update_z_user_token_many' | 'update_z_users' | 'update_z_users_by_pk' | 'update_z_users_many' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_user_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user_setting_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_assets?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_assets_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_minted_history?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_minted_history_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_poll?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_poll_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_poll_options?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_poll_options_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_poll_response?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_poll_response_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_profit?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_profit_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_profit_distribution?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_profit_distribution_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_secondary_marketplace?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_secondary_marketplace_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_token_holder?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_token_holder_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_transaction_history?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_transaction_history_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_user_token?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_user_token_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_z_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_user_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_user_setting_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_assets?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_assets_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_minted_history?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_minted_history_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_poll?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_poll_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_poll_options?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_poll_options_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_poll_response?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_poll_response_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_profit?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_profit_distribution?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_profit_distribution_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_profit_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_secondary_marketplace?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_secondary_marketplace_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_token_holder?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_token_holder_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_transaction_history?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_transaction_history_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_user_token?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_user_token_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_z_users_one?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_setting_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_setting_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_assets?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_assets_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_assets_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_minted_history?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_minted_history_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_minted_history_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_poll?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_poll_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_poll_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_poll_options?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_poll_options_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_poll_options_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_poll_response?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_poll_response_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_poll_response_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_profit?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_profit_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_profit_distribution?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_profit_distribution_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_profit_distribution_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_profit_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_secondary_marketplace?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_secondary_marketplace_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_secondary_marketplace_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_token_holder?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_token_holder_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_token_holder_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_transaction_history?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_transaction_history_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_transaction_history_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_user_token?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_user_token_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_user_token_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_z_users_many?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('user_setting' | 'user_setting_aggregate' | 'user_setting_by_pk' | 'z_assets' | 'z_assets_aggregate' | 'z_assets_by_pk' | 'z_minted_history' | 'z_minted_history_aggregate' | 'z_minted_history_by_pk' | 'z_poll' | 'z_poll_aggregate' | 'z_poll_by_pk' | 'z_poll_options' | 'z_poll_options_aggregate' | 'z_poll_options_by_pk' | 'z_poll_response' | 'z_poll_response_aggregate' | 'z_poll_response_by_pk' | 'z_profit' | 'z_profit_aggregate' | 'z_profit_by_pk' | 'z_profit_distribution' | 'z_profit_distribution_aggregate' | 'z_profit_distribution_by_pk' | 'z_secondary_marketplace' | 'z_secondary_marketplace_aggregate' | 'z_secondary_marketplace_by_pk' | 'z_token_holder' | 'z_token_holder_aggregate' | 'z_token_holder_by_pk' | 'z_transaction_history' | 'z_transaction_history_aggregate' | 'z_transaction_history_by_pk' | 'z_user_token' | 'z_user_token_aggregate' | 'z_user_token_by_pk' | 'z_users' | 'z_users_aggregate' | 'z_users_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	user_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	user_setting_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_setting_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_assets?: FieldPolicy<any> | FieldReadFunction<any>,
	z_assets_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_assets_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minted_history?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minted_history_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minted_history_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_options?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_options_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_options_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_response?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_response_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_response_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_distribution?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_distribution_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_distribution_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplace?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplace_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplace_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holder?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holder_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holder_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_history?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_history_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_history_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_token?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_token_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_token_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('user_setting' | 'user_setting_aggregate' | 'user_setting_by_pk' | 'user_setting_stream' | 'z_assets' | 'z_assets_aggregate' | 'z_assets_by_pk' | 'z_assets_stream' | 'z_minted_history' | 'z_minted_history_aggregate' | 'z_minted_history_by_pk' | 'z_minted_history_stream' | 'z_poll' | 'z_poll_aggregate' | 'z_poll_by_pk' | 'z_poll_options' | 'z_poll_options_aggregate' | 'z_poll_options_by_pk' | 'z_poll_options_stream' | 'z_poll_response' | 'z_poll_response_aggregate' | 'z_poll_response_by_pk' | 'z_poll_response_stream' | 'z_poll_stream' | 'z_profit' | 'z_profit_aggregate' | 'z_profit_by_pk' | 'z_profit_distribution' | 'z_profit_distribution_aggregate' | 'z_profit_distribution_by_pk' | 'z_profit_distribution_stream' | 'z_profit_stream' | 'z_secondary_marketplace' | 'z_secondary_marketplace_aggregate' | 'z_secondary_marketplace_by_pk' | 'z_secondary_marketplace_stream' | 'z_token_holder' | 'z_token_holder_aggregate' | 'z_token_holder_by_pk' | 'z_token_holder_stream' | 'z_transaction_history' | 'z_transaction_history_aggregate' | 'z_transaction_history_by_pk' | 'z_transaction_history_stream' | 'z_user_token' | 'z_user_token_aggregate' | 'z_user_token_by_pk' | 'z_user_token_stream' | 'z_users' | 'z_users_aggregate' | 'z_users_by_pk' | 'z_users_stream' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	user_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	user_setting_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_setting_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	user_setting_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_assets?: FieldPolicy<any> | FieldReadFunction<any>,
	z_assets_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_assets_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_assets_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minted_history?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minted_history_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minted_history_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minted_history_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_options?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_options_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_options_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_options_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_response?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_response_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_response_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_response_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_distribution?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_distribution_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_distribution_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_distribution_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplace?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplace_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplace_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplace_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holder?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holder_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holder_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holder_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_history?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_history_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_history_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_history_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_token?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_token_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_token_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_token_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	z_users_stream?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_settingKeySpecifier = ('cid' | 'companyName' | 'id' | user_settingKeySpecifier)[];
export type user_settingFieldPolicy = {
	cid?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_aggregateKeySpecifier = ('aggregate' | 'nodes' | user_setting_aggregateKeySpecifier)[];
export type user_setting_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | user_setting_aggregate_fieldsKeySpecifier)[];
export type user_setting_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_avg_fieldsKeySpecifier = ('id' | user_setting_avg_fieldsKeySpecifier)[];
export type user_setting_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_max_fieldsKeySpecifier = ('cid' | 'companyName' | 'id' | user_setting_max_fieldsKeySpecifier)[];
export type user_setting_max_fieldsFieldPolicy = {
	cid?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_min_fieldsKeySpecifier = ('cid' | 'companyName' | 'id' | user_setting_min_fieldsKeySpecifier)[];
export type user_setting_min_fieldsFieldPolicy = {
	cid?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | user_setting_mutation_responseKeySpecifier)[];
export type user_setting_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_stddev_fieldsKeySpecifier = ('id' | user_setting_stddev_fieldsKeySpecifier)[];
export type user_setting_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_stddev_pop_fieldsKeySpecifier = ('id' | user_setting_stddev_pop_fieldsKeySpecifier)[];
export type user_setting_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_stddev_samp_fieldsKeySpecifier = ('id' | user_setting_stddev_samp_fieldsKeySpecifier)[];
export type user_setting_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_sum_fieldsKeySpecifier = ('id' | user_setting_sum_fieldsKeySpecifier)[];
export type user_setting_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_var_pop_fieldsKeySpecifier = ('id' | user_setting_var_pop_fieldsKeySpecifier)[];
export type user_setting_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_var_samp_fieldsKeySpecifier = ('id' | user_setting_var_samp_fieldsKeySpecifier)[];
export type user_setting_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_variance_fieldsKeySpecifier = ('id' | user_setting_variance_fieldsKeySpecifier)[];
export type user_setting_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_assetsKeySpecifier = ('adminBalance' | 'assetId' | 'assetName' | 'burned' | 'buyPrice' | 'created_at' | 'currency' | 'document_cid' | 'hurdleRate' | 'id' | 'is_fractionalized' | 'last_traded_price' | 'managementFee' | 'sellPrice' | 'totalCapital' | 'totalMinted' | 'totalSupply' | 'txHash' | 'z_minted_histories' | 'z_minted_histories_aggregate' | 'z_polls' | 'z_polls_aggregate' | 'z_profits' | 'z_profits_aggregate' | 'z_secondary_marketplaces' | 'z_secondary_marketplaces_aggregate' | 'z_token_holders' | 'z_token_holders_aggregate' | 'z_transaction_histories' | 'z_transaction_histories_aggregate' | 'z_user_tokens' | 'z_user_tokens_aggregate' | z_assetsKeySpecifier)[];
export type z_assetsFieldPolicy = {
	adminBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	assetName?: FieldPolicy<any> | FieldReadFunction<any>,
	burned?: FieldPolicy<any> | FieldReadFunction<any>,
	buyPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	document_cid?: FieldPolicy<any> | FieldReadFunction<any>,
	hurdleRate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_fractionalized?: FieldPolicy<any> | FieldReadFunction<any>,
	last_traded_price?: FieldPolicy<any> | FieldReadFunction<any>,
	managementFee?: FieldPolicy<any> | FieldReadFunction<any>,
	sellPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCapital?: FieldPolicy<any> | FieldReadFunction<any>,
	totalMinted?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minted_histories?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minted_histories_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_polls?: FieldPolicy<any> | FieldReadFunction<any>,
	z_polls_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profits?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profits_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplaces?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplaces_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holders?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holders_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_histories?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_histories_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_tokens_aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_assets_aggregateKeySpecifier = ('aggregate' | 'nodes' | z_assets_aggregateKeySpecifier)[];
export type z_assets_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_assets_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | z_assets_aggregate_fieldsKeySpecifier)[];
export type z_assets_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_assets_max_fieldsKeySpecifier = ('adminBalance' | 'assetId' | 'assetName' | 'burned' | 'buyPrice' | 'created_at' | 'currency' | 'document_cid' | 'hurdleRate' | 'id' | 'last_traded_price' | 'managementFee' | 'sellPrice' | 'totalCapital' | 'totalMinted' | 'totalSupply' | 'txHash' | z_assets_max_fieldsKeySpecifier)[];
export type z_assets_max_fieldsFieldPolicy = {
	adminBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	assetName?: FieldPolicy<any> | FieldReadFunction<any>,
	burned?: FieldPolicy<any> | FieldReadFunction<any>,
	buyPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	document_cid?: FieldPolicy<any> | FieldReadFunction<any>,
	hurdleRate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	last_traded_price?: FieldPolicy<any> | FieldReadFunction<any>,
	managementFee?: FieldPolicy<any> | FieldReadFunction<any>,
	sellPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCapital?: FieldPolicy<any> | FieldReadFunction<any>,
	totalMinted?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_assets_min_fieldsKeySpecifier = ('adminBalance' | 'assetId' | 'assetName' | 'burned' | 'buyPrice' | 'created_at' | 'currency' | 'document_cid' | 'hurdleRate' | 'id' | 'last_traded_price' | 'managementFee' | 'sellPrice' | 'totalCapital' | 'totalMinted' | 'totalSupply' | 'txHash' | z_assets_min_fieldsKeySpecifier)[];
export type z_assets_min_fieldsFieldPolicy = {
	adminBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	assetName?: FieldPolicy<any> | FieldReadFunction<any>,
	burned?: FieldPolicy<any> | FieldReadFunction<any>,
	buyPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	document_cid?: FieldPolicy<any> | FieldReadFunction<any>,
	hurdleRate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	last_traded_price?: FieldPolicy<any> | FieldReadFunction<any>,
	managementFee?: FieldPolicy<any> | FieldReadFunction<any>,
	sellPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCapital?: FieldPolicy<any> | FieldReadFunction<any>,
	totalMinted?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_assets_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_assets_mutation_responseKeySpecifier)[];
export type z_assets_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minted_historyKeySpecifier = ('amount' | 'assetId' | 'created_at' | 'id' | 'userId' | 'z_asset' | 'z_user' | z_minted_historyKeySpecifier)[];
export type z_minted_historyFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	z_asset?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minted_history_aggregateKeySpecifier = ('aggregate' | 'nodes' | z_minted_history_aggregateKeySpecifier)[];
export type z_minted_history_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minted_history_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | z_minted_history_aggregate_fieldsKeySpecifier)[];
export type z_minted_history_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minted_history_max_fieldsKeySpecifier = ('amount' | 'assetId' | 'created_at' | 'id' | 'userId' | z_minted_history_max_fieldsKeySpecifier)[];
export type z_minted_history_max_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minted_history_min_fieldsKeySpecifier = ('amount' | 'assetId' | 'created_at' | 'id' | 'userId' | z_minted_history_min_fieldsKeySpecifier)[];
export type z_minted_history_min_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_minted_history_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_minted_history_mutation_responseKeySpecifier)[];
export type z_minted_history_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_pollKeySpecifier = ('assetId' | 'created_at' | 'created_by' | 'id' | 'poll_end_date' | 'poll_start_date' | 'poll_title' | 'txHash' | 'z_asset' | 'z_poll_options' | 'z_poll_options_aggregate' | 'z_poll_responses' | 'z_poll_responses_aggregate' | 'z_user_created_by' | z_pollKeySpecifier)[];
export type z_pollFieldPolicy = {
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_title?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>,
	z_asset?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_options?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_options_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_responses?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_responses_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_created_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_aggregateKeySpecifier = ('aggregate' | 'nodes' | z_poll_aggregateKeySpecifier)[];
export type z_poll_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | z_poll_aggregate_fieldsKeySpecifier)[];
export type z_poll_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_max_fieldsKeySpecifier = ('assetId' | 'created_at' | 'created_by' | 'id' | 'poll_end_date' | 'poll_start_date' | 'poll_title' | 'txHash' | z_poll_max_fieldsKeySpecifier)[];
export type z_poll_max_fieldsFieldPolicy = {
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_title?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_min_fieldsKeySpecifier = ('assetId' | 'created_at' | 'created_by' | 'id' | 'poll_end_date' | 'poll_start_date' | 'poll_title' | 'txHash' | z_poll_min_fieldsKeySpecifier)[];
export type z_poll_min_fieldsFieldPolicy = {
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_title?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_poll_mutation_responseKeySpecifier)[];
export type z_poll_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_optionsKeySpecifier = ('created_at' | 'id' | 'pollId' | 'value' | 'z_poll' | z_poll_optionsKeySpecifier)[];
export type z_poll_optionsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pollId?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_options_aggregateKeySpecifier = ('aggregate' | 'nodes' | z_poll_options_aggregateKeySpecifier)[];
export type z_poll_options_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_options_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | z_poll_options_aggregate_fieldsKeySpecifier)[];
export type z_poll_options_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_options_max_fieldsKeySpecifier = ('created_at' | 'id' | 'pollId' | 'value' | z_poll_options_max_fieldsKeySpecifier)[];
export type z_poll_options_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pollId?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_options_min_fieldsKeySpecifier = ('created_at' | 'id' | 'pollId' | 'value' | z_poll_options_min_fieldsKeySpecifier)[];
export type z_poll_options_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pollId?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_options_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_poll_options_mutation_responseKeySpecifier)[];
export type z_poll_options_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_responseKeySpecifier = ('created_at' | 'id' | 'pollId' | 'response_by' | 'value' | 'z_poll' | 'z_user' | z_poll_responseKeySpecifier)[];
export type z_poll_responseFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pollId?: FieldPolicy<any> | FieldReadFunction<any>,
	response_by?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_response_aggregateKeySpecifier = ('aggregate' | 'nodes' | z_poll_response_aggregateKeySpecifier)[];
export type z_poll_response_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_response_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | z_poll_response_aggregate_fieldsKeySpecifier)[];
export type z_poll_response_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_response_max_fieldsKeySpecifier = ('created_at' | 'id' | 'pollId' | 'response_by' | 'value' | z_poll_response_max_fieldsKeySpecifier)[];
export type z_poll_response_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pollId?: FieldPolicy<any> | FieldReadFunction<any>,
	response_by?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_response_min_fieldsKeySpecifier = ('created_at' | 'id' | 'pollId' | 'response_by' | 'value' | z_poll_response_min_fieldsKeySpecifier)[];
export type z_poll_response_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pollId?: FieldPolicy<any> | FieldReadFunction<any>,
	response_by?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_poll_response_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_poll_response_mutation_responseKeySpecifier)[];
export type z_poll_response_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_profitKeySpecifier = ('assetId' | 'created_at' | 'id' | 'totalHolders' | 'totalProfit' | 'txHash' | 'z_asset' | 'z_profit_distributions' | 'z_profit_distributions_aggregate' | z_profitKeySpecifier)[];
export type z_profitFieldPolicy = {
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	totalHolders?: FieldPolicy<any> | FieldReadFunction<any>,
	totalProfit?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>,
	z_asset?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_distributions?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_distributions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_profit_aggregateKeySpecifier = ('aggregate' | 'nodes' | z_profit_aggregateKeySpecifier)[];
export type z_profit_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_profit_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | z_profit_aggregate_fieldsKeySpecifier)[];
export type z_profit_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_profit_distributionKeySpecifier = ('created_at' | 'id' | 'name' | 'profitId' | 'share_in_profit' | 'tokenHeld' | 'userId' | 'z_profit' | 'z_user' | z_profit_distributionKeySpecifier)[];
export type z_profit_distributionFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	profitId?: FieldPolicy<any> | FieldReadFunction<any>,
	share_in_profit?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenHeld?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_profit_distribution_aggregateKeySpecifier = ('aggregate' | 'nodes' | z_profit_distribution_aggregateKeySpecifier)[];
export type z_profit_distribution_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_profit_distribution_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | z_profit_distribution_aggregate_fieldsKeySpecifier)[];
export type z_profit_distribution_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_profit_distribution_max_fieldsKeySpecifier = ('created_at' | 'id' | 'name' | 'profitId' | 'share_in_profit' | 'tokenHeld' | 'userId' | z_profit_distribution_max_fieldsKeySpecifier)[];
export type z_profit_distribution_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	profitId?: FieldPolicy<any> | FieldReadFunction<any>,
	share_in_profit?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenHeld?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_profit_distribution_min_fieldsKeySpecifier = ('created_at' | 'id' | 'name' | 'profitId' | 'share_in_profit' | 'tokenHeld' | 'userId' | z_profit_distribution_min_fieldsKeySpecifier)[];
export type z_profit_distribution_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	profitId?: FieldPolicy<any> | FieldReadFunction<any>,
	share_in_profit?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenHeld?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_profit_distribution_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_profit_distribution_mutation_responseKeySpecifier)[];
export type z_profit_distribution_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_profit_max_fieldsKeySpecifier = ('assetId' | 'created_at' | 'id' | 'totalHolders' | 'totalProfit' | 'txHash' | z_profit_max_fieldsKeySpecifier)[];
export type z_profit_max_fieldsFieldPolicy = {
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	totalHolders?: FieldPolicy<any> | FieldReadFunction<any>,
	totalProfit?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_profit_min_fieldsKeySpecifier = ('assetId' | 'created_at' | 'id' | 'totalHolders' | 'totalProfit' | 'txHash' | z_profit_min_fieldsKeySpecifier)[];
export type z_profit_min_fieldsFieldPolicy = {
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	totalHolders?: FieldPolicy<any> | FieldReadFunction<any>,
	totalProfit?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_profit_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_profit_mutation_responseKeySpecifier)[];
export type z_profit_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_secondary_marketplaceKeySpecifier = ('amount' | 'assetId' | 'created_at' | 'id' | 'per_token_value' | 'price' | 'publisher' | 'z_asset' | 'z_user_publisher' | z_secondary_marketplaceKeySpecifier)[];
export type z_secondary_marketplaceFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	per_token_value?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	publisher?: FieldPolicy<any> | FieldReadFunction<any>,
	z_asset?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_publisher?: FieldPolicy<any> | FieldReadFunction<any>
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
export type z_secondary_marketplace_max_fieldsKeySpecifier = ('amount' | 'assetId' | 'created_at' | 'id' | 'per_token_value' | 'price' | 'publisher' | z_secondary_marketplace_max_fieldsKeySpecifier)[];
export type z_secondary_marketplace_max_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	per_token_value?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	publisher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_secondary_marketplace_min_fieldsKeySpecifier = ('amount' | 'assetId' | 'created_at' | 'id' | 'per_token_value' | 'price' | 'publisher' | z_secondary_marketplace_min_fieldsKeySpecifier)[];
export type z_secondary_marketplace_min_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	per_token_value?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	publisher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_secondary_marketplace_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_secondary_marketplace_mutation_responseKeySpecifier)[];
export type z_secondary_marketplace_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_token_holderKeySpecifier = ('amount' | 'assetId' | 'created_at' | 'id' | 'updated_at' | 'userId' | 'z_asset' | 'z_user' | z_token_holderKeySpecifier)[];
export type z_token_holderFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	z_asset?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type z_token_holder_max_fieldsKeySpecifier = ('amount' | 'assetId' | 'created_at' | 'id' | 'updated_at' | 'userId' | z_token_holder_max_fieldsKeySpecifier)[];
export type z_token_holder_max_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_token_holder_min_fieldsKeySpecifier = ('amount' | 'assetId' | 'created_at' | 'id' | 'updated_at' | 'userId' | z_token_holder_min_fieldsKeySpecifier)[];
export type z_token_holder_min_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_token_holder_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_token_holder_mutation_responseKeySpecifier)[];
export type z_token_holder_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_transaction_historyKeySpecifier = ('amount' | 'assetId' | 'blockNumber' | 'created_at' | 'id' | 'is_approved' | 'price' | 'receiver' | 'sender' | 'settlement_date' | 'txHash' | 'type' | 'z_asset' | 'z_user_by_receiver' | 'z_user_by_sender' | z_transaction_historyKeySpecifier)[];
export type z_transaction_historyFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	blockNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_approved?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	receiver?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	settlement_date?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	z_asset?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_by_receiver?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_by_sender?: FieldPolicy<any> | FieldReadFunction<any>
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
export type z_transaction_history_max_fieldsKeySpecifier = ('amount' | 'assetId' | 'blockNumber' | 'created_at' | 'id' | 'price' | 'receiver' | 'sender' | 'settlement_date' | 'txHash' | 'type' | z_transaction_history_max_fieldsKeySpecifier)[];
export type z_transaction_history_max_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	blockNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	receiver?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	settlement_date?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_transaction_history_min_fieldsKeySpecifier = ('amount' | 'assetId' | 'blockNumber' | 'created_at' | 'id' | 'price' | 'receiver' | 'sender' | 'settlement_date' | 'txHash' | 'type' | z_transaction_history_min_fieldsKeySpecifier)[];
export type z_transaction_history_min_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	blockNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	receiver?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	settlement_date?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_transaction_history_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_transaction_history_mutation_responseKeySpecifier)[];
export type z_transaction_history_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_user_tokenKeySpecifier = ('amount' | 'assetId' | 'id' | 'userId' | 'z_asset' | 'z_user' | z_user_tokenKeySpecifier)[];
export type z_user_tokenFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	z_asset?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_user_token_aggregateKeySpecifier = ('aggregate' | 'nodes' | z_user_token_aggregateKeySpecifier)[];
export type z_user_token_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_user_token_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | z_user_token_aggregate_fieldsKeySpecifier)[];
export type z_user_token_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_user_token_max_fieldsKeySpecifier = ('amount' | 'assetId' | 'id' | 'userId' | z_user_token_max_fieldsKeySpecifier)[];
export type z_user_token_max_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_user_token_min_fieldsKeySpecifier = ('amount' | 'assetId' | 'id' | 'userId' | z_user_token_min_fieldsKeySpecifier)[];
export type z_user_token_min_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_user_token_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | z_user_token_mutation_responseKeySpecifier)[];
export type z_user_token_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_usersKeySpecifier = ('address' | 'casa' | 'cif' | 'created_at' | 'document_cid' | 'id' | 'is_approved' | 'password' | 'pvtKey' | 'role' | 'segment' | 'txHash' | 'username' | 'zTransactionHistoriesBySender' | 'zTransactionHistoriesBySender_aggregate' | 'z_minted_histories' | 'z_minted_histories_aggregate' | 'z_poll_responses' | 'z_poll_responses_aggregate' | 'z_polls' | 'z_polls_aggregate' | 'z_profit_distributions' | 'z_profit_distributions_aggregate' | 'z_secondary_marketplaces' | 'z_secondary_marketplaces_aggregate' | 'z_token_holders' | 'z_token_holders_aggregate' | 'z_transaction_histories' | 'z_transaction_histories_aggregate' | 'z_user_tokens' | 'z_user_tokens_aggregate' | z_usersKeySpecifier)[];
export type z_usersFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	casa?: FieldPolicy<any> | FieldReadFunction<any>,
	cif?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	document_cid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_approved?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	pvtKey?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	segment?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	zTransactionHistoriesBySender?: FieldPolicy<any> | FieldReadFunction<any>,
	zTransactionHistoriesBySender_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minted_histories?: FieldPolicy<any> | FieldReadFunction<any>,
	z_minted_histories_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_responses?: FieldPolicy<any> | FieldReadFunction<any>,
	z_poll_responses_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_polls?: FieldPolicy<any> | FieldReadFunction<any>,
	z_polls_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_distributions?: FieldPolicy<any> | FieldReadFunction<any>,
	z_profit_distributions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplaces?: FieldPolicy<any> | FieldReadFunction<any>,
	z_secondary_marketplaces_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holders?: FieldPolicy<any> | FieldReadFunction<any>,
	z_token_holders_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_histories?: FieldPolicy<any> | FieldReadFunction<any>,
	z_transaction_histories_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	z_user_tokens_aggregate?: FieldPolicy<any> | FieldReadFunction<any>
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
export type z_users_max_fieldsKeySpecifier = ('address' | 'casa' | 'cif' | 'created_at' | 'document_cid' | 'id' | 'password' | 'pvtKey' | 'role' | 'segment' | 'txHash' | 'username' | z_users_max_fieldsKeySpecifier)[];
export type z_users_max_fieldsFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	casa?: FieldPolicy<any> | FieldReadFunction<any>,
	cif?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	document_cid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	pvtKey?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	segment?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type z_users_min_fieldsKeySpecifier = ('address' | 'casa' | 'cif' | 'created_at' | 'document_cid' | 'id' | 'password' | 'pvtKey' | 'role' | 'segment' | 'txHash' | 'username' | z_users_min_fieldsKeySpecifier)[];
export type z_users_min_fieldsFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	casa?: FieldPolicy<any> | FieldReadFunction<any>,
	cif?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	document_cid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	pvtKey?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	segment?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>,
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
	user_setting: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_settingKeySpecifier | (() => undefined | user_settingKeySpecifier),
		fields?: user_settingFieldPolicy,
	},
	user_setting_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_aggregateKeySpecifier | (() => undefined | user_setting_aggregateKeySpecifier),
		fields?: user_setting_aggregateFieldPolicy,
	},
	user_setting_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_aggregate_fieldsKeySpecifier | (() => undefined | user_setting_aggregate_fieldsKeySpecifier),
		fields?: user_setting_aggregate_fieldsFieldPolicy,
	},
	user_setting_avg_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_avg_fieldsKeySpecifier | (() => undefined | user_setting_avg_fieldsKeySpecifier),
		fields?: user_setting_avg_fieldsFieldPolicy,
	},
	user_setting_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_max_fieldsKeySpecifier | (() => undefined | user_setting_max_fieldsKeySpecifier),
		fields?: user_setting_max_fieldsFieldPolicy,
	},
	user_setting_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_min_fieldsKeySpecifier | (() => undefined | user_setting_min_fieldsKeySpecifier),
		fields?: user_setting_min_fieldsFieldPolicy,
	},
	user_setting_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_mutation_responseKeySpecifier | (() => undefined | user_setting_mutation_responseKeySpecifier),
		fields?: user_setting_mutation_responseFieldPolicy,
	},
	user_setting_stddev_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_stddev_fieldsKeySpecifier | (() => undefined | user_setting_stddev_fieldsKeySpecifier),
		fields?: user_setting_stddev_fieldsFieldPolicy,
	},
	user_setting_stddev_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_stddev_pop_fieldsKeySpecifier | (() => undefined | user_setting_stddev_pop_fieldsKeySpecifier),
		fields?: user_setting_stddev_pop_fieldsFieldPolicy,
	},
	user_setting_stddev_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_stddev_samp_fieldsKeySpecifier | (() => undefined | user_setting_stddev_samp_fieldsKeySpecifier),
		fields?: user_setting_stddev_samp_fieldsFieldPolicy,
	},
	user_setting_sum_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_sum_fieldsKeySpecifier | (() => undefined | user_setting_sum_fieldsKeySpecifier),
		fields?: user_setting_sum_fieldsFieldPolicy,
	},
	user_setting_var_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_var_pop_fieldsKeySpecifier | (() => undefined | user_setting_var_pop_fieldsKeySpecifier),
		fields?: user_setting_var_pop_fieldsFieldPolicy,
	},
	user_setting_var_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_var_samp_fieldsKeySpecifier | (() => undefined | user_setting_var_samp_fieldsKeySpecifier),
		fields?: user_setting_var_samp_fieldsFieldPolicy,
	},
	user_setting_variance_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_variance_fieldsKeySpecifier | (() => undefined | user_setting_variance_fieldsKeySpecifier),
		fields?: user_setting_variance_fieldsFieldPolicy,
	},
	z_assets: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_assetsKeySpecifier | (() => undefined | z_assetsKeySpecifier),
		fields?: z_assetsFieldPolicy,
	},
	z_assets_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_assets_aggregateKeySpecifier | (() => undefined | z_assets_aggregateKeySpecifier),
		fields?: z_assets_aggregateFieldPolicy,
	},
	z_assets_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_assets_aggregate_fieldsKeySpecifier | (() => undefined | z_assets_aggregate_fieldsKeySpecifier),
		fields?: z_assets_aggregate_fieldsFieldPolicy,
	},
	z_assets_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_assets_max_fieldsKeySpecifier | (() => undefined | z_assets_max_fieldsKeySpecifier),
		fields?: z_assets_max_fieldsFieldPolicy,
	},
	z_assets_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_assets_min_fieldsKeySpecifier | (() => undefined | z_assets_min_fieldsKeySpecifier),
		fields?: z_assets_min_fieldsFieldPolicy,
	},
	z_assets_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_assets_mutation_responseKeySpecifier | (() => undefined | z_assets_mutation_responseKeySpecifier),
		fields?: z_assets_mutation_responseFieldPolicy,
	},
	z_minted_history: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_minted_historyKeySpecifier | (() => undefined | z_minted_historyKeySpecifier),
		fields?: z_minted_historyFieldPolicy,
	},
	z_minted_history_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_minted_history_aggregateKeySpecifier | (() => undefined | z_minted_history_aggregateKeySpecifier),
		fields?: z_minted_history_aggregateFieldPolicy,
	},
	z_minted_history_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_minted_history_aggregate_fieldsKeySpecifier | (() => undefined | z_minted_history_aggregate_fieldsKeySpecifier),
		fields?: z_minted_history_aggregate_fieldsFieldPolicy,
	},
	z_minted_history_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_minted_history_max_fieldsKeySpecifier | (() => undefined | z_minted_history_max_fieldsKeySpecifier),
		fields?: z_minted_history_max_fieldsFieldPolicy,
	},
	z_minted_history_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_minted_history_min_fieldsKeySpecifier | (() => undefined | z_minted_history_min_fieldsKeySpecifier),
		fields?: z_minted_history_min_fieldsFieldPolicy,
	},
	z_minted_history_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_minted_history_mutation_responseKeySpecifier | (() => undefined | z_minted_history_mutation_responseKeySpecifier),
		fields?: z_minted_history_mutation_responseFieldPolicy,
	},
	z_poll: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_pollKeySpecifier | (() => undefined | z_pollKeySpecifier),
		fields?: z_pollFieldPolicy,
	},
	z_poll_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_aggregateKeySpecifier | (() => undefined | z_poll_aggregateKeySpecifier),
		fields?: z_poll_aggregateFieldPolicy,
	},
	z_poll_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_aggregate_fieldsKeySpecifier | (() => undefined | z_poll_aggregate_fieldsKeySpecifier),
		fields?: z_poll_aggregate_fieldsFieldPolicy,
	},
	z_poll_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_max_fieldsKeySpecifier | (() => undefined | z_poll_max_fieldsKeySpecifier),
		fields?: z_poll_max_fieldsFieldPolicy,
	},
	z_poll_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_min_fieldsKeySpecifier | (() => undefined | z_poll_min_fieldsKeySpecifier),
		fields?: z_poll_min_fieldsFieldPolicy,
	},
	z_poll_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_mutation_responseKeySpecifier | (() => undefined | z_poll_mutation_responseKeySpecifier),
		fields?: z_poll_mutation_responseFieldPolicy,
	},
	z_poll_options: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_optionsKeySpecifier | (() => undefined | z_poll_optionsKeySpecifier),
		fields?: z_poll_optionsFieldPolicy,
	},
	z_poll_options_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_options_aggregateKeySpecifier | (() => undefined | z_poll_options_aggregateKeySpecifier),
		fields?: z_poll_options_aggregateFieldPolicy,
	},
	z_poll_options_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_options_aggregate_fieldsKeySpecifier | (() => undefined | z_poll_options_aggregate_fieldsKeySpecifier),
		fields?: z_poll_options_aggregate_fieldsFieldPolicy,
	},
	z_poll_options_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_options_max_fieldsKeySpecifier | (() => undefined | z_poll_options_max_fieldsKeySpecifier),
		fields?: z_poll_options_max_fieldsFieldPolicy,
	},
	z_poll_options_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_options_min_fieldsKeySpecifier | (() => undefined | z_poll_options_min_fieldsKeySpecifier),
		fields?: z_poll_options_min_fieldsFieldPolicy,
	},
	z_poll_options_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_options_mutation_responseKeySpecifier | (() => undefined | z_poll_options_mutation_responseKeySpecifier),
		fields?: z_poll_options_mutation_responseFieldPolicy,
	},
	z_poll_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_responseKeySpecifier | (() => undefined | z_poll_responseKeySpecifier),
		fields?: z_poll_responseFieldPolicy,
	},
	z_poll_response_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_response_aggregateKeySpecifier | (() => undefined | z_poll_response_aggregateKeySpecifier),
		fields?: z_poll_response_aggregateFieldPolicy,
	},
	z_poll_response_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_response_aggregate_fieldsKeySpecifier | (() => undefined | z_poll_response_aggregate_fieldsKeySpecifier),
		fields?: z_poll_response_aggregate_fieldsFieldPolicy,
	},
	z_poll_response_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_response_max_fieldsKeySpecifier | (() => undefined | z_poll_response_max_fieldsKeySpecifier),
		fields?: z_poll_response_max_fieldsFieldPolicy,
	},
	z_poll_response_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_response_min_fieldsKeySpecifier | (() => undefined | z_poll_response_min_fieldsKeySpecifier),
		fields?: z_poll_response_min_fieldsFieldPolicy,
	},
	z_poll_response_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_poll_response_mutation_responseKeySpecifier | (() => undefined | z_poll_response_mutation_responseKeySpecifier),
		fields?: z_poll_response_mutation_responseFieldPolicy,
	},
	z_profit: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_profitKeySpecifier | (() => undefined | z_profitKeySpecifier),
		fields?: z_profitFieldPolicy,
	},
	z_profit_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_profit_aggregateKeySpecifier | (() => undefined | z_profit_aggregateKeySpecifier),
		fields?: z_profit_aggregateFieldPolicy,
	},
	z_profit_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_profit_aggregate_fieldsKeySpecifier | (() => undefined | z_profit_aggregate_fieldsKeySpecifier),
		fields?: z_profit_aggregate_fieldsFieldPolicy,
	},
	z_profit_distribution: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_profit_distributionKeySpecifier | (() => undefined | z_profit_distributionKeySpecifier),
		fields?: z_profit_distributionFieldPolicy,
	},
	z_profit_distribution_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_profit_distribution_aggregateKeySpecifier | (() => undefined | z_profit_distribution_aggregateKeySpecifier),
		fields?: z_profit_distribution_aggregateFieldPolicy,
	},
	z_profit_distribution_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_profit_distribution_aggregate_fieldsKeySpecifier | (() => undefined | z_profit_distribution_aggregate_fieldsKeySpecifier),
		fields?: z_profit_distribution_aggregate_fieldsFieldPolicy,
	},
	z_profit_distribution_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_profit_distribution_max_fieldsKeySpecifier | (() => undefined | z_profit_distribution_max_fieldsKeySpecifier),
		fields?: z_profit_distribution_max_fieldsFieldPolicy,
	},
	z_profit_distribution_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_profit_distribution_min_fieldsKeySpecifier | (() => undefined | z_profit_distribution_min_fieldsKeySpecifier),
		fields?: z_profit_distribution_min_fieldsFieldPolicy,
	},
	z_profit_distribution_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_profit_distribution_mutation_responseKeySpecifier | (() => undefined | z_profit_distribution_mutation_responseKeySpecifier),
		fields?: z_profit_distribution_mutation_responseFieldPolicy,
	},
	z_profit_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_profit_max_fieldsKeySpecifier | (() => undefined | z_profit_max_fieldsKeySpecifier),
		fields?: z_profit_max_fieldsFieldPolicy,
	},
	z_profit_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_profit_min_fieldsKeySpecifier | (() => undefined | z_profit_min_fieldsKeySpecifier),
		fields?: z_profit_min_fieldsFieldPolicy,
	},
	z_profit_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_profit_mutation_responseKeySpecifier | (() => undefined | z_profit_mutation_responseKeySpecifier),
		fields?: z_profit_mutation_responseFieldPolicy,
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
	z_user_token: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_user_tokenKeySpecifier | (() => undefined | z_user_tokenKeySpecifier),
		fields?: z_user_tokenFieldPolicy,
	},
	z_user_token_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_user_token_aggregateKeySpecifier | (() => undefined | z_user_token_aggregateKeySpecifier),
		fields?: z_user_token_aggregateFieldPolicy,
	},
	z_user_token_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_user_token_aggregate_fieldsKeySpecifier | (() => undefined | z_user_token_aggregate_fieldsKeySpecifier),
		fields?: z_user_token_aggregate_fieldsFieldPolicy,
	},
	z_user_token_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_user_token_max_fieldsKeySpecifier | (() => undefined | z_user_token_max_fieldsKeySpecifier),
		fields?: z_user_token_max_fieldsFieldPolicy,
	},
	z_user_token_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_user_token_min_fieldsKeySpecifier | (() => undefined | z_user_token_min_fieldsKeySpecifier),
		fields?: z_user_token_min_fieldsFieldPolicy,
	},
	z_user_token_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | z_user_token_mutation_responseKeySpecifier | (() => undefined | z_user_token_mutation_responseKeySpecifier),
		fields?: z_user_token_mutation_responseFieldPolicy,
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
    