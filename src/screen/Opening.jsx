import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import JobApplication from "../component/JobApplication";
import { getJobOpeningDetails, getJobApplicationQuestions } from "../api/jobs";

export default function Opening() {
  const { state } = useLocation();
  //console.log(state);

  const { jobId, name, companyName, location, description } = state.job || {};

  const [applyForTheJob, setApplyForJobs] = useState(false);
  const [applicationQuestions, setApplicationQuestions] = useState([]);
  const [requirements, setRequirements] = useState(null);
  const [companyInfo, setCompanyInfo] = useState(null);

  // const requirements = `Required Qualifications\n\n
  // - Bachelors or advanced degree in Computer Science/Engineering or equivalent.\n\n
  // - Strong programming skills in Python, Java, or JavaScript. Experience with object-oriented programming preferred.\n\n
  // - Excellent object-oriented or functional analysis and design skills.\n\n
  // - Strong knowledge and prior experience with the full software development lifecycle (requirements gathering, designing, building, testing, and maintenance).\n\n
  // - Experience in relational databases such as MySQL, Postgres, or NoSQL databases such as MongoDB or ElasticSearch.\n\n
  // - Familiarity with data structures, storage systems, and cloud infrastructure such as Azure, AWS, or GCP.\n\n
  // - A passion for building quality software.\n\n
  // - Ability to work both independently and as a team player.\n\n

  // Preferred Qualifications:\n\n

  // - Experience with DevOps and cloud-native development.\n\n
  // - Experience with workflow management systems such as Prefect or Airflow.\n\n
  // - Strong interest or previous experience in finance.\n`;

  //const companyInfo = `Lazard, one of the world's preeminent financial advisory and asset management firms, operates from 43 cities across 27 countries in North America, Europe, Asia, Australia, Central and South America. With origins dating to 1848, the firm provides advice on mergers and acquisitions, strategic matters, restructuring and capital structure, capital raising and corporate finance, as well as asset management services to corporations, partnerships, institutions, governments and individuals. For more information on Lazard, please visit www.lazard.com.`;

  useEffect(() => {
    getJobOpeningDetails(jobId).then((res) => {
      setRequirements(res?.requirements);
      setCompanyInfo(res.companyDesc);
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
          <td> {description}</td>
        </tr>
      </table>

      <div>{requirements}</div>
      <div>
        <p>About {companyName}</p>
        <span>{companyInfo}</span>
      </div>
      {console.log(applyForTheJob)}
      {!applyForTheJob ? (
        <Button
          onClick={(e) => {
            console.log("inside");
            getJobApplicationQuestions(jobId).then((res) => {
              //   console.log(res);
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
