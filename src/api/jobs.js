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

export { searchJobsByKeyword };
