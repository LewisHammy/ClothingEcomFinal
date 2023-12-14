import { gql } from '@apollo/client';

export const GET_PRODUCTS_QUERY = gql`
  query getProducts {
    products {
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
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $description: String!
    $price: Float!
    $category: String!
    $size: [String!]!
    $color: String!
    $imageUrls: [String!]!
  ) {
    addProduct(
      name: $name
      description: $description
      price: $price
      category: $category
      size: $size
      color: $color
      imageUrls: $imageUrls
    ) {
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
`;