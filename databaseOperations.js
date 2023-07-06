// mongoose and mongo sandbox

// Save the Blog
app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title:'New Blog 2',
        snippet:"About my new Blog 2",
        body:'More about my new Blog 2',
    });
    blog.save()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
    console.log(err);
    });
    });
    
    // Get all Data
    app.get('/all-blog', (req,res)=>{
        Blog.find().then((result)=>{res.send(result);}).catch((err)=>console.log(err) );
    });
    
    // Get Blog by Id
    app.get('/single-blog',(req,res)=>{
        Blog.findById('64a16c349a8adabc89d8092d')
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
    });
    