const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const productRoutes = require("./routes/product");
const user = require("./routes/user");

dotenv.config();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/products", productRoutes);
app.use("/", user);

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server started at port: ${PORT} , "Database Connected" `);
    })
  )
  .catch((error) => console.log("Unable to connect to server", error));
