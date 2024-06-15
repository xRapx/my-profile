const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
// const fileUpload = require("express-fileupload");
require("dotenv").config();

// Error
const { notFound, errorMiddlewave } = require("./middlewave/errorMiddlewave");

// Router
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

// upload file

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(fileUpload());

app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);

// middlewave Error
// app.use(notFound);
// app.use(errorMiddlewave);

const port = process.env.PORT;
connect(process.env.MONGO_CONNECT)
  .then(
    app.listen(port || 5000, () => {
      console.log(`Server is running : ${port}`);
    })
  )
  .catch((error) => {
    app.use((req, res, next) => {
      // hàm xử lý error có 4 tham số
      return res.status(statusCode).json({
        status: "error",
        code: statusCode,
        stack: error.stack, // kiểm tra lỗi ở môi trường dev / ko dùng trên productions
      });
    });
  });
