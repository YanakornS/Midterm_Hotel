const { DataType, DataTypes } = require("sequelize");
const sequelize = require("./db");

// Define DB Schema
const Hotel = sequelize.define("hotel", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  roomNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roomType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roomImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true, // ค่าเริ่มต้นคือห้องว่าง
  },
  PricePerNight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  openingDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// ฟังก์ชันสำหรับจองห้อง
Hotel.prototype.bookRoom = async function () {
  if (this.isAvailable) {
    this.isAvailable = false; // เปลี่ยนสถานะเป็นไม่ว่างเมื่อจอง
    await this.save(); // บันทึกการเปลี่ยนแปลง
    return "Room has been successfully booked.";
  } else {
    return "Room is already booked.";
  }
};

// ฟังก์ชันสำหรับยกเลิกการจองห้อง
Hotel.prototype.cancelBooking = async function () {
  if (!this.isAvailable) {
    this.isAvailable = true; // เปลี่ยนสถานะเป็นว่างเมื่อยกเลิกการจอง
    await this.save(); // บันทึกการเปลี่ยนแปลง
    return "Room booking has been canceled.";
  } else {
    return "Room is not booked.";
  }
};

// Sync the model with the database
Hotel.sync({ force: false })
  .then(() => {
    console.log("Table created or already exists");
  })
  .catch((error) => {
    console.log("Error creating table: ", error);
  });

module.exports = Hotel;
