import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";
import ColoredLine from "./ColoredLine";

export default function EducationComponent({
  educationInformation,
  setEducationInformation,
}) {
 // console.log("count educations", educationInformation);
  const [count, setCount] = useState(educationInformation?.length ?? 1);
  console.log(count);

  return (
    <Box>
      <Typography
        component="h1"
        variant="h5"
        style={{ marginBottom: "12px", textAlign: "center" }}
      >
        Candidate Education
      </Typography>

      {[...Array(count)].map((_, index) => (
        <EducationDetailsComponent
          key={index}
          position={index}
          setCount={setCount}
          educationInformation={educationInformation}
          setEducationInformation={setEducationInformation}
        />
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
        + Add another education
      </span>
    </Box>
  );
}

const EducationDetailsComponent = ({
  position,
  setCount,
  educationInformation,
  setEducationInformation,
}) => {
  const setEducationValues = (key, value, position) => {
    setEducationInformation((prevEducation) => {
      const updatedEducation = [...(prevEducation || [])]; // Create a copy of the education array

      updatedEducation[position] = {
        ...updatedEducation[position], // Preserve existing data at the position
        [key]: value, // Update the university field
      };

      return updatedEducation; // Return the updated education array
    });
  };
  return (
    <Grid container spacing={2}>
      {position > 0 && <ColoredLine />}
      <h2 style={{ position: "relative", right: "69%" }}>
        {" "}
        Education {position + 1}
      </h2>
      <Grid item xs={12}>
        <TextField
          autoComplete="university"
          variant="outlined"
          required
          fullWidth
          id="university"
          label="University"
          value={educationInformation?.[position].universityName || ""}

          onChange={(e) =>
            setEducationValues("university", e.target.value, position)
          }
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
          value={educationInformation?.[position].degree || ""}
          onChange={(e) =>
            setEducationValues("degreeType", e.target.value, position)
          }
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
          value={educationInformation?.[position].country || ""}
          onChange={(e) =>
            setEducationValues("country", e.target.value, position)
          }
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
          value={educationInformation?.[position].major || ""}
          onChange={(e) =>
            setEducationValues("major", e.target.value, position)
          }
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
          value={educationInformation?.[position].gpa || ""}
          onChange={(e) => setEducationValues("gpa", e.target.value, position)}
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
          value={educationInformation?.[position].startDate || ""}
          onChange={(e) =>
            setEducationValues("startDate", e.target.value, position)
          }
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
          value={educationInformation?.[position].endDate || ""}
          onChange={(e) =>
            setEducationValues("endDate", e.target.value, position)
          }
          autoFocus
        />
      </Grid>
      {position > 0 && (
        <span
          style={{
            display: "flex",
            marginLeft: "34%",
            color: "blue",
            cursor: "pointer",
          }}
          onClick={() => setCount((count) => count - 1)}
        >
          Remove this
        </span>
      )}
    </Grid>
  );
};
