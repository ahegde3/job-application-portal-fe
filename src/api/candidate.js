import { BASE_URL } from "../constant/api";

const authenticateUser = (userType, email, password) => {
  const url = `${BASE_URL}/${userType}/loginCandidate`;
  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
    body: JSON.stringify({ email, password }),
  }).then((result) => {
    if (result.ok) return result.json();
    else return undefined;
  });
};

export { authenticateUser };
