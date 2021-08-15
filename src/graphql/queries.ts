/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImagetag = /* GraphQL */ `
  query GetImagetag($id: ID!, $sub: ID!) {
    getImagetag(id: $id, sub: $sub) {
      id
      sub
      tagname
      imgurl
      createdAt
      updatedAt
    }
  }
`;
export const listImagetags = /* GraphQL */ `
  query ListImagetags(
    $id: ID
    $sub: ModelIDKeyConditionInput
    $filter: ModelImagetagFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listImagetags(
      id: $id
      sub: $sub
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        sub
        tagname
        imgurl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const imagetagByIdTagnameIndex = /* GraphQL */ `
  query ImagetagByIdTagnameIndex(
    $id: ID
    $tagname: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelImagetagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ImagetagByIdTagnameIndex(
      id: $id
      tagname: $tagname
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        tagname
        imgurl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const imagetagByIdImgurlIndex = /* GraphQL */ `
  query ImagetagByIdImgurlIndex(
    $id: ID
    $imgurl: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelImagetagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ImagetagByIdImgurlIndex(
      id: $id
      imgurl: $imgurl
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        tagname
        imgurl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
