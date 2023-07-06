const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const blogRouter = require('./router/blogRouter')
const blogsRouter = require('./router/blogsRouter')



// express app
const app = express();

const dbUrl = 'mongodb+srv://habib:habib@nodeblog.dw24v2t.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbUrl).then((result)=>{app.listen(3000);console.log("Connected to Database");}).catch((err)=>{console.log(err);});

// listen for requests


// Middleware
app.use(express.static('public')); // used external css/images/etc
app.use(express.urlencoded({extended:true})); // to get the form data
app.use(logger('dev')); // logger


// register view engine
app.set('view engine', 'ejs');  

app.get('/', (req, res) => {
 res.redirect('/blog');
});
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Blog Routes

app.use('/blog',blogRouter);
app.use('/blogs',blogsRouter);





// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
