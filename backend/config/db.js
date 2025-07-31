const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
//const MONGO_URI = 'mongodb+srv://shihab:11111@cluster0.cahvpmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Local MongoDB
const  connectDB = ()=> {
  mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => {
  console.error('DB connection failed:', err.message);
  process.exit(1);
});
}

module.exports =  connectDB;
