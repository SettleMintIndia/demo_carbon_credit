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
  /** delete data from the table: "z_users" */
  delete_z_users: Maybe<Z_Users_Mutation_Response>;
  /** delete single row from the table: "z_users" */
  delete_z_users_by_pk: Maybe<Z_Users>;
  /** insert data into the table: "z_minttokens" */
  insert_z_minttokens: Maybe<Z_Minttokens_Mutation_Response>;
  /** insert a single row into the table: "z_minttokens" */
  insert_z_minttokens_one: Maybe<Z_Minttokens>;
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
  /** fetch data from the table: "z_minttokens" */
  z_minttokens: Array<Z_Minttokens>;
  /** fetch aggregated fields from the table: "z_minttokens" */
  z_minttokens_aggregate: Z_Minttokens_Aggregate;
  /** fetch data from the table: "z_minttokens" using primary key columns */
  z_minttokens_by_pk: Maybe<Z_Minttokens>;
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
  /** fetch data from the table: "z_minttokens" */
  z_minttokens: Array<Z_Minttokens>;
  /** fetch aggregated fields from the table: "z_minttokens" */
  z_minttokens_aggregate: Z_Minttokens_Aggregate;
  /** fetch data from the table: "z_minttokens" using primary key columns */
  z_minttokens_by_pk: Maybe<Z_Minttokens>;
  /** fetch data from the table in a streaming manner: "z_minttokens" */
  z_minttokens_stream: Array<Z_Minttokens>;
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
  token: Scalars['String'];
  tx_hash: Scalars['String'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "z_minttokens" */
export type Z_Minttokens_Aggregate = {
  __typename: 'z_minttokens_aggregate';
  aggregate: Maybe<Z_Minttokens_Aggregate_Fields>;
  nodes: Array<Z_Minttokens>;
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

/** Boolean expression to filter rows from the table "z_minttokens". All fields are combined with a logical 'AND'. */
export type Z_Minttokens_Bool_Exp = {
  _and: InputMaybe<Array<Z_Minttokens_Bool_Exp>>;
  _not: InputMaybe<Z_Minttokens_Bool_Exp>;
  _or: InputMaybe<Array<Z_Minttokens_Bool_Exp>>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  token: InputMaybe<String_Comparison_Exp>;
  tx_hash: InputMaybe<String_Comparison_Exp>;
  user_id: InputMaybe<Uuid_Comparison_Exp>;
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
  token: InputMaybe<Scalars['String']>;
  tx_hash: InputMaybe<Scalars['String']>;
  user_id: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Z_Minttokens_Max_Fields = {
  __typename: 'z_minttokens_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  token: Maybe<Scalars['String']>;
  tx_hash: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Z_Minttokens_Min_Fields = {
  __typename: 'z_minttokens_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  token: Maybe<Scalars['String']>;
  tx_hash: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "z_minttokens" */
export type Z_Minttokens_Mutation_Response = {
  __typename: 'z_minttokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Z_Minttokens>;
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
  token: InputMaybe<Order_By>;
  tx_hash: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
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

/** columns and relationships of "z_users" */
export type Z_Users = {
  __typename: 'z_users';
  address: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  password: Scalars['String'];
  pvtKey: Scalars['String'];
  username: Scalars['String'];
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
