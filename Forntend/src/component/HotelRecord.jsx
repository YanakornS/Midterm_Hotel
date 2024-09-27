import React, { useState, useEffect } from "react";
import HotelService from "../services/hotel.service";
import Swal from "sweetalert2";
import Tokenservice from "../services/token.services";
import { useAuthContext } from "../Contexts/AuthContext";
import Search from "./Search"; // Import the Search component

// นำเข้ารูปภาพ
import Deleteicon from "../assets/Delete.png"; 
import Edit from "../assets/edit.png";
import Detail from "../assets/details.png";

const HotelRecord = () => {
  const { user } = useAuthContext();
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [roomNumber, setRoomNumber] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomImage, setRoomImage] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [PricePerNight, setPricePerNight] = useState("");
  const [openingDate, setOpeningDate] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [availabilityFilter, setAvailabilityFilter] = useState("All");

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await HotelService.getAllHotels();
        setHotels(
          data.map((hotel) => ({
            ...hotel,
            openingDate: new Date(hotel.openingDate)
              .toISOString()
              .split("T")[0],
          }))
        );
        setFilteredHotels(data);
      } catch (err) {
        setError("Error fetching hotels.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);

  useEffect(() => {
    // Filter hotels based on availabilityFilter
    if (availabilityFilter === "All") {
      setFilteredHotels(hotels);
    } else {
      const isAvailableFilter = availabilityFilter === "Available";
      setFilteredHotels(
        hotels.filter((hotel) => hotel.isAvailable === isAvailableFilter)
      );
    }
  }, [availabilityFilter, hotels]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await HotelService.deleteHotel(id);
        setHotels(hotels.filter((hotel) => hotel.id !== id));
        setFilteredHotels(filteredHotels.filter((hotel) => hotel.id !== id));
        Swal.fire("Deleted!", `Hotel with ID ${id} has been deleted.`, "success");
      } catch (err) {
        Swal.fire("Error!", "Failed to delete hotel.", "error");
      }
      }
    });
  };

  const handleOpenModal = (hotel) => {
    setSelectedHotel(hotel);
    setRoomNumber(hotel.roomNumber);
    setRoomType(hotel.roomType);
    setRoomImage(hotel.roomImage);
    setIsAvailable(hotel.isAvailable);
    setPricePerNight(hotel.PricePerNight);
    setOpeningDate(new Date(hotel.openingDate).toISOString().split("T")[0]);

    // Open the modal
    document.getElementById("my_modal_1").showModal();
  };

  const handleOpenDetailsModal = (hotel) => {
    setSelectedHotel(hotel);
    setRoomNumber(hotel.roomNumber);
    setRoomType(hotel.roomType);
    setRoomImage(hotel.roomImage);
    setIsAvailable(hotel.isAvailable);
    setPricePerNight(hotel.PricePerNight);
    setOpeningDate(new Date(hotel.openingDate).toISOString().split("T")[0]);

    // Open the details modal
    setShowDetails(true);
  };

  const handleCloseModal = () => {
    // Close the modal
    document.getElementById("my_modal_1").close();
  };

  const handleUpdateHotel = async () => {
    try {
      const updatedHotel = {
        roomNumber,
        roomType,
        roomImage,
        isAvailable,
        PricePerNight: parseFloat(PricePerNight),
        openingDate,
      };

      await HotelService.updateHotel(selectedHotel.id, updatedHotel);

      setHotels(
        hotels.map((hotel) =>
          hotel.id === selectedHotel.id ? { ...hotel, ...updatedHotel } : hotel
        )
      );

      setFilteredHotels(
        filteredHotels.map((hotel) =>
          hotel.id === selectedHotel.id ? { ...hotel, ...updatedHotel } : hotel
        )
      );

      Swal.fire("Success!", "Hotel updated successfully.", "success");
      handleCloseModal();
    } catch (err) {
      console.error("Error updating hotel:", err);
      Swal.fire("Error!", "Failed to update hotel.", "error");
    }
  };

  const roomTypes = [
    { value: "Beachfront Suite", label: "Beachfront Suite" },
    { value: "Ocean View Room", label: "Ocean View Room" },
    { value: "Seaside Cabin", label: "Seaside Cabin" },
    { value: "Beachfront Bungalow", label: "Beachfront Bungalow" },
    { value: "Poolside Room", label: "Poolside Room" },
    { value: "Deluxe Oceanfront Room", label: "Deluxe Oceanfront Room" },
    { value: "Family Beach House", label: "Family Beach House" },
    { value: "Romantic Getaway Suite", label: "Romantic Getaway Suite" },
  ];

  return (
    <div className="hero bg-[#F2F9FF] min-h-screen">
      <div className="fixed w-full max-w-md mt-28 bg-[#F2F9FF] z-10 p-0 top-0">
        <Search hotels={hotels} setFilterHotels={setFilteredHotels} />
      </div>
      {/* Hotel list section */}
      <div className="hero-content mt-44 flex flex-wrap justify-center gap-8">
        {filteredHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="flex flex-col max-w-sm w-full bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <img
              src={hotel.roomImage}
              alt="Room"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-2">{hotel.roomType}</h2>
              <p className="text-lg">Room Number: {hotel.roomNumber}</p>
              <p className="text-lg">Price per Night: ${hotel.PricePerNight}</p>
              <p className="text-lg">
                Availability:{" "}
                <span
                  className={
                    hotel.isAvailable ? "text-green-600" : "text-red-600"
                  }
                >
                  {hotel.isAvailable ? "Available" : "Not Available"}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Opening Date: {new Date(hotel.openingDate).toLocaleDateString()}
              </p>

              {/* Rating */}
              {/* Rating */}
              <div className="rating rating-sm p-2 mt-1">
                {/* Star 1 */}
                <input
                  type="radio"
                  name={`rating-${hotel.id}`}
                  className="mask mask-star-2 bg-orange-400"
                />

                {/* Star 2 */}
                <input
                  type="radio"
                  name={`rating-${hotel.id}`}
                  className="mask mask-star-2 bg-orange-400"
                />

                {/* Star 3 (default checked) */}
                <input
                  type="radio"
                  name={`rating-${hotel.id}`}
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />

                {/* Star 4 (default checked) */}
                <input
                  type="radio"
                  name={`rating-${hotel.id}`}
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />

                {/* Star 5 (default checked) */}
                <input
                  type="radio"
                  name={`rating-${hotel.id}`}
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>

              {/* เช็คว่าใครสามารถเห็นปุ่่มได้มั้งตาม Roles  */}
              <div className="mt-auto flex justify-between">
                {user && (
                  <div className="card-actions justify-end">
                    {user.roles.includes("ROLES_ADMIN") && (
                      <>
                        <button
                          onClick={() => handleDelete(hotel.id)}
                          className="btn bg-[#FF6F61] text-white hover:bg-[#FF3D39] flex items-center gap-2"
                        >
                          <img
                            src={Deleteicon}
                            alt="Delete Icon"
                            className="w-5 h-5"
                          />
                          Delete
                        </button>
                      </>
                    )}
                    {(user.roles.includes("ROLES_MODERATOR") ||
                      user.roles.includes("ROLES_ADMIN")) && (
                      <>
                        <button
                          onClick={() => handleOpenModal(hotel)}
                          className="btn bg-[#9DBDFF] text-white hover:bg-[#7FB3FF]"
                        ><img
                            src={Edit}
                            alt="Delete Icon"
                            className="w-5 h-5"
                          />
                          Edit
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => handleOpenDetailsModal(hotel)}
                      className="btn bg-[#88D66C] text-white hover:bg-[#388E3C]"
                    ><img
                            src={Detail}
                            alt="Delete Icon"
                            className="w-5 h-5"
                          />
                      Detail
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Modal for editing hotel */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-[#F2F9FF]">
            <h3 className="font-bold text-lg text-[#007BFF]">Edit Hotel</h3>
            <form>
              {/* Room Number */}
              <div className="mb-4">
                <label
                  htmlFor="roomNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Room Number
                </label>
                <input
                  type="text"
                  id="roomNumber"
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Room Type */}
              <div className="mb-4">
                <label
                  htmlFor="roomType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Room Type
                </label>
                <select
                  id="roomType"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {roomTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Room Image */}
              <div className="mb-4">
                <label
                  htmlFor="roomImage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Room Image URL
                </label>
                <input
                  type="text"
                  id="roomImage"
                  value={roomImage}
                  onChange={(e) => setRoomImage(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Availability */}
              <div>
                <label className="label cursor-pointer flex items-center">
                  <span className="label-text mr-4">Available</span>
                  <input
                    type="checkbox"
                    checked={isAvailable}
                    onChange={(e) => setIsAvailable(e.target.checked)}
                    className={`toggle ${
                      isAvailable ? "bg-green-500" : "bg-red-500"
                    } accent-${isAvailable ? "green" : "red"}`}
                  />
                </label>
              </div>

              {/* Price per Night */}
              <div className="mb-4">
                <label
                  htmlFor="PricePerNight"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price per Night
                </label>
                <input
                  type="number"
                  id="PricePerNight"
                  value={PricePerNight}
                  onChange={(e) => setPricePerNight(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Opening Date */}
              <div className="mb-4">
                <label
                  htmlFor="openingDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Opening Date
                </label>
                <input
                  type="date"
                  id="openingDate"
                  value={openingDate}
                  onChange={(e) => setOpeningDate(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  onClick={handleUpdateHotel}
                  className="btn btn-primary"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="btn"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
        {/* Modal for viewing hotel details */}
        {showDetails && (
          <dialog open className="modal">
            <div className="modal-box bg-[#F2F9FF]">
              <h3 className="font-bold mt-4 text-lg text-[#007BFF]">
                Hotel Details
              </h3>
              <div className="mb-4">
                <img
                  src={selectedHotel.roomImage}
                  alt="Room"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold">Room Number:</h4>
                <p>{selectedHotel.roomNumber}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold">Room Type:</h4>
                <p>{selectedHotel.roomType}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold">Price per Night:</h4>
                <p>${selectedHotel.PricePerNight}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold">Availability:</h4>
                <div
                  className={`inline-block py-1 px-3 rounded-lg font-semibold text-center ${
                    selectedHotel.isAvailable
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  <p>
                    {selectedHotel.isAvailable ? "Available" : "Not Available"}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold">Opening Date:</h4>
                <p>
                  {new Date(selectedHotel.openingDate).toLocaleDateString()}
                </p>
              </div>
              <div className="modal-action btn-error">
                <button
                  type="button"
                  onClick={() => setShowDetails(false)}
                  className="btn"
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default HotelRecord;
