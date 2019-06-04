const db = require("../dbconfig.js");

module.exports = {
  find,
  findById,
  add
};

function find() {
  console.log(`:: THE QUERY IS :: ${db("zoos")}`);
  return db("zoos");
}

function findById(id) {
  console.log(`:: THE QUERY IS :: ${db("zoos").where({ id })}`);
  return db("zoos").where({ id });
}

function add(zoo) {
  console.log(`:: THE QUERY IS :: ${db("zoos").insert(zoo)}`);
  return db("zoos").insert(zoo);
}
