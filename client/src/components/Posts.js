import React, { useState } from "react";
import { POST_DATA } from "../contants/contans";
import PostItem from "./PostItem";

const Posts = () => {
  const [posts] = useState(POST_DATA);

  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No Post Founds</h2>
      )}
    </section>
  );
};

export default Posts;
