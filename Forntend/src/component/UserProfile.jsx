import React from "react";
import { useAuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { logout } = useAuthContext(); // ดึงฟังก์ชัน logout จาก context
  const navigate = useNavigate(); // ใช้ navigate เพื่อเปลี่ยนเส้นทาง

  const handleLogout = () => {
    logout(); // เรียกใช้ฟังก์ชัน logout
    navigate("/login"); // ใช้ navigate เพื่อเปลี่ยนเส้นทางไปที่หน้า Login
  };

  return (
    <div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full overflow-hidden">
            <img
              alt="User Avatar"
              src="https://cdn-icons-png.freepik.com/512/7718/7718888.png"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white border border-[#E0E7FF] rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
        >
          <li>
            <a className="justify-between text-[#007BFF] hover:bg-[#F0F4FF]">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a className="text-[#007BFF] hover:bg-[#F0F4FF]">Settings</a>
          </li>
          <li>
            <a
              className="text-[#FF4D4D] hover:bg-[#FFECEC]"
              onClick={handleLogout}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
