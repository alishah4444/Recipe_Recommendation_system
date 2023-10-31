import {gql, mutation} from 'apollo-boost';

const USER_QUERY = gql`
  query {
    users {
      email
      id
      loginType
      phoneNo
      refreshToken
      username
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($input: userInput!) {
    createUser(input: $input) {
      email
      password
      refreshToken
    }
  }
`;
export {USER_QUERY, CREATE_USER};
