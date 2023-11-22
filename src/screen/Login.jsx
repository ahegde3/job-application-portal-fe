import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../component/Logo";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ToastContainer, toast } from "react-toastify";
import { authenticateCandidate } from "../api/candidate";
import { authenticateCompany } from "../api/company";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const [currentTab, setCurrentTab] = useState("candidate");
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticateUser = {
    candidate: authenticateCandidate,
    company: authenticateCompany,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password)
      authenticateUser[currentTab]?.(email, password).then((res) => {
        if (!res) {
          toast.error("Enter valid email id and password", {
            position: toast.POSITION.TOP_RIGHT,
          });
          return;
        }
        console.log(res);
        localStorage.setItem("isLogged", true);
        navigate("/home");
      });
    else
      toast.error("Enter valid email id and password", {
        position: toast.POSITION.TOP_RIGHT,
      });
  };

  useEffect(() => {
    if (localStorage.getItem("isLogged") === "true") navigate("/home");
  }, [navigate]);

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <ToastContainer /> */}
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <div className="Page" style={{ border: "solid", padding: "45px" }}>
          <Logo />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              {/* <Typography component="h1" variant="h5">
              Sign in
            </Typography> */}

              <TabContext
                value={currentTab}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={(e, newValue) => setCurrentTab(newValue)}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Candidate" value="candidate" />
                    <Tab label="Company" value="company" />
                  </TabList>
                </Box>
              </TabContext>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
              <Grid container>
                {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
                <Grid item>
                  <Link
                    // href="#"
                    variant="body2"
                    onClick={() => navigate("/registration")}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </Container>
    </ThemeProvider>
  );
}
