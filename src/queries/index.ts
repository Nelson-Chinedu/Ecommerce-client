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
