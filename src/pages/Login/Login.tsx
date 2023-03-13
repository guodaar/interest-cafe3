import { Avatar, Box, Paper, TextField } from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";

const Login = () => {
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
        <TextField label="email address" sx={{ mb: 2 }} fullWidth required />
        <TextField
          type="password"
          label="password"
          sx={{ mb: 2 }}
          fullWidth
          required
        />
      </Box>
    </Paper>
  );
};

export default Login;
