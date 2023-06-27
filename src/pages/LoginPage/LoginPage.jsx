import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { logInUser } from 'redux/auth/auth-operations';
import { customStylesFonLogin } from 'styles/fonStyle';

 

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
});

export default function Login() {
  const dispatch = useDispatch();
  const location = useLocation();

  const onSignIn = location.pathname === '/login';

  const [empty, setEmpty] = useState({ email: false, password: false });

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const user = {
      email: data.get('email'),
      password: data.get('password'),
    };

    if (user.email === '') {
      setEmpty(prev => ({ ...prev, email: true }));
      return;
    }
    if (user.password === '') {
      setEmpty(prev => ({ ...prev, password: true }));
      return;
    }

    dispatch(logInUser(user));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        style={ customStylesFonLogin }
        sx={{
          height: '100vh',
         
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CssBaseline />
        <Grid item xs={false} sm={6} md={7} />
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          component={Paper}
          elevation={24}
          square
          sx={{
            height: '100vh',
            background: '#ffffffb0',
            backdropFilter: 'blur(7.5px)',
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: 'primary.main',
                boxShadow: 3,
                color: '#00000031',
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: '#fff',
                textShadow: '-1px -1px 1px #ffffff31, 1px 1px 1px #00000031',
              }}
            >
              SignIn
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={empty.email}
                  sx={{ boxShadow: 3 }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={empty.password}
                  sx={{ boxShadow: 3 }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, boxShadow: 3 }}
                >
                  Sign In
                </Button>
              </Grid>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  {onSignIn && (
                    <Link to={`/register`} variant="body2" color="primary">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
// This code imports various UI components from the Material - UI library, including Avatar, Button,
// TextField, Checkbox, Paper, Box, Grid, LockOutlinedIcon, and Typography.It also imports functions 
// from other modules including createTheme and useDispatch.

// The code defines a function called Login, which is exported as the default. Within this function, 
// the useDispatch hook is called to define a dispatch function and the useLocation hook is called to retrieve the current URL.

// The function checks whether the current URL is '/login' and sets a flag called onSignIn accordingly. 
// It also defines state for empty email and password fields.

// When the form is submitted, the function retrieves the entered user data and checks if the email
// and / or password fields are empty.If either is empty, the corresponding empty state flag is updated 
// and the function returns without dispatching an action.Otherwise, it dispatches an action to log in the user.

// The function returns a UI component that displays a login form with various fields for entering user data. 
// The component is styled using the Material - UI library and includes custom styles for various UI elements.
// The component is also wrapped in a ThemeProvider component to provide a default theme for all 
// the Material - UI components it uses.