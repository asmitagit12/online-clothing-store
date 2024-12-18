import React from "react";
import {
    Box,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cartItems = [] }) => {
    const isEmpty = cartItems.length === 0;
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#f5f5f5",


                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 800,
                    backgroundColor: "white",
                    boxShadow: 3,
                    borderRadius: 2,
                    p: 3,
                }}
            >
                {isEmpty ? (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            py: 4,
                        }}
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                            alt="Empty Cart"
                            style={{ width: 150, height: 150 }}
                        />
                        <Typography sx={{ mt: 2, fontSize: 20, fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontWeight: 550 }}>
                            Oops! Your Cart is Empty
                        </Typography>
                        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
                            Looks like you haven't added anything to your cart yet!
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                mt: 3,
                                px: 4,
                                py: 1.5,
                                borderRadius: "50px", // Fully rounded button
                                background: "linear-gradient(to right, #4facfe, #00f2fe)", // Linear gradient
                                color: "white",
                                fontWeight: "bold",
                                textTransform: "none", // Prevents uppercase text
                                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                                "&:hover": {
                                    background: "linear-gradient(to right, #00c6fb, #005bea)", // Hover effect gradient
                                    boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.3)",
                                },
                            }}
                            onClick={() => navigate('/')} // Change to your desired path
                        >
                            Explore
                        </Button>

                    </Box>
                ) : (
                    <>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 4 }}>
                            Your Cart
                        </Typography>
                        <Grid container spacing={3}>
                            {cartItems.map((item, index) => (
                                <Grid item xs={12} key={index}>
                                    <Card sx={{ display: "flex", alignItems: "center" }}>
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.name}
                                            sx={{ width: 100, height: 100, objectFit: "cover" }}
                                        />
                                        <CardContent sx={{ flex: 1 }}>
                                            <Typography variant="h6">{item.name}</Typography>
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                sx={{ mt: 1 }}
                                            >
                                                ${item.price} x {item.quantity}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Typography
                                                variant="body1"
                                                fontWeight="bold"
                                                sx={{ mx: 2 }}
                                            >
                                                Total: ${item.price * item.quantity}
                                            </Typography>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
                            <Button variant="contained" color="success">
                                Proceed to Checkout
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default CartPage;
