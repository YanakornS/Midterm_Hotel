const express = require("express");
const router = express.Router();
const authController = require("../Controllers/auth.controller");
const { verifySingUp } = require("../middlewares");

//http://localhost:5000/api/v1/auth/
//Create a signup

router.use((req, res, next) => {
  res.header(
    "Access-Controller-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
router.post(
  "/signup",
  [verifySingUp.checkDuplicateUsernameOrEmail, verifySingUp.checkRolesExisted],
  authController.signup
);

//Chack a signin
router.post("/signin", authController.signin);

module.exports = router;