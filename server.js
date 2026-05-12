const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("YOUR_MONGODB_LINK")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/recipes", require("./routes/recipeRoutes"));

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});