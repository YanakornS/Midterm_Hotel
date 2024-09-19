import React, { useState } from 'react';
import HotelService from '../services/hotel.service';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddHotel = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [roomType, setRoomType] = useState('');
  const [roomImage, setRoomImage] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const [PricePerNight, setPricePerNight] = useState('');
  const [openingDate, setOpeningDate] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await HotelService.insertHotel({
        roomNumber,
        roomType,
        roomImage,
        isAvailable,
        PricePerNight: parseFloat(PricePerNight),
        openingDate,
      });

      Swal.fire('Success!', 'Hotel added successfully.', 'success').then(() => {
        navigate('/Home'); // Navigate to the home page after success
      });

    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to add hotel.';
      Swal.fire({
        title: 'Error!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  // Define room types
  const roomTypes = [
  { value: 'Beachfront Suite', label: 'Beachfront Suite' },
  { value: 'Ocean View Room', label: 'Ocean View Room' },
  { value: 'Seaside Cabin', label: 'Seaside Cabin' },
  { value: 'Beachfront Bungalow', label: 'Beachfront Bungalow' },
  { value: 'Poolside Room', label: 'Poolside Room' },
  { value: 'Deluxe Oceanfront Room', label: 'Deluxe Oceanfront Room' },
  { value: 'Family Beach House', label: 'Family Beach House' },
  { value: 'Romantic Getaway Suite', label: 'Romantic Getaway Suite' },
];

  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Add New Hotel</h2>
        <form onSubmit={handleSubmit}>
          {/* Room Number */}
          <div className="mb-4">
            <label htmlFor="roomNumber" className="block text-sm font-medium text-gray-700">Room Number</label>
            <input
              type="text"
              id="roomNumber"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Room Type */}
          <div className="mb-4">
            <label htmlFor="roomType" className="block text-sm font-medium text-gray-700">Room Type</label>
            <select
              id="roomType"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select Room Type</option>
              {roomTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Room Image */}
          <div className="mb-4">
            <label htmlFor="roomImage" className="block text-sm font-medium text-gray-700">Room Image URL</label>
            <input
              type="url"
              id="roomImage"
              value={roomImage}
              onChange={(e) => setRoomImage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Price Per Night */}
          <div className="mb-4">
            <label htmlFor="PricePerNight" className="block text-sm font-medium text-gray-700">Price Per Night</label>
            <input
              type="number"
              step="0.01"
              id="PricePerNight"
              value={PricePerNight}
              onChange={(e) => setPricePerNight(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Opening Date */}
          <div className="mb-4">
            <label htmlFor="openingDate" className="block text-sm font-medium text-gray-700">Opening Date</label>
            <input
              type="date"
              id="openingDate"
              value={openingDate}
              onChange={(e) => setOpeningDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Availability */}
          <div>
            <label className="label cursor-pointer flex items-center">
              <span className="block text-sm font-medium text-gray-700">Available</span>
              <input
                type="checkbox"
                checked={isAvailable}
                onChange={(e) => setIsAvailable(e.target.checked)}
                className={`toggle ${isAvailable ? 'bg-green-500' : 'bg-red-500'} accent-${isAvailable ? 'green' : 'red'}`}
              />
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add Hotel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;
