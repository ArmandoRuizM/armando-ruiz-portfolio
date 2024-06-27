import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import Spanish from '../assets/images/colombia.png';
import English from '../assets/images/estados-unidos.png';
import DarkMode from '../assets/images/luna.png';
import LightMode from '../assets/images/sol.png';

const pages = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre mi', path: '/about-me' },
    { name: 'Mis proyectos', path: '/my-projects' },
    { name: 'Contacto', path: '/contact' }
];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const { darkMode, toggleDarkMode } = React.useContext(ThemeContext);
    const { language, toggleLanguage } = React.useContext(LanguageContext);
    const { t, i18n } = useTranslation();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    React.useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);

    return (
        <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: '2rem'
                        }}
                    >
                        &lt;/ Armando Ruiz &gt;
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{
                                width: { xs: 24, sm: 32 },
                                height: { xs: 24, sm: 32 }
                            }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <NavLink
                                            to={page.path}
                                            style={({ isActive }) => ({
                                                textDecoration: isActive ? 'underline' : 'none',
                                                textDecorationColor: isActive ? 'primary.main' : 'inherit',
                                                color: isActive ? 'primary.main' : 'inherit',
                                                fontWeight: isActive ? 'bold' : 'normal'
                                            })}
                                        >
                                            {t(page.name)}
                                        </NavLink>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', sm: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: { xs: '.1rem', sm: '.3rem' },
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: { xs: '.9rem', sm: '1.5rem' },
                        }}
                    >
                        &lt;/ Armando Ruiz &gt;
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {pages.map((page) => (
                            <Button
                                key={page.path}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'inherit', display: 'block', fontSize: '1rem' }}
                            >
                                <NavLink
                                    to={page.path}
                                    style={({ isActive }) => ({
                                        textDecoration: isActive ? 'underline' : 'none',
                                        textDecorationColor: isActive ? 'primary.main' : 'inherit',
                                        color: isActive ? 'primary.main' : 'inherit',
                                        fontWeight: isActive ? 'bold' : 'normal'
                                    })}
                                >
                                    {t(page.name)}
                                </NavLink>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                        <IconButton onClick={toggleDarkMode} color="inherit">
                            {darkMode ?
                                (<Avatar alt="Dark" src={DarkMode} sx={{
                                    width: { xs: 24, sm: 32, md: 40 },
                                    height: { xs: 24, sm: 32, md: 40 }
                                }} />)
                                :
                                (<Avatar alt="Light" src={LightMode} sx={{
                                    width: { xs: 24, sm: 32, md: 40 },
                                    height: { xs: 24, sm: 32, md: 40 }
                                }} />)}
                        </IconButton>
                        <IconButton onClick={toggleLanguage} color="inherit">
                            {language === 'en' ? (
                                <Avatar alt="English" src={English} sx={{
                                    width: { xs: 24, sm: 32, md: 40 },
                                    height: { xs: 24, sm: 32, md: 40 }
                                }} />
                            ) : (
                                <Avatar alt="Spanish" src={Spanish} sx={{
                                    width: { xs: 24, sm: 32, md: 40 },
                                    height: { xs: 24, sm: 32, md: 40 }
                                }} />
                            )}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
