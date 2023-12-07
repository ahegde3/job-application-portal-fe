import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { Box, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {
  createNewJobOpening,
  getCreatedJobs,
  getJobOpeningDetails,
  getJobApplicationQuestions,
  deleteThisJob,
} from "../api/jobs";
import JobList from "./JobList";

export default function JobCreationComponent() {
  const [createNewJob, setCreateNewJob] = useState(false);
  const [openJobDetail, setOpenJobDetails] = useState(undefined);
  const [reviewCreatedJob, setReviewCreatedJob] = useState(false);

  useEffect(() => {
    setReviewCreatedJob(false);
  }, [openJobDetail]);
  console.log(openJobDetail);
  return (
    <Box>
      {createNewJob || openJobDetail ? (
        <CreateNewJobForm
          setCreateNewJob={setCreateNewJob}
          setOpenJobDetails={setOpenJobDetails}
          openJobDetail={openJobDetail}
        />
      ) : reviewCreatedJob ? (
        <ReviewCreatedJob
          setReviewCreatedJob={setReviewCreatedJob}
          setOpenJobDetails={setOpenJobDetails}
        />
      ) : (
        <Box
          gap={1}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            marginLeft: "24%",
            marginTop: "15%",
            cursor: "pointer",
            border: "2px solid",
          }}
        >
          <Button onClick={() => setCreateNewJob(true)}>Create New Job</Button>
          <Button onClick={() => setReviewCreatedJob(true)}>
            Update Previous Jobs
          </Button>
          <Button>Review List of Applied Jobs</Button>
        </Box>
      )}
    </Box>
  );
}

const CreateNewJobForm = ({
  setCreateNewJob,
  openJobDetail,
  setOpenJobDetails,
}) => {
  const [jobData, setJobData] = useState({});
  const [count, setCount] = useState(1);
  const companyId = localStorage.getItem("userId");

  useEffect(() => {
    console.log("Create", openJobDetail);
    if (openJobDetail) {
      getJobOpeningDetails(openJobDetail)
        .then((res) => setJobData(res))
        .then(() => getJobApplicationQuestions(openJobDetail))
        .then((res) =>
          setJobData((prevData) => {
            console.log("Inside", res);
            return { ...prevData, questions: res };
          })
        );
    }
  }, [openJobDetail]);

  useEffect(() => {
    console.log("jobData", jobData);
    if (jobData?.questions) {
      setCount(jobData.questions.length ?? 1);
      console.log("length", jobData.questions.length);
    }
  }, [jobData]);

  const postJob = () => {
    if (jobData) {
      createNewJobOpening(jobData, companyId);
      setCreateNewJob(false);
    }
  };
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      style={{
        display: "block",
        margin: "10px",
        border: "1px groove",
        borderRadius: "6px",
        width: "40%",
        marginLeft: "30%",
      }}
    >
      <Grid item xs={12} sm={20}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="jobTitle"
          label="Job Title"
          value={jobData?.jobTitle || ""}
          onChange={(e) =>
            setJobData(
              (jobData) => (jobData = { ...jobData, jobTitle: e.target.value })
            )
          }
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={20}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="noOfVacancies"
          label="No of Vacancies"
          value={jobData?.noOfVacancies}
          onChange={(e) =>
            setJobData(
              (jobData) =>
                (jobData = { ...jobData, noOfVacancies: e.target.value })
            )
          }
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={20}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="jobLocation"
          label="Job Location"
          value={jobData?.jobLocation}
          onChange={(e) =>
            setJobData(
              (jobData) =>
                (jobData = { ...jobData, jobLocation: e.target.value })
            )
          }
        />
      </Grid>
      <Grid item xs={12} sm={20}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="jobDesc"
          label="Job Description"
          value={jobData?.jobDesc}
          onChange={(e) =>
            setJobData(
              (jobData) =>
                (jobData = { ...jobData, jobDesc: e.target.value })
            )
          }
        />
      </Grid>
      <Grid item xs={12} sm={20}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="requirements"
          label="Requirements"
          value={jobData?.requirements}
          onChange={(e) =>
            setJobData(
              (jobData) =>
                (jobData = { ...jobData, requirements: e.target.value })
            )
          }
        />
      </Grid>
      {[...Array(count)].map((_, index) => (
        <Grid item xs={12} sm={20}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="questions"
            label="Application Questions"
            value={jobData?.questions?.[index]?.appQuestionDesc || ""}
            onChange={(e) =>
              setJobData((jobData) => {
                console.log(jobData, index);
                if (jobData === undefined) jobData = { questions: [] };
                else if (jobData?.questions === undefined)
                  jobData.questions = [];
                jobData.questions[index] = { appQuestionDesc: e.target.value };
                return jobData;
              })
            }
            autoFocus
          />
        </Grid>
      ))}
      <span
        style={{
          display: "flex",
          marginTop: "15px",
          color: "blue",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        + Add another Question
      </span>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ margin: "30px" }}
          onClick={() => setCreateNewJob(false)}
        >
          Back
        </Button>
        {openJobDetail && (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ margin: "30px" }}
            onClick={() => {
              deleteThisJob(openJobDetail);
              setCreateNewJob(false);
              setOpenJobDetails(undefined);
            }}
          >
            Delete this job
          </Button>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ margin: "30px" }}
          onClick={postJob}
        >
          Post
        </Button>
      </Box>
    </Grid>
  );
};

const ReviewCreatedJob = ({ setReviewCreatedJob, setOpenJobDetails }) => {
  const companyId = localStorage.getItem("userId");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getCreatedJobs(companyId).then((res) => setJobs(res));
  }, []);

  return (
    <Box>
      <h2>Open jobs</h2>
      <JobList jobs={jobs} setOpenJobDetails={setOpenJobDetails} />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ margin: "30px" }}
        onClick={() => setReviewCreatedJob(false)}
      >
        Back
      </Button>
    </Box>
  );
};
