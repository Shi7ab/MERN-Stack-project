// server.js
const express = require('express')
const app = express();
const userRouter = require('./routes/noteRouter');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); 

dotenv.config();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors("http://localhost:3000/"));
app.use(express.json());
connectDB(); 
app.use('/api/notes', userRouter);

// Start the server
app.listen(PORT, (req,res)=>{
   console.log("server is listening on https://localhost:"+PORT)
})