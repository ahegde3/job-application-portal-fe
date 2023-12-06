import { Box, TextField } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import DiversityComponent from "./DiversityComponent";
import { applyForJob } from "../api/jobs";

export default function JobApplication({ jobId, applicationQuestions }) {
  const [answers, setAnswers] = useState([]);

  const applyToJob = () => {
    const candidateId = localStorage.getItem("userId");
    applyForJob({ candidateId, jobId, answers });
  };
  // const applicationQuestions = [
  //   { appQuestionDesc: "Why do you want to work with us?" },
  //   { appQuestionDesc: "Why should we hire you?" },
  // ];
  return (
    <div>
      <div>
        {console.log(answers)}
        <h2>Apply for this Job</h2>
      </div>
      <Grid container spacing={2}>
        {applicationQuestions?.map(
          ({ appQuestionDesc, appQuestionId }, key) => (
            <Grid item xs={12} key={key}>
              {console.log(key)}
              <TextField
                key={key}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label={appQuestionDesc}
                onChange={(e) =>
                  setAnswers((prevAnswer) => {
                    console.log(prevAnswer);
                    if (prevAnswer === undefined) prevAnswer = [];
                    prevAnswer[key] = {
                      answerDesc: e.target.value,
                      appQuestionId,
                    };
                    return prevAnswer;
                  })
                }
                autoFocus
              />
            </Grid>
          )
        )}
      </Grid>
      {/* <Grid>
        <Button
          containerElement="label" //resume
          label="Resume/CV⁠*⁠:"
        >
          <input type="file" />
        </Button>
      </Grid>
      <Grid>
        <Button
          containerElement="label" // cover letter
          label="Resume/CV⁠*⁠:"
        >
          <input type="file" />
        </Button>
      </Grid> */}
      {/* <DiversityComponent /> */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={applyToJob}
      >
        Submit
      </Button>
    </div>
  );
}
