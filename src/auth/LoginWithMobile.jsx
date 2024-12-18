import React from 'react';
import { Box, Button, TextField, Typography, Stack, Link } from '@mui/material';
import AuthLayout from './AuthLayout';

const LoginWithMobile = () => {
    return (
        <Box sx={{ width: '100%',mt:4 }}>
            <Typography variant="h5" gutterBottom>
                Login with Mobile
            </Typography>
            <Typography variant="caption" gutterBottom>
                Enter your mobile number to receive an OTP
            </Typography>
            <Box sx={{ pr: 3 }}>
                <TextField
                    fullWidth
                    size="small"
                    label="Mobile Number"
                    type="tel"
                    margin="normal"
                    variant="outlined"
                />

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
                        "&:hover": {
                            background: "linear-gradient(to right, #00c6fb, #005bea)",
                            boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.3)",
                        },
                    }}
                >
                    Get OTP
                </Button>

                <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                    <Link href="/signin" sx={{ fontSize: 15 }}>
                        Back to Login
                    </Link>
                </Stack>
            </Box>
        </Box>
        // <AuthLayout>
        // </AuthLayout>
    );
};

export default LoginWithMobile;
