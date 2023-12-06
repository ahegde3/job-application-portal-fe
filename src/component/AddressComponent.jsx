import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";

export default function AddressComponent({ userAddress, setUserAddress }) {
  
  return (
    <Box>
      <Typography
        component="h1"
        variant="h5"
        style={{ marginBottom: "12px", textAlign: "center" }}
      >
        Candidate Address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="streetNo"
            variant="outlined"
            required
            fullWidth
            id="streetNo"
            label="Street Number"
            value={userAddress?.streetNo}
            onChange={(e) =>
              setUserAddress(
                (addressData) =>
                  (addressData = { ...addressData, streetNo: e.target.value })
              )
            }
            // autoFocus
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
            value={userAddress?.streetName}
            onChange={(e) =>
              setUserAddress(
                (addressData) =>
                  (addressData = { ...addressData, streetName: e.target.value })
              )
            }
            // autoFocus
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
            value={userAddress?.city}
            onChange={(e) =>
              setUserAddress(
                (addressData) =>
                  (addressData = { ...addressData, city: e.target.value })
              )
            }
            // autoFocus
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
            value={userAddress?.state}
            onChange={(e) =>
              setUserAddress(
                (addressData) =>
                  (addressData = { ...addressData, state: e.target.value })
              )
            }
            // autoFocus
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
            value={userAddress?.country}
            onChange={(e) =>
              setUserAddress(
                (addressData) =>
                  (addressData = { ...addressData, country: e.target.value })
              )
            }
            // autoFocus
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
            value={userAddress?.zipcode}
            onChange={(e) =>
              setUserAddress(
                (addressData) =>
                  (addressData = { ...addressData, zipcode: e.target.value })
              )
            }
            // autoFocus
          />
        </Grid>
      </Grid>
    </Box>
  );
}
