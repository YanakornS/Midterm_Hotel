const { where } = require("sequelize");
const Hotel = require("../Models/Hotel.model");

// function convertThaiDateToISO(dateStr) {
//   const [day, month, year] = dateStr.split('/');

//   if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year)) {
//     throw new Error("Invalid date format.");
//   }

//   // Convert Thai Buddhist year to Gregorian year
//   const yearInAD = parseInt(year, 10) - 543;

//   // Format date components to ensure they have leading zeros
//   const dayFormatted = day.padStart(2, '0');
//   const monthFormatted = month.padStart(2, '0');

//   return `${yearInAD}-${monthFormatted}-${dayFormatted}T00:00:00Z`;
// }


exports.create = async (req, res) => {
  const { roomNumber, roomType, roomImage, isAvailable, PricePerNight, openingDate } = req.body;

  try {
    // Check if roomNumber already exists
    const existingHotel = await Hotel.findOne({ where: { roomNumber: roomNumber } });
    if (existingHotel) {
      return res.status(400).send({ message: "Room number already exists!" });
    }

    // Convert openingDate if it exists
    //const formattedOpeningDate = openingDate ? convertThaiDateToISO(openingDate) : null;

    // Create a Hotel room
    const newRoom = {
      roomNumber,
      roomType,
      roomImage,
      isAvailable,
      PricePerNight,
      openingDate, // Convert date if provided
    };

    const data = await Hotel.create(newRoom);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Something went wrong while creating the hotel room.",
    });
  }
};


// Get all Hotel rooms
exports.getAll = async (req, res) => {
  try {
    const data = await Hotel.findAll();
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Something went wrong while fetching the hotel rooms.",
    });
  }
};

// Get Hotel room by ID
exports.getById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Hotel.findByPk(id);
    if (!data) {
      return res.status(404).send({ message: "No room found with id " + id });
    }
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Something went wrong while fetching the hotel room.",
    });
  }
};

// Update Hotel room by ID
exports.update = async (req, res) => {
  const id = req.params.id;
  let updateData = { ...req.body };

  if (updateData.openingDate) {
    try {
      updateData.openingDate = (updateData.openingDate);
    } catch (error) {
      return res.status(400).send({ message: "Invalid date format." });
    }
  }

  try {
    const existingHotel = await Hotel.findByPk(id);
    if (!existingHotel) {
      return res.status(404).send({ message: "Hotel room not found." });
    }

    const [updated] = await Hotel.update(updateData, {
      where: { id: id },
    });

    if (updated) {
      res.send({ message: "Hotel room was updated successfully." });
    } else {
      res.status(400).send({
        message: "Cannot update room with id " + id + ". Maybe room was not found or req.body is empty!",
      });
    }
  } catch (error) {
    console.error('Error in update function:', error);
    res.status(500).send({
      message: error.message || "Something went wrong while updating the hotel room.",
    });
  }
};




// Delete Hotel room by ID
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await Hotel.destroy({
      where: { id: id },
    });

    if (num === 1) {
      res.send({ message: "Hotel room was deleted successfully." });
    } else {
      res.status(404).send({
        message: "Cannot delete room with id " + id + ". Maybe room was not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Something went wrong while deleting the hotel room.",
    });
  }
};
