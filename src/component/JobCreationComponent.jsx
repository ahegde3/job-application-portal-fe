import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Box, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { createNewJobOpening } from "../api/jobs";

export default function JobCreationComponent() {
  const [createNewJob, setCreateNewJob] = useState(false);
  return (
    <Box>
      {createNewJob ? (
        <CreateNewJobForm setCreateNewJob={setCreateNewJob} />
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
          <Button>Update Previous Jobs</Button>
          <Button>Review List of Applied Jobs</Button>
        </Box>
      )}
    </Box>
  );
}

const CreateNewJobForm = ({ setCreateNewJob }) => {
  const [jobData, setJobData] = useState({});
  const [count, setCount] = useState(1);
  const candidateId = localStorage.getItem("userId");

  const postJob = () => {
    if (jobData) createNewJobOpening(jobData, candidateId);
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
          onChange={(e) =>
            setJobData(
              (jobData) => (jobData = { ...jobData, jobTitle: e.target.value })
            )
          }
          // autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={20}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="noOfVacanicies"
          label="No of Vacancies"
          onChange={(e) =>
            setJobData(
              (jobData) =>
                (jobData = { ...jobData, noOfVacancies: e.target.value })
            )
          }
          // autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={20}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="jobLocation"
          label="Job Location"
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
          id="jobDescription"
          label="Job Description"
          onChange={(e) =>
            setJobData(
              (jobData) =>
                (jobData = { ...jobData, jobDescription: e.target.value })
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
            onChange={(e) =>
              setJobData((jobData) => {
                console.log(jobData, index);
                if (jobData === undefined) jobData = { questions: [] };
                else if (jobData?.questions === undefined)
                  jobData.questions = [];
                jobData.questions[index] = e.target.value;
                return jobData;
              })
            }
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
