const express = require("express");
const cors = require("cors");
const { getOptions, greeting } = require("./controllers/option");
const mongoose = require("mongoose");
const { MONGODB_URI, PORT } = require("./util/secrets.js");

const mongoUrl = MONGODB_URI;

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("ready to use. The `mongoose.connect()`.");
  })
  .catch((err) => {
    console.log(
      `MongoDB connection error. Please make sure MongoDB is running. ${err}`
    );
    // process.exit(1);
  });
mongoose.set("debug", true);
const app = express();
app.use(cors());

app.get("/", greeting);

app.get("/autocomplete", getOptions);
app.get("/autocomplete/:string", getOptions);

app.listen(PORT, () => {
  console.log(`autocomplete api http://localhost:${PORT}`);
});
