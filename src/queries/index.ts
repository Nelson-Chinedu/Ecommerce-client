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
