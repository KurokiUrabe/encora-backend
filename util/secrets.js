// const console.log "./console.log
const dotenv = require("dotenv");
const fs = require("fs");

if (fs.existsSync(".env")) {
  console.log("Using .env file to supply config environment variables");
  dotenv.config({ path: ".env" });
} else {
  console.log("Using .env.example file to supply config environment variables");
  dotenv.config({ path: ".env.example" }); // you can delete this after you create your own .env file!
}
const PORT = process.env.PORT;
const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'

const MONGODB_URI = prod
  ? process.env["MONGODB_URI"]
  : process.env["MONGODB_URI_LOCAL"];

if (!MONGODB_URI) {
  if (prod) {
    console.log(
      "No mongo connection string. Set MONGODB_URI environment variable."
    );
  } else {
    console.log(
      "No mongo connection string. Set MONGODB_URI_LOCAL environment variable."
    );
  }
  process.exit(1);
}

module.exports = {
  MONGODB_URI,
  ENVIRONMENT,
  PORT,
};
