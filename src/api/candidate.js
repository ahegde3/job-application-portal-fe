import { BASE_URL } from "../constant/api";

const authenticateCandidate = (email, password) => {
  const url = `${BASE_URL}/candidate/loginCandidate`;
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

export { authenticateCandidate };
