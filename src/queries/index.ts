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
        firstname
        lastname
        phoneNumber
        imageUrl
        gender
        store {
          name
          currency
        }
        location {
          city
          address
          country
        }
        account {
          email
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

export const UPDATE_STORE = gql`
  mutation ($storeName: String!, $currency: String!) {
    client {
      updateStore(storeName: $storeName, currency: $currency) {
        message
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
    $name: String!
    $description: String!
    $sizes: [String!]!
    $colors: [String!]!
    $category: String!
    $stock: String!
    $tags: [String!]!
    $oldPrice: String!
    $newPrice: String!
    $imageUrl: String
  ) {
    client {
      addProduct(
        name: $name
        description: $description
        sizes: $sizes
        colors: $colors
        category: $category
        stock: $stock
        tags: $tags
        oldPrice: $oldPrice
        newPrice: $newPrice
        imageUrl: $imageUrl
      ) {
        message
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query ($take: Int!, $skip: Int!) {
    client {
      getProduct(take: $take, skip: $skip) {
        products {
          name
          description
          sizes
          colors
          category
          stock
          tags
          oldPrice
          newPrice
          number
        }
      }
    }
  }
`;

export const FILE_UPLOAD = gql`
  mutation ($file: Upload) {
    client {
      fileUpload(file: $file) {
        url
      }
    }
  }
`;
