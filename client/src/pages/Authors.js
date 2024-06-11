/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { AUTHOR_DATA } from "../contants/contans";
import { Link } from "react-router-dom";

const Authors = () => {
  const [authors] = useState(AUTHOR_DATA);

  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({ id, avatar, name, post }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="author__avatar">
                  <img src={avatar} alt={`Image of ${name}`} />
                </div>
                <div className="author__info">
                  <h4>{name}</h4>
                  <p>{post}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No User/Author Found</h2>
      )}
    </section>
  );
};

export default Authors;
