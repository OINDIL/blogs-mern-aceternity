const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Blog = require('../models/Blogs');
const User = require('../models/User');
const { m } = require('framer-motion');
// Work in progress

router.post('/create', verifyToken, async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }
        const { token } = req.cookies
        if (!token) {
            return res.status(401).json({ message: 'No token' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: 'Token is invalid or expired' });
        });

        const UserIdFromToken = jwt.decode(token).id;

        const newBlog = {
            title,
            content,
            user: UserIdFromToken
        };

        // Save the blog post to the database
        const blog = new Blog(newBlog);
        blog.save();

        const foundUser = await User.findByIdAndUpdate(UserIdFromToken, { $push: { blogs: blog._id } }, { new: true });

        if (!foundUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ message: "Could not create blog" });
    }

});

router.get('/all-user-blogs', verifyToken, async (req, res) => {
    try {
        const { token } = req.cookies
        if (!token) {
            return res.status(401).json({ message: 'No token' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: 'Token is invalid or expired' });
        });

        const UserIdFromToken = jwt.decode(token).id;

        const BlogUser = await User.findById({ _id: UserIdFromToken })

        const BlogUserBlogs = await BlogUser.populate('blogs')


        if (!BlogUser || !BlogUserBlogs) {
            return res.status(404).json([{ author: "User not found", title: "Not found", content: "Not found" }]);
        }
        const blogResponse = {
            author: BlogUser.name,
            blogs: BlogUserBlogs.blogs
        }
        res.json(blogResponse);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" });
    }
});

router.get('/all-blogs', async (req, res) => {
    const allBlogs = await Blog.find();

    if (!allBlogs) {
        return res.status(404).json([{ author: "No author found", title: "Not found", content: "Not found" }]);
    }
    res.json(allBlogs);
})

router.get('/featured-blogs', async (req, res) => {
    res.json([{ author: "No author found", title: "Not found", content: "Not found" }])
})

router.get('/specific-blog/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(404).json({ message: "Blog not found" });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
})

module.exports = router;