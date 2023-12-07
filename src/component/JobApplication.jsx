import { Box, TextField } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import DiversityComponent from "./DiversityComponent";
import { applyForJob } from "../api/jobs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function JobApplication({ jobId, applicationQuestions }) {
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const applyToJob = () => {
    const candidateId = localStorage.getItem("userId");
    applyForJob(candidateId, jobId, answers).then(() => {
      toast.success("Job application successful");
      setTimeout(() => {
        navigate("/home");
      }, 5000); //wait for 5sec
    });
  };

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
