import React, { useEffect, useState } from "react";
import AuthService from "../services/auth.services";
import { useAuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { login, user: loggedInUser } = useAuthContext();

  useEffect(() => {
    if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(user.username, user.password);
      if (response.status === 200) {
        login(response.data);
        Swal.fire({
          title: "Login Successful",
          text: "You have logged in successfully.",
          icon: "success",
        }).then(() => {
          setUser({ username: "", password: "" });
          navigate("/Home");
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Login Failed",
        text: "Invalid username or password.",
        icon: "error",
      });
    }
  };

   const handleCancel = () => {
    setUser({
      username: "",
      email: "",
      password: "",
    });
    navigate("/");
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#F2F9FF] to-[#D7E6F5]">
      <div className="card w-96 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="card-body p-8">
          <h2 className="card-title text-center text-3xl font-bold text-gray-800 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <label className="input input-bordered flex items-center gap-2 p-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 text-gray-500"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow px-3 py-2 border-0 rounded-md text-gray-700 focus:outline-none focus:ring-0"
                placeholder="Username"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </label>
            {/* Password */}
            <label className="input input-bordered flex items-center gap-2 p-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 text-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow px-3 py-2 border-0 rounded-md text-gray-700 focus:outline-none focus:ring-0"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </label>
            {/* Actions */}
            <div className="card-actions justify-end mt-4 space-x-4">
              <button
                type="submit"
                className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 shadow-lg"
              >
                Login
              </button>
              <button
                type="button"
                className="btn bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 shadow-lg"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
