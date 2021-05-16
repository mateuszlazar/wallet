const path = require("path");

module.exports = {
  entry: {
    index: path.join(__dirname, "src", "index"),
  },
  mode: "production",
  output: {
    path: path.join(__dirname, "dist"),
  },
};
