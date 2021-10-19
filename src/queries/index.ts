import { gql } from '@apollo/client';

export const SIGNUP = gql`
  mutation (
    $signupEmail: String!
    $signupPassword: String!
    $signupAccountType: String!
  ) {
    public {
      signup(
        email: $signupEmail
        password: $signupPassword
        accountType: $signupAccountType
      ) {
        message
        token
        status
        accountType
      }
    }
  }
`;

export const SIGNIN = gql`
  mutation ($signinEmail: String!, $signinPassword: String!) {
    public {
      signin(email: $signinEmail, password: $signinPassword) {
        message
        token
        accountType
        status
        isLoggedin
      }
    }
  }
`;

export const GET_PROFILE = gql`
  query ClientQuery {
    client {
      getProfile {
        email
        profile {
          firstname
          lastname
          phoneNumber
          gender
          country
          region
          address
          city
        }
      }
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation (
    $firstname: String!
    $lastname: String!
    $phoneNumber: String!
    $region: String!
    $city: String!
    $country: String!
    $address: String!
    $gender: String
  ) {
    client {
      updateProfile(
        firstname: $firstname
        lastname: $lastname
        phoneNumber: $phoneNumber
        region: $region
        city: $city
        country: $country
        address: $address
        gender: $gender
      ) {
        message
        status
      }
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation (
    $currentPassword: String!
    $newPassword: String!
    $confirmPassword: String!
  ) {
    client {
      changePassword(
        currentPassword: $currentPassword
        newPassword: $newPassword
        confirmPassword: $confirmPassword
      ) {
        message
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation (
    $productName: String!
    $productDescription: String!
    $productSizes: [String!]!
    $colors: [String!]!
    $category: String!
    $stock: String!
    $tags: [String!]!
    $sold: String
    $oldPrice: String!
    $newPrice: String!
  ) {
    client {
      addProduct(
        productName: $productName
        productDescription: $productDescription
        productSizes: $productSizes
        colors: $colors
        category: $category
        stock: $stock
        tags: $tags
        sold: $sold
        oldPrice: $oldPrice
        newPrice: $newPrice
      ) {
        message
      }
    }
  }
`;
