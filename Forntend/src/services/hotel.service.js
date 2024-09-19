import api from "./api";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const HOTEL_API = `${BASE_URL}${import.meta.env.VITE_HOTEL_API}`;

// Get all hotels
const getAllHotels = async () => {
  try {
    const response = await api.get(HOTEL_API);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Failed to get all hotels:", error);
    throw error; // Re-throw the error so it can be handled elsewhere
  }
};

// Get hotel by ID
const getHotelById = async (id) => {
  try {
    const response = await api.get(`${HOTEL_API}${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to get hotel with ID ${id}:`, error);
    throw error;
  }
};

// Update a hotel
const updateHotel = async (id, hotel) => {
  console.log(`Updating hotel with ID ${id}:`, hotel);
  try {
    const response = await api.put(`${HOTEL_API}${id}`, hotel);
    return response.data;
  } catch (error) {
    console.error(`Failed to update hotel with ID ${id}:`, error.response ? error.response.data : error.message);
    throw error;
  }
};



// Delete a hotel
const deleteHotel = async (id) => {
  try {
    const response = await api.delete(`${HOTEL_API}${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to delete hotel with ID ${id}:`, error);
    throw error;
  }
};

// Add a new hotel
const insertHotel = async (hotel) => {
  try {
    const response = await api.post(HOTEL_API, hotel);
    return response.data;
  } catch (error) {
    console.error( error.response ? error.response.data : error.message);
    throw error;
  }
};


const HotelService = {
  getAllHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
  insertHotel,
};

export default HotelService;
