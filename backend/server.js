const express = require ("express");
const app = express();
app.use(express.json())

const connectDB = require('./config/connectDB');
connectDB();

const authRouter= require('./routes/authRouter');
app.use("/api/auth", authRouter);

const PORT = 8000 || process.env.PORT
app.listen(PORT, (err) => err ? console.error(err)
                              : console.log(`Application listening at http://localhost:${PORT}`) );