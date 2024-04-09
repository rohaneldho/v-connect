import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
const defaultTheme = createTheme();
var username;
var password;var email;var campus1;var fname;var lname;
export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [campus, setCampus] = React.useState('');
  const handleChange = (event) => {
    setCampus(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const data=new FormData(event.target);
    email=data.get('email');
    password=data.get('password');
    username=data.get('username');
    fname=data.get('firstName');
    lname=data.get('lastName');
    campus1=data.get('campus');
    console.log('f3ew');
    console.log(email,password,username,fname,lname,campus1);
   
    // axios.post("http://localhost:4000/signup",{username,email,password})
    // .then(result=>console.log(result))
    // .catch(err=>console.log(err))
    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="regno"
                  label="Registration Number"
                  name="username"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
              <InputLabel id="campus">Campus</InputLabel>
        <Select
        fullWidth
        name='campus'
          labelId="campus"
          id="campus-select"
          value={campus}
          label="Campus"
          onChange={handleChange}
        >
          <MenuItem value={'C'}>Chennai</MenuItem>
          <MenuItem value={'V'}>Vellore</MenuItem>
          <MenuItem value={'AP'}>AP-Amravati</MenuItem>
          <MenuItem value={'B'}>Bhopal</MenuItem>

        </Select>

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox onClick={() => setShowPassword(!showPassword)}  color="primary" />}
                  label="Show password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}