import React from 'react';
import { Box, Button, TextField, Typography, Link, Stack, Divider } from '@mui/material';
import AuthLayout from './AuthLayout';

const SignIn = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h5" gutterBottom>
                Sign in
            </Typography>
            <Typography variant="caption" gutterBottom>
                Fill the below fields to continue
            </Typography>
            <Box sx={{ pr: 3 }}>
                <TextField
                    fullWidth
                    size='small'
                    label="Email"
                    type="email"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    size='small'
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                />

                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2">
                        <input type="checkbox" /> Remember Password
                    </Typography>
                    <Link href="/forgot-password" underline="none">
                        Forgot Password?
                    </Link>
                </Box>
                <Button fullWidth variant="contained" color="primary"
                    sx={{
                        mt: 3,
                        // px: 4,
                        py: 1,
                        // borderRadius: "50px", // Fully rounded button
                        background: "linear-gradient(to right, #00c6fb, #005bea)", // Hover effect gradient
                        boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.3)", // Linear gradient
                        color: "white",
                        fontWeight: "bold",
                        textTransform: "none", // Prevents uppercase text
                        "&:hover": {
                            background: "linear-gradient(to right, #00c6fb, #005bea)", // Hover effect gradient
                            boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.3)",
                        },
                    }}>
                    Login
                </Button>
                <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center', justifyContent: 'center', mt: 2, mb: 1 }}>

                    <Link href="/otp-login" sx={{ fontSize: 15 }}>
                        Login Using Mobile
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
                            // marginTop: '10px',
                            fontSize: 15,
                            fontFamily: 'poppins'
                        }}
                    >
                        Don't have account?
                    </Typography>
                    <Link href="/signup" underline="always" sx={{ fontSize: 16 }}>
                        Create Account
                    </Link>
                </Stack>
            </Box>

        </Box>
        // <AuthLayout>
        // </AuthLayout>
    );
};

export default SignIn;
