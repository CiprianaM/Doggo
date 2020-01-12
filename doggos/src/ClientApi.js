const BASE_url = "http://localhost:3002";

export default {
  getAllPuppers: () => {
    return fetchRequest("/puppers");
  },
  createPupper: data => {
    return fetchRequest("/events", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
  }
};
const fetchRequest = (url, options) => {
  return fetch(`${BASE_url}${url}`, options)
    .then(res => (res.status < 400 ? res : Promise.reject(res)))
    .then(res => res.json())
    .catch(error => console.log(error));
};