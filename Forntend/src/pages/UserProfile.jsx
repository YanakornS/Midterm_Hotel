import React from "react";
import { useAuthContext } from "../Contexts/AuthContext";

const UserProfile = () => {
  const { user } = useAuthContext();

  return (
    <div className="flex justify-center items-center h-screen bg-[#F2F9FF]">
      <div className="card bg-white shadow-xl rounded-lg w-96 p-4">
        <div className="flex items-center">
          <div className="relative mr-4">
            <img
              className="w-16 h-16 rounded-full border-2 border-gray-300"
              src="https://cdn-icons-png.freepik.com/512/7718/7718888.png"
              alt="User Profile"
            />
            {/* Green Dot */}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">User Profile</h2>
            <p className="text-gray-800">
              <strong>Username:</strong> {user.username}
            </p>
            <p className="text-gray-800">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-800">
              <strong>Roles:</strong> {user.roles.join(", ")}
            </p>
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
