import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.services";
import Swal from "sweetalert2";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const register = await AuthService.register(
        user.username,
        user.email,
        user.password
      );
      if (register.status === 200) {
        Swal.fire({
          title: "User Registration",
          text: register.data.message,
          icon: "success",
        });
        setUser({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "User Registration",
        text: error.response.data.message || error.message,
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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="card bg-white shadow-xl rounded-lg w-full max-w-md p-6">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
            Register
          </h1>
          <form className="space-y-4">
            <label className="input input-bordered flex items-center gap-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 text-gray-500"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow px-3 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 text-gray-500"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow px-3 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
                placeholder="Username"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 text-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow px-3 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </label>
            <div className="text-center space-x-4 mt-6">
              <button
                type="button"
                className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                onClick={handleSubmit}
              >
                Register
              </button>
              <button
                type="button"
                className="btn bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
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

export default Register;
