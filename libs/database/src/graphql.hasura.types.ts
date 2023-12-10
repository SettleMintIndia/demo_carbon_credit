export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Boolean']>;
  _gt: InputMaybe<Scalars['Boolean']>;
  _gte: InputMaybe<Scalars['Boolean']>;
  _in: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['Boolean']>;
  _lte: InputMaybe<Scalars['Boolean']>;
  _neq: InputMaybe<Scalars['Boolean']>;
  _nin: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Int']>;
  _gt: InputMaybe<Scalars['Int']>;
  _gte: InputMaybe<Scalars['Int']>;
  _in: InputMaybe<Array<Scalars['Int']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['Int']>;
  _lte: InputMaybe<Scalars['Int']>;
  _neq: InputMaybe<Scalars['Int']>;
  _nin: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq: InputMaybe<Scalars['String']>;
  _gt: InputMaybe<Scalars['String']>;
  _gte: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['String']>;
  _in: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['String']>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['String']>;
  _lt: InputMaybe<Scalars['String']>;
  _lte: InputMaybe<Scalars['String']>;
  _neq: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['String']>;
  _nin: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename: 'mutation_root';
  /** delete data from the table: "user_setting" */
  delete_user_setting: Maybe<User_Setting_Mutation_Response>;
  /** delete single row from the table: "user_setting" */
  delete_user_setting_by_pk: Maybe<User_Setting>;
  /** delete data from the table: "z_assets" */
  delete_z_assets: Maybe<Z_Assets_Mutation_Response>;
  /** delete single row from the table: "z_assets" */
  delete_z_assets_by_pk: Maybe<Z_Assets>;
  /** delete data from the table: "z_minted_history" */
  delete_z_minted_history: Maybe<Z_Minted_History_Mutation_Response>;
  /** delete single row from the table: "z_minted_history" */
  delete_z_minted_history_by_pk: Maybe<Z_Minted_History>;
  /** delete data from the table: "z_poll" */
  delete_z_poll: Maybe<Z_Poll_Mutation_Response>;
  /** delete single row from the table: "z_poll" */
  delete_z_poll_by_pk: Maybe<Z_Poll>;
  /** delete data from the table: "z_poll_options" */
  delete_z_poll_options: Maybe<Z_Poll_Options_Mutation_Response>;
  /** delete single row from the table: "z_poll_options" */
  delete_z_poll_options_by_pk: Maybe<Z_Poll_Options>;
  /** delete data from the table: "z_poll_response" */
  delete_z_poll_response: Maybe<Z_Poll_Response_Mutation_Response>;
  /** delete single row from the table: "z_poll_response" */
  delete_z_poll_response_by_pk: Maybe<Z_Poll_Response>;
  /** delete data from the table: "z_profit" */
  delete_z_profit: Maybe<Z_Profit_Mutation_Response>;
  /** delete single row from the table: "z_profit" */
  delete_z_profit_by_pk: Maybe<Z_Profit>;
  /** delete data from the table: "z_profit_distribution" */
  delete_z_profit_distribution: Maybe<Z_Profit_Distribution_Mutation_Response>;
  /** delete single row from the table: "z_profit_distribution" */
  delete_z_profit_distribution_by_pk: Maybe<Z_Profit_Distribution>;
  /** delete data from the table: "z_secondary_marketplace" */
  delete_z_secondary_marketplace: Maybe<Z_Secondary_Marketplace_Mutation_Response>;
  /** delete single row from the table: "z_secondary_marketplace" */
  delete_z_secondary_marketplace_by_pk: Maybe<Z_Secondary_Marketplace>;
  /** delete data from the table: "z_token_holder" */
  delete_z_token_holder: Maybe<Z_Token_Holder_Mutation_Response>;
  /** delete single row from the table: "z_token_holder" */
  delete_z_token_holder_by_pk: Maybe<Z_Token_Holder>;
  /** delete data from the table: "z_transaction_history" */
  delete_z_transaction_history: Maybe<Z_Transaction_History_Mutation_Response>;
  /** delete single row from the table: "z_transaction_history" */
  delete_z_transaction_history_by_pk: Maybe<Z_Transaction_History>;
  /** delete data from the table: "z_user_token" */
  delete_z_user_token: Maybe<Z_User_Token_Mutation_Response>;
  /** delete single row from the table: "z_user_token" */
  delete_z_user_token_by_pk: Maybe<Z_User_Token>;
  /** delete data from the table: "z_users" */
  delete_z_users: Maybe<Z_Users_Mutation_Response>;
  /** delete single row from the table: "z_users" */
  delete_z_users_by_pk: Maybe<Z_Users>;
  /** insert data into the table: "user_setting" */
  insert_user_setting: Maybe<User_Setting_Mutation_Response>;
  /** insert a single row into the table: "user_setting" */
  insert_user_setting_one: Maybe<User_Setting>;
  /** insert data into the table: "z_assets" */
  insert_z_assets: Maybe<Z_Assets_Mutation_Response>;
  /** insert a single row into the table: "z_assets" */
  insert_z_assets_one: Maybe<Z_Assets>;
  /** insert data into the table: "z_minted_history" */
  insert_z_minted_history: Maybe<Z_Minted_History_Mutation_Response>;
  /** insert a single row into the table: "z_minted_history" */
  insert_z_minted_history_one: Maybe<Z_Minted_History>;
  /** insert data into the table: "z_poll" */
  insert_z_poll: Maybe<Z_Poll_Mutation_Response>;
  /** insert a single row into the table: "z_poll" */
  insert_z_poll_one: Maybe<Z_Poll>;
  /** insert data into the table: "z_poll_options" */
  insert_z_poll_options: Maybe<Z_Poll_Options_Mutation_Response>;
  /** insert a single row into the table: "z_poll_options" */
  insert_z_poll_options_one: Maybe<Z_Poll_Options>;
  /** insert data into the table: "z_poll_response" */
  insert_z_poll_response: Maybe<Z_Poll_Response_Mutation_Response>;
  /** insert a single row into the table: "z_poll_response" */
  insert_z_poll_response_one: Maybe<Z_Poll_Response>;
  /** insert data into the table: "z_profit" */
  insert_z_profit: Maybe<Z_Profit_Mutation_Response>;
  /** insert data into the table: "z_profit_distribution" */
  insert_z_profit_distribution: Maybe<Z_Profit_Distribution_Mutation_Response>;
  /** insert a single row into the table: "z_profit_distribution" */
  insert_z_profit_distribution_one: Maybe<Z_Profit_Distribution>;
  /** insert a single row into the table: "z_profit" */
  insert_z_profit_one: Maybe<Z_Profit>;
  /** insert data into the table: "z_secondary_marketplace" */
  insert_z_secondary_marketplace: Maybe<Z_Secondary_Marketplace_Mutation_Response>;
  /** insert a single row into the table: "z_secondary_marketplace" */
  insert_z_secondary_marketplace_one: Maybe<Z_Secondary_Marketplace>;
  /** insert data into the table: "z_token_holder" */
  insert_z_token_holder: Maybe<Z_Token_Holder_Mutation_Response>;
  /** insert a single row into the table: "z_token_holder" */
  insert_z_token_holder_one: Maybe<Z_Token_Holder>;
  /** insert data into the table: "z_transaction_history" */
  insert_z_transaction_history: Maybe<Z_Transaction_History_Mutation_Response>;
  /** insert a single row into the table: "z_transaction_history" */
  insert_z_transaction_history_one: Maybe<Z_Transaction_History>;
  /** insert data into the table: "z_user_token" */
  insert_z_user_token: Maybe<Z_User_Token_Mutation_Response>;
  /** insert a single row into the table: "z_user_token" */
  insert_z_user_token_one: Maybe<Z_User_Token>;
  /** insert data into the table: "z_users" */
  insert_z_users: Maybe<Z_Users_Mutation_Response>;
  /** insert a single row into the table: "z_users" */
  insert_z_users_one: Maybe<Z_Users>;
  /** update data of the table: "user_setting" */
  update_user_setting: Maybe<User_Setting_Mutation_Response>;
  /** update single row of the table: "user_setting" */
  update_user_setting_by_pk: Maybe<User_Setting>;
  /** update multiples rows of table: "user_setting" */
  update_user_setting_many: Maybe<Array<Maybe<User_Setting_Mutation_Response>>>;
  /** update data of the table: "z_assets" */
  update_z_assets: Maybe<Z_Assets_Mutation_Response>;
  /** update single row of the table: "z_assets" */
  update_z_assets_by_pk: Maybe<Z_Assets>;
  /** update multiples rows of table: "z_assets" */
  update_z_assets_many: Maybe<Array<Maybe<Z_Assets_Mutation_Response>>>;
  /** update data of the table: "z_minted_history" */
  update_z_minted_history: Maybe<Z_Minted_History_Mutation_Response>;
  /** update single row of the table: "z_minted_history" */
  update_z_minted_history_by_pk: Maybe<Z_Minted_History>;
  /** update multiples rows of table: "z_minted_history" */
  update_z_minted_history_many: Maybe<Array<Maybe<Z_Minted_History_Mutation_Response>>>;
  /** update data of the table: "z_poll" */
  update_z_poll: Maybe<Z_Poll_Mutation_Response>;
  /** update single row of the table: "z_poll" */
  update_z_poll_by_pk: Maybe<Z_Poll>;
  /** update multiples rows of table: "z_poll" */
  update_z_poll_many: Maybe<Array<Maybe<Z_Poll_Mutation_Response>>>;
  /** update data of the table: "z_poll_options" */
  update_z_poll_options: Maybe<Z_Poll_Options_Mutation_Response>;
  /** update single row of the table: "z_poll_options" */
  update_z_poll_options_by_pk: Maybe<Z_Poll_Options>;
  /** update multiples rows of table: "z_poll_options" */
  update_z_poll_options_many: Maybe<Array<Maybe<Z_Poll_Options_Mutation_Response>>>;
  /** update data of the table: "z_poll_response" */
  update_z_poll_response: Maybe<Z_Poll_Response_Mutation_Response>;
  /** update single row of the table: "z_poll_response" */
  update_z_poll_response_by_pk: Maybe<Z_Poll_Response>;
  /** update multiples rows of table: "z_poll_response" */
  update_z_poll_response_many: Maybe<Array<Maybe<Z_Poll_Response_Mutation_Response>>>;
  /** update data of the table: "z_profit" */
  update_z_profit: Maybe<Z_Profit_Mutation_Response>;
  /** update single row of the table: "z_profit" */
  update_z_profit_by_pk: Maybe<Z_Profit>;
  /** update data of the table: "z_profit_distribution" */
  update_z_profit_distribution: Maybe<Z_Profit_Distribution_Mutation_Response>;
  /** update single row of the table: "z_profit_distribution" */
  update_z_profit_distribution_by_pk: Maybe<Z_Profit_Distribution>;
  /** update multiples rows of table: "z_profit_distribution" */
  update_z_profit_distribution_many: Maybe<Array<Maybe<Z_Profit_Distribution_Mutation_Response>>>;
  /** update multiples rows of table: "z_profit" */
  update_z_profit_many: Maybe<Array<Maybe<Z_Profit_Mutation_Response>>>;
  /** update data of the table: "z_secondary_marketplace" */
  update_z_secondary_marketplace: Maybe<Z_Secondary_Marketplace_Mutation_Response>;
  /** update single row of the table: "z_secondary_marketplace" */
  update_z_secondary_marketplace_by_pk: Maybe<Z_Secondary_Marketplace>;
  /** update multiples rows of table: "z_secondary_marketplace" */
  update_z_secondary_marketplace_many: Maybe<Array<Maybe<Z_Secondary_Marketplace_Mutation_Response>>>;
  /** update data of the table: "z_token_holder" */
  update_z_token_holder: Maybe<Z_Token_Holder_Mutation_Response>;
  /** update single row of the table: "z_token_holder" */
  update_z_token_holder_by_pk: Maybe<Z_Token_Holder>;
  /** update multiples rows of table: "z_token_holder" */
  update_z_token_holder_many: Maybe<Array<Maybe<Z_Token_Holder_Mutation_Response>>>;
  /** update data of the table: "z_transaction_history" */
  update_z_transaction_history: Maybe<Z_Transaction_History_Mutation_Response>;
  /** update single row of the table: "z_transaction_history" */
  update_z_transaction_history_by_pk: Maybe<Z_Transaction_History>;
  /** update multiples rows of table: "z_transaction_history" */
  update_z_transaction_history_many: Maybe<Array<Maybe<Z_Transaction_History_Mutation_Response>>>;
  /** update data of the table: "z_user_token" */
  update_z_user_token: Maybe<Z_User_Token_Mutation_Response>;
  /** update single row of the table: "z_user_token" */
  update_z_user_token_by_pk: Maybe<Z_User_Token>;
  /** update multiples rows of table: "z_user_token" */
  update_z_user_token_many: Maybe<Array<Maybe<Z_User_Token_Mutation_Response>>>;
  /** update data of the table: "z_users" */
  update_z_users: Maybe<Z_Users_Mutation_Response>;
  /** update single row of the table: "z_users" */
  update_z_users_by_pk: Maybe<Z_Users>;
  /** update multiples rows of table: "z_users" */
  update_z_users_many: Maybe<Array<Maybe<Z_Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_User_SettingArgs = {
  where: User_Setting_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Setting_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Z_AssetsArgs = {
  where: Z_Assets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_Assets_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Z_Minted_HistoryArgs = {
  where: Z_Minted_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_Minted_History_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Z_PollArgs = {
  where: Z_Poll_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_Poll_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Z_Poll_OptionsArgs = {
  where: Z_Poll_Options_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_Poll_Options_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Z_Poll_ResponseArgs = {
  where: Z_Poll_Response_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_Poll_Response_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Z_ProfitArgs = {
  where: Z_Profit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_Profit_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Z_Profit_DistributionArgs = {
  where: Z_Profit_Distribution_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_Profit_Distribution_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Z_Secondary_MarketplaceArgs = {
  where: Z_Secondary_Marketplace_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_Secondary_Marketplace_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Z_Token_HolderArgs = {
  where: Z_Token_Holder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_Token_Holder_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Z_Transaction_HistoryArgs = {
  where: Z_Transaction_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_Transaction_History_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Z_User_TokenArgs = {
  where: Z_User_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_User_Token_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Z_UsersArgs = {
  where: Z_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_User_SettingArgs = {
  objects: Array<User_Setting_Insert_Input>;
  on_conflict: InputMaybe<User_Setting_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Setting_OneArgs = {
  object: User_Setting_Insert_Input;
  on_conflict: InputMaybe<User_Setting_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_AssetsArgs = {
  objects: Array<Z_Assets_Insert_Input>;
  on_conflict: InputMaybe<Z_Assets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Assets_OneArgs = {
  object: Z_Assets_Insert_Input;
  on_conflict: InputMaybe<Z_Assets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Minted_HistoryArgs = {
  objects: Array<Z_Minted_History_Insert_Input>;
  on_conflict: InputMaybe<Z_Minted_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Minted_History_OneArgs = {
  object: Z_Minted_History_Insert_Input;
  on_conflict: InputMaybe<Z_Minted_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_PollArgs = {
  objects: Array<Z_Poll_Insert_Input>;
  on_conflict: InputMaybe<Z_Poll_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Poll_OneArgs = {
  object: Z_Poll_Insert_Input;
  on_conflict: InputMaybe<Z_Poll_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Poll_OptionsArgs = {
  objects: Array<Z_Poll_Options_Insert_Input>;
  on_conflict: InputMaybe<Z_Poll_Options_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Poll_Options_OneArgs = {
  object: Z_Poll_Options_Insert_Input;
  on_conflict: InputMaybe<Z_Poll_Options_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Poll_ResponseArgs = {
  objects: Array<Z_Poll_Response_Insert_Input>;
  on_conflict: InputMaybe<Z_Poll_Response_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Poll_Response_OneArgs = {
  object: Z_Poll_Response_Insert_Input;
  on_conflict: InputMaybe<Z_Poll_Response_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_ProfitArgs = {
  objects: Array<Z_Profit_Insert_Input>;
  on_conflict: InputMaybe<Z_Profit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Profit_DistributionArgs = {
  objects: Array<Z_Profit_Distribution_Insert_Input>;
  on_conflict: InputMaybe<Z_Profit_Distribution_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Profit_Distribution_OneArgs = {
  object: Z_Profit_Distribution_Insert_Input;
  on_conflict: InputMaybe<Z_Profit_Distribution_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Profit_OneArgs = {
  object: Z_Profit_Insert_Input;
  on_conflict: InputMaybe<Z_Profit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Secondary_MarketplaceArgs = {
  objects: Array<Z_Secondary_Marketplace_Insert_Input>;
  on_conflict: InputMaybe<Z_Secondary_Marketplace_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Secondary_Marketplace_OneArgs = {
  object: Z_Secondary_Marketplace_Insert_Input;
  on_conflict: InputMaybe<Z_Secondary_Marketplace_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Token_HolderArgs = {
  objects: Array<Z_Token_Holder_Insert_Input>;
  on_conflict: InputMaybe<Z_Token_Holder_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Token_Holder_OneArgs = {
  object: Z_Token_Holder_Insert_Input;
  on_conflict: InputMaybe<Z_Token_Holder_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Transaction_HistoryArgs = {
  objects: Array<Z_Transaction_History_Insert_Input>;
  on_conflict: InputMaybe<Z_Transaction_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Transaction_History_OneArgs = {
  object: Z_Transaction_History_Insert_Input;
  on_conflict: InputMaybe<Z_Transaction_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_User_TokenArgs = {
  objects: Array<Z_User_Token_Insert_Input>;
  on_conflict: InputMaybe<Z_User_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_User_Token_OneArgs = {
  object: Z_User_Token_Insert_Input;
  on_conflict: InputMaybe<Z_User_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_UsersArgs = {
  objects: Array<Z_Users_Insert_Input>;
  on_conflict: InputMaybe<Z_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Users_OneArgs = {
  object: Z_Users_Insert_Input;
  on_conflict: InputMaybe<Z_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_User_SettingArgs = {
  _inc: InputMaybe<User_Setting_Inc_Input>;
  _set: InputMaybe<User_Setting_Set_Input>;
  where: User_Setting_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Setting_By_PkArgs = {
  _inc: InputMaybe<User_Setting_Inc_Input>;
  _set: InputMaybe<User_Setting_Set_Input>;
  pk_columns: User_Setting_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Setting_ManyArgs = {
  updates: Array<User_Setting_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Z_AssetsArgs = {
  _set: InputMaybe<Z_Assets_Set_Input>;
  where: Z_Assets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Assets_By_PkArgs = {
  _set: InputMaybe<Z_Assets_Set_Input>;
  pk_columns: Z_Assets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Assets_ManyArgs = {
  updates: Array<Z_Assets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Minted_HistoryArgs = {
  _set: InputMaybe<Z_Minted_History_Set_Input>;
  where: Z_Minted_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Minted_History_By_PkArgs = {
  _set: InputMaybe<Z_Minted_History_Set_Input>;
  pk_columns: Z_Minted_History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Minted_History_ManyArgs = {
  updates: Array<Z_Minted_History_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Z_PollArgs = {
  _set: InputMaybe<Z_Poll_Set_Input>;
  where: Z_Poll_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Poll_By_PkArgs = {
  _set: InputMaybe<Z_Poll_Set_Input>;
  pk_columns: Z_Poll_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Poll_ManyArgs = {
  updates: Array<Z_Poll_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Poll_OptionsArgs = {
  _set: InputMaybe<Z_Poll_Options_Set_Input>;
  where: Z_Poll_Options_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Poll_Options_By_PkArgs = {
  _set: InputMaybe<Z_Poll_Options_Set_Input>;
  pk_columns: Z_Poll_Options_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Poll_Options_ManyArgs = {
  updates: Array<Z_Poll_Options_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Poll_ResponseArgs = {
  _set: InputMaybe<Z_Poll_Response_Set_Input>;
  where: Z_Poll_Response_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Poll_Response_By_PkArgs = {
  _set: InputMaybe<Z_Poll_Response_Set_Input>;
  pk_columns: Z_Poll_Response_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Poll_Response_ManyArgs = {
  updates: Array<Z_Poll_Response_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Z_ProfitArgs = {
  _set: InputMaybe<Z_Profit_Set_Input>;
  where: Z_Profit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Profit_By_PkArgs = {
  _set: InputMaybe<Z_Profit_Set_Input>;
  pk_columns: Z_Profit_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Profit_DistributionArgs = {
  _set: InputMaybe<Z_Profit_Distribution_Set_Input>;
  where: Z_Profit_Distribution_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Profit_Distribution_By_PkArgs = {
  _set: InputMaybe<Z_Profit_Distribution_Set_Input>;
  pk_columns: Z_Profit_Distribution_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Profit_Distribution_ManyArgs = {
  updates: Array<Z_Profit_Distribution_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Profit_ManyArgs = {
  updates: Array<Z_Profit_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Secondary_MarketplaceArgs = {
  _set: InputMaybe<Z_Secondary_Marketplace_Set_Input>;
  where: Z_Secondary_Marketplace_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Secondary_Marketplace_By_PkArgs = {
  _set: InputMaybe<Z_Secondary_Marketplace_Set_Input>;
  pk_columns: Z_Secondary_Marketplace_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Secondary_Marketplace_ManyArgs = {
  updates: Array<Z_Secondary_Marketplace_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Token_HolderArgs = {
  _set: InputMaybe<Z_Token_Holder_Set_Input>;
  where: Z_Token_Holder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Token_Holder_By_PkArgs = {
  _set: InputMaybe<Z_Token_Holder_Set_Input>;
  pk_columns: Z_Token_Holder_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Token_Holder_ManyArgs = {
  updates: Array<Z_Token_Holder_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Transaction_HistoryArgs = {
  _set: InputMaybe<Z_Transaction_History_Set_Input>;
  where: Z_Transaction_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Transaction_History_By_PkArgs = {
  _set: InputMaybe<Z_Transaction_History_Set_Input>;
  pk_columns: Z_Transaction_History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Transaction_History_ManyArgs = {
  updates: Array<Z_Transaction_History_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Z_User_TokenArgs = {
  _set: InputMaybe<Z_User_Token_Set_Input>;
  where: Z_User_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Z_User_Token_By_PkArgs = {
  _set: InputMaybe<Z_User_Token_Set_Input>;
  pk_columns: Z_User_Token_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Z_User_Token_ManyArgs = {
  updates: Array<Z_User_Token_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Z_UsersArgs = {
  _set: InputMaybe<Z_Users_Set_Input>;
  where: Z_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Users_By_PkArgs = {
  _set: InputMaybe<Z_Users_Set_Input>;
  pk_columns: Z_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Users_ManyArgs = {
  updates: Array<Z_Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename: 'query_root';
  /** fetch data from the table: "user_setting" */
  user_setting: Array<User_Setting>;
  /** fetch aggregated fields from the table: "user_setting" */
  user_setting_aggregate: User_Setting_Aggregate;
  /** fetch data from the table: "user_setting" using primary key columns */
  user_setting_by_pk: Maybe<User_Setting>;
  /** fetch data from the table: "z_assets" */
  z_assets: Array<Z_Assets>;
  /** fetch aggregated fields from the table: "z_assets" */
  z_assets_aggregate: Z_Assets_Aggregate;
  /** fetch data from the table: "z_assets" using primary key columns */
  z_assets_by_pk: Maybe<Z_Assets>;
  /** fetch data from the table: "z_minted_history" */
  z_minted_history: Array<Z_Minted_History>;
  /** fetch aggregated fields from the table: "z_minted_history" */
  z_minted_history_aggregate: Z_Minted_History_Aggregate;
  /** fetch data from the table: "z_minted_history" using primary key columns */
  z_minted_history_by_pk: Maybe<Z_Minted_History>;
  /** fetch data from the table: "z_poll" */
  z_poll: Array<Z_Poll>;
  /** fetch aggregated fields from the table: "z_poll" */
  z_poll_aggregate: Z_Poll_Aggregate;
  /** fetch data from the table: "z_poll" using primary key columns */
  z_poll_by_pk: Maybe<Z_Poll>;
  /** An array relationship */
  z_poll_options: Array<Z_Poll_Options>;
  /** An aggregate relationship */
  z_poll_options_aggregate: Z_Poll_Options_Aggregate;
  /** fetch data from the table: "z_poll_options" using primary key columns */
  z_poll_options_by_pk: Maybe<Z_Poll_Options>;
  /** fetch data from the table: "z_poll_response" */
  z_poll_response: Array<Z_Poll_Response>;
  /** fetch aggregated fields from the table: "z_poll_response" */
  z_poll_response_aggregate: Z_Poll_Response_Aggregate;
  /** fetch data from the table: "z_poll_response" using primary key columns */
  z_poll_response_by_pk: Maybe<Z_Poll_Response>;
  /** fetch data from the table: "z_profit" */
  z_profit: Array<Z_Profit>;
  /** fetch aggregated fields from the table: "z_profit" */
  z_profit_aggregate: Z_Profit_Aggregate;
  /** fetch data from the table: "z_profit" using primary key columns */
  z_profit_by_pk: Maybe<Z_Profit>;
  /** fetch data from the table: "z_profit_distribution" */
  z_profit_distribution: Array<Z_Profit_Distribution>;
  /** fetch aggregated fields from the table: "z_profit_distribution" */
  z_profit_distribution_aggregate: Z_Profit_Distribution_Aggregate;
  /** fetch data from the table: "z_profit_distribution" using primary key columns */
  z_profit_distribution_by_pk: Maybe<Z_Profit_Distribution>;
  /** fetch data from the table: "z_secondary_marketplace" */
  z_secondary_marketplace: Array<Z_Secondary_Marketplace>;
  /** fetch aggregated fields from the table: "z_secondary_marketplace" */
  z_secondary_marketplace_aggregate: Z_Secondary_Marketplace_Aggregate;
  /** fetch data from the table: "z_secondary_marketplace" using primary key columns */
  z_secondary_marketplace_by_pk: Maybe<Z_Secondary_Marketplace>;
  /** fetch data from the table: "z_token_holder" */
  z_token_holder: Array<Z_Token_Holder>;
  /** fetch aggregated fields from the table: "z_token_holder" */
  z_token_holder_aggregate: Z_Token_Holder_Aggregate;
  /** fetch data from the table: "z_token_holder" using primary key columns */
  z_token_holder_by_pk: Maybe<Z_Token_Holder>;
  /** fetch data from the table: "z_transaction_history" */
  z_transaction_history: Array<Z_Transaction_History>;
  /** fetch aggregated fields from the table: "z_transaction_history" */
  z_transaction_history_aggregate: Z_Transaction_History_Aggregate;
  /** fetch data from the table: "z_transaction_history" using primary key columns */
  z_transaction_history_by_pk: Maybe<Z_Transaction_History>;
  /** fetch data from the table: "z_user_token" */
  z_user_token: Array<Z_User_Token>;
  /** fetch aggregated fields from the table: "z_user_token" */
  z_user_token_aggregate: Z_User_Token_Aggregate;
  /** fetch data from the table: "z_user_token" using primary key columns */
  z_user_token_by_pk: Maybe<Z_User_Token>;
  /** fetch data from the table: "z_users" */
  z_users: Array<Z_Users>;
  /** fetch aggregated fields from the table: "z_users" */
  z_users_aggregate: Z_Users_Aggregate;
  /** fetch data from the table: "z_users" using primary key columns */
  z_users_by_pk: Maybe<Z_Users>;
};


export type Query_RootUser_SettingArgs = {
  distinct_on: InputMaybe<Array<User_Setting_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Setting_Order_By>>;
  where: InputMaybe<User_Setting_Bool_Exp>;
};


export type Query_RootUser_Setting_AggregateArgs = {
  distinct_on: InputMaybe<Array<User_Setting_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Setting_Order_By>>;
  where: InputMaybe<User_Setting_Bool_Exp>;
};


export type Query_RootUser_Setting_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootZ_AssetsArgs = {
  distinct_on: InputMaybe<Array<Z_Assets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Assets_Order_By>>;
  where: InputMaybe<Z_Assets_Bool_Exp>;
};


export type Query_RootZ_Assets_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Assets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Assets_Order_By>>;
  where: InputMaybe<Z_Assets_Bool_Exp>;
};


export type Query_RootZ_Assets_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootZ_Minted_HistoryArgs = {
  distinct_on: InputMaybe<Array<Z_Minted_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Minted_History_Order_By>>;
  where: InputMaybe<Z_Minted_History_Bool_Exp>;
};


export type Query_RootZ_Minted_History_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Minted_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Minted_History_Order_By>>;
  where: InputMaybe<Z_Minted_History_Bool_Exp>;
};


export type Query_RootZ_Minted_History_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootZ_PollArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Order_By>>;
  where: InputMaybe<Z_Poll_Bool_Exp>;
};


export type Query_RootZ_Poll_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Order_By>>;
  where: InputMaybe<Z_Poll_Bool_Exp>;
};


export type Query_RootZ_Poll_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootZ_Poll_OptionsArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Options_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Options_Order_By>>;
  where: InputMaybe<Z_Poll_Options_Bool_Exp>;
};


export type Query_RootZ_Poll_Options_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Options_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Options_Order_By>>;
  where: InputMaybe<Z_Poll_Options_Bool_Exp>;
};


export type Query_RootZ_Poll_Options_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootZ_Poll_ResponseArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Response_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Response_Order_By>>;
  where: InputMaybe<Z_Poll_Response_Bool_Exp>;
};


export type Query_RootZ_Poll_Response_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Response_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Response_Order_By>>;
  where: InputMaybe<Z_Poll_Response_Bool_Exp>;
};


export type Query_RootZ_Poll_Response_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootZ_ProfitArgs = {
  distinct_on: InputMaybe<Array<Z_Profit_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Profit_Order_By>>;
  where: InputMaybe<Z_Profit_Bool_Exp>;
};


export type Query_RootZ_Profit_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Profit_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Profit_Order_By>>;
  where: InputMaybe<Z_Profit_Bool_Exp>;
};


export type Query_RootZ_Profit_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootZ_Profit_DistributionArgs = {
  distinct_on: InputMaybe<Array<Z_Profit_Distribution_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Profit_Distribution_Order_By>>;
  where: InputMaybe<Z_Profit_Distribution_Bool_Exp>;
};


export type Query_RootZ_Profit_Distribution_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Profit_Distribution_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Profit_Distribution_Order_By>>;
  where: InputMaybe<Z_Profit_Distribution_Bool_Exp>;
};


export type Query_RootZ_Profit_Distribution_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootZ_Secondary_MarketplaceArgs = {
  distinct_on: InputMaybe<Array<Z_Secondary_Marketplace_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Secondary_Marketplace_Order_By>>;
  where: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
};


export type Query_RootZ_Secondary_Marketplace_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Secondary_Marketplace_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Secondary_Marketplace_Order_By>>;
  where: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
};


export type Query_RootZ_Secondary_Marketplace_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootZ_Token_HolderArgs = {
  distinct_on: InputMaybe<Array<Z_Token_Holder_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Token_Holder_Order_By>>;
  where: InputMaybe<Z_Token_Holder_Bool_Exp>;
};


export type Query_RootZ_Token_Holder_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Token_Holder_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Token_Holder_Order_By>>;
  where: InputMaybe<Z_Token_Holder_Bool_Exp>;
};


export type Query_RootZ_Token_Holder_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootZ_Transaction_HistoryArgs = {
  distinct_on: InputMaybe<Array<Z_Transaction_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Transaction_History_Order_By>>;
  where: InputMaybe<Z_Transaction_History_Bool_Exp>;
};


export type Query_RootZ_Transaction_History_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Transaction_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Transaction_History_Order_By>>;
  where: InputMaybe<Z_Transaction_History_Bool_Exp>;
};


export type Query_RootZ_Transaction_History_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootZ_User_TokenArgs = {
  distinct_on: InputMaybe<Array<Z_User_Token_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_User_Token_Order_By>>;
  where: InputMaybe<Z_User_Token_Bool_Exp>;
};


export type Query_RootZ_User_Token_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_User_Token_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_User_Token_Order_By>>;
  where: InputMaybe<Z_User_Token_Bool_Exp>;
};


export type Query_RootZ_User_Token_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootZ_UsersArgs = {
  distinct_on: InputMaybe<Array<Z_Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Users_Order_By>>;
  where: InputMaybe<Z_Users_Bool_Exp>;
};


export type Query_RootZ_Users_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Users_Order_By>>;
  where: InputMaybe<Z_Users_Bool_Exp>;
};


export type Query_RootZ_Users_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename: 'subscription_root';
  /** fetch data from the table: "user_setting" */
  user_setting: Array<User_Setting>;
  /** fetch aggregated fields from the table: "user_setting" */
  user_setting_aggregate: User_Setting_Aggregate;
  /** fetch data from the table: "user_setting" using primary key columns */
  user_setting_by_pk: Maybe<User_Setting>;
  /** fetch data from the table in a streaming manner: "user_setting" */
  user_setting_stream: Array<User_Setting>;
  /** fetch data from the table: "z_assets" */
  z_assets: Array<Z_Assets>;
  /** fetch aggregated fields from the table: "z_assets" */
  z_assets_aggregate: Z_Assets_Aggregate;
  /** fetch data from the table: "z_assets" using primary key columns */
  z_assets_by_pk: Maybe<Z_Assets>;
  /** fetch data from the table in a streaming manner: "z_assets" */
  z_assets_stream: Array<Z_Assets>;
  /** fetch data from the table: "z_minted_history" */
  z_minted_history: Array<Z_Minted_History>;
  /** fetch aggregated fields from the table: "z_minted_history" */
  z_minted_history_aggregate: Z_Minted_History_Aggregate;
  /** fetch data from the table: "z_minted_history" using primary key columns */
  z_minted_history_by_pk: Maybe<Z_Minted_History>;
  /** fetch data from the table in a streaming manner: "z_minted_history" */
  z_minted_history_stream: Array<Z_Minted_History>;
  /** fetch data from the table: "z_poll" */
  z_poll: Array<Z_Poll>;
  /** fetch aggregated fields from the table: "z_poll" */
  z_poll_aggregate: Z_Poll_Aggregate;
  /** fetch data from the table: "z_poll" using primary key columns */
  z_poll_by_pk: Maybe<Z_Poll>;
  /** An array relationship */
  z_poll_options: Array<Z_Poll_Options>;
  /** An aggregate relationship */
  z_poll_options_aggregate: Z_Poll_Options_Aggregate;
  /** fetch data from the table: "z_poll_options" using primary key columns */
  z_poll_options_by_pk: Maybe<Z_Poll_Options>;
  /** fetch data from the table in a streaming manner: "z_poll_options" */
  z_poll_options_stream: Array<Z_Poll_Options>;
  /** fetch data from the table: "z_poll_response" */
  z_poll_response: Array<Z_Poll_Response>;
  /** fetch aggregated fields from the table: "z_poll_response" */
  z_poll_response_aggregate: Z_Poll_Response_Aggregate;
  /** fetch data from the table: "z_poll_response" using primary key columns */
  z_poll_response_by_pk: Maybe<Z_Poll_Response>;
  /** fetch data from the table in a streaming manner: "z_poll_response" */
  z_poll_response_stream: Array<Z_Poll_Response>;
  /** fetch data from the table in a streaming manner: "z_poll" */
  z_poll_stream: Array<Z_Poll>;
  /** fetch data from the table: "z_profit" */
  z_profit: Array<Z_Profit>;
  /** fetch aggregated fields from the table: "z_profit" */
  z_profit_aggregate: Z_Profit_Aggregate;
  /** fetch data from the table: "z_profit" using primary key columns */
  z_profit_by_pk: Maybe<Z_Profit>;
  /** fetch data from the table: "z_profit_distribution" */
  z_profit_distribution: Array<Z_Profit_Distribution>;
  /** fetch aggregated fields from the table: "z_profit_distribution" */
  z_profit_distribution_aggregate: Z_Profit_Distribution_Aggregate;
  /** fetch data from the table: "z_profit_distribution" using primary key columns */
  z_profit_distribution_by_pk: Maybe<Z_Profit_Distribution>;
  /** fetch data from the table in a streaming manner: "z_profit_distribution" */
  z_profit_distribution_stream: Array<Z_Profit_Distribution>;
  /** fetch data from the table in a streaming manner: "z_profit" */
  z_profit_stream: Array<Z_Profit>;
  /** fetch data from the table: "z_secondary_marketplace" */
  z_secondary_marketplace: Array<Z_Secondary_Marketplace>;
  /** fetch aggregated fields from the table: "z_secondary_marketplace" */
  z_secondary_marketplace_aggregate: Z_Secondary_Marketplace_Aggregate;
  /** fetch data from the table: "z_secondary_marketplace" using primary key columns */
  z_secondary_marketplace_by_pk: Maybe<Z_Secondary_Marketplace>;
  /** fetch data from the table in a streaming manner: "z_secondary_marketplace" */
  z_secondary_marketplace_stream: Array<Z_Secondary_Marketplace>;
  /** fetch data from the table: "z_token_holder" */
  z_token_holder: Array<Z_Token_Holder>;
  /** fetch aggregated fields from the table: "z_token_holder" */
  z_token_holder_aggregate: Z_Token_Holder_Aggregate;
  /** fetch data from the table: "z_token_holder" using primary key columns */
  z_token_holder_by_pk: Maybe<Z_Token_Holder>;
  /** fetch data from the table in a streaming manner: "z_token_holder" */
  z_token_holder_stream: Array<Z_Token_Holder>;
  /** fetch data from the table: "z_transaction_history" */
  z_transaction_history: Array<Z_Transaction_History>;
  /** fetch aggregated fields from the table: "z_transaction_history" */
  z_transaction_history_aggregate: Z_Transaction_History_Aggregate;
  /** fetch data from the table: "z_transaction_history" using primary key columns */
  z_transaction_history_by_pk: Maybe<Z_Transaction_History>;
  /** fetch data from the table in a streaming manner: "z_transaction_history" */
  z_transaction_history_stream: Array<Z_Transaction_History>;
  /** fetch data from the table: "z_user_token" */
  z_user_token: Array<Z_User_Token>;
  /** fetch aggregated fields from the table: "z_user_token" */
  z_user_token_aggregate: Z_User_Token_Aggregate;
  /** fetch data from the table: "z_user_token" using primary key columns */
  z_user_token_by_pk: Maybe<Z_User_Token>;
  /** fetch data from the table in a streaming manner: "z_user_token" */
  z_user_token_stream: Array<Z_User_Token>;
  /** fetch data from the table: "z_users" */
  z_users: Array<Z_Users>;
  /** fetch aggregated fields from the table: "z_users" */
  z_users_aggregate: Z_Users_Aggregate;
  /** fetch data from the table: "z_users" using primary key columns */
  z_users_by_pk: Maybe<Z_Users>;
  /** fetch data from the table in a streaming manner: "z_users" */
  z_users_stream: Array<Z_Users>;
};


export type Subscription_RootUser_SettingArgs = {
  distinct_on: InputMaybe<Array<User_Setting_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Setting_Order_By>>;
  where: InputMaybe<User_Setting_Bool_Exp>;
};


export type Subscription_RootUser_Setting_AggregateArgs = {
  distinct_on: InputMaybe<Array<User_Setting_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Setting_Order_By>>;
  where: InputMaybe<User_Setting_Bool_Exp>;
};


export type Subscription_RootUser_Setting_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_Setting_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Setting_Stream_Cursor_Input>>;
  where: InputMaybe<User_Setting_Bool_Exp>;
};


export type Subscription_RootZ_AssetsArgs = {
  distinct_on: InputMaybe<Array<Z_Assets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Assets_Order_By>>;
  where: InputMaybe<Z_Assets_Bool_Exp>;
};


export type Subscription_RootZ_Assets_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Assets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Assets_Order_By>>;
  where: InputMaybe<Z_Assets_Bool_Exp>;
};


export type Subscription_RootZ_Assets_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootZ_Assets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Z_Assets_Stream_Cursor_Input>>;
  where: InputMaybe<Z_Assets_Bool_Exp>;
};


export type Subscription_RootZ_Minted_HistoryArgs = {
  distinct_on: InputMaybe<Array<Z_Minted_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Minted_History_Order_By>>;
  where: InputMaybe<Z_Minted_History_Bool_Exp>;
};


export type Subscription_RootZ_Minted_History_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Minted_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Minted_History_Order_By>>;
  where: InputMaybe<Z_Minted_History_Bool_Exp>;
};


export type Subscription_RootZ_Minted_History_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootZ_Minted_History_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Z_Minted_History_Stream_Cursor_Input>>;
  where: InputMaybe<Z_Minted_History_Bool_Exp>;
};


export type Subscription_RootZ_PollArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Order_By>>;
  where: InputMaybe<Z_Poll_Bool_Exp>;
};


export type Subscription_RootZ_Poll_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Order_By>>;
  where: InputMaybe<Z_Poll_Bool_Exp>;
};


export type Subscription_RootZ_Poll_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootZ_Poll_OptionsArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Options_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Options_Order_By>>;
  where: InputMaybe<Z_Poll_Options_Bool_Exp>;
};


export type Subscription_RootZ_Poll_Options_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Options_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Options_Order_By>>;
  where: InputMaybe<Z_Poll_Options_Bool_Exp>;
};


export type Subscription_RootZ_Poll_Options_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootZ_Poll_Options_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Z_Poll_Options_Stream_Cursor_Input>>;
  where: InputMaybe<Z_Poll_Options_Bool_Exp>;
};


export type Subscription_RootZ_Poll_ResponseArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Response_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Response_Order_By>>;
  where: InputMaybe<Z_Poll_Response_Bool_Exp>;
};


export type Subscription_RootZ_Poll_Response_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Response_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Response_Order_By>>;
  where: InputMaybe<Z_Poll_Response_Bool_Exp>;
};


export type Subscription_RootZ_Poll_Response_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootZ_Poll_Response_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Z_Poll_Response_Stream_Cursor_Input>>;
  where: InputMaybe<Z_Poll_Response_Bool_Exp>;
};


export type Subscription_RootZ_Poll_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Z_Poll_Stream_Cursor_Input>>;
  where: InputMaybe<Z_Poll_Bool_Exp>;
};


export type Subscription_RootZ_ProfitArgs = {
  distinct_on: InputMaybe<Array<Z_Profit_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Profit_Order_By>>;
  where: InputMaybe<Z_Profit_Bool_Exp>;
};


export type Subscription_RootZ_Profit_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Profit_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Profit_Order_By>>;
  where: InputMaybe<Z_Profit_Bool_Exp>;
};


export type Subscription_RootZ_Profit_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootZ_Profit_DistributionArgs = {
  distinct_on: InputMaybe<Array<Z_Profit_Distribution_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Profit_Distribution_Order_By>>;
  where: InputMaybe<Z_Profit_Distribution_Bool_Exp>;
};


export type Subscription_RootZ_Profit_Distribution_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Profit_Distribution_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Profit_Distribution_Order_By>>;
  where: InputMaybe<Z_Profit_Distribution_Bool_Exp>;
};


export type Subscription_RootZ_Profit_Distribution_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootZ_Profit_Distribution_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Z_Profit_Distribution_Stream_Cursor_Input>>;
  where: InputMaybe<Z_Profit_Distribution_Bool_Exp>;
};


export type Subscription_RootZ_Profit_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Z_Profit_Stream_Cursor_Input>>;
  where: InputMaybe<Z_Profit_Bool_Exp>;
};


export type Subscription_RootZ_Secondary_MarketplaceArgs = {
  distinct_on: InputMaybe<Array<Z_Secondary_Marketplace_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Secondary_Marketplace_Order_By>>;
  where: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
};


export type Subscription_RootZ_Secondary_Marketplace_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Secondary_Marketplace_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Secondary_Marketplace_Order_By>>;
  where: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
};


export type Subscription_RootZ_Secondary_Marketplace_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootZ_Secondary_Marketplace_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Z_Secondary_Marketplace_Stream_Cursor_Input>>;
  where: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
};


export type Subscription_RootZ_Token_HolderArgs = {
  distinct_on: InputMaybe<Array<Z_Token_Holder_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Token_Holder_Order_By>>;
  where: InputMaybe<Z_Token_Holder_Bool_Exp>;
};


export type Subscription_RootZ_Token_Holder_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Token_Holder_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Token_Holder_Order_By>>;
  where: InputMaybe<Z_Token_Holder_Bool_Exp>;
};


export type Subscription_RootZ_Token_Holder_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootZ_Token_Holder_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Z_Token_Holder_Stream_Cursor_Input>>;
  where: InputMaybe<Z_Token_Holder_Bool_Exp>;
};


export type Subscription_RootZ_Transaction_HistoryArgs = {
  distinct_on: InputMaybe<Array<Z_Transaction_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Transaction_History_Order_By>>;
  where: InputMaybe<Z_Transaction_History_Bool_Exp>;
};


export type Subscription_RootZ_Transaction_History_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Transaction_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Transaction_History_Order_By>>;
  where: InputMaybe<Z_Transaction_History_Bool_Exp>;
};


export type Subscription_RootZ_Transaction_History_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootZ_Transaction_History_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Z_Transaction_History_Stream_Cursor_Input>>;
  where: InputMaybe<Z_Transaction_History_Bool_Exp>;
};


export type Subscription_RootZ_User_TokenArgs = {
  distinct_on: InputMaybe<Array<Z_User_Token_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_User_Token_Order_By>>;
  where: InputMaybe<Z_User_Token_Bool_Exp>;
};


export type Subscription_RootZ_User_Token_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_User_Token_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_User_Token_Order_By>>;
  where: InputMaybe<Z_User_Token_Bool_Exp>;
};


export type Subscription_RootZ_User_Token_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootZ_User_Token_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Z_User_Token_Stream_Cursor_Input>>;
  where: InputMaybe<Z_User_Token_Bool_Exp>;
};


export type Subscription_RootZ_UsersArgs = {
  distinct_on: InputMaybe<Array<Z_Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Users_Order_By>>;
  where: InputMaybe<Z_Users_Bool_Exp>;
};


export type Subscription_RootZ_Users_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Users_Order_By>>;
  where: InputMaybe<Z_Users_Bool_Exp>;
};


export type Subscription_RootZ_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootZ_Users_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Z_Users_Stream_Cursor_Input>>;
  where: InputMaybe<Z_Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq: InputMaybe<Scalars['timestamptz']>;
  _gt: InputMaybe<Scalars['timestamptz']>;
  _gte: InputMaybe<Scalars['timestamptz']>;
  _in: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['timestamptz']>;
  _lte: InputMaybe<Scalars['timestamptz']>;
  _neq: InputMaybe<Scalars['timestamptz']>;
  _nin: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** To dynamically change the logo and company name */
export type User_Setting = {
  __typename: 'user_setting';
  cid: Scalars['String'];
  companyName: Scalars['String'];
  id: Scalars['Int'];
};

/** aggregated selection of "user_setting" */
export type User_Setting_Aggregate = {
  __typename: 'user_setting_aggregate';
  aggregate: Maybe<User_Setting_Aggregate_Fields>;
  nodes: Array<User_Setting>;
};

/** aggregate fields of "user_setting" */
export type User_Setting_Aggregate_Fields = {
  __typename: 'user_setting_aggregate_fields';
  avg: Maybe<User_Setting_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<User_Setting_Max_Fields>;
  min: Maybe<User_Setting_Min_Fields>;
  stddev: Maybe<User_Setting_Stddev_Fields>;
  stddev_pop: Maybe<User_Setting_Stddev_Pop_Fields>;
  stddev_samp: Maybe<User_Setting_Stddev_Samp_Fields>;
  sum: Maybe<User_Setting_Sum_Fields>;
  var_pop: Maybe<User_Setting_Var_Pop_Fields>;
  var_samp: Maybe<User_Setting_Var_Samp_Fields>;
  variance: Maybe<User_Setting_Variance_Fields>;
};


/** aggregate fields of "user_setting" */
export type User_Setting_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<User_Setting_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Setting_Avg_Fields = {
  __typename: 'user_setting_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user_setting". All fields are combined with a logical 'AND'. */
export type User_Setting_Bool_Exp = {
  _and: InputMaybe<Array<User_Setting_Bool_Exp>>;
  _not: InputMaybe<User_Setting_Bool_Exp>;
  _or: InputMaybe<Array<User_Setting_Bool_Exp>>;
  cid: InputMaybe<String_Comparison_Exp>;
  companyName: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_setting" */
export enum User_Setting_Constraint {
  /** unique or primary key constraint on columns "cid" */
  UserSettingCidKey = 'user_setting_cid_key',
  /** unique or primary key constraint on columns "id" */
  UserSettingPkey = 'user_setting_pkey'
}

/** input type for incrementing numeric columns in table "user_setting" */
export type User_Setting_Inc_Input = {
  id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_setting" */
export type User_Setting_Insert_Input = {
  cid: InputMaybe<Scalars['String']>;
  companyName: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Setting_Max_Fields = {
  __typename: 'user_setting_max_fields';
  cid: Maybe<Scalars['String']>;
  companyName: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type User_Setting_Min_Fields = {
  __typename: 'user_setting_min_fields';
  cid: Maybe<Scalars['String']>;
  companyName: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "user_setting" */
export type User_Setting_Mutation_Response = {
  __typename: 'user_setting_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Setting>;
};

/** on_conflict condition type for table "user_setting" */
export type User_Setting_On_Conflict = {
  constraint: User_Setting_Constraint;
  update_columns: Array<User_Setting_Update_Column>;
  where: InputMaybe<User_Setting_Bool_Exp>;
};

/** Ordering options when selecting data from "user_setting". */
export type User_Setting_Order_By = {
  cid: InputMaybe<Order_By>;
  companyName: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_setting */
export type User_Setting_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_setting" */
export enum User_Setting_Select_Column {
  /** column name */
  Cid = 'cid',
  /** column name */
  CompanyName = 'companyName',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "user_setting" */
export type User_Setting_Set_Input = {
  cid: InputMaybe<Scalars['String']>;
  companyName: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Setting_Stddev_Fields = {
  __typename: 'user_setting_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Setting_Stddev_Pop_Fields = {
  __typename: 'user_setting_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Setting_Stddev_Samp_Fields = {
  __typename: 'user_setting_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "user_setting" */
export type User_Setting_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Setting_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Setting_Stream_Cursor_Value_Input = {
  cid: InputMaybe<Scalars['String']>;
  companyName: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type User_Setting_Sum_Fields = {
  __typename: 'user_setting_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "user_setting" */
export enum User_Setting_Update_Column {
  /** column name */
  Cid = 'cid',
  /** column name */
  CompanyName = 'companyName',
  /** column name */
  Id = 'id'
}

export type User_Setting_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<User_Setting_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<User_Setting_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Setting_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Setting_Var_Pop_Fields = {
  __typename: 'user_setting_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Setting_Var_Samp_Fields = {
  __typename: 'user_setting_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Setting_Variance_Fields = {
  __typename: 'user_setting_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq: InputMaybe<Scalars['uuid']>;
  _gt: InputMaybe<Scalars['uuid']>;
  _gte: InputMaybe<Scalars['uuid']>;
  _in: InputMaybe<Array<Scalars['uuid']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['uuid']>;
  _lte: InputMaybe<Scalars['uuid']>;
  _neq: InputMaybe<Scalars['uuid']>;
  _nin: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "z_assets" */
export type Z_Assets = {
  __typename: 'z_assets';
  adminBalance: Scalars['String'];
  assetId: Maybe<Scalars['String']>;
  assetName: Scalars['String'];
  burned: Scalars['String'];
  buyPrice: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  currency: Scalars['String'];
  document_cid: Scalars['String'];
  hurdleRate: Scalars['String'];
  id: Scalars['uuid'];
  is_fractionalized: Scalars['Boolean'];
  last_traded_price: Maybe<Scalars['String']>;
  managementFee: Scalars['String'];
  sellPrice: Maybe<Scalars['String']>;
  totalCapital: Scalars['String'];
  totalMinted: Scalars['String'];
  totalSupply: Maybe<Scalars['String']>;
  txHash: Scalars['String'];
  /** An array relationship */
  z_minted_histories: Array<Z_Minted_History>;
  /** An aggregate relationship */
  z_minted_histories_aggregate: Z_Minted_History_Aggregate;
  /** An array relationship */
  z_polls: Array<Z_Poll>;
  /** An aggregate relationship */
  z_polls_aggregate: Z_Poll_Aggregate;
  /** An array relationship */
  z_profits: Array<Z_Profit>;
  /** An aggregate relationship */
  z_profits_aggregate: Z_Profit_Aggregate;
  /** An array relationship */
  z_secondary_marketplaces: Array<Z_Secondary_Marketplace>;
  /** An aggregate relationship */
  z_secondary_marketplaces_aggregate: Z_Secondary_Marketplace_Aggregate;
  /** An array relationship */
  z_token_holders: Array<Z_Token_Holder>;
  /** An aggregate relationship */
  z_token_holders_aggregate: Z_Token_Holder_Aggregate;
  /** An array relationship */
  z_transaction_histories: Array<Z_Transaction_History>;
  /** An aggregate relationship */
  z_transaction_histories_aggregate: Z_Transaction_History_Aggregate;
  /** An array relationship */
  z_user_tokens: Array<Z_User_Token>;
  /** An aggregate relationship */
  z_user_tokens_aggregate: Z_User_Token_Aggregate;
};


/** columns and relationships of "z_assets" */
export type Z_AssetsZ_Minted_HistoriesArgs = {
  distinct_on: InputMaybe<Array<Z_Minted_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Minted_History_Order_By>>;
  where: InputMaybe<Z_Minted_History_Bool_Exp>;
};


/** columns and relationships of "z_assets" */
export type Z_AssetsZ_Minted_Histories_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Minted_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Minted_History_Order_By>>;
  where: InputMaybe<Z_Minted_History_Bool_Exp>;
};


/** columns and relationships of "z_assets" */
export type Z_AssetsZ_PollsArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Order_By>>;
  where: InputMaybe<Z_Poll_Bool_Exp>;
};


/** columns and relationships of "z_assets" */
export type Z_AssetsZ_Polls_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Order_By>>;
  where: InputMaybe<Z_Poll_Bool_Exp>;
};


/** columns and relationships of "z_assets" */
export type Z_AssetsZ_ProfitsArgs = {
  distinct_on: InputMaybe<Array<Z_Profit_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Profit_Order_By>>;
  where: InputMaybe<Z_Profit_Bool_Exp>;
};


/** columns and relationships of "z_assets" */
export type Z_AssetsZ_Profits_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Profit_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Profit_Order_By>>;
  where: InputMaybe<Z_Profit_Bool_Exp>;
};


/** columns and relationships of "z_assets" */
export type Z_AssetsZ_Secondary_MarketplacesArgs = {
  distinct_on: InputMaybe<Array<Z_Secondary_Marketplace_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Secondary_Marketplace_Order_By>>;
  where: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
};


/** columns and relationships of "z_assets" */
export type Z_AssetsZ_Secondary_Marketplaces_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Secondary_Marketplace_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Secondary_Marketplace_Order_By>>;
  where: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
};


/** columns and relationships of "z_assets" */
export type Z_AssetsZ_Token_HoldersArgs = {
  distinct_on: InputMaybe<Array<Z_Token_Holder_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Token_Holder_Order_By>>;
  where: InputMaybe<Z_Token_Holder_Bool_Exp>;
};


/** columns and relationships of "z_assets" */
export type Z_AssetsZ_Token_Holders_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Token_Holder_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Token_Holder_Order_By>>;
  where: InputMaybe<Z_Token_Holder_Bool_Exp>;
};


/** columns and relationships of "z_assets" */
export type Z_AssetsZ_Transaction_HistoriesArgs = {
  distinct_on: InputMaybe<Array<Z_Transaction_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Transaction_History_Order_By>>;
  where: InputMaybe<Z_Transaction_History_Bool_Exp>;
};


/** columns and relationships of "z_assets" */
export type Z_AssetsZ_Transaction_Histories_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Transaction_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Transaction_History_Order_By>>;
  where: InputMaybe<Z_Transaction_History_Bool_Exp>;
};


/** columns and relationships of "z_assets" */
export type Z_AssetsZ_User_TokensArgs = {
  distinct_on: InputMaybe<Array<Z_User_Token_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_User_Token_Order_By>>;
  where: InputMaybe<Z_User_Token_Bool_Exp>;
};


/** columns and relationships of "z_assets" */
export type Z_AssetsZ_User_Tokens_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_User_Token_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_User_Token_Order_By>>;
  where: InputMaybe<Z_User_Token_Bool_Exp>;
};

/** aggregated selection of "z_assets" */
export type Z_Assets_Aggregate = {
  __typename: 'z_assets_aggregate';
  aggregate: Maybe<Z_Assets_Aggregate_Fields>;
  nodes: Array<Z_Assets>;
};

/** aggregate fields of "z_assets" */
export type Z_Assets_Aggregate_Fields = {
  __typename: 'z_assets_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Z_Assets_Max_Fields>;
  min: Maybe<Z_Assets_Min_Fields>;
};


/** aggregate fields of "z_assets" */
export type Z_Assets_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Z_Assets_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "z_assets". All fields are combined with a logical 'AND'. */
export type Z_Assets_Bool_Exp = {
  _and: InputMaybe<Array<Z_Assets_Bool_Exp>>;
  _not: InputMaybe<Z_Assets_Bool_Exp>;
  _or: InputMaybe<Array<Z_Assets_Bool_Exp>>;
  adminBalance: InputMaybe<String_Comparison_Exp>;
  assetId: InputMaybe<String_Comparison_Exp>;
  assetName: InputMaybe<String_Comparison_Exp>;
  burned: InputMaybe<String_Comparison_Exp>;
  buyPrice: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  currency: InputMaybe<String_Comparison_Exp>;
  document_cid: InputMaybe<String_Comparison_Exp>;
  hurdleRate: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  is_fractionalized: InputMaybe<Boolean_Comparison_Exp>;
  last_traded_price: InputMaybe<String_Comparison_Exp>;
  managementFee: InputMaybe<String_Comparison_Exp>;
  sellPrice: InputMaybe<String_Comparison_Exp>;
  totalCapital: InputMaybe<String_Comparison_Exp>;
  totalMinted: InputMaybe<String_Comparison_Exp>;
  totalSupply: InputMaybe<String_Comparison_Exp>;
  txHash: InputMaybe<String_Comparison_Exp>;
  z_minted_histories: InputMaybe<Z_Minted_History_Bool_Exp>;
  z_minted_histories_aggregate: InputMaybe<Z_Minted_History_Aggregate_Bool_Exp>;
  z_polls: InputMaybe<Z_Poll_Bool_Exp>;
  z_polls_aggregate: InputMaybe<Z_Poll_Aggregate_Bool_Exp>;
  z_profits: InputMaybe<Z_Profit_Bool_Exp>;
  z_profits_aggregate: InputMaybe<Z_Profit_Aggregate_Bool_Exp>;
  z_secondary_marketplaces: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
  z_secondary_marketplaces_aggregate: InputMaybe<Z_Secondary_Marketplace_Aggregate_Bool_Exp>;
  z_token_holders: InputMaybe<Z_Token_Holder_Bool_Exp>;
  z_token_holders_aggregate: InputMaybe<Z_Token_Holder_Aggregate_Bool_Exp>;
  z_transaction_histories: InputMaybe<Z_Transaction_History_Bool_Exp>;
  z_transaction_histories_aggregate: InputMaybe<Z_Transaction_History_Aggregate_Bool_Exp>;
  z_user_tokens: InputMaybe<Z_User_Token_Bool_Exp>;
  z_user_tokens_aggregate: InputMaybe<Z_User_Token_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "z_assets" */
export enum Z_Assets_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZAssetsPkey = 'z_assets_pkey'
}

/** input type for inserting data into table "z_assets" */
export type Z_Assets_Insert_Input = {
  adminBalance: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['String']>;
  assetName: InputMaybe<Scalars['String']>;
  burned: InputMaybe<Scalars['String']>;
  buyPrice: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  currency: InputMaybe<Scalars['String']>;
  document_cid: InputMaybe<Scalars['String']>;
  hurdleRate: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  is_fractionalized: InputMaybe<Scalars['Boolean']>;
  last_traded_price: InputMaybe<Scalars['String']>;
  managementFee: InputMaybe<Scalars['String']>;
  sellPrice: InputMaybe<Scalars['String']>;
  totalCapital: InputMaybe<Scalars['String']>;
  totalMinted: InputMaybe<Scalars['String']>;
  totalSupply: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
  z_minted_histories: InputMaybe<Z_Minted_History_Arr_Rel_Insert_Input>;
  z_polls: InputMaybe<Z_Poll_Arr_Rel_Insert_Input>;
  z_profits: InputMaybe<Z_Profit_Arr_Rel_Insert_Input>;
  z_secondary_marketplaces: InputMaybe<Z_Secondary_Marketplace_Arr_Rel_Insert_Input>;
  z_token_holders: InputMaybe<Z_Token_Holder_Arr_Rel_Insert_Input>;
  z_transaction_histories: InputMaybe<Z_Transaction_History_Arr_Rel_Insert_Input>;
  z_user_tokens: InputMaybe<Z_User_Token_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Assets_Max_Fields = {
  __typename: 'z_assets_max_fields';
  adminBalance: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['String']>;
  assetName: Maybe<Scalars['String']>;
  burned: Maybe<Scalars['String']>;
  buyPrice: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  currency: Maybe<Scalars['String']>;
  document_cid: Maybe<Scalars['String']>;
  hurdleRate: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  last_traded_price: Maybe<Scalars['String']>;
  managementFee: Maybe<Scalars['String']>;
  sellPrice: Maybe<Scalars['String']>;
  totalCapital: Maybe<Scalars['String']>;
  totalMinted: Maybe<Scalars['String']>;
  totalSupply: Maybe<Scalars['String']>;
  txHash: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Z_Assets_Min_Fields = {
  __typename: 'z_assets_min_fields';
  adminBalance: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['String']>;
  assetName: Maybe<Scalars['String']>;
  burned: Maybe<Scalars['String']>;
  buyPrice: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  currency: Maybe<Scalars['String']>;
  document_cid: Maybe<Scalars['String']>;
  hurdleRate: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  last_traded_price: Maybe<Scalars['String']>;
  managementFee: Maybe<Scalars['String']>;
  sellPrice: Maybe<Scalars['String']>;
  totalCapital: Maybe<Scalars['String']>;
  totalMinted: Maybe<Scalars['String']>;
  totalSupply: Maybe<Scalars['String']>;
  txHash: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "z_assets" */
export type Z_Assets_Mutation_Response = {
  __typename: 'z_assets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_Assets>;
};

/** input type for inserting object relation for remote table "z_assets" */
export type Z_Assets_Obj_Rel_Insert_Input = {
  data: Z_Assets_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Assets_On_Conflict>;
};

/** on_conflict condition type for table "z_assets" */
export type Z_Assets_On_Conflict = {
  constraint: Z_Assets_Constraint;
  update_columns: Array<Z_Assets_Update_Column>;
  where: InputMaybe<Z_Assets_Bool_Exp>;
};

/** Ordering options when selecting data from "z_assets". */
export type Z_Assets_Order_By = {
  adminBalance: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  assetName: InputMaybe<Order_By>;
  burned: InputMaybe<Order_By>;
  buyPrice: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  currency: InputMaybe<Order_By>;
  document_cid: InputMaybe<Order_By>;
  hurdleRate: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  is_fractionalized: InputMaybe<Order_By>;
  last_traded_price: InputMaybe<Order_By>;
  managementFee: InputMaybe<Order_By>;
  sellPrice: InputMaybe<Order_By>;
  totalCapital: InputMaybe<Order_By>;
  totalMinted: InputMaybe<Order_By>;
  totalSupply: InputMaybe<Order_By>;
  txHash: InputMaybe<Order_By>;
  z_minted_histories_aggregate: InputMaybe<Z_Minted_History_Aggregate_Order_By>;
  z_polls_aggregate: InputMaybe<Z_Poll_Aggregate_Order_By>;
  z_profits_aggregate: InputMaybe<Z_Profit_Aggregate_Order_By>;
  z_secondary_marketplaces_aggregate: InputMaybe<Z_Secondary_Marketplace_Aggregate_Order_By>;
  z_token_holders_aggregate: InputMaybe<Z_Token_Holder_Aggregate_Order_By>;
  z_transaction_histories_aggregate: InputMaybe<Z_Transaction_History_Aggregate_Order_By>;
  z_user_tokens_aggregate: InputMaybe<Z_User_Token_Aggregate_Order_By>;
};

/** primary key columns input for table: z_assets */
export type Z_Assets_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "z_assets" */
export enum Z_Assets_Select_Column {
  /** column name */
  AdminBalance = 'adminBalance',
  /** column name */
  AssetId = 'assetId',
  /** column name */
  AssetName = 'assetName',
  /** column name */
  Burned = 'burned',
  /** column name */
  BuyPrice = 'buyPrice',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  DocumentCid = 'document_cid',
  /** column name */
  HurdleRate = 'hurdleRate',
  /** column name */
  Id = 'id',
  /** column name */
  IsFractionalized = 'is_fractionalized',
  /** column name */
  LastTradedPrice = 'last_traded_price',
  /** column name */
  ManagementFee = 'managementFee',
  /** column name */
  SellPrice = 'sellPrice',
  /** column name */
  TotalCapital = 'totalCapital',
  /** column name */
  TotalMinted = 'totalMinted',
  /** column name */
  TotalSupply = 'totalSupply',
  /** column name */
  TxHash = 'txHash'
}

/** input type for updating data in table "z_assets" */
export type Z_Assets_Set_Input = {
  adminBalance: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['String']>;
  assetName: InputMaybe<Scalars['String']>;
  burned: InputMaybe<Scalars['String']>;
  buyPrice: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  currency: InputMaybe<Scalars['String']>;
  document_cid: InputMaybe<Scalars['String']>;
  hurdleRate: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  is_fractionalized: InputMaybe<Scalars['Boolean']>;
  last_traded_price: InputMaybe<Scalars['String']>;
  managementFee: InputMaybe<Scalars['String']>;
  sellPrice: InputMaybe<Scalars['String']>;
  totalCapital: InputMaybe<Scalars['String']>;
  totalMinted: InputMaybe<Scalars['String']>;
  totalSupply: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "z_assets" */
export type Z_Assets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Z_Assets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Z_Assets_Stream_Cursor_Value_Input = {
  adminBalance: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['String']>;
  assetName: InputMaybe<Scalars['String']>;
  burned: InputMaybe<Scalars['String']>;
  buyPrice: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  currency: InputMaybe<Scalars['String']>;
  document_cid: InputMaybe<Scalars['String']>;
  hurdleRate: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  is_fractionalized: InputMaybe<Scalars['Boolean']>;
  last_traded_price: InputMaybe<Scalars['String']>;
  managementFee: InputMaybe<Scalars['String']>;
  sellPrice: InputMaybe<Scalars['String']>;
  totalCapital: InputMaybe<Scalars['String']>;
  totalMinted: InputMaybe<Scalars['String']>;
  totalSupply: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
};

/** update columns of table "z_assets" */
export enum Z_Assets_Update_Column {
  /** column name */
  AdminBalance = 'adminBalance',
  /** column name */
  AssetId = 'assetId',
  /** column name */
  AssetName = 'assetName',
  /** column name */
  Burned = 'burned',
  /** column name */
  BuyPrice = 'buyPrice',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  DocumentCid = 'document_cid',
  /** column name */
  HurdleRate = 'hurdleRate',
  /** column name */
  Id = 'id',
  /** column name */
  IsFractionalized = 'is_fractionalized',
  /** column name */
  LastTradedPrice = 'last_traded_price',
  /** column name */
  ManagementFee = 'managementFee',
  /** column name */
  SellPrice = 'sellPrice',
  /** column name */
  TotalCapital = 'totalCapital',
  /** column name */
  TotalMinted = 'totalMinted',
  /** column name */
  TotalSupply = 'totalSupply',
  /** column name */
  TxHash = 'txHash'
}

export type Z_Assets_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Assets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Assets_Bool_Exp;
};

/** columns and relationships of "z_minted_history" */
export type Z_Minted_History = {
  __typename: 'z_minted_history';
  amount: Scalars['String'];
  assetId: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  userId: Scalars['uuid'];
  /** An object relationship */
  z_asset: Z_Assets;
  /** An object relationship */
  z_user: Z_Users;
};

/** aggregated selection of "z_minted_history" */
export type Z_Minted_History_Aggregate = {
  __typename: 'z_minted_history_aggregate';
  aggregate: Maybe<Z_Minted_History_Aggregate_Fields>;
  nodes: Array<Z_Minted_History>;
};

export type Z_Minted_History_Aggregate_Bool_Exp = {
  count: InputMaybe<Z_Minted_History_Aggregate_Bool_Exp_Count>;
};

export type Z_Minted_History_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Z_Minted_History_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Z_Minted_History_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "z_minted_history" */
export type Z_Minted_History_Aggregate_Fields = {
  __typename: 'z_minted_history_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Z_Minted_History_Max_Fields>;
  min: Maybe<Z_Minted_History_Min_Fields>;
};


/** aggregate fields of "z_minted_history" */
export type Z_Minted_History_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Z_Minted_History_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "z_minted_history" */
export type Z_Minted_History_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Z_Minted_History_Max_Order_By>;
  min: InputMaybe<Z_Minted_History_Min_Order_By>;
};

/** input type for inserting array relation for remote table "z_minted_history" */
export type Z_Minted_History_Arr_Rel_Insert_Input = {
  data: Array<Z_Minted_History_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Minted_History_On_Conflict>;
};

/** Boolean expression to filter rows from the table "z_minted_history". All fields are combined with a logical 'AND'. */
export type Z_Minted_History_Bool_Exp = {
  _and: InputMaybe<Array<Z_Minted_History_Bool_Exp>>;
  _not: InputMaybe<Z_Minted_History_Bool_Exp>;
  _or: InputMaybe<Array<Z_Minted_History_Bool_Exp>>;
  amount: InputMaybe<String_Comparison_Exp>;
  assetId: InputMaybe<Uuid_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  userId: InputMaybe<Uuid_Comparison_Exp>;
  z_asset: InputMaybe<Z_Assets_Bool_Exp>;
  z_user: InputMaybe<Z_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "z_minted_history" */
export enum Z_Minted_History_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZMintedHistoryPkey = 'z_minted_history_pkey'
}

/** input type for inserting data into table "z_minted_history" */
export type Z_Minted_History_Insert_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  userId: InputMaybe<Scalars['uuid']>;
  z_asset: InputMaybe<Z_Assets_Obj_Rel_Insert_Input>;
  z_user: InputMaybe<Z_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Minted_History_Max_Fields = {
  __typename: 'z_minted_history_max_fields';
  amount: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  userId: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "z_minted_history" */
export type Z_Minted_History_Max_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Z_Minted_History_Min_Fields = {
  __typename: 'z_minted_history_min_fields';
  amount: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  userId: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "z_minted_history" */
export type Z_Minted_History_Min_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
};

/** response of any mutation on the table "z_minted_history" */
export type Z_Minted_History_Mutation_Response = {
  __typename: 'z_minted_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_Minted_History>;
};

/** on_conflict condition type for table "z_minted_history" */
export type Z_Minted_History_On_Conflict = {
  constraint: Z_Minted_History_Constraint;
  update_columns: Array<Z_Minted_History_Update_Column>;
  where: InputMaybe<Z_Minted_History_Bool_Exp>;
};

/** Ordering options when selecting data from "z_minted_history". */
export type Z_Minted_History_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
  z_asset: InputMaybe<Z_Assets_Order_By>;
  z_user: InputMaybe<Z_Users_Order_By>;
};

/** primary key columns input for table: z_minted_history */
export type Z_Minted_History_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "z_minted_history" */
export enum Z_Minted_History_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AssetId = 'assetId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "z_minted_history" */
export type Z_Minted_History_Set_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  userId: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "z_minted_history" */
export type Z_Minted_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Z_Minted_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Z_Minted_History_Stream_Cursor_Value_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  userId: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "z_minted_history" */
export enum Z_Minted_History_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AssetId = 'assetId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

export type Z_Minted_History_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Minted_History_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Minted_History_Bool_Exp;
};

/** columns and relationships of "z_poll" */
export type Z_Poll = {
  __typename: 'z_poll';
  assetId: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['uuid'];
  id: Scalars['uuid'];
  poll_end_date: Scalars['String'];
  poll_start_date: Scalars['String'];
  poll_title: Scalars['String'];
  txHash: Scalars['String'];
  /** An object relationship */
  z_asset: Z_Assets;
  /** An array relationship */
  z_poll_options: Array<Z_Poll_Options>;
  /** An aggregate relationship */
  z_poll_options_aggregate: Z_Poll_Options_Aggregate;
  /** An array relationship */
  z_poll_responses: Array<Z_Poll_Response>;
  /** An aggregate relationship */
  z_poll_responses_aggregate: Z_Poll_Response_Aggregate;
  /** An object relationship */
  z_user_created_by: Z_Users;
};


/** columns and relationships of "z_poll" */
export type Z_PollZ_Poll_OptionsArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Options_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Options_Order_By>>;
  where: InputMaybe<Z_Poll_Options_Bool_Exp>;
};


/** columns and relationships of "z_poll" */
export type Z_PollZ_Poll_Options_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Options_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Options_Order_By>>;
  where: InputMaybe<Z_Poll_Options_Bool_Exp>;
};


/** columns and relationships of "z_poll" */
export type Z_PollZ_Poll_ResponsesArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Response_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Response_Order_By>>;
  where: InputMaybe<Z_Poll_Response_Bool_Exp>;
};


/** columns and relationships of "z_poll" */
export type Z_PollZ_Poll_Responses_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Response_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Response_Order_By>>;
  where: InputMaybe<Z_Poll_Response_Bool_Exp>;
};

/** aggregated selection of "z_poll" */
export type Z_Poll_Aggregate = {
  __typename: 'z_poll_aggregate';
  aggregate: Maybe<Z_Poll_Aggregate_Fields>;
  nodes: Array<Z_Poll>;
};

export type Z_Poll_Aggregate_Bool_Exp = {
  count: InputMaybe<Z_Poll_Aggregate_Bool_Exp_Count>;
};

export type Z_Poll_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Z_Poll_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Z_Poll_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "z_poll" */
export type Z_Poll_Aggregate_Fields = {
  __typename: 'z_poll_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Z_Poll_Max_Fields>;
  min: Maybe<Z_Poll_Min_Fields>;
};


/** aggregate fields of "z_poll" */
export type Z_Poll_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Z_Poll_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "z_poll" */
export type Z_Poll_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Z_Poll_Max_Order_By>;
  min: InputMaybe<Z_Poll_Min_Order_By>;
};

/** input type for inserting array relation for remote table "z_poll" */
export type Z_Poll_Arr_Rel_Insert_Input = {
  data: Array<Z_Poll_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Poll_On_Conflict>;
};

/** Boolean expression to filter rows from the table "z_poll". All fields are combined with a logical 'AND'. */
export type Z_Poll_Bool_Exp = {
  _and: InputMaybe<Array<Z_Poll_Bool_Exp>>;
  _not: InputMaybe<Z_Poll_Bool_Exp>;
  _or: InputMaybe<Array<Z_Poll_Bool_Exp>>;
  assetId: InputMaybe<Uuid_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by: InputMaybe<Uuid_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  poll_end_date: InputMaybe<String_Comparison_Exp>;
  poll_start_date: InputMaybe<String_Comparison_Exp>;
  poll_title: InputMaybe<String_Comparison_Exp>;
  txHash: InputMaybe<String_Comparison_Exp>;
  z_asset: InputMaybe<Z_Assets_Bool_Exp>;
  z_poll_options: InputMaybe<Z_Poll_Options_Bool_Exp>;
  z_poll_options_aggregate: InputMaybe<Z_Poll_Options_Aggregate_Bool_Exp>;
  z_poll_responses: InputMaybe<Z_Poll_Response_Bool_Exp>;
  z_poll_responses_aggregate: InputMaybe<Z_Poll_Response_Aggregate_Bool_Exp>;
  z_user_created_by: InputMaybe<Z_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "z_poll" */
export enum Z_Poll_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZPollPkey = 'z_poll_pkey'
}

/** input type for inserting data into table "z_poll" */
export type Z_Poll_Insert_Input = {
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  created_by: InputMaybe<Scalars['uuid']>;
  id: InputMaybe<Scalars['uuid']>;
  poll_end_date: InputMaybe<Scalars['String']>;
  poll_start_date: InputMaybe<Scalars['String']>;
  poll_title: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
  z_asset: InputMaybe<Z_Assets_Obj_Rel_Insert_Input>;
  z_poll_options: InputMaybe<Z_Poll_Options_Arr_Rel_Insert_Input>;
  z_poll_responses: InputMaybe<Z_Poll_Response_Arr_Rel_Insert_Input>;
  z_user_created_by: InputMaybe<Z_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Poll_Max_Fields = {
  __typename: 'z_poll_max_fields';
  assetId: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  created_by: Maybe<Scalars['uuid']>;
  id: Maybe<Scalars['uuid']>;
  poll_end_date: Maybe<Scalars['String']>;
  poll_start_date: Maybe<Scalars['String']>;
  poll_title: Maybe<Scalars['String']>;
  txHash: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "z_poll" */
export type Z_Poll_Max_Order_By = {
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  created_by: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  poll_end_date: InputMaybe<Order_By>;
  poll_start_date: InputMaybe<Order_By>;
  poll_title: InputMaybe<Order_By>;
  txHash: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Z_Poll_Min_Fields = {
  __typename: 'z_poll_min_fields';
  assetId: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  created_by: Maybe<Scalars['uuid']>;
  id: Maybe<Scalars['uuid']>;
  poll_end_date: Maybe<Scalars['String']>;
  poll_start_date: Maybe<Scalars['String']>;
  poll_title: Maybe<Scalars['String']>;
  txHash: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "z_poll" */
export type Z_Poll_Min_Order_By = {
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  created_by: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  poll_end_date: InputMaybe<Order_By>;
  poll_start_date: InputMaybe<Order_By>;
  poll_title: InputMaybe<Order_By>;
  txHash: InputMaybe<Order_By>;
};

/** response of any mutation on the table "z_poll" */
export type Z_Poll_Mutation_Response = {
  __typename: 'z_poll_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_Poll>;
};

/** input type for inserting object relation for remote table "z_poll" */
export type Z_Poll_Obj_Rel_Insert_Input = {
  data: Z_Poll_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Poll_On_Conflict>;
};

/** on_conflict condition type for table "z_poll" */
export type Z_Poll_On_Conflict = {
  constraint: Z_Poll_Constraint;
  update_columns: Array<Z_Poll_Update_Column>;
  where: InputMaybe<Z_Poll_Bool_Exp>;
};

/** columns and relationships of "z_poll_options" */
export type Z_Poll_Options = {
  __typename: 'z_poll_options';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  pollId: Scalars['uuid'];
  value: Scalars['String'];
  /** An object relationship */
  z_poll: Z_Poll;
};

/** aggregated selection of "z_poll_options" */
export type Z_Poll_Options_Aggregate = {
  __typename: 'z_poll_options_aggregate';
  aggregate: Maybe<Z_Poll_Options_Aggregate_Fields>;
  nodes: Array<Z_Poll_Options>;
};

export type Z_Poll_Options_Aggregate_Bool_Exp = {
  count: InputMaybe<Z_Poll_Options_Aggregate_Bool_Exp_Count>;
};

export type Z_Poll_Options_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Z_Poll_Options_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Z_Poll_Options_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "z_poll_options" */
export type Z_Poll_Options_Aggregate_Fields = {
  __typename: 'z_poll_options_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Z_Poll_Options_Max_Fields>;
  min: Maybe<Z_Poll_Options_Min_Fields>;
};


/** aggregate fields of "z_poll_options" */
export type Z_Poll_Options_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Z_Poll_Options_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "z_poll_options" */
export type Z_Poll_Options_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Z_Poll_Options_Max_Order_By>;
  min: InputMaybe<Z_Poll_Options_Min_Order_By>;
};

/** input type for inserting array relation for remote table "z_poll_options" */
export type Z_Poll_Options_Arr_Rel_Insert_Input = {
  data: Array<Z_Poll_Options_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Poll_Options_On_Conflict>;
};

/** Boolean expression to filter rows from the table "z_poll_options". All fields are combined with a logical 'AND'. */
export type Z_Poll_Options_Bool_Exp = {
  _and: InputMaybe<Array<Z_Poll_Options_Bool_Exp>>;
  _not: InputMaybe<Z_Poll_Options_Bool_Exp>;
  _or: InputMaybe<Array<Z_Poll_Options_Bool_Exp>>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  pollId: InputMaybe<Uuid_Comparison_Exp>;
  value: InputMaybe<String_Comparison_Exp>;
  z_poll: InputMaybe<Z_Poll_Bool_Exp>;
};

/** unique or primary key constraints on table "z_poll_options" */
export enum Z_Poll_Options_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZPollOptionsPkey = 'z_poll_options_pkey'
}

/** input type for inserting data into table "z_poll_options" */
export type Z_Poll_Options_Insert_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  pollId: InputMaybe<Scalars['uuid']>;
  value: InputMaybe<Scalars['String']>;
  z_poll: InputMaybe<Z_Poll_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Poll_Options_Max_Fields = {
  __typename: 'z_poll_options_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  pollId: Maybe<Scalars['uuid']>;
  value: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "z_poll_options" */
export type Z_Poll_Options_Max_Order_By = {
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  pollId: InputMaybe<Order_By>;
  value: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Z_Poll_Options_Min_Fields = {
  __typename: 'z_poll_options_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  pollId: Maybe<Scalars['uuid']>;
  value: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "z_poll_options" */
export type Z_Poll_Options_Min_Order_By = {
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  pollId: InputMaybe<Order_By>;
  value: InputMaybe<Order_By>;
};

/** response of any mutation on the table "z_poll_options" */
export type Z_Poll_Options_Mutation_Response = {
  __typename: 'z_poll_options_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_Poll_Options>;
};

/** on_conflict condition type for table "z_poll_options" */
export type Z_Poll_Options_On_Conflict = {
  constraint: Z_Poll_Options_Constraint;
  update_columns: Array<Z_Poll_Options_Update_Column>;
  where: InputMaybe<Z_Poll_Options_Bool_Exp>;
};

/** Ordering options when selecting data from "z_poll_options". */
export type Z_Poll_Options_Order_By = {
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  pollId: InputMaybe<Order_By>;
  value: InputMaybe<Order_By>;
  z_poll: InputMaybe<Z_Poll_Order_By>;
};

/** primary key columns input for table: z_poll_options */
export type Z_Poll_Options_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "z_poll_options" */
export enum Z_Poll_Options_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PollId = 'pollId',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "z_poll_options" */
export type Z_Poll_Options_Set_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  pollId: InputMaybe<Scalars['uuid']>;
  value: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "z_poll_options" */
export type Z_Poll_Options_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Z_Poll_Options_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Z_Poll_Options_Stream_Cursor_Value_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  pollId: InputMaybe<Scalars['uuid']>;
  value: InputMaybe<Scalars['String']>;
};

/** update columns of table "z_poll_options" */
export enum Z_Poll_Options_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PollId = 'pollId',
  /** column name */
  Value = 'value'
}

export type Z_Poll_Options_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Poll_Options_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Poll_Options_Bool_Exp;
};

/** Ordering options when selecting data from "z_poll". */
export type Z_Poll_Order_By = {
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  created_by: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  poll_end_date: InputMaybe<Order_By>;
  poll_start_date: InputMaybe<Order_By>;
  poll_title: InputMaybe<Order_By>;
  txHash: InputMaybe<Order_By>;
  z_asset: InputMaybe<Z_Assets_Order_By>;
  z_poll_options_aggregate: InputMaybe<Z_Poll_Options_Aggregate_Order_By>;
  z_poll_responses_aggregate: InputMaybe<Z_Poll_Response_Aggregate_Order_By>;
  z_user_created_by: InputMaybe<Z_Users_Order_By>;
};

/** primary key columns input for table: z_poll */
export type Z_Poll_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "z_poll_response" */
export type Z_Poll_Response = {
  __typename: 'z_poll_response';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  pollId: Scalars['uuid'];
  response_by: Scalars['uuid'];
  value: Scalars['String'];
  /** An object relationship */
  z_poll: Z_Poll;
  /** An object relationship */
  z_user: Z_Users;
};

/** aggregated selection of "z_poll_response" */
export type Z_Poll_Response_Aggregate = {
  __typename: 'z_poll_response_aggregate';
  aggregate: Maybe<Z_Poll_Response_Aggregate_Fields>;
  nodes: Array<Z_Poll_Response>;
};

export type Z_Poll_Response_Aggregate_Bool_Exp = {
  count: InputMaybe<Z_Poll_Response_Aggregate_Bool_Exp_Count>;
};

export type Z_Poll_Response_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Z_Poll_Response_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Z_Poll_Response_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "z_poll_response" */
export type Z_Poll_Response_Aggregate_Fields = {
  __typename: 'z_poll_response_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Z_Poll_Response_Max_Fields>;
  min: Maybe<Z_Poll_Response_Min_Fields>;
};


/** aggregate fields of "z_poll_response" */
export type Z_Poll_Response_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Z_Poll_Response_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "z_poll_response" */
export type Z_Poll_Response_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Z_Poll_Response_Max_Order_By>;
  min: InputMaybe<Z_Poll_Response_Min_Order_By>;
};

/** input type for inserting array relation for remote table "z_poll_response" */
export type Z_Poll_Response_Arr_Rel_Insert_Input = {
  data: Array<Z_Poll_Response_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Poll_Response_On_Conflict>;
};

/** Boolean expression to filter rows from the table "z_poll_response". All fields are combined with a logical 'AND'. */
export type Z_Poll_Response_Bool_Exp = {
  _and: InputMaybe<Array<Z_Poll_Response_Bool_Exp>>;
  _not: InputMaybe<Z_Poll_Response_Bool_Exp>;
  _or: InputMaybe<Array<Z_Poll_Response_Bool_Exp>>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  pollId: InputMaybe<Uuid_Comparison_Exp>;
  response_by: InputMaybe<Uuid_Comparison_Exp>;
  value: InputMaybe<String_Comparison_Exp>;
  z_poll: InputMaybe<Z_Poll_Bool_Exp>;
  z_user: InputMaybe<Z_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "z_poll_response" */
export enum Z_Poll_Response_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZPollResponsePkey = 'z_poll_response_pkey'
}

/** input type for inserting data into table "z_poll_response" */
export type Z_Poll_Response_Insert_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  pollId: InputMaybe<Scalars['uuid']>;
  response_by: InputMaybe<Scalars['uuid']>;
  value: InputMaybe<Scalars['String']>;
  z_poll: InputMaybe<Z_Poll_Obj_Rel_Insert_Input>;
  z_user: InputMaybe<Z_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Poll_Response_Max_Fields = {
  __typename: 'z_poll_response_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  pollId: Maybe<Scalars['uuid']>;
  response_by: Maybe<Scalars['uuid']>;
  value: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "z_poll_response" */
export type Z_Poll_Response_Max_Order_By = {
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  pollId: InputMaybe<Order_By>;
  response_by: InputMaybe<Order_By>;
  value: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Z_Poll_Response_Min_Fields = {
  __typename: 'z_poll_response_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  pollId: Maybe<Scalars['uuid']>;
  response_by: Maybe<Scalars['uuid']>;
  value: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "z_poll_response" */
export type Z_Poll_Response_Min_Order_By = {
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  pollId: InputMaybe<Order_By>;
  response_by: InputMaybe<Order_By>;
  value: InputMaybe<Order_By>;
};

/** response of any mutation on the table "z_poll_response" */
export type Z_Poll_Response_Mutation_Response = {
  __typename: 'z_poll_response_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_Poll_Response>;
};

/** on_conflict condition type for table "z_poll_response" */
export type Z_Poll_Response_On_Conflict = {
  constraint: Z_Poll_Response_Constraint;
  update_columns: Array<Z_Poll_Response_Update_Column>;
  where: InputMaybe<Z_Poll_Response_Bool_Exp>;
};

/** Ordering options when selecting data from "z_poll_response". */
export type Z_Poll_Response_Order_By = {
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  pollId: InputMaybe<Order_By>;
  response_by: InputMaybe<Order_By>;
  value: InputMaybe<Order_By>;
  z_poll: InputMaybe<Z_Poll_Order_By>;
  z_user: InputMaybe<Z_Users_Order_By>;
};

/** primary key columns input for table: z_poll_response */
export type Z_Poll_Response_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "z_poll_response" */
export enum Z_Poll_Response_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PollId = 'pollId',
  /** column name */
  ResponseBy = 'response_by',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "z_poll_response" */
export type Z_Poll_Response_Set_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  pollId: InputMaybe<Scalars['uuid']>;
  response_by: InputMaybe<Scalars['uuid']>;
  value: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "z_poll_response" */
export type Z_Poll_Response_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Z_Poll_Response_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Z_Poll_Response_Stream_Cursor_Value_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  pollId: InputMaybe<Scalars['uuid']>;
  response_by: InputMaybe<Scalars['uuid']>;
  value: InputMaybe<Scalars['String']>;
};

/** update columns of table "z_poll_response" */
export enum Z_Poll_Response_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PollId = 'pollId',
  /** column name */
  ResponseBy = 'response_by',
  /** column name */
  Value = 'value'
}

export type Z_Poll_Response_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Poll_Response_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Poll_Response_Bool_Exp;
};

/** select columns of table "z_poll" */
export enum Z_Poll_Select_Column {
  /** column name */
  AssetId = 'assetId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  PollEndDate = 'poll_end_date',
  /** column name */
  PollStartDate = 'poll_start_date',
  /** column name */
  PollTitle = 'poll_title',
  /** column name */
  TxHash = 'txHash'
}

/** input type for updating data in table "z_poll" */
export type Z_Poll_Set_Input = {
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  created_by: InputMaybe<Scalars['uuid']>;
  id: InputMaybe<Scalars['uuid']>;
  poll_end_date: InputMaybe<Scalars['String']>;
  poll_start_date: InputMaybe<Scalars['String']>;
  poll_title: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "z_poll" */
export type Z_Poll_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Z_Poll_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Z_Poll_Stream_Cursor_Value_Input = {
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  created_by: InputMaybe<Scalars['uuid']>;
  id: InputMaybe<Scalars['uuid']>;
  poll_end_date: InputMaybe<Scalars['String']>;
  poll_start_date: InputMaybe<Scalars['String']>;
  poll_title: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
};

/** update columns of table "z_poll" */
export enum Z_Poll_Update_Column {
  /** column name */
  AssetId = 'assetId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  PollEndDate = 'poll_end_date',
  /** column name */
  PollStartDate = 'poll_start_date',
  /** column name */
  PollTitle = 'poll_title',
  /** column name */
  TxHash = 'txHash'
}

export type Z_Poll_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Poll_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Poll_Bool_Exp;
};

/** columns and relationships of "z_profit" */
export type Z_Profit = {
  __typename: 'z_profit';
  assetId: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  totalHolders: Scalars['String'];
  totalProfit: Scalars['String'];
  txHash: Scalars['String'];
  /** An object relationship */
  z_asset: Z_Assets;
  /** An array relationship */
  z_profit_distributions: Array<Z_Profit_Distribution>;
  /** An aggregate relationship */
  z_profit_distributions_aggregate: Z_Profit_Distribution_Aggregate;
};


/** columns and relationships of "z_profit" */
export type Z_ProfitZ_Profit_DistributionsArgs = {
  distinct_on: InputMaybe<Array<Z_Profit_Distribution_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Profit_Distribution_Order_By>>;
  where: InputMaybe<Z_Profit_Distribution_Bool_Exp>;
};


/** columns and relationships of "z_profit" */
export type Z_ProfitZ_Profit_Distributions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Profit_Distribution_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Profit_Distribution_Order_By>>;
  where: InputMaybe<Z_Profit_Distribution_Bool_Exp>;
};

/** aggregated selection of "z_profit" */
export type Z_Profit_Aggregate = {
  __typename: 'z_profit_aggregate';
  aggregate: Maybe<Z_Profit_Aggregate_Fields>;
  nodes: Array<Z_Profit>;
};

export type Z_Profit_Aggregate_Bool_Exp = {
  count: InputMaybe<Z_Profit_Aggregate_Bool_Exp_Count>;
};

export type Z_Profit_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Z_Profit_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Z_Profit_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "z_profit" */
export type Z_Profit_Aggregate_Fields = {
  __typename: 'z_profit_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Z_Profit_Max_Fields>;
  min: Maybe<Z_Profit_Min_Fields>;
};


/** aggregate fields of "z_profit" */
export type Z_Profit_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Z_Profit_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "z_profit" */
export type Z_Profit_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Z_Profit_Max_Order_By>;
  min: InputMaybe<Z_Profit_Min_Order_By>;
};

/** input type for inserting array relation for remote table "z_profit" */
export type Z_Profit_Arr_Rel_Insert_Input = {
  data: Array<Z_Profit_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Profit_On_Conflict>;
};

/** Boolean expression to filter rows from the table "z_profit". All fields are combined with a logical 'AND'. */
export type Z_Profit_Bool_Exp = {
  _and: InputMaybe<Array<Z_Profit_Bool_Exp>>;
  _not: InputMaybe<Z_Profit_Bool_Exp>;
  _or: InputMaybe<Array<Z_Profit_Bool_Exp>>;
  assetId: InputMaybe<Uuid_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  totalHolders: InputMaybe<String_Comparison_Exp>;
  totalProfit: InputMaybe<String_Comparison_Exp>;
  txHash: InputMaybe<String_Comparison_Exp>;
  z_asset: InputMaybe<Z_Assets_Bool_Exp>;
  z_profit_distributions: InputMaybe<Z_Profit_Distribution_Bool_Exp>;
  z_profit_distributions_aggregate: InputMaybe<Z_Profit_Distribution_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "z_profit" */
export enum Z_Profit_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZProfitPkey = 'z_profit_pkey'
}

/** columns and relationships of "z_profit_distribution" */
export type Z_Profit_Distribution = {
  __typename: 'z_profit_distribution';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  profitId: Scalars['uuid'];
  share_in_profit: Scalars['String'];
  tokenHeld: Scalars['String'];
  userId: Maybe<Scalars['uuid']>;
  /** An object relationship */
  z_profit: Z_Profit;
  /** An object relationship */
  z_user: Maybe<Z_Users>;
};

/** aggregated selection of "z_profit_distribution" */
export type Z_Profit_Distribution_Aggregate = {
  __typename: 'z_profit_distribution_aggregate';
  aggregate: Maybe<Z_Profit_Distribution_Aggregate_Fields>;
  nodes: Array<Z_Profit_Distribution>;
};

export type Z_Profit_Distribution_Aggregate_Bool_Exp = {
  count: InputMaybe<Z_Profit_Distribution_Aggregate_Bool_Exp_Count>;
};

export type Z_Profit_Distribution_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Z_Profit_Distribution_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Z_Profit_Distribution_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "z_profit_distribution" */
export type Z_Profit_Distribution_Aggregate_Fields = {
  __typename: 'z_profit_distribution_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Z_Profit_Distribution_Max_Fields>;
  min: Maybe<Z_Profit_Distribution_Min_Fields>;
};


/** aggregate fields of "z_profit_distribution" */
export type Z_Profit_Distribution_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Z_Profit_Distribution_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "z_profit_distribution" */
export type Z_Profit_Distribution_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Z_Profit_Distribution_Max_Order_By>;
  min: InputMaybe<Z_Profit_Distribution_Min_Order_By>;
};

/** input type for inserting array relation for remote table "z_profit_distribution" */
export type Z_Profit_Distribution_Arr_Rel_Insert_Input = {
  data: Array<Z_Profit_Distribution_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Profit_Distribution_On_Conflict>;
};

/** Boolean expression to filter rows from the table "z_profit_distribution". All fields are combined with a logical 'AND'. */
export type Z_Profit_Distribution_Bool_Exp = {
  _and: InputMaybe<Array<Z_Profit_Distribution_Bool_Exp>>;
  _not: InputMaybe<Z_Profit_Distribution_Bool_Exp>;
  _or: InputMaybe<Array<Z_Profit_Distribution_Bool_Exp>>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  profitId: InputMaybe<Uuid_Comparison_Exp>;
  share_in_profit: InputMaybe<String_Comparison_Exp>;
  tokenHeld: InputMaybe<String_Comparison_Exp>;
  userId: InputMaybe<Uuid_Comparison_Exp>;
  z_profit: InputMaybe<Z_Profit_Bool_Exp>;
  z_user: InputMaybe<Z_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "z_profit_distribution" */
export enum Z_Profit_Distribution_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZProfitDistributionPkey = 'z_profit_distribution_pkey'
}

/** input type for inserting data into table "z_profit_distribution" */
export type Z_Profit_Distribution_Insert_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  profitId: InputMaybe<Scalars['uuid']>;
  share_in_profit: InputMaybe<Scalars['String']>;
  tokenHeld: InputMaybe<Scalars['String']>;
  userId: InputMaybe<Scalars['uuid']>;
  z_profit: InputMaybe<Z_Profit_Obj_Rel_Insert_Input>;
  z_user: InputMaybe<Z_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Profit_Distribution_Max_Fields = {
  __typename: 'z_profit_distribution_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  profitId: Maybe<Scalars['uuid']>;
  share_in_profit: Maybe<Scalars['String']>;
  tokenHeld: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "z_profit_distribution" */
export type Z_Profit_Distribution_Max_Order_By = {
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  profitId: InputMaybe<Order_By>;
  share_in_profit: InputMaybe<Order_By>;
  tokenHeld: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Z_Profit_Distribution_Min_Fields = {
  __typename: 'z_profit_distribution_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  profitId: Maybe<Scalars['uuid']>;
  share_in_profit: Maybe<Scalars['String']>;
  tokenHeld: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "z_profit_distribution" */
export type Z_Profit_Distribution_Min_Order_By = {
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  profitId: InputMaybe<Order_By>;
  share_in_profit: InputMaybe<Order_By>;
  tokenHeld: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
};

/** response of any mutation on the table "z_profit_distribution" */
export type Z_Profit_Distribution_Mutation_Response = {
  __typename: 'z_profit_distribution_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_Profit_Distribution>;
};

/** on_conflict condition type for table "z_profit_distribution" */
export type Z_Profit_Distribution_On_Conflict = {
  constraint: Z_Profit_Distribution_Constraint;
  update_columns: Array<Z_Profit_Distribution_Update_Column>;
  where: InputMaybe<Z_Profit_Distribution_Bool_Exp>;
};

/** Ordering options when selecting data from "z_profit_distribution". */
export type Z_Profit_Distribution_Order_By = {
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  profitId: InputMaybe<Order_By>;
  share_in_profit: InputMaybe<Order_By>;
  tokenHeld: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
  z_profit: InputMaybe<Z_Profit_Order_By>;
  z_user: InputMaybe<Z_Users_Order_By>;
};

/** primary key columns input for table: z_profit_distribution */
export type Z_Profit_Distribution_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "z_profit_distribution" */
export enum Z_Profit_Distribution_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfitId = 'profitId',
  /** column name */
  ShareInProfit = 'share_in_profit',
  /** column name */
  TokenHeld = 'tokenHeld',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "z_profit_distribution" */
export type Z_Profit_Distribution_Set_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  profitId: InputMaybe<Scalars['uuid']>;
  share_in_profit: InputMaybe<Scalars['String']>;
  tokenHeld: InputMaybe<Scalars['String']>;
  userId: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "z_profit_distribution" */
export type Z_Profit_Distribution_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Z_Profit_Distribution_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Z_Profit_Distribution_Stream_Cursor_Value_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  profitId: InputMaybe<Scalars['uuid']>;
  share_in_profit: InputMaybe<Scalars['String']>;
  tokenHeld: InputMaybe<Scalars['String']>;
  userId: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "z_profit_distribution" */
export enum Z_Profit_Distribution_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfitId = 'profitId',
  /** column name */
  ShareInProfit = 'share_in_profit',
  /** column name */
  TokenHeld = 'tokenHeld',
  /** column name */
  UserId = 'userId'
}

export type Z_Profit_Distribution_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Profit_Distribution_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Profit_Distribution_Bool_Exp;
};

/** input type for inserting data into table "z_profit" */
export type Z_Profit_Insert_Input = {
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  totalHolders: InputMaybe<Scalars['String']>;
  totalProfit: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
  z_asset: InputMaybe<Z_Assets_Obj_Rel_Insert_Input>;
  z_profit_distributions: InputMaybe<Z_Profit_Distribution_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Profit_Max_Fields = {
  __typename: 'z_profit_max_fields';
  assetId: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  totalHolders: Maybe<Scalars['String']>;
  totalProfit: Maybe<Scalars['String']>;
  txHash: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "z_profit" */
export type Z_Profit_Max_Order_By = {
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  totalHolders: InputMaybe<Order_By>;
  totalProfit: InputMaybe<Order_By>;
  txHash: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Z_Profit_Min_Fields = {
  __typename: 'z_profit_min_fields';
  assetId: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  totalHolders: Maybe<Scalars['String']>;
  totalProfit: Maybe<Scalars['String']>;
  txHash: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "z_profit" */
export type Z_Profit_Min_Order_By = {
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  totalHolders: InputMaybe<Order_By>;
  totalProfit: InputMaybe<Order_By>;
  txHash: InputMaybe<Order_By>;
};

/** response of any mutation on the table "z_profit" */
export type Z_Profit_Mutation_Response = {
  __typename: 'z_profit_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_Profit>;
};

/** input type for inserting object relation for remote table "z_profit" */
export type Z_Profit_Obj_Rel_Insert_Input = {
  data: Z_Profit_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Profit_On_Conflict>;
};

/** on_conflict condition type for table "z_profit" */
export type Z_Profit_On_Conflict = {
  constraint: Z_Profit_Constraint;
  update_columns: Array<Z_Profit_Update_Column>;
  where: InputMaybe<Z_Profit_Bool_Exp>;
};

/** Ordering options when selecting data from "z_profit". */
export type Z_Profit_Order_By = {
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  totalHolders: InputMaybe<Order_By>;
  totalProfit: InputMaybe<Order_By>;
  txHash: InputMaybe<Order_By>;
  z_asset: InputMaybe<Z_Assets_Order_By>;
  z_profit_distributions_aggregate: InputMaybe<Z_Profit_Distribution_Aggregate_Order_By>;
};

/** primary key columns input for table: z_profit */
export type Z_Profit_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "z_profit" */
export enum Z_Profit_Select_Column {
  /** column name */
  AssetId = 'assetId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TotalHolders = 'totalHolders',
  /** column name */
  TotalProfit = 'totalProfit',
  /** column name */
  TxHash = 'txHash'
}

/** input type for updating data in table "z_profit" */
export type Z_Profit_Set_Input = {
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  totalHolders: InputMaybe<Scalars['String']>;
  totalProfit: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "z_profit" */
export type Z_Profit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Z_Profit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Z_Profit_Stream_Cursor_Value_Input = {
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  totalHolders: InputMaybe<Scalars['String']>;
  totalProfit: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
};

/** update columns of table "z_profit" */
export enum Z_Profit_Update_Column {
  /** column name */
  AssetId = 'assetId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TotalHolders = 'totalHolders',
  /** column name */
  TotalProfit = 'totalProfit',
  /** column name */
  TxHash = 'txHash'
}

export type Z_Profit_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Profit_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Profit_Bool_Exp;
};

/** columns and relationships of "z_secondary_marketplace" */
export type Z_Secondary_Marketplace = {
  __typename: 'z_secondary_marketplace';
  amount: Scalars['String'];
  assetId: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  per_token_value: Scalars['String'];
  price: Scalars['String'];
  publisher: Scalars['uuid'];
  /** An object relationship */
  z_asset: Z_Assets;
  /** An object relationship */
  z_user_publisher: Z_Users;
};

/** aggregated selection of "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_Aggregate = {
  __typename: 'z_secondary_marketplace_aggregate';
  aggregate: Maybe<Z_Secondary_Marketplace_Aggregate_Fields>;
  nodes: Array<Z_Secondary_Marketplace>;
};

export type Z_Secondary_Marketplace_Aggregate_Bool_Exp = {
  count: InputMaybe<Z_Secondary_Marketplace_Aggregate_Bool_Exp_Count>;
};

export type Z_Secondary_Marketplace_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Z_Secondary_Marketplace_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_Aggregate_Fields = {
  __typename: 'z_secondary_marketplace_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Z_Secondary_Marketplace_Max_Fields>;
  min: Maybe<Z_Secondary_Marketplace_Min_Fields>;
};


/** aggregate fields of "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Z_Secondary_Marketplace_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Z_Secondary_Marketplace_Max_Order_By>;
  min: InputMaybe<Z_Secondary_Marketplace_Min_Order_By>;
};

/** input type for inserting array relation for remote table "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_Arr_Rel_Insert_Input = {
  data: Array<Z_Secondary_Marketplace_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Secondary_Marketplace_On_Conflict>;
};

/** Boolean expression to filter rows from the table "z_secondary_marketplace". All fields are combined with a logical 'AND'. */
export type Z_Secondary_Marketplace_Bool_Exp = {
  _and: InputMaybe<Array<Z_Secondary_Marketplace_Bool_Exp>>;
  _not: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
  _or: InputMaybe<Array<Z_Secondary_Marketplace_Bool_Exp>>;
  amount: InputMaybe<String_Comparison_Exp>;
  assetId: InputMaybe<Uuid_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  per_token_value: InputMaybe<String_Comparison_Exp>;
  price: InputMaybe<String_Comparison_Exp>;
  publisher: InputMaybe<Uuid_Comparison_Exp>;
  z_asset: InputMaybe<Z_Assets_Bool_Exp>;
  z_user_publisher: InputMaybe<Z_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "z_secondary_marketplace" */
export enum Z_Secondary_Marketplace_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZSecondaryMarketplacePkey = 'z_secondary_marketplace_pkey'
}

/** input type for inserting data into table "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_Insert_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  per_token_value: InputMaybe<Scalars['String']>;
  price: InputMaybe<Scalars['String']>;
  publisher: InputMaybe<Scalars['uuid']>;
  z_asset: InputMaybe<Z_Assets_Obj_Rel_Insert_Input>;
  z_user_publisher: InputMaybe<Z_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Secondary_Marketplace_Max_Fields = {
  __typename: 'z_secondary_marketplace_max_fields';
  amount: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  per_token_value: Maybe<Scalars['String']>;
  price: Maybe<Scalars['String']>;
  publisher: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_Max_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  per_token_value: InputMaybe<Order_By>;
  price: InputMaybe<Order_By>;
  publisher: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Z_Secondary_Marketplace_Min_Fields = {
  __typename: 'z_secondary_marketplace_min_fields';
  amount: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  per_token_value: Maybe<Scalars['String']>;
  price: Maybe<Scalars['String']>;
  publisher: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_Min_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  per_token_value: InputMaybe<Order_By>;
  price: InputMaybe<Order_By>;
  publisher: InputMaybe<Order_By>;
};

/** response of any mutation on the table "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_Mutation_Response = {
  __typename: 'z_secondary_marketplace_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_Secondary_Marketplace>;
};

/** on_conflict condition type for table "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_On_Conflict = {
  constraint: Z_Secondary_Marketplace_Constraint;
  update_columns: Array<Z_Secondary_Marketplace_Update_Column>;
  where: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
};

/** Ordering options when selecting data from "z_secondary_marketplace". */
export type Z_Secondary_Marketplace_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  per_token_value: InputMaybe<Order_By>;
  price: InputMaybe<Order_By>;
  publisher: InputMaybe<Order_By>;
  z_asset: InputMaybe<Z_Assets_Order_By>;
  z_user_publisher: InputMaybe<Z_Users_Order_By>;
};

/** primary key columns input for table: z_secondary_marketplace */
export type Z_Secondary_Marketplace_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "z_secondary_marketplace" */
export enum Z_Secondary_Marketplace_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AssetId = 'assetId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PerTokenValue = 'per_token_value',
  /** column name */
  Price = 'price',
  /** column name */
  Publisher = 'publisher'
}

/** input type for updating data in table "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_Set_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  per_token_value: InputMaybe<Scalars['String']>;
  price: InputMaybe<Scalars['String']>;
  publisher: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Z_Secondary_Marketplace_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Z_Secondary_Marketplace_Stream_Cursor_Value_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  per_token_value: InputMaybe<Scalars['String']>;
  price: InputMaybe<Scalars['String']>;
  publisher: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "z_secondary_marketplace" */
export enum Z_Secondary_Marketplace_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AssetId = 'assetId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PerTokenValue = 'per_token_value',
  /** column name */
  Price = 'price',
  /** column name */
  Publisher = 'publisher'
}

export type Z_Secondary_Marketplace_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Secondary_Marketplace_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Secondary_Marketplace_Bool_Exp;
};

/** columns and relationships of "z_token_holder" */
export type Z_Token_Holder = {
  __typename: 'z_token_holder';
  amount: Scalars['String'];
  assetId: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  userId: Scalars['uuid'];
  /** An object relationship */
  z_asset: Z_Assets;
  /** An object relationship */
  z_user: Z_Users;
};

/** aggregated selection of "z_token_holder" */
export type Z_Token_Holder_Aggregate = {
  __typename: 'z_token_holder_aggregate';
  aggregate: Maybe<Z_Token_Holder_Aggregate_Fields>;
  nodes: Array<Z_Token_Holder>;
};

export type Z_Token_Holder_Aggregate_Bool_Exp = {
  count: InputMaybe<Z_Token_Holder_Aggregate_Bool_Exp_Count>;
};

export type Z_Token_Holder_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Z_Token_Holder_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Z_Token_Holder_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "z_token_holder" */
export type Z_Token_Holder_Aggregate_Fields = {
  __typename: 'z_token_holder_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Z_Token_Holder_Max_Fields>;
  min: Maybe<Z_Token_Holder_Min_Fields>;
};


/** aggregate fields of "z_token_holder" */
export type Z_Token_Holder_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Z_Token_Holder_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "z_token_holder" */
export type Z_Token_Holder_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Z_Token_Holder_Max_Order_By>;
  min: InputMaybe<Z_Token_Holder_Min_Order_By>;
};

/** input type for inserting array relation for remote table "z_token_holder" */
export type Z_Token_Holder_Arr_Rel_Insert_Input = {
  data: Array<Z_Token_Holder_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Token_Holder_On_Conflict>;
};

/** Boolean expression to filter rows from the table "z_token_holder". All fields are combined with a logical 'AND'. */
export type Z_Token_Holder_Bool_Exp = {
  _and: InputMaybe<Array<Z_Token_Holder_Bool_Exp>>;
  _not: InputMaybe<Z_Token_Holder_Bool_Exp>;
  _or: InputMaybe<Array<Z_Token_Holder_Bool_Exp>>;
  amount: InputMaybe<String_Comparison_Exp>;
  assetId: InputMaybe<Uuid_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
  userId: InputMaybe<Uuid_Comparison_Exp>;
  z_asset: InputMaybe<Z_Assets_Bool_Exp>;
  z_user: InputMaybe<Z_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "z_token_holder" */
export enum Z_Token_Holder_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZTokenHolderPkey = 'z_token_holder_pkey'
}

/** input type for inserting data into table "z_token_holder" */
export type Z_Token_Holder_Insert_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  userId: InputMaybe<Scalars['uuid']>;
  z_asset: InputMaybe<Z_Assets_Obj_Rel_Insert_Input>;
  z_user: InputMaybe<Z_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Token_Holder_Max_Fields = {
  __typename: 'z_token_holder_max_fields';
  amount: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  userId: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "z_token_holder" */
export type Z_Token_Holder_Max_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Z_Token_Holder_Min_Fields = {
  __typename: 'z_token_holder_min_fields';
  amount: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  userId: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "z_token_holder" */
export type Z_Token_Holder_Min_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
};

/** response of any mutation on the table "z_token_holder" */
export type Z_Token_Holder_Mutation_Response = {
  __typename: 'z_token_holder_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_Token_Holder>;
};

/** on_conflict condition type for table "z_token_holder" */
export type Z_Token_Holder_On_Conflict = {
  constraint: Z_Token_Holder_Constraint;
  update_columns: Array<Z_Token_Holder_Update_Column>;
  where: InputMaybe<Z_Token_Holder_Bool_Exp>;
};

/** Ordering options when selecting data from "z_token_holder". */
export type Z_Token_Holder_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
  z_asset: InputMaybe<Z_Assets_Order_By>;
  z_user: InputMaybe<Z_Users_Order_By>;
};

/** primary key columns input for table: z_token_holder */
export type Z_Token_Holder_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "z_token_holder" */
export enum Z_Token_Holder_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AssetId = 'assetId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "z_token_holder" */
export type Z_Token_Holder_Set_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  userId: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "z_token_holder" */
export type Z_Token_Holder_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Z_Token_Holder_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Z_Token_Holder_Stream_Cursor_Value_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  userId: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "z_token_holder" */
export enum Z_Token_Holder_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AssetId = 'assetId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

export type Z_Token_Holder_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Token_Holder_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Token_Holder_Bool_Exp;
};

/** columns and relationships of "z_transaction_history" */
export type Z_Transaction_History = {
  __typename: 'z_transaction_history';
  amount: Scalars['String'];
  assetId: Scalars['uuid'];
  blockNumber: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_approved: Scalars['Boolean'];
  price: Scalars['String'];
  receiver: Scalars['uuid'];
  sender: Scalars['uuid'];
  settlement_date: Maybe<Scalars['String']>;
  txHash: Maybe<Scalars['String']>;
  type: Scalars['String'];
  /** An object relationship */
  z_asset: Z_Assets;
  /** An object relationship */
  z_user_by_receiver: Z_Users;
  /** An object relationship */
  z_user_by_sender: Z_Users;
};

/** aggregated selection of "z_transaction_history" */
export type Z_Transaction_History_Aggregate = {
  __typename: 'z_transaction_history_aggregate';
  aggregate: Maybe<Z_Transaction_History_Aggregate_Fields>;
  nodes: Array<Z_Transaction_History>;
};

export type Z_Transaction_History_Aggregate_Bool_Exp = {
  bool_and: InputMaybe<Z_Transaction_History_Aggregate_Bool_Exp_Bool_And>;
  bool_or: InputMaybe<Z_Transaction_History_Aggregate_Bool_Exp_Bool_Or>;
  count: InputMaybe<Z_Transaction_History_Aggregate_Bool_Exp_Count>;
};

export type Z_Transaction_History_Aggregate_Bool_Exp_Bool_And = {
  arguments: Z_Transaction_History_Select_Column_Z_Transaction_History_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Z_Transaction_History_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Z_Transaction_History_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Z_Transaction_History_Select_Column_Z_Transaction_History_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Z_Transaction_History_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Z_Transaction_History_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Z_Transaction_History_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Z_Transaction_History_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "z_transaction_history" */
export type Z_Transaction_History_Aggregate_Fields = {
  __typename: 'z_transaction_history_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Z_Transaction_History_Max_Fields>;
  min: Maybe<Z_Transaction_History_Min_Fields>;
};


/** aggregate fields of "z_transaction_history" */
export type Z_Transaction_History_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Z_Transaction_History_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "z_transaction_history" */
export type Z_Transaction_History_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Z_Transaction_History_Max_Order_By>;
  min: InputMaybe<Z_Transaction_History_Min_Order_By>;
};

/** input type for inserting array relation for remote table "z_transaction_history" */
export type Z_Transaction_History_Arr_Rel_Insert_Input = {
  data: Array<Z_Transaction_History_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Transaction_History_On_Conflict>;
};

/** Boolean expression to filter rows from the table "z_transaction_history". All fields are combined with a logical 'AND'. */
export type Z_Transaction_History_Bool_Exp = {
  _and: InputMaybe<Array<Z_Transaction_History_Bool_Exp>>;
  _not: InputMaybe<Z_Transaction_History_Bool_Exp>;
  _or: InputMaybe<Array<Z_Transaction_History_Bool_Exp>>;
  amount: InputMaybe<String_Comparison_Exp>;
  assetId: InputMaybe<Uuid_Comparison_Exp>;
  blockNumber: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  is_approved: InputMaybe<Boolean_Comparison_Exp>;
  price: InputMaybe<String_Comparison_Exp>;
  receiver: InputMaybe<Uuid_Comparison_Exp>;
  sender: InputMaybe<Uuid_Comparison_Exp>;
  settlement_date: InputMaybe<String_Comparison_Exp>;
  txHash: InputMaybe<String_Comparison_Exp>;
  type: InputMaybe<String_Comparison_Exp>;
  z_asset: InputMaybe<Z_Assets_Bool_Exp>;
  z_user_by_receiver: InputMaybe<Z_Users_Bool_Exp>;
  z_user_by_sender: InputMaybe<Z_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "z_transaction_history" */
export enum Z_Transaction_History_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZTransactionHistoryPkey = 'z_transaction_history_pkey'
}

/** input type for inserting data into table "z_transaction_history" */
export type Z_Transaction_History_Insert_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  blockNumber: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  is_approved: InputMaybe<Scalars['Boolean']>;
  price: InputMaybe<Scalars['String']>;
  receiver: InputMaybe<Scalars['uuid']>;
  sender: InputMaybe<Scalars['uuid']>;
  settlement_date: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
  z_asset: InputMaybe<Z_Assets_Obj_Rel_Insert_Input>;
  z_user_by_receiver: InputMaybe<Z_Users_Obj_Rel_Insert_Input>;
  z_user_by_sender: InputMaybe<Z_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Transaction_History_Max_Fields = {
  __typename: 'z_transaction_history_max_fields';
  amount: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['uuid']>;
  blockNumber: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  price: Maybe<Scalars['String']>;
  receiver: Maybe<Scalars['uuid']>;
  sender: Maybe<Scalars['uuid']>;
  settlement_date: Maybe<Scalars['String']>;
  txHash: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "z_transaction_history" */
export type Z_Transaction_History_Max_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  blockNumber: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  price: InputMaybe<Order_By>;
  receiver: InputMaybe<Order_By>;
  sender: InputMaybe<Order_By>;
  settlement_date: InputMaybe<Order_By>;
  txHash: InputMaybe<Order_By>;
  type: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Z_Transaction_History_Min_Fields = {
  __typename: 'z_transaction_history_min_fields';
  amount: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['uuid']>;
  blockNumber: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  price: Maybe<Scalars['String']>;
  receiver: Maybe<Scalars['uuid']>;
  sender: Maybe<Scalars['uuid']>;
  settlement_date: Maybe<Scalars['String']>;
  txHash: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "z_transaction_history" */
export type Z_Transaction_History_Min_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  blockNumber: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  price: InputMaybe<Order_By>;
  receiver: InputMaybe<Order_By>;
  sender: InputMaybe<Order_By>;
  settlement_date: InputMaybe<Order_By>;
  txHash: InputMaybe<Order_By>;
  type: InputMaybe<Order_By>;
};

/** response of any mutation on the table "z_transaction_history" */
export type Z_Transaction_History_Mutation_Response = {
  __typename: 'z_transaction_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_Transaction_History>;
};

/** on_conflict condition type for table "z_transaction_history" */
export type Z_Transaction_History_On_Conflict = {
  constraint: Z_Transaction_History_Constraint;
  update_columns: Array<Z_Transaction_History_Update_Column>;
  where: InputMaybe<Z_Transaction_History_Bool_Exp>;
};

/** Ordering options when selecting data from "z_transaction_history". */
export type Z_Transaction_History_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  blockNumber: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  is_approved: InputMaybe<Order_By>;
  price: InputMaybe<Order_By>;
  receiver: InputMaybe<Order_By>;
  sender: InputMaybe<Order_By>;
  settlement_date: InputMaybe<Order_By>;
  txHash: InputMaybe<Order_By>;
  type: InputMaybe<Order_By>;
  z_asset: InputMaybe<Z_Assets_Order_By>;
  z_user_by_receiver: InputMaybe<Z_Users_Order_By>;
  z_user_by_sender: InputMaybe<Z_Users_Order_By>;
};

/** primary key columns input for table: z_transaction_history */
export type Z_Transaction_History_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "z_transaction_history" */
export enum Z_Transaction_History_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AssetId = 'assetId',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsApproved = 'is_approved',
  /** column name */
  Price = 'price',
  /** column name */
  Receiver = 'receiver',
  /** column name */
  Sender = 'sender',
  /** column name */
  SettlementDate = 'settlement_date',
  /** column name */
  TxHash = 'txHash',
  /** column name */
  Type = 'type'
}

/** select "z_transaction_history_aggregate_bool_exp_bool_and_arguments_columns" columns of table "z_transaction_history" */
export enum Z_Transaction_History_Select_Column_Z_Transaction_History_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsApproved = 'is_approved'
}

/** select "z_transaction_history_aggregate_bool_exp_bool_or_arguments_columns" columns of table "z_transaction_history" */
export enum Z_Transaction_History_Select_Column_Z_Transaction_History_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsApproved = 'is_approved'
}

/** input type for updating data in table "z_transaction_history" */
export type Z_Transaction_History_Set_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  blockNumber: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  is_approved: InputMaybe<Scalars['Boolean']>;
  price: InputMaybe<Scalars['String']>;
  receiver: InputMaybe<Scalars['uuid']>;
  sender: InputMaybe<Scalars['uuid']>;
  settlement_date: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "z_transaction_history" */
export type Z_Transaction_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Z_Transaction_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Z_Transaction_History_Stream_Cursor_Value_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  blockNumber: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  is_approved: InputMaybe<Scalars['Boolean']>;
  price: InputMaybe<Scalars['String']>;
  receiver: InputMaybe<Scalars['uuid']>;
  sender: InputMaybe<Scalars['uuid']>;
  settlement_date: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
};

/** update columns of table "z_transaction_history" */
export enum Z_Transaction_History_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AssetId = 'assetId',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsApproved = 'is_approved',
  /** column name */
  Price = 'price',
  /** column name */
  Receiver = 'receiver',
  /** column name */
  Sender = 'sender',
  /** column name */
  SettlementDate = 'settlement_date',
  /** column name */
  TxHash = 'txHash',
  /** column name */
  Type = 'type'
}

export type Z_Transaction_History_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Transaction_History_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Transaction_History_Bool_Exp;
};

/** columns and relationships of "z_user_token" */
export type Z_User_Token = {
  __typename: 'z_user_token';
  amount: Scalars['String'];
  assetId: Scalars['uuid'];
  id: Scalars['uuid'];
  userId: Scalars['uuid'];
  /** An object relationship */
  z_asset: Z_Assets;
  /** An object relationship */
  z_user: Z_Users;
};

/** aggregated selection of "z_user_token" */
export type Z_User_Token_Aggregate = {
  __typename: 'z_user_token_aggregate';
  aggregate: Maybe<Z_User_Token_Aggregate_Fields>;
  nodes: Array<Z_User_Token>;
};

export type Z_User_Token_Aggregate_Bool_Exp = {
  count: InputMaybe<Z_User_Token_Aggregate_Bool_Exp_Count>;
};

export type Z_User_Token_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Z_User_Token_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Z_User_Token_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "z_user_token" */
export type Z_User_Token_Aggregate_Fields = {
  __typename: 'z_user_token_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Z_User_Token_Max_Fields>;
  min: Maybe<Z_User_Token_Min_Fields>;
};


/** aggregate fields of "z_user_token" */
export type Z_User_Token_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Z_User_Token_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "z_user_token" */
export type Z_User_Token_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Z_User_Token_Max_Order_By>;
  min: InputMaybe<Z_User_Token_Min_Order_By>;
};

/** input type for inserting array relation for remote table "z_user_token" */
export type Z_User_Token_Arr_Rel_Insert_Input = {
  data: Array<Z_User_Token_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Z_User_Token_On_Conflict>;
};

/** Boolean expression to filter rows from the table "z_user_token". All fields are combined with a logical 'AND'. */
export type Z_User_Token_Bool_Exp = {
  _and: InputMaybe<Array<Z_User_Token_Bool_Exp>>;
  _not: InputMaybe<Z_User_Token_Bool_Exp>;
  _or: InputMaybe<Array<Z_User_Token_Bool_Exp>>;
  amount: InputMaybe<String_Comparison_Exp>;
  assetId: InputMaybe<Uuid_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  userId: InputMaybe<Uuid_Comparison_Exp>;
  z_asset: InputMaybe<Z_Assets_Bool_Exp>;
  z_user: InputMaybe<Z_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "z_user_token" */
export enum Z_User_Token_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZUserTokenPkey = 'z_user_token_pkey'
}

/** input type for inserting data into table "z_user_token" */
export type Z_User_Token_Insert_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  id: InputMaybe<Scalars['uuid']>;
  userId: InputMaybe<Scalars['uuid']>;
  z_asset: InputMaybe<Z_Assets_Obj_Rel_Insert_Input>;
  z_user: InputMaybe<Z_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_User_Token_Max_Fields = {
  __typename: 'z_user_token_max_fields';
  amount: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['uuid']>;
  id: Maybe<Scalars['uuid']>;
  userId: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "z_user_token" */
export type Z_User_Token_Max_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Z_User_Token_Min_Fields = {
  __typename: 'z_user_token_min_fields';
  amount: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['uuid']>;
  id: Maybe<Scalars['uuid']>;
  userId: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "z_user_token" */
export type Z_User_Token_Min_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
};

/** response of any mutation on the table "z_user_token" */
export type Z_User_Token_Mutation_Response = {
  __typename: 'z_user_token_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_User_Token>;
};

/** on_conflict condition type for table "z_user_token" */
export type Z_User_Token_On_Conflict = {
  constraint: Z_User_Token_Constraint;
  update_columns: Array<Z_User_Token_Update_Column>;
  where: InputMaybe<Z_User_Token_Bool_Exp>;
};

/** Ordering options when selecting data from "z_user_token". */
export type Z_User_Token_Order_By = {
  amount: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
  z_asset: InputMaybe<Z_Assets_Order_By>;
  z_user: InputMaybe<Z_Users_Order_By>;
};

/** primary key columns input for table: z_user_token */
export type Z_User_Token_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "z_user_token" */
export enum Z_User_Token_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AssetId = 'assetId',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "z_user_token" */
export type Z_User_Token_Set_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  id: InputMaybe<Scalars['uuid']>;
  userId: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "z_user_token" */
export type Z_User_Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Z_User_Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Z_User_Token_Stream_Cursor_Value_Input = {
  amount: InputMaybe<Scalars['String']>;
  assetId: InputMaybe<Scalars['uuid']>;
  id: InputMaybe<Scalars['uuid']>;
  userId: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "z_user_token" */
export enum Z_User_Token_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AssetId = 'assetId',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

export type Z_User_Token_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_User_Token_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_User_Token_Bool_Exp;
};

/** columns and relationships of "z_users" */
export type Z_Users = {
  __typename: 'z_users';
  address: Scalars['String'];
  casa: Maybe<Scalars['String']>;
  cif: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  document_cid: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_approved: Scalars['Boolean'];
  password: Scalars['String'];
  pvtKey: Scalars['String'];
  role: Maybe<Scalars['String']>;
  segment: Maybe<Scalars['String']>;
  txHash: Maybe<Scalars['String']>;
  username: Scalars['String'];
  /** An array relationship */
  zTransactionHistoriesBySender: Array<Z_Transaction_History>;
  /** An aggregate relationship */
  zTransactionHistoriesBySender_aggregate: Z_Transaction_History_Aggregate;
  /** An array relationship */
  z_minted_histories: Array<Z_Minted_History>;
  /** An aggregate relationship */
  z_minted_histories_aggregate: Z_Minted_History_Aggregate;
  /** An array relationship */
  z_poll_responses: Array<Z_Poll_Response>;
  /** An aggregate relationship */
  z_poll_responses_aggregate: Z_Poll_Response_Aggregate;
  /** An array relationship */
  z_polls: Array<Z_Poll>;
  /** An aggregate relationship */
  z_polls_aggregate: Z_Poll_Aggregate;
  /** An array relationship */
  z_profit_distributions: Array<Z_Profit_Distribution>;
  /** An aggregate relationship */
  z_profit_distributions_aggregate: Z_Profit_Distribution_Aggregate;
  /** An array relationship */
  z_secondary_marketplaces: Array<Z_Secondary_Marketplace>;
  /** An aggregate relationship */
  z_secondary_marketplaces_aggregate: Z_Secondary_Marketplace_Aggregate;
  /** An array relationship */
  z_token_holders: Array<Z_Token_Holder>;
  /** An aggregate relationship */
  z_token_holders_aggregate: Z_Token_Holder_Aggregate;
  /** An array relationship */
  z_transaction_histories: Array<Z_Transaction_History>;
  /** An aggregate relationship */
  z_transaction_histories_aggregate: Z_Transaction_History_Aggregate;
  /** An array relationship */
  z_user_tokens: Array<Z_User_Token>;
  /** An aggregate relationship */
  z_user_tokens_aggregate: Z_User_Token_Aggregate;
};


/** columns and relationships of "z_users" */
export type Z_UsersZTransactionHistoriesBySenderArgs = {
  distinct_on: InputMaybe<Array<Z_Transaction_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Transaction_History_Order_By>>;
  where: InputMaybe<Z_Transaction_History_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZTransactionHistoriesBySender_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Transaction_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Transaction_History_Order_By>>;
  where: InputMaybe<Z_Transaction_History_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_Minted_HistoriesArgs = {
  distinct_on: InputMaybe<Array<Z_Minted_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Minted_History_Order_By>>;
  where: InputMaybe<Z_Minted_History_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_Minted_Histories_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Minted_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Minted_History_Order_By>>;
  where: InputMaybe<Z_Minted_History_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_Poll_ResponsesArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Response_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Response_Order_By>>;
  where: InputMaybe<Z_Poll_Response_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_Poll_Responses_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Response_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Response_Order_By>>;
  where: InputMaybe<Z_Poll_Response_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_PollsArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Order_By>>;
  where: InputMaybe<Z_Poll_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_Polls_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Poll_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Poll_Order_By>>;
  where: InputMaybe<Z_Poll_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_Profit_DistributionsArgs = {
  distinct_on: InputMaybe<Array<Z_Profit_Distribution_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Profit_Distribution_Order_By>>;
  where: InputMaybe<Z_Profit_Distribution_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_Profit_Distributions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Profit_Distribution_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Profit_Distribution_Order_By>>;
  where: InputMaybe<Z_Profit_Distribution_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_Secondary_MarketplacesArgs = {
  distinct_on: InputMaybe<Array<Z_Secondary_Marketplace_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Secondary_Marketplace_Order_By>>;
  where: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_Secondary_Marketplaces_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Secondary_Marketplace_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Secondary_Marketplace_Order_By>>;
  where: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_Token_HoldersArgs = {
  distinct_on: InputMaybe<Array<Z_Token_Holder_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Token_Holder_Order_By>>;
  where: InputMaybe<Z_Token_Holder_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_Token_Holders_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Token_Holder_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Token_Holder_Order_By>>;
  where: InputMaybe<Z_Token_Holder_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_Transaction_HistoriesArgs = {
  distinct_on: InputMaybe<Array<Z_Transaction_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Transaction_History_Order_By>>;
  where: InputMaybe<Z_Transaction_History_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_Transaction_Histories_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Transaction_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Transaction_History_Order_By>>;
  where: InputMaybe<Z_Transaction_History_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_User_TokensArgs = {
  distinct_on: InputMaybe<Array<Z_User_Token_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_User_Token_Order_By>>;
  where: InputMaybe<Z_User_Token_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_User_Tokens_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_User_Token_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_User_Token_Order_By>>;
  where: InputMaybe<Z_User_Token_Bool_Exp>;
};

/** aggregated selection of "z_users" */
export type Z_Users_Aggregate = {
  __typename: 'z_users_aggregate';
  aggregate: Maybe<Z_Users_Aggregate_Fields>;
  nodes: Array<Z_Users>;
};

/** aggregate fields of "z_users" */
export type Z_Users_Aggregate_Fields = {
  __typename: 'z_users_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Z_Users_Max_Fields>;
  min: Maybe<Z_Users_Min_Fields>;
};


/** aggregate fields of "z_users" */
export type Z_Users_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Z_Users_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "z_users". All fields are combined with a logical 'AND'. */
export type Z_Users_Bool_Exp = {
  _and: InputMaybe<Array<Z_Users_Bool_Exp>>;
  _not: InputMaybe<Z_Users_Bool_Exp>;
  _or: InputMaybe<Array<Z_Users_Bool_Exp>>;
  address: InputMaybe<String_Comparison_Exp>;
  casa: InputMaybe<String_Comparison_Exp>;
  cif: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  document_cid: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  is_approved: InputMaybe<Boolean_Comparison_Exp>;
  password: InputMaybe<String_Comparison_Exp>;
  pvtKey: InputMaybe<String_Comparison_Exp>;
  role: InputMaybe<String_Comparison_Exp>;
  segment: InputMaybe<String_Comparison_Exp>;
  txHash: InputMaybe<String_Comparison_Exp>;
  username: InputMaybe<String_Comparison_Exp>;
  zTransactionHistoriesBySender: InputMaybe<Z_Transaction_History_Bool_Exp>;
  zTransactionHistoriesBySender_aggregate: InputMaybe<Z_Transaction_History_Aggregate_Bool_Exp>;
  z_minted_histories: InputMaybe<Z_Minted_History_Bool_Exp>;
  z_minted_histories_aggregate: InputMaybe<Z_Minted_History_Aggregate_Bool_Exp>;
  z_poll_responses: InputMaybe<Z_Poll_Response_Bool_Exp>;
  z_poll_responses_aggregate: InputMaybe<Z_Poll_Response_Aggregate_Bool_Exp>;
  z_polls: InputMaybe<Z_Poll_Bool_Exp>;
  z_polls_aggregate: InputMaybe<Z_Poll_Aggregate_Bool_Exp>;
  z_profit_distributions: InputMaybe<Z_Profit_Distribution_Bool_Exp>;
  z_profit_distributions_aggregate: InputMaybe<Z_Profit_Distribution_Aggregate_Bool_Exp>;
  z_secondary_marketplaces: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
  z_secondary_marketplaces_aggregate: InputMaybe<Z_Secondary_Marketplace_Aggregate_Bool_Exp>;
  z_token_holders: InputMaybe<Z_Token_Holder_Bool_Exp>;
  z_token_holders_aggregate: InputMaybe<Z_Token_Holder_Aggregate_Bool_Exp>;
  z_transaction_histories: InputMaybe<Z_Transaction_History_Bool_Exp>;
  z_transaction_histories_aggregate: InputMaybe<Z_Transaction_History_Aggregate_Bool_Exp>;
  z_user_tokens: InputMaybe<Z_User_Token_Bool_Exp>;
  z_user_tokens_aggregate: InputMaybe<Z_User_Token_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "z_users" */
export enum Z_Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZUsersPkey = 'z_users_pkey',
  /** unique or primary key constraint on columns "username" */
  ZUsersUsernameKey = 'z_users_username_key'
}

/** input type for inserting data into table "z_users" */
export type Z_Users_Insert_Input = {
  address: InputMaybe<Scalars['String']>;
  casa: InputMaybe<Scalars['String']>;
  cif: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  document_cid: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  is_approved: InputMaybe<Scalars['Boolean']>;
  password: InputMaybe<Scalars['String']>;
  pvtKey: InputMaybe<Scalars['String']>;
  role: InputMaybe<Scalars['String']>;
  segment: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
  zTransactionHistoriesBySender: InputMaybe<Z_Transaction_History_Arr_Rel_Insert_Input>;
  z_minted_histories: InputMaybe<Z_Minted_History_Arr_Rel_Insert_Input>;
  z_poll_responses: InputMaybe<Z_Poll_Response_Arr_Rel_Insert_Input>;
  z_polls: InputMaybe<Z_Poll_Arr_Rel_Insert_Input>;
  z_profit_distributions: InputMaybe<Z_Profit_Distribution_Arr_Rel_Insert_Input>;
  z_secondary_marketplaces: InputMaybe<Z_Secondary_Marketplace_Arr_Rel_Insert_Input>;
  z_token_holders: InputMaybe<Z_Token_Holder_Arr_Rel_Insert_Input>;
  z_transaction_histories: InputMaybe<Z_Transaction_History_Arr_Rel_Insert_Input>;
  z_user_tokens: InputMaybe<Z_User_Token_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Users_Max_Fields = {
  __typename: 'z_users_max_fields';
  address: Maybe<Scalars['String']>;
  casa: Maybe<Scalars['String']>;
  cif: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  document_cid: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  password: Maybe<Scalars['String']>;
  pvtKey: Maybe<Scalars['String']>;
  role: Maybe<Scalars['String']>;
  segment: Maybe<Scalars['String']>;
  txHash: Maybe<Scalars['String']>;
  username: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Z_Users_Min_Fields = {
  __typename: 'z_users_min_fields';
  address: Maybe<Scalars['String']>;
  casa: Maybe<Scalars['String']>;
  cif: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  document_cid: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  password: Maybe<Scalars['String']>;
  pvtKey: Maybe<Scalars['String']>;
  role: Maybe<Scalars['String']>;
  segment: Maybe<Scalars['String']>;
  txHash: Maybe<Scalars['String']>;
  username: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "z_users" */
export type Z_Users_Mutation_Response = {
  __typename: 'z_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_Users>;
};

/** input type for inserting object relation for remote table "z_users" */
export type Z_Users_Obj_Rel_Insert_Input = {
  data: Z_Users_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Users_On_Conflict>;
};

/** on_conflict condition type for table "z_users" */
export type Z_Users_On_Conflict = {
  constraint: Z_Users_Constraint;
  update_columns: Array<Z_Users_Update_Column>;
  where: InputMaybe<Z_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "z_users". */
export type Z_Users_Order_By = {
  address: InputMaybe<Order_By>;
  casa: InputMaybe<Order_By>;
  cif: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  document_cid: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  is_approved: InputMaybe<Order_By>;
  password: InputMaybe<Order_By>;
  pvtKey: InputMaybe<Order_By>;
  role: InputMaybe<Order_By>;
  segment: InputMaybe<Order_By>;
  txHash: InputMaybe<Order_By>;
  username: InputMaybe<Order_By>;
  zTransactionHistoriesBySender_aggregate: InputMaybe<Z_Transaction_History_Aggregate_Order_By>;
  z_minted_histories_aggregate: InputMaybe<Z_Minted_History_Aggregate_Order_By>;
  z_poll_responses_aggregate: InputMaybe<Z_Poll_Response_Aggregate_Order_By>;
  z_polls_aggregate: InputMaybe<Z_Poll_Aggregate_Order_By>;
  z_profit_distributions_aggregate: InputMaybe<Z_Profit_Distribution_Aggregate_Order_By>;
  z_secondary_marketplaces_aggregate: InputMaybe<Z_Secondary_Marketplace_Aggregate_Order_By>;
  z_token_holders_aggregate: InputMaybe<Z_Token_Holder_Aggregate_Order_By>;
  z_transaction_histories_aggregate: InputMaybe<Z_Transaction_History_Aggregate_Order_By>;
  z_user_tokens_aggregate: InputMaybe<Z_User_Token_Aggregate_Order_By>;
};

/** primary key columns input for table: z_users */
export type Z_Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "z_users" */
export enum Z_Users_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Casa = 'casa',
  /** column name */
  Cif = 'cif',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DocumentCid = 'document_cid',
  /** column name */
  Id = 'id',
  /** column name */
  IsApproved = 'is_approved',
  /** column name */
  Password = 'password',
  /** column name */
  PvtKey = 'pvtKey',
  /** column name */
  Role = 'role',
  /** column name */
  Segment = 'segment',
  /** column name */
  TxHash = 'txHash',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "z_users" */
export type Z_Users_Set_Input = {
  address: InputMaybe<Scalars['String']>;
  casa: InputMaybe<Scalars['String']>;
  cif: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  document_cid: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  is_approved: InputMaybe<Scalars['Boolean']>;
  password: InputMaybe<Scalars['String']>;
  pvtKey: InputMaybe<Scalars['String']>;
  role: InputMaybe<Scalars['String']>;
  segment: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "z_users" */
export type Z_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Z_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Z_Users_Stream_Cursor_Value_Input = {
  address: InputMaybe<Scalars['String']>;
  casa: InputMaybe<Scalars['String']>;
  cif: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  document_cid: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  is_approved: InputMaybe<Scalars['Boolean']>;
  password: InputMaybe<Scalars['String']>;
  pvtKey: InputMaybe<Scalars['String']>;
  role: InputMaybe<Scalars['String']>;
  segment: InputMaybe<Scalars['String']>;
  txHash: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
};

/** update columns of table "z_users" */
export enum Z_Users_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Casa = 'casa',
  /** column name */
  Cif = 'cif',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DocumentCid = 'document_cid',
  /** column name */
  Id = 'id',
  /** column name */
  IsApproved = 'is_approved',
  /** column name */
  Password = 'password',
  /** column name */
  PvtKey = 'pvtKey',
  /** column name */
  Role = 'role',
  /** column name */
  Segment = 'segment',
  /** column name */
  TxHash = 'txHash',
  /** column name */
  Username = 'username'
}

export type Z_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Users_Bool_Exp;
};
