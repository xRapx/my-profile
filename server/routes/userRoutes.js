const { Router } = require("express");
const {
  register,
  login,
  logout,
  getUsers,
  getAuthors,
  uploadAvatar,
} = require("../controller/allController");

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/:id", getUsers);
router.get("/", getAuthors);
router.post("/change-avatar", uploadAvatar);

module.exports = router;
