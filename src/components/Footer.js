import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <AppBar position="fixed" color="transparent" sx={{ top: 'auto', bottom: 0 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                        <Grid item xs={6} md={3}>
                            <Box display="flex" flexDirection={{ xs: 'column', md: 'column' }} alignItems="center" justifyContent={{ xs: 'space-between', md: 'center' }}>
                                <Typography variant="h6" color="inherit" sx={{ fontSize: { xs: '.9rem', sm: '1rem' } }}>
                                    <Link href="#/" color="inherit" underline="none">
                                        Armando Ruiz
                                    </Link>
                                </Typography>
                                <Typography variant="body2" color="inherit" sx={{ fontSize: { xs: '.9rem', sm: '1rem' } }}>
                                    © {new Date().getFullYear()}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Box display="flex" flexDirection={{ xs: 'column', md: 'column' }} alignItems="center" >
                                <Box display="flex" alignItems={"center"}>
                                    <Link
                                        href="https://github.com/ArmandoRuizM"
                                        color="inherit"
                                        underline="none"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <IconButton
                                            color="inherit"
                                            aria-label="GitHub"
                                        >
                                            <GitHubIcon />
                                        </IconButton>
                                        <Typography variant="body2" color="inherit" sx={{ fontSize: { xs: '.9rem', sm: '1rem' } }}>
                                            GitHub
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box display="flex" alignItems={"center"}>
                                    <Link
                                        href="https://linkedin.com/in/armando-ruiz-méndez-7922721b6/"
                                        color="inherit"
                                        underline="none"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <IconButton
                                            color="inherit"
                                            aria-label="LinkedIn"
                                        >
                                            <LinkedInIcon />
                                        </IconButton>
                                        <Typography variant="body2" color="inherit" sx={{ fontSize: { xs: '.9rem', sm: '1rem' } }}>
                                            LinkedIn
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={3} sx={{ mb: { xs: 2, md: 0 } }} >
                            <Box display="flex" flexDirection={{ xs: 'column', md: 'column' }} justifyContent="space-between" alignItems="center">
                                <Link href="#/" color="inherit" underline="none" sx={{ fontSize: { xs: '.9rem', sm: '1rem' } }}>
                                    {t("Inicio")}
                                </Link>
                                <Link href="#/about-me" color="inherit" underline="none" sx={{ fontSize: { xs: '.9rem', sm: '1rem' } }}>
                                    {t("Sobre mi")}
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={3} sx={{ mb: { xs: 2, md: 0 } }} >
                            <Box display="flex" flexDirection={{ xs: 'column', md: 'column' }} justifyContent="space-between" alignItems="center">
                                <Link href="#/my-projects" color="inherit" underline="none" sx={{ fontSize: { xs: '.9rem', sm: '1rem' } }}>
                                    {t("Mis proyectos")}
                                </Link>
                                <Link href="#/contact" color="inherit" underline="none" sx={{ fontSize: { xs: '.9rem', sm: '1rem' } }}>
                                    {t("Contacto")}
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Footer;
