const express = require("express");
const Blog = require("../models/blog");

const blogController = require('../controller/blogController');
// express app
const app = express();
const router = express.Router();

router.get("/create", blogController.createBlog);
router.post("/blogs", blogController.Blogs);

module.exports = router;
