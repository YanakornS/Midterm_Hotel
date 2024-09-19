const jwt = require('jsonwebtoken');
const config = require("../config/auth.config");
const db = require("../Models");
const User = db.User;

// Verify token
const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

// Check if user is admin
const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);
    if (!user) return res.status(404).send({ message: "User not found" });

    const roles = await user.getRoles();
    const isAdmin = roles.some(role => role.name === "admin");

    if (isAdmin) {
      next();
    } else {
      return res.status(403).send({ message: "Unauthorized, Require Admin Role!" });
    }
  } catch (err) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

// Check if user is moderator
const isMod = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);
    if (!user) return res.status(404).send({ message: "User not found" });

    const roles = await user.getRoles();
    const isMod = roles.some(role => role.name === "moderator");

    if (isMod) {
      next();
    } else {
      return res.status(403).send({ message: "Unauthorized, Require Moderator Role!" });
    }
  } catch (err) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

// Check if user is either admin or moderator
const isModOrAdmin = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);
    if (!user) return res.status(404).send({ message: "User not found" });

    const roles = await user.getRoles();
    const isModOrAdmin = roles.some(role => role.name === "moderator" || role.name === "admin");

    if (isModOrAdmin) {
      next();
    } else {
      return res.status(403).send({ message: "Unauthorized, Require Moderator Or Admin Role!" });
    }
  } catch (err) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

const authJwt = {
  verifyToken,
  isAdmin,
  isMod,
  isModOrAdmin,
};

module.exports = authJwt;
