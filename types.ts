interface NamedObject {
  name: string;
}

export type Tag = NamedObject;
export type Chef = NamedObject;

export interface RecipeImage {
  url: string;
}

export interface Recipe {
  title: string;
  description: string;
  calories: number;
  tagsCollection: {
    items: Tag[];
  };
  chef: Chef;
  photo: RecipeImage;
}
