import * as React from "react";
import ReactMarkdown from "react-markdown";

import { Tag, TagsContainer } from "./primitives";
import { Recipe } from "../types";

const Detail: React.FC<Recipe> = ({
  title,
  calories,
  photo: { url: image },
  description,
  chef,
  tagsCollection,
}) => {
  return (
    <>
      <h1>{title}</h1>
      {tagsCollection?.items ? (
        <TagsContainer>
          {tagsCollection.items.map(({ name }) => (
            <Tag>{name}</Tag>
          ))}
        </TagsContainer>
      ) : null}
      <TagsContainer>
        <Tag bg="#6805f5">{calories} Calories</Tag>
      </TagsContainer>
      <img src={image} alt={`picture of ${title}`} width="100%" />
      <p>
        <ReactMarkdown>{description}</ReactMarkdown>
      </p>
      {chef?.name ? (
        <>
          <span>
            <strong>Chef : </strong>
          </span>
          <Tag>{chef.name}</Tag>
        </>
      ) : null}
    </>
  );
};

export default Detail;
