import Thumbnail1 from "../assets/image/logo1.jpg";
import Avatar from "../assets/image/images.jpg";

export const AUTHOR_DATA = [
  {
    id: 1,
    avatar: Avatar,
    name: "Author1",
    post: 1,
  },
  {
    id: 2,
    avatar: Avatar,
    name: "Author2",
    post: 2,
  },
  {
    id: 3,
    avatar: Avatar,
    name: "Author3",
    post: 3,
  },
  {
    id: 4,
    avatar: Avatar,
    name: "Author4",
    post: 4,
  },
  {
    id: 5,
    avatar: Avatar,
    name: "Author5",
    post: 5,
  },
  {
    id: 6,
    avatar: Avatar,
    name: "Author6",
    post: 6,
  },
];
export const POST_DATA = [
  {
    id: 1,
    thumbnail: Thumbnail1,
    category: "Category1",
    title: "This is the title of the very frist post on this post",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus facere obcaecati excepturi modi labore voluptatibus laboriosam sint. Possimus, corporis. ",
    authorID: 3,
  },
  {
    id: 2,
    thumbnail: Thumbnail1,
    category: "Category2",
    title: "This is the title of the second post on this post",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus facere obcaecati excepturi modi labore voluptatibus laboriosam sint. Possimus, corporis. ",
    authorID: 1,
  },
  {
    id: 3,
    thumbnail: Thumbnail1,
    category: "Category3",
    title: "This is the title of the third post on this post",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus facere obcaecati excepturi modi labore voluptatibus laboriosam sint. Possimus, corporis. ",
    authorID: 2,
  },
  {
    id: 4,
    thumbnail: Thumbnail1,
    category: "Category4",
    title: "This is the title of the fourth post on this post",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus facere obcaecati excepturi modi labore voluptatibus laboriosam sint. Possimus, corporis. ",
    authorID: 4,
  },
  {
    id: 5,
    thumbnail: Thumbnail1,
    category: "Category5",
    title: "This is the title of the fifth post on this post",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus facere obcaecati excepturi modi labore voluptatibus laboriosam sint. Possimus, corporis. ",
    authorID: 5,
  },
  {
    id: 6,
    thumbnail: Thumbnail1,
    category: "Category6",
    title: "This is the title of the sixth post on this post",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus facere obcaecati excepturi modi labore voluptatibus laboriosam sint. Possimus, corporis. ",
    authorID: 6,
  },
];
export const CATEGORY_DATA = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
  "Category 6",
];
export const MODULES_DATA = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ],
};
export const FORMAT_DATA = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
