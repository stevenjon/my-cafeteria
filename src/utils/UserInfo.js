export default () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  if (user) {
    return user;
  } else {
    return {};
  }
};
