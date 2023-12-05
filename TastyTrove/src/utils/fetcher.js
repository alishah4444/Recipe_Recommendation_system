import {gql, mutation} from 'apollo-boost';

const USER_QUERY = gql`
  query {
    users {
      email

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

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      email
      password
      refreshToken
      id
    }
  }
`;

const CREATE_RECIPE = gql`
  mutation CreateRecipe($input: RecipeInput!) {
    createRecipe(input: $input) {
      title
      description
      rating
      imageUrl
      ingredients {
        name
        qty
      }
      specialInstruction
      userId
      cookTime
      servings
      socketId
    }
  }
`;

export {USER_QUERY, CREATE_USER, LOGIN_USER, CREATE_RECIPE};
