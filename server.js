
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
const uri= "mongodb+srv://evelyn2:G4DfrCQTB3BjV8WzRBVD@cluster0.m69rxzs.mongodb.net/";

mongoose.connect(uri, { 
        useNewUrlParser: true, 
        // useCreateIndex: true,  
        useUnifiedTopology: true   }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// import routes
const bookRouter = require('./routes/booklist'); //match router filename

// adding /books to before all routes
app.use('/book', bookRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
