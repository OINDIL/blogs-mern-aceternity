require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('../routes/authRouter');
const { default: mongoose } = require('mongoose');
const userRoute = require('../routes/userRoute');
const blogsRoute = require('../routes/blogRoutes')

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173", // Replace with the URL of your frontend
    credentials: true,
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


//connecting to db -- config/db.js
(async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: 'Blogs'
        })
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error.message);
    }
})()



app.use('/auth', authRoutes);
app.use('/user', userRoute)
app.use('/blogs', blogsRoute)



app.listen(3000, () => console.log('Server running on port 3000'));
