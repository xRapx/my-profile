const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const register = async (req, res, next) => {
  try {
    const { name, email, password, password2 } = req.body;

    console.log(email); // Kiểm tra xem email có được in ra không
    const lowerCaseEmail = email.toLowerCase();

    // const checkEmail = await User.findOne({ email: newEmail });

    // if (!checkEmail) {
    //   return next("No Email on database!", 422);
    // }
    if (password.trim().length < 6) {
      return next("Password should be at least 6 characters.", 422);
    }
    if (password != password2) {
      return next("Passwords do not match!", 422);
    }
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email: lowerCaseEmail,
      password: hashPass,
    });

    res.status(200).json(newUser);
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next("No have User! Please Register", 422);
    }
    const newEmail = email.toLowerCase();

    const user = await User.findOne({ email: newEmail });

    if (!user) {
      return next("No Email on database!", 422);
    }
    const checkPass = await bcrypt.compare(password, user.password);

    if (!checkPass) {
      return next("Wrong Password!", 422);
    }
    const { _id: id } = user;

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ user, token });
  } catch (error) {
    return next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout Success!" });
  } catch (error) {
    return next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await User.findById(id).select("-password");
    if (!users) {
      return next("Not found User", 404);
    }
    res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
};

const getAuthors = async (req, res, next) => {
  try {
    const authors = await User.find().select("-password");
    if (!authors) {
      return next("Not found Authors", 404);
    }
    res.status(200).json(authors);
  } catch (error) {
    return next(error);
  }
};

const uploadAvatar = async (req, res, next) => {
  // Multer Storage
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage }).single("avatar");

  // upload file client
  upload(req, res, async (err) => {
    try {
      const userID = req.body.id;
      const newAvatarPath = req.file.filename;
      if (!userID) {
        return next("Not Found userID ", 422);
      }

      console.log(newAvatarPath);

      // find user id from db
      const user = await User.findById(userID);
      if (!user) {
        return next("User not found", 404);
      }
      user.avatar = newAvatarPath;
      await user.save();

      console.log(user);

      if (user.avatar) {
        fs.unlink(
          path.join(__dirname, "..", "uploads", user.avatar),
          (error) => {
            if (error) {
              console.log(error);
              return next("Failed to delete old avatar", 500);
            }
          }
        );
      }

      // verify size thumbnail upload
      if (req.file.size > 5000000) {
        return next("Avatar size should be less than 5MB", 422);
      }

      // verify error and success message!!
      if (err) {
        console.log(err);
        return next("Can't upload files");
      } else {
        console.log(`file name : ${req.file.filename}`);
        res.status(200).json({ message: "File uploaded successfully" });
      }
    } catch (error) {
      return next("Can't upload files");
    }
  });
};

module.exports = {
  register,
  login,
  logout,
  getUsers,
  uploadAvatar,
  getAuthors,
};
