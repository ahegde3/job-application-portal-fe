import { Box, TextField } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import React from "react";
import DiversityComponent from "./DiversityComponent";

export default function JobApplication() {
  const applicationQuestions = [
    "Why do you want to work with us?",
    "Why should we hire you?",
  ];
  return (
    <div>
      <div>
        <h2>Apply for this Job</h2>
      </div>
      <Grid container spacing={2}>
        {applicationQuestions?.map((question, key) => (
          <Grid item xs={12} key={key}>
            {console.log(key)}
            <TextField
              key={key}
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label={question}
              autoFocus
            />
          </Grid>
        ))}
      </Grid>
      <Grid>
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
      </Grid>
      <DiversityComponent />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
    </div>
  );
}
