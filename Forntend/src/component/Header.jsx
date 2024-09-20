import React from "react";
// นำเข้ารูป PNG
import Hotel from "../assets/hotel.png"; // ใส่พาธที่ถูกต้องของรูปคุณ


const Header = () => {
  return (
    <div className="p-4 bg-white border-2 border-[#7E8EF1] rounded-lg shadow-lg max-w-md mx-auto mt-1 hover:bg-[#E0E7FF] hover:border-[#6D6E8C] transition-all duration-300 flex items-center">
      <img 
        src={Hotel} // ใส่ URL ของรูป PNG ที่ต้องการ
        alt="Hotel"
        className="w-12 h-12 object-cover rounded-full mr-3" // ปรับขนาดและให้มีระยะห่างจากข้อความ
      />
      <p className="text-2xl font-bold text-gray-800">Hotel & Motel</p>
    </div>
  );
};

export default Header;
