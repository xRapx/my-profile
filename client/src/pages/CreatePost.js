/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CATEGORY_DATA, MODULES_DATA, FORMAT_DATA } from "../contants/contans";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");

  const [thumbnail, setThumbnail] = useState("");

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        <p className="form__error-message">This is an error message</p>
        <form className="form create-post__form">
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORY_DATA.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <ReactQuill
            modules={MODULES_DATA}
            formats={FORMAT_DATA}
            value={desc}
            onChange={setDesc}
            className="ql-editor"
          />
          <input
            type="file"
            name="avatar"
            multiple
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept="jpg,png,jpeg"
          />
          <button type="submit" className="btn primary">
            Create
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
