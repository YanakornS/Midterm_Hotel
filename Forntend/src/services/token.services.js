const getLocalAccessToken = () => {
  const user = getUser();
  return user?.accessToken;
};
const setUser = () => {
  localStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const removeUser = () => {
  localStorage.removeItem("user");
};

const Tokenservice = {
  getLocalAccessToken,
  setUser,
  getUser,
  removeUser,
};

export default Tokenservice;