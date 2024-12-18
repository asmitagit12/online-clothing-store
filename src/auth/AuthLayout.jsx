import React from 'react';
import { Grid, Box, Paper, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo.svg';
import CarouselControl from '../components/controls/CarouselControl';
import loginImg1 from '../assets/login/login-1.jpg'
import loginImg2 from '../assets/login/login-2.jpg'
import loginImg3 from '../assets/login/login-3.jpg'

const AuthLayout = ({ children }) => {
    return (
        <Box
            sx={{
                minHeight: '90vh', // Ensures full height of the screen
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: '100%',
                    height: '95vh',
                    padding: 0, m: 0
                }}
            >
                <Grid
                    item
                    xs={12}
                    lg={8} // Adjust width on larger screens
                    md={10}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}
                >
                    <Paper
                        sx={{
                            display: 'flex',
                            width: '100%',
                            borderRadius: '16px',
                            boxShadow: 3,
                            padding: 3,
                            flexDirection: 'row', // Align form and image horizontally
                            minHeight: '380px', // Minimum height to ensure form is visible
                            overflow: 'hidden',
                        }}
                    >
                        {/* Left side: Children (form content) */}
                        <Grid item xs={12} sm={6} rowGap={3} pr={0.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',borderRight:'1px solid #E5E4E2' }}>
                            <Box
                                component={Link}
                                to="/"
                                sx={{
                                    textDecoration: 'none',
                                    img: {
                                        height: '20px', // Apply media queries for height
                                    },
                                }}
                            >
                                <img src={logo} alt="Logo" />
                                <Typography sx={{ color: 'gray', fontSize: 14, fontFamily: '"Poppins", sans-serif' }}>Craft Your Fashion, Define Your Vogue</Typography>
                            </Box>
                            <Outlet/>
                            {/* {children} */}
                        </Grid>

                        {/* Right side: Image Section */}
                        <Grid item xs={12} sm={6}>
                            <CarouselControl images={[
                                loginImg1, loginImg2, loginImg3
                            ]} height={200}/>
                            {/* <img
                                src="https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727913600&semt=ais_hybrid"
                                alt="background"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    borderRadius: '10px',
                                }}
                            /> */}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AuthLayout;
