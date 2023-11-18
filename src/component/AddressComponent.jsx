import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function AddressComponent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="streetNo"
          variant="outlined"
          required
          fullWidth
          id="streetNo"
          label="Street Number"
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="streetName"
          variant="outlined"
          required
          fullWidth
          id="streetName"
          label="Street Name"
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="city"
          variant="outlined"
          required
          fullWidth
          id="city"
          label="City"
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="state"
          variant="outlined"
          required
          fullWidth
          id="state"
          label="State"
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="country"
          variant="outlined"
          required
          fullWidth
          id="country"
          label="country"
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="zipcode"
          variant="outlined"
          required
          fullWidth
          id="zipcode"
          label="Zipcode"
          autoFocus
        />
      </Grid>
    </Grid>
  );
}
