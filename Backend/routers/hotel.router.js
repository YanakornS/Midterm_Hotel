const express = require("express");
const router = express.Router();
const hotelController = require("../Controllers/Hotel.controller"); 
const { authJwt } = require("../middlewares");


// http://localhost:5000/api/v1/hotel/
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModOrAdmin],
  hotelController.create
);

//Get all restaurant
router.get("/", hotelController.getAll);

//Get ById restaurant
router.get("/:id", [authJwt.verifyToken], hotelController.getById);

//Update a restaurant ( Admin and Mod can use it! )
router.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isModOrAdmin],
  hotelController.update
);

//Delete a restaurant ( Admin can use it! )
router.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  hotelController.delete
);

module.exports = router;