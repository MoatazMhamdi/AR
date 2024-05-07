const Blog = require("../models/backendBLOGSModels.js");




    exports.addBlog = async function(req, res, next) {
        const blogs = new Blog({
         Title: req.body.Title,
            Description: req.body.Description,
            image: req.body.image,
            Sujet: req.body.Sujet,
        });

        await blogs.save()
            .then((blogs) => res.status(200).json({ blogs }))
            .catch((error) => res.status(400).json({ error }));
        }
    
    exports.getAllBlogs = async function(req, res, next) {
        try {
            const blogs = await Blog.find().exec();
            res.status(200).json(blogs);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
            console.error(error);
        }
        }
    