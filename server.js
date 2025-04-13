const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const apiRoutes = require("./routes/apiRoutes");
const viewRoutes = require("./routes/viewRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
//Connect to MongoDB 
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//For front-end
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use('/', viewRoutes);


app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});