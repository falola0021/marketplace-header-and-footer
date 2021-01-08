export default function authHeader() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  if (currentUser && currentUser.token) {
    return {
      "Content-Type": "multipart/form-data",
      "Content-type": "application/json",
      Authorization: `Bearer ${currentUser.token}`,
    };
  } else {
    return {};
  }
}
