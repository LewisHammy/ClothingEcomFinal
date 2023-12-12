import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      productCount
      savedProducts {
        _id
        name
        description
        price
        category
        size
        color
        imageUrls
      }
    }
  }
`;


export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      category
      color
      description
      imageUrls
      name
      price
      size
    }
}
`