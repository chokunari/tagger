/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImagetag = /* GraphQL */ `
  query GetImagetag($id: ID!) {
    getImagetag(id: $id) {
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
    $filter: ModelImagetagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImagetags(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
