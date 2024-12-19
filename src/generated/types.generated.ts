export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddRepositoryInput = {
  url: Scalars['String']['input'];
};

export type Commit = {
  __typename?: 'Commit';
  author?: Maybe<Scalars['String']['output']>;
  committer?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  url: Scalars['String']['output'];
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phoneCode: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addRepository?: Maybe<Repository>;
  updatePreference?: Maybe<Preference>;
  updateProfile?: Maybe<User>;
  updateRepositoryStatus?: Maybe<Repository>;
  updateSecurity?: Maybe<Security>;
};


export type MutationAddRepositoryArgs = {
  input: AddRepositoryInput;
};


export type MutationUpdatePreferenceArgs = {
  input: UpdatePreferenceInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateRepositoryStatusArgs = {
  id: Scalars['ID']['input'];
  input: UpdateRepositoryStatusInput;
};


export type MutationUpdateSecurityArgs = {
  input: UpdateSecurityInput;
};

export enum OwnerType {
  Organization = 'ORGANIZATION',
  User = 'USER'
}

export type Preference = {
  __typename?: 'Preference';
  id: Scalars['ID']['output'];
  loginEmailAlert: Scalars['Boolean']['output'];
  releaseAlert: Scalars['Boolean']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  countries?: Maybe<Array<Maybe<Country>>>;
  preference?: Maybe<Preference>;
  profile?: Maybe<User>;
  repositories?: Maybe<RepositoriesPaginatedResult>;
  repository?: Maybe<Repository>;
  security?: Maybe<Security>;
};


export type QueryRepositoriesArgs = {
  query?: InputMaybe<RepositoryQueryParams>;
};


export type QueryRepositoryArgs = {
  id: Scalars['ID']['input'];
};

export type ReleaseInfo = {
  __typename?: 'ReleaseInfo';
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type RepositoriesPaginatedResult = {
  __typename?: 'RepositoriesPaginatedResult';
  data?: Maybe<Array<Maybe<Repository>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Repository = {
  __typename?: 'Repository';
  addedAt: Scalars['String']['output'];
  archived: Scalars['Boolean']['output'];
  branch: Scalars['String']['output'];
  commits?: Maybe<Array<Maybe<Commit>>>;
  description?: Maybe<Scalars['String']['output']>;
  githubUrl: Scalars['String']['output'];
  homepage?: Maybe<Scalars['String']['output']>;
  httpsCloneUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  latestRelease?: Maybe<ReleaseInfo>;
  name: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  ownerType: OwnerType;
  ownerUrl: Scalars['String']['output'];
  releases?: Maybe<Array<Maybe<ReleaseInfo>>>;
  sshCloneUrl: Scalars['String']['output'];
  viewed: Scalars['Boolean']['output'];
};

export type RepositoryQueryParams = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortKey?: InputMaybe<Scalars['String']['input']>;
  sortMethod?: InputMaybe<Scalars['String']['input']>;
  viewed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Security = {
  __typename?: 'Security';
  id: Scalars['ID']['output'];
  twoFactorAuth: Scalars['Boolean']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UpdatePreferenceInput = {
  loginEmailAlert: Scalars['Boolean']['input'];
  releaseAlert: Scalars['Boolean']['input'];
};

export type UpdateProfileInput = {
  contactCountryId?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRepositoryStatusInput = {
  archived: Scalars['Boolean']['input'];
  viewed: Scalars['Boolean']['input'];
};

export type UpdateSecurityInput = {
  twoFactorAuth: Scalars['Boolean']['input'];
};

export type User = {
  __typename?: 'User';
  contactCountry?: Maybe<Country>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  profileImageId?: Maybe<Scalars['String']['output']>;
  profileImageUrl?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};
