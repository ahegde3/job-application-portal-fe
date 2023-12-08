import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import JobApplication from "../component/JobApplication";
import { getJobOpeningDetails, getJobApplicationQuestions } from "../api/jobs";

export default function Opening() {
  const { state } = useLocation();

  const { jobId, name, companyName, location } = state.job || {};

  const [applyForTheJob, setApplyForJobs] = useState(false);
  const [applicationQuestions, setApplicationQuestions] = useState([]);
  const [requirements, setRequirements] = useState(null);
  const [companyInfo, setCompanyInfo] = useState(null);
  const [jobDescription, setJobDescription] = useState(null);

  useEffect(() => {
    getJobOpeningDetails(jobId).then((res) => {
      setRequirements(res?.requirements);
      setCompanyInfo(res.companyDesc);
      setJobDescription(res.jobDesc);
    });
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <table style={{ margin: "25px", display: "table" }}>
        <tr>
          <td>Company :</td>
          <td> {companyName}</td>
        </tr>
        <tr>
          <td>Location :</td>
          <td>{location}</td>
        </tr>
        <tr>
          <td>Description :</td>
          <td> {jobDescription}</td>
        </tr>
      </table>

      <div>{requirements}</div>
      <div>
        <p>About {companyName}</p>
        <span>{companyInfo}</span>
      </div>
      {!applyForTheJob ? (
        <Button
          onClick={(e) => {
            getJobApplicationQuestions(jobId).then((res) => {
              setApplicationQuestions(res);
              setApplyForJobs(true);
            });
          }}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Apply to this Job
        </Button>
      ) : (
        <JobApplication
          jobId={jobId}
          applicationQuestions={applicationQuestions}
        />
      )}
    </div>
  );
}
