import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function Job({ job, setOpenJobDetails, unClickable }) {

  const navigate = useNavigate();
  return (
    <Card
      style={{
        marginTop: "10px",
        borderRadius: "10px",
        cursor: "pointer",
        border: "2px solid",
      }}
      onClick={() => {
        if (setOpenJobDetails != undefined) setOpenJobDetails(job.jobId);
        else if (!unClickable)
          navigate("/opening", { replace: true, state: { job } });
      }}
      className="job"
    >
      <CardContent>
        <h3>{job?.title}</h3>
        <h3>{job?.companyName}</h3>
        <p> {job?.location}</p>
      </CardContent>
    </Card>
  );
}
