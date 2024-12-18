import React from 'react';
import { Box, Button, TextField, Typography, Link, Stack } from '@mui/material';
import AuthLayout from './AuthLayout';

const ForgotPassword = () => {
    return (
        <Box sx={{ width: '100%',mt:5}}>
            <Typography variant="h5" gutterBottom>
                Forgot Password
            </Typography>
            <Typography variant="caption" gutterBottom>
                Enter your email to reset your password
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
                    Reset Password
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

export default ForgotPassword;
