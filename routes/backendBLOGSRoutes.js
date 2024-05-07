const express = require('express');
const router = express.Router();

    const blogs = require('../controllers/backendBLOGSCode.js');


        router.route("/")
            .post(blogs.addBlog);

      
        router.route("/All")
            .get(blogs.getAllBlogs);

      
module.exports = router;