const BASE_url = "http://localhost:3002";

export default {
  getAllPuppers: () => {
    return fetchRequest("/puppers");
  },
  getNewlyCreatedPupper: id => {
    const newUrl ='/profile/'+id;
    return fetchRequest(newUrl);
  },
  createPupper: data => {
    return fetchRequest("/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
  },
  editPupper: (id, data) => {
    const newUrl ='/profile/'+id;
    return fetchRequest(newUrl, {
      method: "PUT",
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