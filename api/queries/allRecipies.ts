import { gql } from "@apollo/client";

export const GET_ALL_RECIPES = gql`
  query($preview: Boolean) {
    recipeCollection(preview: $preview) {
      items {
        sys {
          id
        }
        title
        photo {
          url
        }
      }
    }
  }
`;
