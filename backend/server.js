const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');
const user = require('./routes/user');
const app = express();


dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(morgan("dev"));


// Mount Routes
app.use("/", user)




const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(PORT, () => {
        console.log(`Server started at port: ${PORT} , "Database Connected" `.magenta)
    }))
    .catch((error) => console.log("Unable to connect to server", error).red)

