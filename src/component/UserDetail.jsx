import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";
import { COMPANY } from "../constant/constants";

export default function UserDetail({ userType, setUserInformation }) {
  //const [name,setName]
  return (
    <Box>
      <Typography
        component="h1"
        variant="h5"
        style={{ marginBottom: "12px", textAlign: "center" }}
      >
        {userType} Information
      </Typography>
      {userType === COMPANY ? (
        <CompanyInformationComponent setUserInformation={setUserInformation} />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="phoneNo"
              label="Phone Number"
              name="phoneNo"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

const CompanyInformationComponent = ({ setUserInformation }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          autoComplete="fname"
          name="CompanyName"
          variant="outlined"
          required
          fullWidth
          id="companyName"
          label="Company Name"
          onChange={(e) =>
            setUserInformation(
              (userData) =>
                (userData = { ...userData, companyName: e.target.value })
            )
          }
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          onChange={(e) =>
            setUserInformation(
              (userData) =>
                (userData = { ...userData, companyEmailId: e.target.value })
            )
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="phoneNo"
          label="Phone Number"
          name="phoneNo"
          onChange={(e) =>
            setUserInformation(
              (userData) =>
                (userData = { ...userData, companyPhoneNo: e.target.value })
            )
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          required
          fullWidth
          id="companyDesc"
          label="About the company"
          name="companyDesc"
          onChange={(e) =>
            setUserInformation(
              (userData) =>
                (userData = { ...userData, companyDesc: e.target.value })
            )
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="industry"
          label="Industry to which the org belongs"
          name="industry"
          onChange={(e) =>
            setUserInformation(
              (userData) =>
                (userData = { ...userData, industry: e.target.value })
            )
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) =>
            setUserInformation(
              (userData) =>
                (userData = { ...userData, password: e.target.value })
            )
          }
        />
      </Grid>
    </Grid>
  );
};
