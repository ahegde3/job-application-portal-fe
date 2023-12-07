import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useLocation } from "react-router-dom";
import { getCandidateInformation } from "../api/candidate";
import { updateJobApplicationStatus } from "../api/jobs";

export default function CandidateInfo() {
  const [candidateInformation, setCandidateInformation] = useState(undefined);
  const { candidateId, jobId } = useLocation()?.state;
  console.log(candidateId, jobId);
  useEffect(() => {
    getCandidateInformation(candidateId).then((res) =>
      setCandidateInformation(res[0])
    );
  }, []);

  return (
    <div>
      <h2>Candidate Information</h2>
      {candidateInformation != undefined && (
        <div>
          <h2>User Information</h2>
          <div>
            <strong>First Name:</strong>{" "}
            {candidateInformation.userInformation.firstName}
            <br />
            <strong>Last Name:</strong>{" "}
            {candidateInformation.userInformation.lastName}
            <br />
            <strong>Email:</strong>{" "}
            {candidateInformation.userInformation.emailId}
            <br />
            <strong>Phone Number:</strong>{" "}
            {candidateInformation.userInformation.phoneNo}
            <br />
            <strong>Password:</strong>{" "}
            {candidateInformation.userInformation.password}
            <br />
          </div>

          <h2>User Address</h2>
          <div>
            <strong>Street No:</strong>{" "}
            {candidateInformation.userAddress.streetNo}
            <br />
            <strong>Street Name:</strong>{" "}
            {candidateInformation.userAddress.streetName}
            <br />
            <strong>City:</strong> {candidateInformation.userAddress.city}
            <br />
            <strong>State:</strong> {candidateInformation.userAddress.state}
            <br />
            <strong>Country:</strong> {candidateInformation.userAddress.country}
            <br />
            <strong>Zipcode:</strong> {candidateInformation.userAddress.zipcode}
            <br />
          </div>

          <h2>Education Information</h2>
          <ul>
            {candidateInformation.educationInfo.map((education, index) => (
              <li key={index}>
                {/* Render each education item */}
                {/* For example: */}
                University: {education.universityName}, Degree:{" "}
                {education.degree}
                {/* Include other relevant fields */}
              </li>
            ))}
          </ul>

          <h2>Work Experience Information</h2>
          <ul>
            {candidateInformation.workExperienceInfo.map(
              (experience, index) => (
                <li key={index}>
                  {/* Render each work experience item */}
                  {/* For example: */}
                  Organization: {experience.organizationName}, Position:{" "}
                  {experience.position}
                  {/* Include other relevant fields */}
                </li>
              )
            )}
          </ul>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ margin: "30px" }}
              onClick={() => {
                updateJobApplicationStatus(jobId, candidateId, "REJECT");
              }}
            >
              Reject
            </Button>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ margin: "30px" }}
              onClick={() => {
                updateJobApplicationStatus(jobId, candidateId, "ACCEPT");
              }}
            >
              Accept
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
}
