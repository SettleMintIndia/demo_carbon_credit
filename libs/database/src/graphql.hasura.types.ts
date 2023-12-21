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
  /** delete data from the table: "z_minttokens" */
  delete_z_minttokens: Maybe<Z_Minttokens_Mutation_Response>;
  /** delete single row from the table: "z_minttokens" */
  delete_z_minttokens_by_pk: Maybe<Z_Minttokens>;
  /** delete data from the table: "z_secondary_marketplace" */
  delete_z_secondary_marketplace: Maybe<Z_Secondary_Marketplace_Mutation_Response>;
  /** delete single row from the table: "z_secondary_marketplace" */
  delete_z_secondary_marketplace_by_pk: Maybe<Z_Secondary_Marketplace>;
  /** delete data from the table: "z_token_holder" */
  delete_z_token_holder: Maybe<Z_Token_Holder_Mutation_Response>;
  /** delete single row from the table: "z_token_holder" */
  delete_z_token_holder_by_pk: Maybe<Z_Token_Holder>;
  /** delete data from the table: "z_totaltokens" */
  delete_z_totaltokens: Maybe<Z_Totaltokens_Mutation_Response>;
  /** delete single row from the table: "z_totaltokens" */
  delete_z_totaltokens_by_pk: Maybe<Z_Totaltokens>;
  /** delete data from the table: "z_transaction_history" */
  delete_z_transaction_history: Maybe<Z_Transaction_History_Mutation_Response>;
  /** delete single row from the table: "z_transaction_history" */
  delete_z_transaction_history_by_pk: Maybe<Z_Transaction_History>;
  /** delete data from the table: "z_users" */
  delete_z_users: Maybe<Z_Users_Mutation_Response>;
  /** delete single row from the table: "z_users" */
  delete_z_users_by_pk: Maybe<Z_Users>;
  /** insert data into the table: "z_minttokens" */
  insert_z_minttokens: Maybe<Z_Minttokens_Mutation_Response>;
  /** insert a single row into the table: "z_minttokens" */
  insert_z_minttokens_one: Maybe<Z_Minttokens>;
  /** insert data into the table: "z_secondary_marketplace" */
  insert_z_secondary_marketplace: Maybe<Z_Secondary_Marketplace_Mutation_Response>;
  /** insert a single row into the table: "z_secondary_marketplace" */
  insert_z_secondary_marketplace_one: Maybe<Z_Secondary_Marketplace>;
  /** insert data into the table: "z_token_holder" */
  insert_z_token_holder: Maybe<Z_Token_Holder_Mutation_Response>;
  /** insert a single row into the table: "z_token_holder" */
  insert_z_token_holder_one: Maybe<Z_Token_Holder>;
  /** insert data into the table: "z_totaltokens" */
  insert_z_totaltokens: Maybe<Z_Totaltokens_Mutation_Response>;
  /** insert a single row into the table: "z_totaltokens" */
  insert_z_totaltokens_one: Maybe<Z_Totaltokens>;
  /** insert data into the table: "z_transaction_history" */
  insert_z_transaction_history: Maybe<Z_Transaction_History_Mutation_Response>;
  /** insert a single row into the table: "z_transaction_history" */
  insert_z_transaction_history_one: Maybe<Z_Transaction_History>;
  /** insert data into the table: "z_users" */
  insert_z_users: Maybe<Z_Users_Mutation_Response>;
  /** insert a single row into the table: "z_users" */
  insert_z_users_one: Maybe<Z_Users>;
  /** update data of the table: "z_minttokens" */
  update_z_minttokens: Maybe<Z_Minttokens_Mutation_Response>;
  /** update single row of the table: "z_minttokens" */
  update_z_minttokens_by_pk: Maybe<Z_Minttokens>;
  /** update multiples rows of table: "z_minttokens" */
  update_z_minttokens_many: Maybe<Array<Maybe<Z_Minttokens_Mutation_Response>>>;
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
  /** update data of the table: "z_totaltokens" */
  update_z_totaltokens: Maybe<Z_Totaltokens_Mutation_Response>;
  /** update single row of the table: "z_totaltokens" */
  update_z_totaltokens_by_pk: Maybe<Z_Totaltokens>;
  /** update multiples rows of table: "z_totaltokens" */
  update_z_totaltokens_many: Maybe<Array<Maybe<Z_Totaltokens_Mutation_Response>>>;
  /** update data of the table: "z_transaction_history" */
  update_z_transaction_history: Maybe<Z_Transaction_History_Mutation_Response>;
  /** update single row of the table: "z_transaction_history" */
  update_z_transaction_history_by_pk: Maybe<Z_Transaction_History>;
  /** update multiples rows of table: "z_transaction_history" */
  update_z_transaction_history_many: Maybe<Array<Maybe<Z_Transaction_History_Mutation_Response>>>;
  /** update data of the table: "z_users" */
  update_z_users: Maybe<Z_Users_Mutation_Response>;
  /** update single row of the table: "z_users" */
  update_z_users_by_pk: Maybe<Z_Users>;
  /** update multiples rows of table: "z_users" */
  update_z_users_many: Maybe<Array<Maybe<Z_Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Z_MinttokensArgs = {
  where: Z_Minttokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_Minttokens_By_PkArgs = {
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
export type Mutation_RootDelete_Z_TotaltokensArgs = {
  where: Z_Totaltokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_Totaltokens_By_PkArgs = {
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
export type Mutation_RootDelete_Z_UsersArgs = {
  where: Z_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Z_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Z_MinttokensArgs = {
  objects: Array<Z_Minttokens_Insert_Input>;
  on_conflict: InputMaybe<Z_Minttokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Minttokens_OneArgs = {
  object: Z_Minttokens_Insert_Input;
  on_conflict: InputMaybe<Z_Minttokens_On_Conflict>;
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
export type Mutation_RootInsert_Z_TotaltokensArgs = {
  objects: Array<Z_Totaltokens_Insert_Input>;
  on_conflict: InputMaybe<Z_Totaltokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Z_Totaltokens_OneArgs = {
  object: Z_Totaltokens_Insert_Input;
  on_conflict: InputMaybe<Z_Totaltokens_On_Conflict>;
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
export type Mutation_RootUpdate_Z_MinttokensArgs = {
  _set: InputMaybe<Z_Minttokens_Set_Input>;
  where: Z_Minttokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Minttokens_By_PkArgs = {
  _set: InputMaybe<Z_Minttokens_Set_Input>;
  pk_columns: Z_Minttokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Minttokens_ManyArgs = {
  updates: Array<Z_Minttokens_Updates>;
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
export type Mutation_RootUpdate_Z_TotaltokensArgs = {
  _set: InputMaybe<Z_Totaltokens_Set_Input>;
  where: Z_Totaltokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Totaltokens_By_PkArgs = {
  _set: InputMaybe<Z_Totaltokens_Set_Input>;
  pk_columns: Z_Totaltokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Z_Totaltokens_ManyArgs = {
  updates: Array<Z_Totaltokens_Updates>;
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
  /** An array relationship */
  z_minttokens: Array<Z_Minttokens>;
  /** An aggregate relationship */
  z_minttokens_aggregate: Z_Minttokens_Aggregate;
  /** fetch data from the table: "z_minttokens" using primary key columns */
  z_minttokens_by_pk: Maybe<Z_Minttokens>;
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
  /** fetch data from the table: "z_totaltokens" */
  z_totaltokens: Array<Z_Totaltokens>;
  /** fetch aggregated fields from the table: "z_totaltokens" */
  z_totaltokens_aggregate: Z_Totaltokens_Aggregate;
  /** fetch data from the table: "z_totaltokens" using primary key columns */
  z_totaltokens_by_pk: Maybe<Z_Totaltokens>;
  /** fetch data from the table: "z_transaction_history" */
  z_transaction_history: Array<Z_Transaction_History>;
  /** fetch aggregated fields from the table: "z_transaction_history" */
  z_transaction_history_aggregate: Z_Transaction_History_Aggregate;
  /** fetch data from the table: "z_transaction_history" using primary key columns */
  z_transaction_history_by_pk: Maybe<Z_Transaction_History>;
  /** fetch data from the table: "z_users" */
  z_users: Array<Z_Users>;
  /** fetch aggregated fields from the table: "z_users" */
  z_users_aggregate: Z_Users_Aggregate;
  /** fetch data from the table: "z_users" using primary key columns */
  z_users_by_pk: Maybe<Z_Users>;
};


export type Query_RootZ_MinttokensArgs = {
  distinct_on: InputMaybe<Array<Z_Minttokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Minttokens_Order_By>>;
  where: InputMaybe<Z_Minttokens_Bool_Exp>;
};


export type Query_RootZ_Minttokens_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Minttokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Minttokens_Order_By>>;
  where: InputMaybe<Z_Minttokens_Bool_Exp>;
};


export type Query_RootZ_Minttokens_By_PkArgs = {
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


export type Query_RootZ_TotaltokensArgs = {
  distinct_on: InputMaybe<Array<Z_Totaltokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Totaltokens_Order_By>>;
  where: InputMaybe<Z_Totaltokens_Bool_Exp>;
};


export type Query_RootZ_Totaltokens_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Totaltokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Totaltokens_Order_By>>;
  where: InputMaybe<Z_Totaltokens_Bool_Exp>;
};


export type Query_RootZ_Totaltokens_By_PkArgs = {
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
  /** An array relationship */
  z_minttokens: Array<Z_Minttokens>;
  /** An aggregate relationship */
  z_minttokens_aggregate: Z_Minttokens_Aggregate;
  /** fetch data from the table: "z_minttokens" using primary key columns */
  z_minttokens_by_pk: Maybe<Z_Minttokens>;
  /** fetch data from the table in a streaming manner: "z_minttokens" */
  z_minttokens_stream: Array<Z_Minttokens>;
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
  /** fetch data from the table: "z_totaltokens" */
  z_totaltokens: Array<Z_Totaltokens>;
  /** fetch aggregated fields from the table: "z_totaltokens" */
  z_totaltokens_aggregate: Z_Totaltokens_Aggregate;
  /** fetch data from the table: "z_totaltokens" using primary key columns */
  z_totaltokens_by_pk: Maybe<Z_Totaltokens>;
  /** fetch data from the table in a streaming manner: "z_totaltokens" */
  z_totaltokens_stream: Array<Z_Totaltokens>;
  /** fetch data from the table: "z_transaction_history" */
  z_transaction_history: Array<Z_Transaction_History>;
  /** fetch aggregated fields from the table: "z_transaction_history" */
  z_transaction_history_aggregate: Z_Transaction_History_Aggregate;
  /** fetch data from the table: "z_transaction_history" using primary key columns */
  z_transaction_history_by_pk: Maybe<Z_Transaction_History>;
  /** fetch data from the table in a streaming manner: "z_transaction_history" */
  z_transaction_history_stream: Array<Z_Transaction_History>;
  /** fetch data from the table: "z_users" */
  z_users: Array<Z_Users>;
  /** fetch aggregated fields from the table: "z_users" */
  z_users_aggregate: Z_Users_Aggregate;
  /** fetch data from the table: "z_users" using primary key columns */
  z_users_by_pk: Maybe<Z_Users>;
  /** fetch data from the table in a streaming manner: "z_users" */
  z_users_stream: Array<Z_Users>;
};


export type Subscription_RootZ_MinttokensArgs = {
  distinct_on: InputMaybe<Array<Z_Minttokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Minttokens_Order_By>>;
  where: InputMaybe<Z_Minttokens_Bool_Exp>;
};


export type Subscription_RootZ_Minttokens_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Minttokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Minttokens_Order_By>>;
  where: InputMaybe<Z_Minttokens_Bool_Exp>;
};


export type Subscription_RootZ_Minttokens_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootZ_Minttokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Z_Minttokens_Stream_Cursor_Input>>;
  where: InputMaybe<Z_Minttokens_Bool_Exp>;
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


export type Subscription_RootZ_TotaltokensArgs = {
  distinct_on: InputMaybe<Array<Z_Totaltokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Totaltokens_Order_By>>;
  where: InputMaybe<Z_Totaltokens_Bool_Exp>;
};


export type Subscription_RootZ_Totaltokens_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Totaltokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Totaltokens_Order_By>>;
  where: InputMaybe<Z_Totaltokens_Bool_Exp>;
};


export type Subscription_RootZ_Totaltokens_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootZ_Totaltokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Z_Totaltokens_Stream_Cursor_Input>>;
  where: InputMaybe<Z_Totaltokens_Bool_Exp>;
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

/** columns and relationships of "z_minttokens" */
export type Z_Minttokens = {
  __typename: 'z_minttokens';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  remaining_token: Maybe<Scalars['String']>;
  token: Scalars['String'];
  tx_hash: Scalars['String'];
  user_id: Scalars['uuid'];
  /** An array relationship */
  z_token_holders: Array<Z_Token_Holder>;
  /** An aggregate relationship */
  z_token_holders_aggregate: Z_Token_Holder_Aggregate;
  /** An object relationship */
  z_user: Z_Users;
};


/** columns and relationships of "z_minttokens" */
export type Z_MinttokensZ_Token_HoldersArgs = {
  distinct_on: InputMaybe<Array<Z_Token_Holder_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Token_Holder_Order_By>>;
  where: InputMaybe<Z_Token_Holder_Bool_Exp>;
};


/** columns and relationships of "z_minttokens" */
export type Z_MinttokensZ_Token_Holders_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Token_Holder_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Token_Holder_Order_By>>;
  where: InputMaybe<Z_Token_Holder_Bool_Exp>;
};

/** aggregated selection of "z_minttokens" */
export type Z_Minttokens_Aggregate = {
  __typename: 'z_minttokens_aggregate';
  aggregate: Maybe<Z_Minttokens_Aggregate_Fields>;
  nodes: Array<Z_Minttokens>;
};

export type Z_Minttokens_Aggregate_Bool_Exp = {
  count: InputMaybe<Z_Minttokens_Aggregate_Bool_Exp_Count>;
};

export type Z_Minttokens_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Z_Minttokens_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Z_Minttokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "z_minttokens" */
export type Z_Minttokens_Aggregate_Fields = {
  __typename: 'z_minttokens_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Z_Minttokens_Max_Fields>;
  min: Maybe<Z_Minttokens_Min_Fields>;
};


/** aggregate fields of "z_minttokens" */
export type Z_Minttokens_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Z_Minttokens_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "z_minttokens" */
export type Z_Minttokens_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Z_Minttokens_Max_Order_By>;
  min: InputMaybe<Z_Minttokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "z_minttokens" */
export type Z_Minttokens_Arr_Rel_Insert_Input = {
  data: Array<Z_Minttokens_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Minttokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "z_minttokens". All fields are combined with a logical 'AND'. */
export type Z_Minttokens_Bool_Exp = {
  _and: InputMaybe<Array<Z_Minttokens_Bool_Exp>>;
  _not: InputMaybe<Z_Minttokens_Bool_Exp>;
  _or: InputMaybe<Array<Z_Minttokens_Bool_Exp>>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  remaining_token: InputMaybe<String_Comparison_Exp>;
  token: InputMaybe<String_Comparison_Exp>;
  tx_hash: InputMaybe<String_Comparison_Exp>;
  user_id: InputMaybe<Uuid_Comparison_Exp>;
  z_token_holders: InputMaybe<Z_Token_Holder_Bool_Exp>;
  z_token_holders_aggregate: InputMaybe<Z_Token_Holder_Aggregate_Bool_Exp>;
  z_user: InputMaybe<Z_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "z_minttokens" */
export enum Z_Minttokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZMinttokensPkey = 'z_minttokens_pkey'
}

/** input type for inserting data into table "z_minttokens" */
export type Z_Minttokens_Insert_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  remaining_token: InputMaybe<Scalars['String']>;
  token: InputMaybe<Scalars['String']>;
  tx_hash: InputMaybe<Scalars['String']>;
  user_id: InputMaybe<Scalars['uuid']>;
  z_token_holders: InputMaybe<Z_Token_Holder_Arr_Rel_Insert_Input>;
  z_user: InputMaybe<Z_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Minttokens_Max_Fields = {
  __typename: 'z_minttokens_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  remaining_token: Maybe<Scalars['String']>;
  token: Maybe<Scalars['String']>;
  tx_hash: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "z_minttokens" */
export type Z_Minttokens_Max_Order_By = {
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  remaining_token: InputMaybe<Order_By>;
  token: InputMaybe<Order_By>;
  tx_hash: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Z_Minttokens_Min_Fields = {
  __typename: 'z_minttokens_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  remaining_token: Maybe<Scalars['String']>;
  token: Maybe<Scalars['String']>;
  tx_hash: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "z_minttokens" */
export type Z_Minttokens_Min_Order_By = {
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  remaining_token: InputMaybe<Order_By>;
  token: InputMaybe<Order_By>;
  tx_hash: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** response of any mutation on the table "z_minttokens" */
export type Z_Minttokens_Mutation_Response = {
  __typename: 'z_minttokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_Minttokens>;
};

/** input type for inserting object relation for remote table "z_minttokens" */
export type Z_Minttokens_Obj_Rel_Insert_Input = {
  data: Z_Minttokens_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Z_Minttokens_On_Conflict>;
};

/** on_conflict condition type for table "z_minttokens" */
export type Z_Minttokens_On_Conflict = {
  constraint: Z_Minttokens_Constraint;
  update_columns: Array<Z_Minttokens_Update_Column>;
  where: InputMaybe<Z_Minttokens_Bool_Exp>;
};

/** Ordering options when selecting data from "z_minttokens". */
export type Z_Minttokens_Order_By = {
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  remaining_token: InputMaybe<Order_By>;
  token: InputMaybe<Order_By>;
  tx_hash: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
  z_token_holders_aggregate: InputMaybe<Z_Token_Holder_Aggregate_Order_By>;
  z_user: InputMaybe<Z_Users_Order_By>;
};

/** primary key columns input for table: z_minttokens */
export type Z_Minttokens_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "z_minttokens" */
export enum Z_Minttokens_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RemainingToken = 'remaining_token',
  /** column name */
  Token = 'token',
  /** column name */
  TxHash = 'tx_hash',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "z_minttokens" */
export type Z_Minttokens_Set_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  remaining_token: InputMaybe<Scalars['String']>;
  token: InputMaybe<Scalars['String']>;
  tx_hash: InputMaybe<Scalars['String']>;
  user_id: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "z_minttokens" */
export type Z_Minttokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Z_Minttokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Z_Minttokens_Stream_Cursor_Value_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  remaining_token: InputMaybe<Scalars['String']>;
  token: InputMaybe<Scalars['String']>;
  tx_hash: InputMaybe<Scalars['String']>;
  user_id: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "z_minttokens" */
export enum Z_Minttokens_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RemainingToken = 'remaining_token',
  /** column name */
  Token = 'token',
  /** column name */
  TxHash = 'tx_hash',
  /** column name */
  UserId = 'user_id'
}

export type Z_Minttokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Minttokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Minttokens_Bool_Exp;
};

/** columns and relationships of "z_secondary_marketplace" */
export type Z_Secondary_Marketplace = {
  __typename: 'z_secondary_marketplace';
  amount: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  minttoken_id: Maybe<Scalars['uuid']>;
  owner_id: Scalars['uuid'];
  tokens: Scalars['String'];
  /** An object relationship */
  z_minttoken: Maybe<Z_Minttokens>;
  /** An object relationship */
  z_user: Z_Users;
};

/** aggregated selection of "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_Aggregate = {
  __typename: 'z_secondary_marketplace_aggregate';
  aggregate: Maybe<Z_Secondary_Marketplace_Aggregate_Fields>;
  nodes: Array<Z_Secondary_Marketplace>;
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

/** Boolean expression to filter rows from the table "z_secondary_marketplace". All fields are combined with a logical 'AND'. */
export type Z_Secondary_Marketplace_Bool_Exp = {
  _and: InputMaybe<Array<Z_Secondary_Marketplace_Bool_Exp>>;
  _not: InputMaybe<Z_Secondary_Marketplace_Bool_Exp>;
  _or: InputMaybe<Array<Z_Secondary_Marketplace_Bool_Exp>>;
  amount: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  minttoken_id: InputMaybe<Uuid_Comparison_Exp>;
  owner_id: InputMaybe<Uuid_Comparison_Exp>;
  tokens: InputMaybe<String_Comparison_Exp>;
  z_minttoken: InputMaybe<Z_Minttokens_Bool_Exp>;
  z_user: InputMaybe<Z_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "z_secondary_marketplace" */
export enum Z_Secondary_Marketplace_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZSecondaryMarketplacePkey = 'z_secondary_marketplace_pkey'
}

/** input type for inserting data into table "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_Insert_Input = {
  amount: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  minttoken_id: InputMaybe<Scalars['uuid']>;
  owner_id: InputMaybe<Scalars['uuid']>;
  tokens: InputMaybe<Scalars['String']>;
  z_minttoken: InputMaybe<Z_Minttokens_Obj_Rel_Insert_Input>;
  z_user: InputMaybe<Z_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Secondary_Marketplace_Max_Fields = {
  __typename: 'z_secondary_marketplace_max_fields';
  amount: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  minttoken_id: Maybe<Scalars['uuid']>;
  owner_id: Maybe<Scalars['uuid']>;
  tokens: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Z_Secondary_Marketplace_Min_Fields = {
  __typename: 'z_secondary_marketplace_min_fields';
  amount: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  minttoken_id: Maybe<Scalars['uuid']>;
  owner_id: Maybe<Scalars['uuid']>;
  tokens: Maybe<Scalars['String']>;
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
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  minttoken_id: InputMaybe<Order_By>;
  owner_id: InputMaybe<Order_By>;
  tokens: InputMaybe<Order_By>;
  z_minttoken: InputMaybe<Z_Minttokens_Order_By>;
  z_user: InputMaybe<Z_Users_Order_By>;
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
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MinttokenId = 'minttoken_id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Tokens = 'tokens'
}

/** input type for updating data in table "z_secondary_marketplace" */
export type Z_Secondary_Marketplace_Set_Input = {
  amount: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  minttoken_id: InputMaybe<Scalars['uuid']>;
  owner_id: InputMaybe<Scalars['uuid']>;
  tokens: InputMaybe<Scalars['String']>;
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
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  minttoken_id: InputMaybe<Scalars['uuid']>;
  owner_id: InputMaybe<Scalars['uuid']>;
  tokens: InputMaybe<Scalars['String']>;
};

/** update columns of table "z_secondary_marketplace" */
export enum Z_Secondary_Marketplace_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MinttokenId = 'minttoken_id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Tokens = 'tokens'
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
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  mint_id: Scalars['uuid'];
  token: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
  /** An object relationship */
  z_minttoken: Z_Minttokens;
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
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  mint_id: InputMaybe<Uuid_Comparison_Exp>;
  token: InputMaybe<String_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id: InputMaybe<Uuid_Comparison_Exp>;
  z_minttoken: InputMaybe<Z_Minttokens_Bool_Exp>;
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
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  mint_id: InputMaybe<Scalars['uuid']>;
  token: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  user_id: InputMaybe<Scalars['uuid']>;
  z_minttoken: InputMaybe<Z_Minttokens_Obj_Rel_Insert_Input>;
  z_user: InputMaybe<Z_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Token_Holder_Max_Fields = {
  __typename: 'z_token_holder_max_fields';
  amount: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  mint_id: Maybe<Scalars['uuid']>;
  token: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "z_token_holder" */
export type Z_Token_Holder_Max_Order_By = {
  amount: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  mint_id: InputMaybe<Order_By>;
  token: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Z_Token_Holder_Min_Fields = {
  __typename: 'z_token_holder_min_fields';
  amount: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  mint_id: Maybe<Scalars['uuid']>;
  token: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "z_token_holder" */
export type Z_Token_Holder_Min_Order_By = {
  amount: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  mint_id: InputMaybe<Order_By>;
  token: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
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
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  mint_id: InputMaybe<Order_By>;
  token: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
  z_minttoken: InputMaybe<Z_Minttokens_Order_By>;
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
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MintId = 'mint_id',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "z_token_holder" */
export type Z_Token_Holder_Set_Input = {
  amount: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  mint_id: InputMaybe<Scalars['uuid']>;
  token: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  user_id: InputMaybe<Scalars['uuid']>;
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
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  mint_id: InputMaybe<Scalars['uuid']>;
  token: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  user_id: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "z_token_holder" */
export enum Z_Token_Holder_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MintId = 'mint_id',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Z_Token_Holder_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Token_Holder_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Token_Holder_Bool_Exp;
};

/** columns and relationships of "z_totaltokens" */
export type Z_Totaltokens = {
  __typename: 'z_totaltokens';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  mint_id: Maybe<Scalars['uuid']>;
  remaining_tokens: Scalars['String'];
  total_tokens: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "z_totaltokens" */
export type Z_Totaltokens_Aggregate = {
  __typename: 'z_totaltokens_aggregate';
  aggregate: Maybe<Z_Totaltokens_Aggregate_Fields>;
  nodes: Array<Z_Totaltokens>;
};

/** aggregate fields of "z_totaltokens" */
export type Z_Totaltokens_Aggregate_Fields = {
  __typename: 'z_totaltokens_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Z_Totaltokens_Max_Fields>;
  min: Maybe<Z_Totaltokens_Min_Fields>;
};


/** aggregate fields of "z_totaltokens" */
export type Z_Totaltokens_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Z_Totaltokens_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "z_totaltokens". All fields are combined with a logical 'AND'. */
export type Z_Totaltokens_Bool_Exp = {
  _and: InputMaybe<Array<Z_Totaltokens_Bool_Exp>>;
  _not: InputMaybe<Z_Totaltokens_Bool_Exp>;
  _or: InputMaybe<Array<Z_Totaltokens_Bool_Exp>>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  mint_id: InputMaybe<Uuid_Comparison_Exp>;
  remaining_tokens: InputMaybe<String_Comparison_Exp>;
  total_tokens: InputMaybe<String_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "z_totaltokens" */
export enum Z_Totaltokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZTotaltokensPkey = 'z_totaltokens_pkey'
}

/** input type for inserting data into table "z_totaltokens" */
export type Z_Totaltokens_Insert_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  mint_id: InputMaybe<Scalars['uuid']>;
  remaining_tokens: InputMaybe<Scalars['String']>;
  total_tokens: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  user_id: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Z_Totaltokens_Max_Fields = {
  __typename: 'z_totaltokens_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  mint_id: Maybe<Scalars['uuid']>;
  remaining_tokens: Maybe<Scalars['String']>;
  total_tokens: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Z_Totaltokens_Min_Fields = {
  __typename: 'z_totaltokens_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  mint_id: Maybe<Scalars['uuid']>;
  remaining_tokens: Maybe<Scalars['String']>;
  total_tokens: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "z_totaltokens" */
export type Z_Totaltokens_Mutation_Response = {
  __typename: 'z_totaltokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_Totaltokens>;
};

/** on_conflict condition type for table "z_totaltokens" */
export type Z_Totaltokens_On_Conflict = {
  constraint: Z_Totaltokens_Constraint;
  update_columns: Array<Z_Totaltokens_Update_Column>;
  where: InputMaybe<Z_Totaltokens_Bool_Exp>;
};

/** Ordering options when selecting data from "z_totaltokens". */
export type Z_Totaltokens_Order_By = {
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  mint_id: InputMaybe<Order_By>;
  remaining_tokens: InputMaybe<Order_By>;
  total_tokens: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** primary key columns input for table: z_totaltokens */
export type Z_Totaltokens_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "z_totaltokens" */
export enum Z_Totaltokens_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MintId = 'mint_id',
  /** column name */
  RemainingTokens = 'remaining_tokens',
  /** column name */
  TotalTokens = 'total_tokens',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "z_totaltokens" */
export type Z_Totaltokens_Set_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  mint_id: InputMaybe<Scalars['uuid']>;
  remaining_tokens: InputMaybe<Scalars['String']>;
  total_tokens: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  user_id: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "z_totaltokens" */
export type Z_Totaltokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Z_Totaltokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Z_Totaltokens_Stream_Cursor_Value_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  mint_id: InputMaybe<Scalars['uuid']>;
  remaining_tokens: InputMaybe<Scalars['String']>;
  total_tokens: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  user_id: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "z_totaltokens" */
export enum Z_Totaltokens_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MintId = 'mint_id',
  /** column name */
  RemainingTokens = 'remaining_tokens',
  /** column name */
  TotalTokens = 'total_tokens',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Z_Totaltokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Totaltokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Totaltokens_Bool_Exp;
};

/** columns and relationships of "z_transaction_history" */
export type Z_Transaction_History = {
  __typename: 'z_transaction_history';
  amount: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  mint_id: Scalars['uuid'];
  receiver: Scalars['uuid'];
  sender: Scalars['uuid'];
  token: Scalars['String'];
  tx_hash: Scalars['String'];
  /** An object relationship */
  z_minttoken: Z_Minttokens;
  /** An object relationship */
  z_user_receiver: Z_Users;
  /** An object relationship */
  z_user_sender: Z_Users;
};

/** aggregated selection of "z_transaction_history" */
export type Z_Transaction_History_Aggregate = {
  __typename: 'z_transaction_history_aggregate';
  aggregate: Maybe<Z_Transaction_History_Aggregate_Fields>;
  nodes: Array<Z_Transaction_History>;
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

/** Boolean expression to filter rows from the table "z_transaction_history". All fields are combined with a logical 'AND'. */
export type Z_Transaction_History_Bool_Exp = {
  _and: InputMaybe<Array<Z_Transaction_History_Bool_Exp>>;
  _not: InputMaybe<Z_Transaction_History_Bool_Exp>;
  _or: InputMaybe<Array<Z_Transaction_History_Bool_Exp>>;
  amount: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  mint_id: InputMaybe<Uuid_Comparison_Exp>;
  receiver: InputMaybe<Uuid_Comparison_Exp>;
  sender: InputMaybe<Uuid_Comparison_Exp>;
  token: InputMaybe<String_Comparison_Exp>;
  tx_hash: InputMaybe<String_Comparison_Exp>;
  z_minttoken: InputMaybe<Z_Minttokens_Bool_Exp>;
  z_user_receiver: InputMaybe<Z_Users_Bool_Exp>;
  z_user_sender: InputMaybe<Z_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "z_transaction_history" */
export enum Z_Transaction_History_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZTransactionHistoryPkey = 'z_transaction_history_pkey'
}

/** input type for inserting data into table "z_transaction_history" */
export type Z_Transaction_History_Insert_Input = {
  amount: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  mint_id: InputMaybe<Scalars['uuid']>;
  receiver: InputMaybe<Scalars['uuid']>;
  sender: InputMaybe<Scalars['uuid']>;
  token: InputMaybe<Scalars['String']>;
  tx_hash: InputMaybe<Scalars['String']>;
  z_minttoken: InputMaybe<Z_Minttokens_Obj_Rel_Insert_Input>;
  z_user_receiver: InputMaybe<Z_Users_Obj_Rel_Insert_Input>;
  z_user_sender: InputMaybe<Z_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Transaction_History_Max_Fields = {
  __typename: 'z_transaction_history_max_fields';
  amount: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  mint_id: Maybe<Scalars['uuid']>;
  receiver: Maybe<Scalars['uuid']>;
  sender: Maybe<Scalars['uuid']>;
  token: Maybe<Scalars['String']>;
  tx_hash: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Z_Transaction_History_Min_Fields = {
  __typename: 'z_transaction_history_min_fields';
  amount: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  mint_id: Maybe<Scalars['uuid']>;
  receiver: Maybe<Scalars['uuid']>;
  sender: Maybe<Scalars['uuid']>;
  token: Maybe<Scalars['String']>;
  tx_hash: Maybe<Scalars['String']>;
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
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  mint_id: InputMaybe<Order_By>;
  receiver: InputMaybe<Order_By>;
  sender: InputMaybe<Order_By>;
  token: InputMaybe<Order_By>;
  tx_hash: InputMaybe<Order_By>;
  z_minttoken: InputMaybe<Z_Minttokens_Order_By>;
  z_user_receiver: InputMaybe<Z_Users_Order_By>;
  z_user_sender: InputMaybe<Z_Users_Order_By>;
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
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MintId = 'mint_id',
  /** column name */
  Receiver = 'receiver',
  /** column name */
  Sender = 'sender',
  /** column name */
  Token = 'token',
  /** column name */
  TxHash = 'tx_hash'
}

/** input type for updating data in table "z_transaction_history" */
export type Z_Transaction_History_Set_Input = {
  amount: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  mint_id: InputMaybe<Scalars['uuid']>;
  receiver: InputMaybe<Scalars['uuid']>;
  sender: InputMaybe<Scalars['uuid']>;
  token: InputMaybe<Scalars['String']>;
  tx_hash: InputMaybe<Scalars['String']>;
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
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  mint_id: InputMaybe<Scalars['uuid']>;
  receiver: InputMaybe<Scalars['uuid']>;
  sender: InputMaybe<Scalars['uuid']>;
  token: InputMaybe<Scalars['String']>;
  tx_hash: InputMaybe<Scalars['String']>;
};

/** update columns of table "z_transaction_history" */
export enum Z_Transaction_History_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MintId = 'mint_id',
  /** column name */
  Receiver = 'receiver',
  /** column name */
  Sender = 'sender',
  /** column name */
  Token = 'token',
  /** column name */
  TxHash = 'tx_hash'
}

export type Z_Transaction_History_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Transaction_History_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Transaction_History_Bool_Exp;
};

/** columns and relationships of "z_users" */
export type Z_Users = {
  __typename: 'z_users';
  address: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  password: Scalars['String'];
  pvtKey: Scalars['String'];
  username: Scalars['String'];
  /** An array relationship */
  z_minttokens: Array<Z_Minttokens>;
  /** An aggregate relationship */
  z_minttokens_aggregate: Z_Minttokens_Aggregate;
  /** An array relationship */
  z_token_holders: Array<Z_Token_Holder>;
  /** An aggregate relationship */
  z_token_holders_aggregate: Z_Token_Holder_Aggregate;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_MinttokensArgs = {
  distinct_on: InputMaybe<Array<Z_Minttokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Minttokens_Order_By>>;
  where: InputMaybe<Z_Minttokens_Bool_Exp>;
};


/** columns and relationships of "z_users" */
export type Z_UsersZ_Minttokens_AggregateArgs = {
  distinct_on: InputMaybe<Array<Z_Minttokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Z_Minttokens_Order_By>>;
  where: InputMaybe<Z_Minttokens_Bool_Exp>;
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
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  password: InputMaybe<String_Comparison_Exp>;
  pvtKey: InputMaybe<String_Comparison_Exp>;
  username: InputMaybe<String_Comparison_Exp>;
  z_minttokens: InputMaybe<Z_Minttokens_Bool_Exp>;
  z_minttokens_aggregate: InputMaybe<Z_Minttokens_Aggregate_Bool_Exp>;
  z_token_holders: InputMaybe<Z_Token_Holder_Bool_Exp>;
  z_token_holders_aggregate: InputMaybe<Z_Token_Holder_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "z_users" */
export enum Z_Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZUsersPkey = 'z_users_pkey'
}

/** input type for inserting data into table "z_users" */
export type Z_Users_Insert_Input = {
  address: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  password: InputMaybe<Scalars['String']>;
  pvtKey: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
  z_minttokens: InputMaybe<Z_Minttokens_Arr_Rel_Insert_Input>;
  z_token_holders: InputMaybe<Z_Token_Holder_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Z_Users_Max_Fields = {
  __typename: 'z_users_max_fields';
  address: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  password: Maybe<Scalars['String']>;
  pvtKey: Maybe<Scalars['String']>;
  username: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Z_Users_Min_Fields = {
  __typename: 'z_users_min_fields';
  address: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  password: Maybe<Scalars['String']>;
  pvtKey: Maybe<Scalars['String']>;
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
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  password: InputMaybe<Order_By>;
  pvtKey: InputMaybe<Order_By>;
  username: InputMaybe<Order_By>;
  z_minttokens_aggregate: InputMaybe<Z_Minttokens_Aggregate_Order_By>;
  z_token_holders_aggregate: InputMaybe<Z_Token_Holder_Aggregate_Order_By>;
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
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  PvtKey = 'pvtKey',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "z_users" */
export type Z_Users_Set_Input = {
  address: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  password: InputMaybe<Scalars['String']>;
  pvtKey: InputMaybe<Scalars['String']>;
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
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  password: InputMaybe<Scalars['String']>;
  pvtKey: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
};

/** update columns of table "z_users" */
export enum Z_Users_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  PvtKey = 'pvtKey',
  /** column name */
  Username = 'username'
}

export type Z_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Z_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Z_Users_Bool_Exp;
};
