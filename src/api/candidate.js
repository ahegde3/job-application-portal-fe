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

const getCandidateInformation = (userId) => {
  const params = new URLSearchParams();
  params.append("userId", userId);
  const url = `${BASE_URL}/candidate/getCandidateInformation?${params.toString()}`;
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

const registerCanidate = (
  candidateInformation,
  educationInformation,
  workExperienceInformation
) => {
  const url = `${BASE_URL}/candidate/registerCandidate`;
  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
    body: JSON.stringify({
      candidateInformation,
      educationInformation,
      workExperienceInformation,
    }),
  }).then((result) => {
    if (result.ok) return result.json();
    else return undefined;
  });
};

export { authenticateCandidate, registerCanidate, getCandidateInformation };
