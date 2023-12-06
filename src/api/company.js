import { BASE_URL } from "../constant/api";

const authenticateCompany = (email, password) => {
  const url = `${BASE_URL}/company/loginCompany`;
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

const getCompanyInformation = (userId) => {
  const params = new URLSearchParams();
  params.append("userId", userId);
  const url = `${BASE_URL}/company/getCompanyInformation?${params.toString()}`;
  return fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
  }).then((result) => {
    if (result.ok) return result.json();
    else return undefined;
  });
};

const registerCompany = (userData) => {
  
  const url = `${BASE_URL}/company/registerCompany`;
  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
    body: JSON.stringify({userData }),
  })
};

export { authenticateCompany, registerCompany, getCompanyInformation };
