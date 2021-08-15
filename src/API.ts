/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateImagetagInput = {
  id?: string | null,
  sub: string,
  tagname: string,
  imgurl: string,
};

export type ModelImagetagConditionInput = {
  tagname?: ModelStringInput | null,
  imgurl?: ModelStringInput | null,
  and?: Array< ModelImagetagConditionInput | null > | null,
  or?: Array< ModelImagetagConditionInput | null > | null,
  not?: ModelImagetagConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Imagetag = {
  __typename: "Imagetag",
  id: string,
  sub: string,
  tagname: string,
  imgurl: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateImagetagInput = {
  id: string,
  sub: string,
  tagname?: string | null,
  imgurl?: string | null,
};

export type DeleteImagetagInput = {
  id: string,
  sub: string,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelImagetagFilterInput = {
  id?: ModelIDInput | null,
  sub?: ModelIDInput | null,
  tagname?: ModelStringInput | null,
  imgurl?: ModelStringInput | null,
  and?: Array< ModelImagetagFilterInput | null > | null,
  or?: Array< ModelImagetagFilterInput | null > | null,
  not?: ModelImagetagFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelImagetagConnection = {
  __typename: "ModelImagetagConnection",
  items?:  Array<Imagetag | null > | null,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateImagetagMutationVariables = {
  input: CreateImagetagInput,
  condition?: ModelImagetagConditionInput | null,
};

export type CreateImagetagMutation = {
  createImagetag?:  {
    __typename: "Imagetag",
    id: string,
    sub: string,
    tagname: string,
    imgurl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateImagetagMutationVariables = {
  input: UpdateImagetagInput,
  condition?: ModelImagetagConditionInput | null,
};

export type UpdateImagetagMutation = {
  updateImagetag?:  {
    __typename: "Imagetag",
    id: string,
    sub: string,
    tagname: string,
    imgurl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteImagetagMutationVariables = {
  input: DeleteImagetagInput,
  condition?: ModelImagetagConditionInput | null,
};

export type DeleteImagetagMutation = {
  deleteImagetag?:  {
    __typename: "Imagetag",
    id: string,
    sub: string,
    tagname: string,
    imgurl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetImagetagQueryVariables = {
  id: string,
  sub: string,
};

export type GetImagetagQuery = {
  getImagetag?:  {
    __typename: "Imagetag",
    id: string,
    sub: string,
    tagname: string,
    imgurl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListImagetagsQueryVariables = {
  id?: string | null,
  sub?: ModelIDKeyConditionInput | null,
  filter?: ModelImagetagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListImagetagsQuery = {
  listImagetags?:  {
    __typename: "ModelImagetagConnection",
    items?:  Array< {
      __typename: "Imagetag",
      id: string,
      sub: string,
      tagname: string,
      imgurl: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ImagetagByIdTagnameIndexQueryVariables = {
  id?: string | null,
  tagname?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelImagetagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ImagetagByIdTagnameIndexQuery = {
  ImagetagByIdTagnameIndex?:  {
    __typename: "ModelImagetagConnection",
    items?:  Array< {
      __typename: "Imagetag",
      id: string,
      sub: string,
      tagname: string,
      imgurl: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ImagetagByIdImgurlIndexQueryVariables = {
  id?: string | null,
  imgurl?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelImagetagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ImagetagByIdImgurlIndexQuery = {
  ImagetagByIdImgurlIndex?:  {
    __typename: "ModelImagetagConnection",
    items?:  Array< {
      __typename: "Imagetag",
      id: string,
      sub: string,
      tagname: string,
      imgurl: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateImagetagSubscription = {
  onCreateImagetag?:  {
    __typename: "Imagetag",
    id: string,
    sub: string,
    tagname: string,
    imgurl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateImagetagSubscription = {
  onUpdateImagetag?:  {
    __typename: "Imagetag",
    id: string,
    sub: string,
    tagname: string,
    imgurl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteImagetagSubscription = {
  onDeleteImagetag?:  {
    __typename: "Imagetag",
    id: string,
    sub: string,
    tagname: string,
    imgurl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
