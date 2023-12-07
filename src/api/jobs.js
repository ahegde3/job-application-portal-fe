import { BASE_URL } from "../constant/api";

const searchJobsByKeyword = (keyword) => {
  const params = new URLSearchParams();
  params.append("keyword", keyword);
  const url = `${BASE_URL}/jobs/searchJobByKeyword?${params.toString()}`;
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

const getJobOpeningDetails = (jobId) => {
  const params = new URLSearchParams();
  params.append("jobId", jobId);
  const url = `${BASE_URL}/jobs/getJobOpeningDetails?${params.toString()}`;
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

const getJobApplicationQuestions = (jobId) => {
  const params = new URLSearchParams();
  params.append("jobId", jobId);
  const url = `${BASE_URL}/jobs/getJobApplicationQuestions?${params.toString()}`;
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

const applyForJob = (candidateId, jobId, answers) => {
  console.log(candidateId, jobId, answers);
  const url = `${BASE_URL}/jobs/applyForJobs`;
  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
    body: JSON.stringify({ candidateId, jobId, answers }),
  });
};

const getAppliedJobsForCandidate = (candidateId) => {
  const params = new URLSearchParams();
  params.append("candidateId", candidateId);
  const url = `${BASE_URL}/jobs/getAppliedJobsForCandidate?${params.toString()}`;
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

const createNewJobOpening = (jobData, companyId) => {
  const url = `${BASE_URL}/jobs/createNewJobOpening`;
  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
    body: JSON.stringify({ jobData, companyId }),
  });
};

const getCreatedJobs = (companyId) => {
  const params = new URLSearchParams();
  params.append("companyId", companyId);
  const url = `${BASE_URL}/jobs/getJobsForCompanyId?${params.toString()}`;
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

const deleteThisJob = (jobId) => {
  const params = new URLSearchParams();
  params.append("jobId", jobId);
  const url = `${BASE_URL}/company/deleteOpeningByJobId?${params.toString()}`;
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

const getCandidatesAppliedForJob = (jobId) => {
  const params = new URLSearchParams();
  params.append("jobId", jobId);
  const url = `${BASE_URL}/jobs/getJobAppliedCandidates?${params.toString()}`;
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

const updateJobApplicationStatus = (jobId, candidateId, status) => {
  const url = `${BASE_URL}/jobs/updateJobApplicationStatus`;
  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
    body: JSON.stringify({ jobId, candidateId, status }),
  });
};

export {
  searchJobsByKeyword,
  getJobOpeningDetails,
  getJobApplicationQuestions,
  applyForJob,
  getAppliedJobsForCandidate,
  createNewJobOpening,
  getCreatedJobs,
  deleteThisJob,
  getCandidatesAppliedForJob,
  updateJobApplicationStatus,
};
