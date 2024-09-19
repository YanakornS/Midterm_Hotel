import React, { useState } from "react";

const PagesLikes = () => {
  // สถานะสำหรับ Total Likes
  const [likes, setLikes] = useState(25600);
  const [liked, setLiked] = useState(false);

  // สถานะสำหรับ Total Bookings
  const [bookings, setBookings] = useState(15200);
  const [booked, setBooked] = useState(false);

  // สถานะสำหรับ Room Availability
  const [availability, setAvailability] = useState(85);
  const [available, setAvailable] = useState(false);

  // ฟังก์ชันจัดการการกดไลค์
  const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  // ฟังก์ชันจัดการการกดจอง
  const handleBooking = () => {
    setBookings(booked ? bookings - 1 : bookings + 1);
    setBooked(!booked);
  };

  // ฟังก์ชันจัดการการกดเปลี่ยน Room Availability
  const handleAvailability = () => {
    setAvailability(available ? availability - 5 : availability + 5); // เพิ่มหรือลด 5%
    setAvailable(!available);
  };

  return (
    <>
      <div className="stats shadow bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 text-gray-700">
        {/* Total Likes */}
        <div className="stat">
          <div className="stat-figure text-primary">
            <button onClick={handleLike} className="focus:outline-none">
              {liked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 text-pink-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">{likes.toLocaleString()}</div>
          <div className="stat-desc">People loving this hotel</div>
        </div>

        {/* Total Bookings */}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <button onClick={handleBooking} className="focus:outline-none">
              {booked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="stat-title">Total Bookings</div>
          <div className="stat-value text-secondary">{bookings.toLocaleString()}</div>
          <div className="stat-desc">Successful reservations this month</div>
        </div>

        {/* Room Availability */}
        <div className="stat">
          <div className="stat-figure text-accent">
            <button onClick={handleAvailability} className="focus:outline-none">
              {available ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l7.78 7.78a1.5 1.5 0 002.12 0l7.78-7.78a5.5 5.5 0 000-7.78z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l7.78 7.78a1.5 1.5 0 002.12 0l7.78-7.78a5.5 5.5 0 000-7.78z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="stat-title">Room Availability</div>
          <div className="stat-value text-accent">{availability}%</div>
          <div className="stat-desc">Rooms available for booking</div>
        </div>
      </div>
    </>
  );
};

export default PagesLikes;
