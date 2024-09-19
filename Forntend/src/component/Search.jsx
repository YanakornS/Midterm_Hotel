// src/components/Search.js

import React, { useState, useEffect } from "react";

const Search = ({ hotels, setFilterHotels }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleSearch = () => {
    let filtered = hotels;

    if (searchTerm) {
      filtered = filtered.filter((hotel) =>
        hotel.roomType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (availabilityFilter !== "All") {
      const isAvailableFilter = availabilityFilter === "Available";
      filtered = filtered.filter((hotel) => hotel.isAvailable === isAvailableFilter);
    }

    setFilterHotels(filtered);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <div
      className={`sticky top-0 z-50 mb-4 p-4 border border-gray-300 rounded-lg shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <input
          type="text"
          placeholder="Search by room type"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full md:w-4/5 mb-2 md:mb-0" // ปรับความกว้างที่นี่
        />
        <div className="flex items-center space-x-2 md:space-x-4">
          <select
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value)}
            className="select select-bordered mb-2 md:mb-0"
          >
            <option value="All">All</option>
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
          <button onClick={handleSearch} className="btn btn-info">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
