import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function EducationComponent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          autoComplete="university"
          variant="outlined"
          required
          fullWidth
          id="university"
          label="University"
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="degreeType"
          label="Degree Type"
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="country"
          label="Country"
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6}>
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
      </Grid>
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
    </Grid>
  );
}