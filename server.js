const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();
app.use(cors());

app.use(express.static("client/build"));

if (process.env.node_env.toString() === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  })
};

const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => {
  // error handling if server failed to start
  if (err) {
    console.log(`Error starting server : ${err} on port : ${PORT}`);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});
