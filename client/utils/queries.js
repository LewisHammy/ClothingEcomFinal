import { gql } from '@apollo/client';

export const GET_PRODUCT = gql`
  query me {
    me {
      _id
      name
      size
      color
      description {
        price
        imagesUrls
      }
    }
  }
`;