import React from "react";
import { Button } from "../../Elements/Index";
const PostTags = ({ tags }) => {
  return (
    tags.length > 0 &&
    tags.map((tag, index) => (
      <Button key={index} variant="badge">
        #{tag}
      </Button>
    ))
  );
};

export default PostTags;
