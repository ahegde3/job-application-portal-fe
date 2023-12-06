import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Box, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export default function JobCreationComponent() {
  const [createNewJob, setCreateNewJob] = useState(false);
  return (
    <Box>
      {createNewJob ? (
        <CreateNewJobForm />
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

const CreateNewJobForm = () => {
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
          autoComplete="streetNo"
          variant="outlined"
          required
          fullWidth
          id="jobTitle"
          label="Job Title"

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
          // autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={20}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="jobDescription"
          label="Job Description"

          // autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={20}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="requirements"
          label="Requirements"
        />
      </Grid>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ margin: "30px" }}
          
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ margin: "30px" }}
        >
          Post
        </Button>
      </Box>
    </Grid>
  );
};
