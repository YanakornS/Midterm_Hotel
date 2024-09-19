import React, { useState } from "react";

const Search = ({ hotels, setFilterHotels }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = hotels.filter((hotel) =>
      hotel.roomType.toLowerCase().includes(term.toLowerCase())
    );
    setFilterHotels(filtered);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by Room Type"
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;
