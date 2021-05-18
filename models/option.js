const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema(
  {
    option: String,
  },
  { timestamps: true }
);

const Option = mongoose.model("Option", optionSchema);

module.exports = Option;
