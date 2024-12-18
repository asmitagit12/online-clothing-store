import React from 'react';
import { Box, Button, TextField, Typography, Link, Stack, Divider, Grid } from '@mui/material';
import AuthLayout from './AuthLayout';

const SignUp = () => {
  return (
    // <AuthLayout>

    // </AuthLayout>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h5">
          Sign Up
        </Typography>
        <Typography variant="caption" pb={1}>
          Fill the below fields to create an account
        </Typography>
        <Grid container spacing={1} rowSpacing={0} mt={1} pr={3}>
          <Grid item lg={6}>
            {/* First Name */}
            <TextField
              fullWidth
              size="small"
              label="First Name"
              type="text"
              // margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item lg={6}>
            {/* Last Name */}
            <TextField
              fullWidth
              size="small"
              label="Last Name"
              type="text"
              // margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item lg={12}>


            {/* Email */}
            <TextField
              fullWidth
              size="small"
              label="Email"
              type="email"
              // margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item lg={6}>

            {/* Mobile */}
            <TextField
              fullWidth
              size="small"
              label="Mobile"
              type="tel"
              // margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item lg={6}>

            {/* Password */}
            <TextField
              fullWidth
              size="small"
              label="Password"
              type="password"
              variant="outlined"
            />

          </Grid>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" pt={0.5}>
              <input type="checkbox" /> I agree to the Terms and Conditions
            </Typography>
          </Box>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              py: 1,
              background: "linear-gradient(to right, #00c6fb, #005bea)",
              boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.3)",
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                background: "linear-gradient(to right, #00c6fb, #005bea)",
                boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            Sign Up
          </Button>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>


            <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center', justifyContent: 'center', mt: 2, mb: 1 }}>
              <Link href="/otp-login" sx={{ fontSize: 15 }}>
                Sign Up Using Mobile
              </Link>
            </Stack>

            <Stack direction={'row'} alignItems="center" spacing={2}>
              <Divider sx={{ flexGrow: 1 }} />
              <Typography variant="body2">OR</Typography>
              <Divider sx={{ flexGrow: 1 }} />
            </Stack>

            <Stack direction={'row'} spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
              <Typography
                style={{
                  textDecoration: 'none',
                  color: '#38A6FA',
                  fontSize: 15,
                  fontFamily: 'poppins',
                }}
              >
                Already have an account?
              </Typography>
              <Link href="/signin" underline="always" sx={{ fontSize: 16 }}>
                Sign In
              </Link>
            </Stack>
          </Box>
        </Grid>
      </Box>
  );
};

export default SignUp;
