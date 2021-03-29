import { gql } from "@apollo/client";

export const GET_RECIPE_BY_ID = gql`
  query($id: String!) {
    recipe(id: $id) {
      title
      photo {
        url
      }
      description
      chef {
        name
      }
      calories
      tagsCollection {
        items {
          name
        }
      }
    }
  }
`;
