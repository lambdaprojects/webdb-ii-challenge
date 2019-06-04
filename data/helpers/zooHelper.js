const db = require("../dbconfig.js");

module.exports = {
  find
};

function find() {
  return db("zoos");
}
