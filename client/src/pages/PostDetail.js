import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../assets/image/logo1.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/:id/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/:id/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail_thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          tempore! Aspernatur explicabo aperiam similique, molestias commodi est
          enim ad quisquam.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
          quibusdam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          officiis aspernatur debitis, non consectetur et esse. Aliquam, modi
          assumenda. Dolor quaerat quos quidem! Ea quis nisi autem, sunt eveniet
          ex, quibusdam fuga harum quas et quaerat, incidunt tenetur cumque est!
          Vitae vel inventore asperiores, sunt eos amet fugiat consequatur iure
          tempore recusandae nam culpa ea?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          culpa autem at! Quia eligendi qui quo ut quasi praesentium nulla?
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
