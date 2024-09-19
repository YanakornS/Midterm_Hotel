const sequelize = require("./db");
const Sequelize = require("sequelize");
const User = require("./user.model");
const Role = require("./role.model");

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.User = User;
db.Role = Role;

//Association
db.User.belongsToMany(db.Role,{
    through:"user_roles"
});
db.Role.belongsToMany(db.User, {
  through: "user_roles",
});
module.exports = db;