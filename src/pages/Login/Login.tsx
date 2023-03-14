import * as Yup from "yup";

import { Avatar, Box, Button, Paper } from "@mui/material";
import { Field, Form, Formik } from "formik";

import LockIcon from "@mui/icons-material/Lock";
import { TextField } from "formik-mui";
import Typography from "@mui/material/Typography";
import { User } from "../../types/user";
import { UserContext } from "../../context/UserContext";
import { loginFormInitialValues } from "./const";
import { useContext } from "react";

const Login = () => {
  const { handleLogIn } = useContext(UserContext);
  const onSubmit = (user: User) => {
    handleLogIn(user);
  };

  return (
    <Paper elevation={12}>
      <Box padding={2}>
        <Box display="flex" justifyContent="center">
          <Avatar>
            <LockIcon />
          </Avatar>
        </Box>
        <Typography variant="h6" textAlign="center" sx={{ mb: 2 }}>
          Sign In
        </Typography>
        <Formik initialValues={loginFormInitialValues} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                name="email"
                label="Email Address"
                sx={{ mb: 2 }}
                fullWidth
                required
              />
              <Field
                component={TextField}
                name="password"
                type="password"
                label="Password"
                sx={{ mb: 2 }}
                fullWidth
                required
              />
              <Button
                variant="contained"
                disabled={isSubmitting}
                type="submit"
                sx={{ mb: 1 }}
                fullWidth
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Paper>
  );
};

export default Login;
