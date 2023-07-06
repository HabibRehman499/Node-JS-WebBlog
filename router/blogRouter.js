const express = require('express');
const Blog = require('../models/blog');
const blogController = require('../controller/blogController');
// express app
// const app = express();

const router = express.Router();


router.get('/', blogController.getIndex);
router.get('/:id', blogController.getBlogById);
router.delete('/:id', blogController.deleteBlog);

module.exports = router;