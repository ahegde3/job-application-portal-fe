import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import UserDetail from "../component/UserDetail";
import AddressComponent from "../component/AddressComponent";
import EducationComponent from "../component/EducationComponent";
import WorkExperienceComponent from "../component/WorkExperienceComponent";
import DiversityComponent from "../component/DiversityComponent";
import { CANDIDATE } from "../constant/constants";
import { registerCompany, getCompanyInformation } from "../api/company";
import { registerCanidate, getCandidateInformation } from "../api/candidate";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UpdateProfile() {
  const [userInformation, setUserInformation] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [educationInformation, setEducationInformation] = useState([]);
  const [workExperienceInformation, setWorkExperienceInformation] = useState(
    []
  );
  const [diversityInformation, setDiversityInformation] = useState(null);

  const userType = localStorage.getItem("userType");

  const classes = useStyles();
  const navigate = useNavigate();

  const companyRegistrationComponent = [
    <UserDetail
      userType={userType}
      setUserInformation={setUserInformation}
      userInformation={userInformation}
    />,
    <AddressComponent
      userType={userType}
      userAddress={userAddress}
      setUserAddress={setUserAddress}
    />,
  ];

  const candidateRegistrationComponent = [
    <UserDetail
      userType={userType}
      userInformation={userInformation}
      setUserInformation={setUserInformation}
      isUpdate={true}
    />,
    <AddressComponent
      userType={userType}
      userAddress={userAddress}
      setUserAddress={setUserAddress}
    />,
    <EducationComponent
      educationInformation={educationInformation}
      setEducationInformation={setEducationInformation}
    />,
    <WorkExperienceComponent
      workExperienceInformation={workExperienceInformation}
      setWorkExperienceInformation={setWorkExperienceInformation}
    />,
    <DiversityComponent
      diversityInformation={diversityInformation}
      setDiversityInformation={setDiversityInformation}
    />,
  ];
  const registrationInformationComponents =
    userType === CANDIDATE
      ? [...candidateRegistrationComponent]
      : [...companyRegistrationComponent];
  const [currentComponentIndex, setcurrentComponentIndex] = useState(0);

  const onSubmit = () => {
    if (userType === CANDIDATE) {
      if (
        userInformation != null &&
        userAddress != null &&
        educationInformation.length > 0 &&
        workExperienceInformation.length > 0
      ) {
      }
      registerCanidate(
        { ...userInformation, ...userAddress, ...diversityInformation },
        educationInformation,
        workExperienceInformation
      );
      navigate("/home");
    } else {
      const userData = {
        ...userInformation,
        ...userAddress,
      };
      registerCompany(userData).then(() => navigate("/home"));
      //TODO: For error show some toast
    }
  };

  useEffect(() => {
    if (userType === CANDIDATE) {
      getCandidateInformation(localStorage.getItem("userId")).then((res) =>
        setInformation(res)
      );
    } else
      getCompanyInformation(localStorage.getItem("userId")).then((res) =>
        setInformation(res)
      );
  }, [userType]);

  const setInformation = (res) => {
    if (userType === CANDIDATE) {
      setUserInformation(res[0].userInformation);
      setUserAddress(res[0].userAddress);
      setEducationInformation(res[0].educationInfo);
      setWorkExperienceInformation(res[0].workExperienceInfo);
      setDiversityInformation(res[0].diversityInformation);
    } else {
      setUserInformation(res);
      setUserAddress({
        streetNo: res.streetNo,
        streetName: res.streetName,
        city: res.city,
        state: res.state,
        country: res.country,
        zipcode: res.zipcode,
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          style={{ marginBottom: "16px" }}
        >
          Sign up
        </Typography>
        <div>{registrationInformationComponents[currentComponentIndex]}</div>
        {currentComponentIndex !==
        registrationInformationComponents.length - 1 ? (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => setcurrentComponentIndex(currentComponentIndex + 1)}
          >
            Next
          </Button>
        ) : (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Submit
          </Button>
        )}
        {currentComponentIndex === 0 && (
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        )}
        {/* </form> */}
      </div>
    </Container>
  );
}
