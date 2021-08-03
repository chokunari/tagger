/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createImagetag = /* GraphQL */ `
  mutation CreateImagetag(
    $input: CreateImagetagInput!
    $condition: ModelImagetagConditionInput
  ) {
    createImagetag(input: $input, condition: $condition) {
      id
      sub
      tagname
      imgurl
      createdAt
      updatedAt
    }
  }
`;
export const updateImagetag = /* GraphQL */ `
  mutation UpdateImagetag(
    $input: UpdateImagetagInput!
    $condition: ModelImagetagConditionInput
  ) {
    updateImagetag(input: $input, condition: $condition) {
      id
      sub
      tagname
      imgurl
      createdAt
      updatedAt
    }
  }
`;
export const deleteImagetag = /* GraphQL */ `
  mutation DeleteImagetag(
    $input: DeleteImagetagInput!
    $condition: ModelImagetagConditionInput
  ) {
    deleteImagetag(input: $input, condition: $condition) {
      id
      sub
      tagname
      imgurl
      createdAt
      updatedAt
    }
  }
`;
