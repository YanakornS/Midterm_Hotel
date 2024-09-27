require("dotenv").config();
const PORT = process.env.PORT || 5000;
const authRouter = require("./routers/auth.router");
const hotelRouter = require("./routers/hotel.router");
const db = require("./Models/");
const express = require("express");
const app = express();
const role = db.Role;
const cors = require("cors");

const frontend_url = process.env.FRONTEND_URL;
const corsOptions = {
  origin: frontend_url,
};

app.use(cors(corsOptions)); // ใช้การตั้งค่า CORS

const initRole = () => {
  role.create({ id: 1, name: "user" });
  role.create({ id: 2, name: "moderator" });
  role.create({ id: 3, name: "admin" });
};

//use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use routers
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/Hotel", hotelRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello Hotel API </h1>");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
  
});
