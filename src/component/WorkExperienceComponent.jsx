import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";

export default function WorkExperienceComponent() {
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  return (
    <Box>
      <Typography
        component="h1"
        variant="h5"
        style={{ marginBottom: "12px", textAlign: "center" }}
      >
        Candidate Workexperience
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="position"
            label="Position"
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="organization"
            label="Organization"
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="responsibilities"
            label="Responsibilites"
            autoFocus
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="major"
          label="Major"
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="gpa"
          label="GPA"
          autoFocus
        />
      </Grid> */}
        {!isCurrentlyWorking ? (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="startDate"
                label="Start Date"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="endDate"
                label="End Date"
                autoFocus
              />
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="startDate"
              label="Start Date"
              autoFocus
            />
          </Grid>
        )}
        <FormControlLabel
          control={
            <Checkbox
              onClick={() => setIsCurrentlyWorking(!isCurrentlyWorking)}
            />
          }
          label="I am currently working there"
        />
      </Grid>
    </Box>
  );
}
