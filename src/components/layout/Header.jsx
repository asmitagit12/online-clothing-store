import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Paper,
    Popper,
    Stack,
    TextField,
    Toolbar,
    Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentSubMenu, setCurrentSubMenu] = useState([]);
    const navigate = useNavigate();

    // Menu items with submenus
    const menuItems = [
        {
            name: 'WOMEN',
            path: '/women',
            subMenu: [
                { category: 'Westernwear', items: ['Tops', 'Dresses', 'Jeans', 'T-Shirts'] },
                { category: 'Ethnicwear', items: ['Kurtas', 'Kurta Sets', 'Pants', 'Dupattas'] },
                { category: 'Sports & Activewear', items: ['T-Shirts', 'Track Pants', 'Capris', 'Tops'] },
                { category: 'Sleepwear & Lingerie', items: ['Pyjamas', 'Night Suits', 'Tops', 'Shorts'] },
            ],
        },
        {
            name: 'MEN',
            path: '/men',
            subMenu: [
                { category: 'Casualwear', items: ['Shirts', 'T-Shirts', 'Jeans', 'Shorts'] },
                { category: 'Formalwear', items: ['Blazers', 'Suits', 'Trousers', 'Shirts'] },
                { category: 'Sportswear', items: ['Tracksuits', 'Joggers', 'T-Shirts'] },
            ],
        },
        {
            name: 'KIDS',
            path: '/kids',
            subMenu: [
                { category: 'Boys', items: ['Shirts', 'T-Shirts', 'Jeans'] },
                { category: 'Girls', items: ['Dresses', 'Tops', 'Skirts'] },
                { category: 'Infants', items: ['Rompers', 'Sleepwear', 'Baby Sets'] },
            ],
        },
        {
            name: 'HOME',
            path: '/home',
            subMenu: [
                { category: 'Furniture', items: ['Sofas', 'Beds', 'Tables'] },
                { category: 'Decor', items: ['Wall Art', 'Lamps', 'Rugs'] },
                { category: 'Kitchen', items: ['Cookware', 'Dining Sets', 'Storage'] },
            ],
        },
        {
            name: 'BRANDS',
            path: '/brands',
            subMenu: [
                { category: 'Popular Brands', items: ['Nike', 'Adidas', 'Puma', 'Levi’s'] },
                { category: 'Luxury Brands', items: ['Gucci', 'Prada', 'Versace'] },
            ],
        },
        {
            name: 'BEAUTY',
            path: '/beauty',
            subMenu: [
                { category: 'Makeup', items: ['Lipsticks', 'Foundation', 'Mascara'] },
                { category: 'Skincare', items: ['Moisturizers', 'Face Wash', 'Sunscreens'] },
                { category: 'Haircare', items: ['Shampoos', 'Conditioners', 'Hair Oils'] },
            ],
        },
    ];

    const handleMouseEnter = (event, item) => {
        setAnchorEl({ menuName: item.name, target: event.currentTarget });
        setCurrentSubMenu(item.subMenu);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };






    return (
        <>
            {/* Top Announcement Bar */}
            <Box
                sx={{
                    backgroundColor: '#E5E4E2',
                    px: 2,
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 15,
                }}
            >
                <Marquee gradient={false} speed={50}>
                    <Typography
                        sx={{
                            color: '#708090',
                            pt: 0.5,
                            pb: 0.5,
                            display: 'inline-block',
                            ml: 2,
                            mr: 2, fontSize: 13
                        }}
                    >
                        Black Friday Sale has started! Flat 50% OFF on the season's must-haves + ₹3000 cashback. SHOP NOW!
                    </Typography>
                </Marquee>
            </Box>

            {/* Header Section */}
            <AppBar
                position="fixed"
                color="default"
                elevation={0}
                sx={{
                    top: '28px', // Adjust based on the height of the announcement bar
                    // px: 2,
                    zIndex: 20, // Ensure it is above the content
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {/* Mobile Menu Icon */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setDrawerOpen(true)}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Logo */}
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            textDecoration: 'none',
                            img: {
                                height: { xs: '30px', md: '40px' }, // Apply media queries for height
                            },
                        }}
                    >
                        <img src={logo} alt="Logo" />
                    </Box>



                    {/* Desktop Navigation */}
                    <Stack
                        direction="row"
                        spacing={4}
                        sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
                    >
                        {menuItems.map((item) => (
                            <Typography
                                key={item.name}
                                onMouseEnter={(e) => handleMouseEnter(e, item)}
                                onMouseLeave={handleMouseLeave}
                                sx={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    fontWeight: '500',
                                    fontSize: 14,
                                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                                }}
                            >
                                {item.name}
                                <Popper
                                    open={anchorEl?.menuName === item.name}
                                    anchorEl={anchorEl?.target}
                                    placement="bottom"
                                    disablePortal
                                    modifiers={[
                                        {
                                            name: 'offset',
                                            options: { offset: [0, 10] },
                                        },
                                    ]}
                                    onMouseEnter={() => setAnchorEl(anchorEl)} // Prevent closing when hovering over the submenu
                                    onMouseLeave={handleMouseLeave} // Close when the user leaves the submenu
                                    sx={{ zIndex: 10 }}
                                >
                                    <Paper elevation={3} sx={{ p: 2, display: 'flex', gap: 2 ,width:700}}>
                                        {currentSubMenu.map((category) => (
                                            <Box key={category.category}>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        fontSize: 14,
                                                        mb: 1,
                                                    }}
                                                >
                                                    {category.category}
                                                </Typography>
                                                <List dense>
                                                    {category.items.map((subItem) => (
                                                        <ListItem
                                                            key={subItem}
                                                            sx={{
                                                                p: 0,
                                                                '&:hover': { color: 'primary.main', cursor: 'pointer' },
                                                            }}
                                                            onClick={() => navigate(`/${subItem.toLowerCase()}`)}
                                                        >
                                                            <ListItemText primary={subItem} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                        ))}
                                    </Paper>
                                </Popper>
                            </Typography>
                        ))}
                    </Stack>
                    {/* Search and Icons */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Search"
                            sx={{ display: { xs: 'none', md: 'block' } }}
                            InputProps={{
                                startAdornment: (
                                    <SearchIcon sx={{ color: 'gray', mr: 1 }} />
                                ),
                            }}
                        />
                        <IconButton color="inherit" sx={{ display: { xs: 'block', md: 'none' } }}>
                            <SearchIcon />
                        </IconButton>
                        <IconButton color="inherit" onClick={() => navigate('/signin')}>
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton color="inherit" onClick={() => navigate('/signin')}>
                            <PersonIcon />
                        </IconButton>
                        <IconButton color="inherit" onClick={() => navigate('/cart')}>
                            <ShoppingCartIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>



            {/* Mobile Drawer */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box sx={{ width: 250 }}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ px: 2, py: 1, borderBottom: '1px solid #ddd' }}
                    >
                        <Typography variant="h6">Menu</Typography>
                        <IconButton onClick={() => setDrawerOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem
                                key={item.name}
                                button
                                component={Link}
                                to={item.path}
                                sx={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <ListItemText primary={item.name} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
