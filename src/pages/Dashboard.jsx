import React, { useState } from 'react'
import CarouselControl from '../components/controls/CarouselControl'
import img1 from '../assets/home-trendings/img1.svg'
import img2 from '../assets/home-trendings/img2.svg'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import RoundedCarousel from '../components/controls/RoundedCarousel'
import AnimatedCarousel from '../components/controls/AnimatedCarousel'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Dashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState("WOMEN");
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const images = [
        'https://img.theloom.in/pwa/loom/banners/29nov-2024-Flash-Sale-2024-3840-1500-Main-Desktop-Banner.jpg?tr=h-624%2Cw-1600',
        'https://img.theloom.in/pwa/loom/banners/26nov-2024-New-Launches-Desktop-Banner.jpg?tr=h-624%2Cw-1600',
        'https://img.theloom.in/pwa/loom/banners/5Nov2024-LoomExclusive-Desktop_MainBanner.png?tr=h-624%2Cw-1600',
        'https://img.theloom.in/pwa/loom/banners/PriyaChaudhary_PC34_websitebanner.jpg?tr=h-624%2Cw-1600'
    ]

    const items = [
        { image: "https://img.theloom.in/pwa/loom/banners/26nov-2024-Dresses.png", label: "Dresses" },
        { image: "https://img.theloom.in/pwa/loom/banners/26nov-2024-Co-ord-sets.png", label: "Co-ord-sets" },
        { image: "https://img.theloom.in/pwa/loom/banners/26nov-2024-Suit-set.png", label: "Suit-set" },
        { image: "https://img.theloom.in/pwa/loom/banners/26nov-2024-Velvet.png", label: "Velvet" },
        { image: "https://img.theloom.in/pwa/loom/banners/26nov-2024-Bestsellers.png", label: "Bestsellers" },
        { image: "https://img.theloom.in/pwa/loom/banners/26nov-2024-Wedding.png", label: "Wedding" },
        { image: "https://img.theloom.in/pwa/loom/banners/26nov-2024-Sarees.png", label: "Sarees" },
    ]

    const animatedImages = [
        'https://img.theloom.in/pwa/loom/banners/New-Arrivals-24nov-2024.jpg',
        'https://img.theloom.in/pwa/loom/banners/26nov-2024-Winter.jpg',
        'https://img.theloom.in/pwa/loom/banners/13nov-2024-Velvet.jpg',
        'https://img.theloom.in/pwa/loom/banners/26nov-2024-Winter.jpg',
        'https://img.theloom.in/pwa/loom/banners/13nov-2024-Velvet.jpg',
        'https://img.theloom.in/pwa/loom/banners/26nov-2024-Winter.jpg',
    ]

    const categories = {
        WOMEN: [
            { image: "https://assets0.mirraw.com/images/11312833/image_long_webp.webp?1688218823", label: "Party" },
            { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_carfjReP8OP3Ercw_I8GEYiG6hAPMzOhA&s", label: "Work Wear" },
            { image: "https://www.libas.in/cdn/shop/files/mehandi_00cad468-e29a-48a3-a8f8-91518a34e600.jpg?v=1733124096", label: "Festive" },
            { image: "https://twelvebd.com/cdn/shop/files/RK-BLZ-TW24-11W-60007_7_46e3ba3b-5719-43dd-9cd4-a33bda45e9f3_600x600.jpg?v=1730975381", label: "Loungewear" },
            { image: "https://i.pinimg.com/474x/ae/d9/4b/aed94b8187104732e2a07d4c445e95ca.jpg", label: "Athleisure" },
            { image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/9/5936b87ILJKATSSK66409_1.jpg?tr=w-512", label: "Winter" },
        ],
        MEN: [
            { image: "https://5.imimg.com/data5/NC/NH/MY-42416917/mens-party-wear-blazer-500x500.jpg", label: "Party" },
            { image: "https://www.westside.com/cdn/shop/articles/formal_shirts_for_men.png?v=1686040385", label: "Work" },
            { image: "https://successmenswear.com/cdn/shop/collections/Festive.jpg?v=1698924097", label: "Festive" },
            { image: "https://cdn.shopify.com/s/files/1/0825/5533/9035/files/0C8A7624.jpg?v=1716566061&width=700", label: "Athleisure" },
            { image: "https://images.bestsellerclothing.in/data/JJ/13-nov-2024/901029802_g0.jpg?width=415&height=550&mode=fill&fill=blur&format=auto", label: "Winter" },
        ],
        KIDS: [
            { image: "https://www.littlecheer.com/cdn/shop/products/littlecheer-07-may-220820_7fc6588d-824e-4aa7-8fd2-567551315a3a_600x.jpg?v=1677001437", label: "Casual" },
            { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5XdvdygPrSl0rLHPwlje9HqJ842rIvW9xw&s", label: "Festive" },
            { image: "https://m.media-amazon.com/images/I/81gma+YEzhL._AC_UY1100_.jpg", label: "Sleepwear" },
            { image: "https://www.okboss.co.in/assets/img/home/boysrow1/kids%20dangri%20casual%20wear.jpg", label: "Party" },

        ],
        HOME: [
            { image: "https://cdn.moolwan.com/4adeec30-c254-43b5-8a18-60e687a67e8e.webp", label: "Decore" },
            { image: "https://www.aachho.com/cdn/shop/products/9_63ec4d32-de74-484f-88e7-4a2bf9941d7c_1080x.png?v=1684505569", label: "Bedding" },
            { image: "https://ruheindia.com/cdn/shop/files/RoundFoldableTowelRack_24Inches.jpg?v=1723035325&width=460", label: "Bath" },
            { image: "https://s.alicdn.com/@sc04/kf/Hba3300cfe94a4659bf04abd53d25fec7l.jpg_720x720q50.jpg", label: "Kitchen" },

        ],
    };

    const cardData = [
        {
            title: "Light Layers",
            description: "Your go-to layering piece for light to medium winters",
            image: "https://s7ap1.scene7.com/is/image/adityabirlafashion/20241115_LightLayers_Homepage_SBO_App", // Replace with the actual image URL or path
        },
        {
            title: "Wedding Perfect",
            description: "Look sharp, feel dapper with our kurta collection",
            image: "https://s7ap1.scene7.com/is/image/adityabirlafashion/20241115_WeddingPerfect_Homepage_SBO_App", // Replace with the actual image URL or path
        },
        {
            title: "Winterwear Sets",
            description: "Joyful vibes & cozy comfort for your lil’ ones",
            image: "https://s7ap1.scene7.com/is/image/adityabirlafashion/20241115_WinterwearSets_Homepage_SBO_App", // Replace with the actual image URL or path
        },
        {
            title: "Trendy Fits",
            description: "Fashion-forward designs and unbeatable comfort",
            image: "https://s7ap1.scene7.com/is/image/adityabirlafashion/20241128_Overlay_MFL_App", // Replace with the actual image URL or path
        },
    ];

    return (
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* main dashboard carousel */}
            <Grid item lg={12} md={12} sm={12} xs={12} mt={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box width={'90%'} height={{ md: '90vh', xs: '100%'}}>
                    <CarouselControl images={images} height='90vh' /> {/* Ensure height is a string */}
                </Box>
            </Grid>
            {/* rounded carousel */}
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <RoundedCarousel items={items} />
                </Box>

            </Grid>
            {/* stunning picks */}
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 4 }}>
                <Grid container spacing={1} rowGap={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item lg={12}>
                        <Stack direction={'row'} alignItems="center" width={'100%'} sx={{ position: 'relative' }}>
                            <Divider sx={{ position: 'absolute', left: 0, width: '40%' }} />
                            <Typography sx={{ textAlign: 'center', flex: 1, fontSize: 25 }}>STUNNING PICKS</Typography>
                            <Divider sx={{ position: 'absolute', right: 0, width: '40%' }} />
                        </Stack>
                    </Grid>

                    {/* New Arrivals */}
                    <Grid item lg={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box
                            sx={{
                                width: '90%',
                                height: 'auto',
                                transition: 'transform 0.3s ease',  // Smooth transition for zoom effect
                                '&:hover img': {
                                    transform: 'scale(1.05)',  // Zoom effect on hover
                                },
                            }}
                        >
                            <img
                                src="https://img.theloom.in/pwa/loom/banners/New-Arrivals-24nov-2024.jpg"
                                alt="New Arrivals"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                        <Typography sx={{ textAlign: 'center', marginTop: '8px', fontSize: 18, fontWeight: 500 }}>
                            New Arrivals
                        </Typography>
                    </Grid>

                    {/* Winter Arrivals */}
                    <Grid item lg={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box
                            sx={{
                                width: '90%',
                                height: 'auto',
                                transition: 'transform 0.3s ease',  // Smooth transition for zoom effect
                                '&:hover img': {
                                    transform: 'scale(1.05)',   // Zoom effect on hover
                                },
                            }}
                        >
                            <img
                                src="https://img.theloom.in/pwa/loom/banners/26nov-2024-Winter.jpg"
                                alt="Winter Arrivals"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                        <Typography sx={{ textAlign: 'center', marginTop: '8px', fontSize: 18, fontWeight: 500 }}>
                            Winter Arrivals
                        </Typography>
                    </Grid>

                    {/* Velvet Arrivals */}
                    <Grid item lg={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box
                            sx={{
                                width: '90%',
                                height: 'auto',
                                transition: 'transform 0.3s ease',  // Smooth transition for zoom effect
                                '&:hover img': {
                                    transform: 'scale(1.05)',   // Zoom effect on hover
                                },
                            }}
                        >
                            <img
                                src="https://img.theloom.in/pwa/loom/banners/13nov-2024-Velvet.jpg"
                                alt="Velvet Arrivals"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                        <Typography sx={{ textAlign: 'center', marginTop: '8px', fontSize: 18, fontWeight: 500 }}>
                            Velvet Arrivals
                        </Typography>
                    </Grid>

                    {/* The Guest List Edit */}
                    <Grid item lg={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box
                            sx={{
                                width: '90%',
                                height: 'auto',
                                transition: 'transform 0.3s ease',  // Smooth transition for zoom effect
                                '&:hover img': {
                                    transform: 'scale(1.05)',   // Zoom effect on hover
                                },
                            }}
                        >
                            <img
                                src="https://img.theloom.in/pwa/loom/banners/27nov-2024-The-guest-list-edit.jpg"
                                alt="The Guest List Edit"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                        <Typography sx={{ textAlign: 'center', marginTop: '8px', fontSize: 18, fontWeight: 500 }}>
                            The Guest List Edit
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item lg={12} md={11} sm={12} mb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ position: "relative", display: "flex", justifyContent: "center", width: '100%' }}>
                    {/* Background Image */}
                    <img
                        src="https://img.theloom.in/pwa/loom/banners/2dec-2024-BFS-24-Desktop-Center-Banner.jpg"
                        alt="Black Friday Sale Banner"
                        style={{ width: "100%", height: '100%' }}
                    />

                    {/* Overlay Text */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "75%",
                            right: "24%",
                            transform: "translateY(-50%)",
                            textAlign: "center",
                            color: "#000",
                            // background: "rgba(255, 255, 255, 0.8)",
                            padding: "1rem",
                            borderRadius: "8px",

                        }}
                    >
                        <Typography variant="body1" sx={{ fontSize: 18 }}>
                            ORDER WITHIN :
                        </Typography>

                        <Typography variant="h6" fontWeight="bold" sx={{ border: '1px dotted gray', fontSize: 28, p: 1 }}>
                            0 Hrs 0 Mins 21 Secs
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            {/* the loom store image section */}
            <Grid item lg={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '100%' }} src='https://img.theloom.in/pwa/loom/banners/19nov-2024-Store-Banner-Desktop_1.png' />
                </Box>
            </Grid>

            {/* four image square boxes */}
            <Grid item lg={10} sx={{ display: "flex", justifyContent: "center" }}>
                <Grid container spacing={4} justifyContent="center" sx={{ padding: 4 }}>
                    {cardData.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Box
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "10px",
                                    boxShadow: 3,
                                    "&:hover": {
                                        transform: "scale(1.03)",
                                        transition: "transform 0.3s ease",
                                    },
                                }}
                            >
                                {/* Background Image */}
                                <img
                                    //   component="img"
                                    src={card.image}
                                    alt={card.title}
                                    style={{
                                        width: "100%",
                                        height: "300px",
                                        objectFit: "cover",
                                        display: "block",
                                        filter: "brightness(0.8)",
                                    }}
                                />

                                {/* Overlay Card Content */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "80%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                                        padding: 1,
                                        borderRadius: "8px",
                                        zIndex: 10,
                                        textAlign: "center",
                                        boxShadow: 3,
                                        width: "80%",
                                    }}
                                >
                                    <Typography variant="h6" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {card.description}
                                    </Typography>
                                    <Typography component={'a'} href='/' sx={{ p: 0, height: 30 }}>Shop Now</Typography>
                                </Box>

                                {/* Clickable Action */}
                                <CardActionArea
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        zIndex: 5,
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* style finder */}
            <Grid item lg={10} sx={{ display: "flex", justifyContent: "center" }}>
                <Grid
                    container
                    spacing={2}
                    sx={{ padding: 4, display: "flex", justifyContent: "center" }}
                >
                    <Paper
                        elevation={5}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 3,
                            flexDirection: "column",
                            width: "100%",
                            pl: 4,
                            pb: 4,
                            pr: 4,
                        }}
                    >
                        {/* Top Banner */}
                        <Grid
                            item
                            lg={5}
                            md={5}
                            xs={12}
                            sx={{
                                backgroundColor: "teal", // Blue-green background color
                                borderRadius: "0px 0px 60px 60px", // Half-round bottom corners
                                pb: 2, pt: 1, pl: 2, pr: 2,
                                gap: 1,
                                color: "white",
                                borderTop: "none", // Remove top border
                                borderLeft: "20px solid #cce5ff", // Light left border
                                borderRight: "20px solid #cce5ff", // Light right border
                                borderBottom: "20px solid #cce5ff", // Light bottom border
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                            }}
                        >
                            <Typography
                                variant="h4"
                                align="center"
                                sx={{ fontFamily: '"Playfair Display", serif', fontSize: 25, pb: 1 }}
                            >
                                Style Finder
                            </Typography>
                            <Typography
                                sx={{ fontSize: 14, whiteSpace: "nowrap" }}
                                align="center"
                            >
                                Looking for something specific? Let's get you there
                            </Typography>
                        </Grid>

                        {/* Shop For Section */}
                        <Grid item xs={12} lg={12} container justifyContent="center" spacing={2}>
                            {Object.keys(categories).map((category) => (
                                <Grid item key={category}>
                                    <Button
                                        variant={
                                            selectedCategory === category ? "contained" : "outlined"
                                        }
                                        onClick={() => handleCategoryChange(category)}
                                        sx={{
                                            textTransform: "none",
                                            width: 90,
                                            color: selectedCategory === category ? 'white' : 'black',
                                            bgcolor: selectedCategory === category ? 'teal' : 'inherit',
                                            ':hover': {
                                                bgcolor: selectedCategory === category ? 'teal' : 'inherit',
                                            }
                                        }}
                                    >
                                        {category}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>

                        {/* Dynamic Images Section */}
                        <Grid item xs={12} lg={10}>
                            <Typography variant="h5" align="center" sx={{ fontFamily: '"Playfair Display", serif', fontSize: 18, pb: 1 }}>
                                Occasion
                            </Typography>
                            <Grid
                                container
                                spacing={2} // Adds space between items
                                columnGap={9}
                                justifyContent="center" // Centers the items horizontally
                                alignItems="center" // Centers the items vertically
                            >
                                {categories[selectedCategory].map((item, index) => (
                                    <Grid
                                        item
                                        xs={2} // 1 column on extra small screens
                                        sm={1}  // 2 columns on small screens
                                        md={1}  // 3 columns on medium screens
                                        lg={1}  // 5 columns on large screens
                                        key={index}
                                        sx={{
                                            display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
                                        }}
                                        onClick={() => setSelectedCard(index)}
                                    >

                                        <Card sx={{ width: 130, border: selectedCard === index ? "2px solid #3BD9EB" : "none", }}>
                                            <Box
                                                sx={{
                                                    position: "relative",
                                                    width: "100%",
                                                    paddingTop: "100%", // 1:1 aspect ratio
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    image={item.image}
                                                    alt={item.label}
                                                    sx={{
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </Box>
                                        </Card>
                                        <Typography
                                            variant="caption"
                                            align="center"
                                            sx={{
                                                textTransform: "uppercase",
                                                whiteSpace: "nowrap",
                                                marginTop: 1,
                                            }}
                                        >
                                            {item.label}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>



                        {/* Show Me Section */}
                        <Grid item xs={12} container justifyContent="center" spacing={2}>
                            {["Most Popular", "Latest"].map((filter) => (
                                <Grid item key={filter}>
                                    <Button variant="outlined" sx={{ textTransform: "none", width: 140, whiteSpace: 'nowrap', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        {filter}<KeyboardArrowRightIcon sx={{ ml: 1 }} />
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

            {/* shop the look section */}
            <Grid item lg={12} md={11} sm={12} xs={12} mb={3}>
                <Typography sx={{ textAlign: 'center', fontFamily: 'Times New Roman, serif', fontSize: 30 }}>
                    Shop The Look
                </Typography>

                <Box width={'100%'} sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <AnimatedCarousel images={animatedImages} />
                </Box>
            </Grid>

            <Grid item lg={12} md={11} sm={12} mb={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Stack sx={{ width: '90%', display: 'flex', justifyContent: 'center', p: 2, pl: { xs: 5, md: 10 } }}>
                        <Typography sx={{ fontSize: 40, fontWeight: 800, color: '#35363a' }}>
                            <span style={{ color: '#808188' }}>SUMMER BREEZE 2024:</span> WHERE STYLE MEETS SUNSHINE
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#35363a', pr: 1 }} >
                            Dive into the heart of summer with our "Summer Breeze 2024" collection, a refreshing take on seasonal fashion.
                            This line is a tribute to the vibrant energy of the sunniest days, featuring an array of chic, comfortable pieces
                            that speak to the soul of summer.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2, width: 300, fontSize: 19, textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#000000' }}
                        >
                            Explore Collection
                        </Button>
                    </Stack>
                    <Box
                        component="img"
                        src="https://www.octaveclothing.com/cdn/shop/files/FindNow_0.png?v=1724393394&width=600" // Update with actual image path
                        alt="Summer Breeze 2024"
                        sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                    />
                </Stack>


            </Grid>

            <Grid item lg={12} md={12} sm={12} xs={12} mb={3}>
                <Grid container spacing={3} justifyContent="space-around" alignItems="center">
                    {/* Payment & Delivery */}
                    <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="center">
                        <Stack spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0825/5533/9035/files/DELIVERY.svg?v=1714802624"
                                alt="Payment & Delivery"
                                style={{ width: 100, height: 130 }}
                            />
                            <Typography variant="h6">
                                PAYMENT & DELIVERY
                            </Typography>
                            <Typography variant="body2" textAlign="center">
                                Free shipping for orders over Rs -1000
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Return & Refund */}
                    <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="center">
                        <Stack spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0825/5533/9035/files/REFUND.svg?v=1714802624"
                                alt="Return & Refund"
                                style={{ width: 100, height: 130 }}
                            />
                            <Typography variant="h6" mt={2}>
                                RETURN & REFUND
                            </Typography>
                            <Typography variant="body2" textAlign="center">
                                100% money refund within 6 days
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Quality Support */}
                    <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="center">
                        <Stack spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0825/5533/9035/files/support.svg?v=1714802624"
                                alt="Quality Support"
                                style={{ width: 100, height: 120 }}
                            />
                            <Typography variant="h6" mt={2}>
                                QUALITY SUPPORT
                            </Typography>
                            <Typography variant="body2" textAlign="center">
                                Always online feedback 24/7
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item lg={11} md={12} xs={12} mb={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid container justifyContent="center" sx={{ position: 'relative', backgroundColor: '#f6f6f6' }}>
                    {/* Full-width Grid */}
                    <Grid item lg={12} md={12} xs={12}>
                        <Grid container justifyContent="center" textAlign="center" sx={{ position: 'relative', zIndex: 2 }}>
                            {/* Title */}
                            <Grid item xs={12}>
                                <Typography fontWeight="500" sx={{ mb: 1, mt: 2, fontSize: 28, fontFamily: '"Playfair Display", serif', }}>
                                    CustomVogue Gift Card
                                </Typography>
                                <Typography sx={{ mb: 1, fontSize: 18, fontFamily: '"Poppins", sans-serif', }}>
                                    Give your loved ones the joy to choose
                                </Typography>
                            </Grid>

                            {/* Gift Card Image */}
                            <Grid item xs={12}>
                                <Box
                                    component="img"
                                    src="https://www.octaveclothing.com/cdn/shop/files/FindNow_0.png?v=1724393394&width=600"
                                    alt="Pantaloons Gift Card"
                                    sx={{
                                        width: '400px',
                                        height: 'auto',
                                        borderRadius: 2,
                                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                            </Grid>

                            {/* Button */}
                            <Grid item xs={12} mb={2}>
                                <Button
                                    variant="text"
                                    sx={{
                                        color: 'white',
                                        px: 4,
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                        fontSize: 16,
                                    }}
                                >
                                    Explore Now
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Dark Gray Background Section */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '50%',
                            backgroundColor: '#8c8c8c', // Dark gray background
                            borderTopLeftRadius: '120px',
                            borderTopRightRadius: '120px',
                            zIndex: 1, // Places it behind the content
                        }}
                    />
                </Grid>
            </Grid>
            <Grid item lg={11} md={12} xs={12} mb={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid container justifyContent="center" sx={{ position: 'relative', backgroundColor: '#f6f6f6' }}>
                    {/* Full-width Grid */}
                    <Grid item lg={12} md={12} xs={12}>
                        <Grid container justifyContent="center" textAlign="center" sx={{ position: 'relative', zIndex: 2 }}>
                            {/* Title */}
                            <Grid item xs={12}>
                                <Typography fontWeight="500" sx={{ mb: 1, mt: 3, fontSize: 28, fontFamily: '"Playfair Display", serif', }}>
                                    Get Green Listed With Our GreenCard Loyalty Programm
                                </Typography>


                            </Grid>

                            {/* Gift Card Image */}
                            <Grid item xs={12}>
                                <Box
                                    component="img"
                                    src="https://www.octaveclothing.com/cdn/shop/files/FindNow_0.png?v=1724393394&width=600"
                                    alt="Pantaloons Gift Card"
                                    sx={{
                                        width: '400px',
                                        height: 'auto',
                                        borderRadius: 2,
                                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                            </Grid>

                            {/* Button */}
                            <Grid item xs={12} mb={2}>
                                <Typography fontWeight="500" sx={{ mb: 1, fontSize: 18, fontStyle: 'italic', fontFamily: '"Playfair Display", serif', color: 'white' }}>
                                    Welcome to India's most rewarding programm
                                </Typography>
                                <Typography sx={{ mb: 1, fontSize: 16, fontFamily: '"Poppins", sans-serif', color: 'white' }}>
                                    Members of loyalty programm will enjoy unique benifits, including special offers,additional discounts,bonus points <br /> and customized product information
                                </Typography>
                                <Button
                                    variant="text"
                                    sx={{
                                        color: 'white',
                                        px: 4,
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                        fontSize: 16,
                                    }}
                                >
                                    Read More
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Dark Gray Background Section */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '60%',
                            backgroundColor: '#8c8c8c', // Dark gray background
                            borderTopLeftRadius: '120px',
                            borderTopRightRadius: '120px',
                            zIndex: 1, // Places it behind the content
                        }}
                    />
                </Grid>


            </Grid>

            <Grid item lg={12} mb={5} mt={5}>
                <Grid container spacing={5} sx={{ padding: 2, pb: 5, backgroundColor: '#f6f6f6' }}>
                    {/* First Card */}
                    <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Card elevation={3} sx={{ display: "flex", flexDirection: "column", height: "100%", width: '95%' }}>
                            <CardContent sx={{ textAlign: "center", flex: 1 }}>
                                <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', }}>
                                    Experience Pantaloons App
                                </Typography>
                                <Box display="flex" justifyContent="center" gap={2}>
                                    <Button>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"
                                            alt="App Store"
                                            width="120"
                                        />
                                    </Button>
                                    <Button>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Google_Play_Store_badge_EN.svg"
                                            alt="Google Play"
                                            width="120"
                                        />
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Second Card */}
                    <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Card elevation={3} sx={{ display: "flex", flexDirection: "column", height: "100%", width: '95%' }}>
                            <CardContent sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', }}>
                                    Stay In Touch
                                </Typography>
                                <Box display="flex" justifyContent="center" mt={3} gap={4}>
                                    {/* Instagram */}
                                    <Box display="flex" flexDirection="column" alignItems="center">
                                        <InstagramIcon fontSize="large" />
                                        <Typography variant="body2" mt={1}>
                                            Instagram
                                        </Typography>
                                    </Box>
                                    {/* Twitter */}
                                    <Box display="flex" flexDirection="column" alignItems="center">
                                        <TwitterIcon fontSize="large" />
                                        <Typography variant="body2" mt={1}>
                                            Twitter
                                        </Typography>
                                    </Box>
                                    {/* Facebook */}
                                    <Box display="flex" flexDirection="column" alignItems="center">
                                        <FacebookIcon fontSize="large" />
                                        <Typography variant="body2" mt={1}>
                                            Facebook
                                        </Typography>
                                    </Box>
                                    {/* YouTube */}
                                    <Box display="flex" flexDirection="column" alignItems="center">
                                        <YouTubeIcon fontSize="large" />
                                        <Typography variant="body2" mt={1}>
                                            YouTube
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>


                    {/* Third Card */}
                    <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Card elevation={3} sx={{ display: "flex", flexDirection: "column", height: "100%", width: '95%' }}>
                            <CardContent sx={{ textAlign: "center", flex: 1 }}>
                                <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', }}>
                                    Talk to us
                                </Typography>
                                <Typography>CALL: 1800-103-7527 (10am to 10pm)</Typography>
                                <Typography>EMAIL: customercare@abfrl.adityabirla.com</Typography>
                                <Typography variant="h6" mt={2}>
                                    Subscribe to our newsletter
                                </Typography>
                                <Box mt={2} display="flex" justifyContent="center" gap={1}>
                                    <TextField
                                        placeholder="Your Email Address"
                                        variant="outlined"
                                        size="small"
                                    />
                                    <Button variant="contained">Subscribe</Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}


export default Dashboard
