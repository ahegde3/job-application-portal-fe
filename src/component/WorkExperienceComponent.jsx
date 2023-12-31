import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";
import ColoredLine from "./ColoredLine";

export default function WorkExperienceComponent({
  workExperienceInformation,
  setWorkExperienceInformation,
}) {
  const [count, setCount] = useState(workExperienceInformation?.length || 1);
  return (
    <Box>
      <Typography
        component="h1"
        variant="h5"
        style={{ marginBottom: "12px", textAlign: "center" }}
      >
        Candidate Workexperience
      </Typography>
      {[...Array(count)].map((_, index) => (
        <WorkexperienceDetailComponent
          position={index}
          workExperienceInformation={workExperienceInformation}
          setCount={setCount}
          setWorkExperienceInformation={setWorkExperienceInformation}
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
        + Add another work experience
      </span>
    </Box>
  );
}

const WorkexperienceDetailComponent = ({
  position,
  setCount,
  workExperienceInformation,
  setWorkExperienceInformation,
}) => {
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(
    workExperienceInformation?.[position]?.isCurrentlyWorking || false
  );

  const setWorkExperienceValues = (key, value, position) => {
    setWorkExperienceInformation((prevExperience) => {
      const updatedExperience = [...(prevExperience || [])]; // Create a copy of the education array

      updatedExperience[position] = {
        ...updatedExperience[position], // Preserve existing data at the position
        [key]: value, // Update the university field
      };

      return updatedExperience; // Return the updated education array
    });
  };

  return (
    <Grid container spacing={2}>
      {position > 0 && <ColoredLine />}
      <h4 style={{ position: "relative", right: position > 0 ? "69%" : null }}>
        {" "}
        Experience {position + 1}
      </h4>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="position"
          label="Position"
          value={workExperienceInformation?.[position]?.position}
          onChange={(e) =>
            setWorkExperienceValues("position", e.target.value, position)
          }
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="organizationName"
          label="Organization"
          value={workExperienceInformation?.[position]?.organizationName}
          onChange={(e) =>
            setWorkExperienceValues(
              "organizationName",
              e.target.value,
              position
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
          id="responsibilities"
          label="Responsibilites"
          value={workExperienceInformation?.[position]?.responsibilities}
          onChange={(e) =>
            setWorkExperienceValues(
              "responsibilities",
              e.target.value,
              position
            )
          }
          autoFocus
        />
      </Grid>
      {!isCurrentlyWorking ? (
        <>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="startDate"
              label="Start Date"
              value={workExperienceInformation?.[position]?.startDate}
              onChange={(e) =>
                setWorkExperienceValues("startDate", e.target.value, position)
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
              value={workExperienceInformation?.[position]?.endDate}
              onChange={(e) =>
                setWorkExperienceValues("endDate", e.target.value, position)
              }
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
            value={workExperienceInformation?.[position]?.startDate}
            onChange={(e) =>
              setWorkExperienceValues("startDate", e.target.value, position)
            }
            autoFocus
          />
        </Grid>
      )}
      <FormControlLabel
        control={
          <Checkbox
            checked={isCurrentlyWorking}
            onClick={() => {
              setIsCurrentlyWorking(!isCurrentlyWorking);
              setWorkExperienceValues("isCurrentlyWorking", true, position);
            }}
          />
        }
        label="I am currently working there"
      />
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
