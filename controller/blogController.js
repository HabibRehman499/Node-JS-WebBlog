
const Blog = require("../models/blog");


const Blogs = (req, res) => {
  // console.log(req.body);
  const blog = Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blog");
    })
    .catch((err) => {
      console.log(err);
    });
}

const createBlog = (req, res) => {
  res.render("create", { title: "Create a new blog" });
}

const getIndex = (req,res)=>{
  Blog.find().sort({createdAt: -1})
  .then((result)=>{
      res.render('index',{ title: 'Blog', blogs: result });
  })
  .catch((err)=>{
      console.log(err);
  });
}

const getBlogById = (req,res)=>{
  const id = req.params.id;
  Blog.findById(id)
  .then((result)=>{
      res.render('details',{blog: result, title : 'Blog Details'});
  })
  .catch((err)=>{
      console.log(err);
  });
}

const deleteBlog = (req,res)=>{
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
  .then((result)=>{
      res.json({redirect:'/blog'});
  })
  .catch((err)=>{
      console.log(err);
  });
}


  module.exports = {
    Blogs,
    createBlog,
    getIndex,
    getBlogById,
    deleteBlog,
    
  }

