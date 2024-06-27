import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

function NotFound() {

    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Container maxWidth="md" sx={{ textAlign: 'center', mt: 10 }}>
            <Box>
                <Typography variant="h1" component="h1" color="primary" gutterBottom>
                    404
                </Typography>
                <Typography variant="h4" component="h2" gutterBottom>
                    {t("Página no encontrada")}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t("Lo sentimos, la página que estás buscando no existe. Puede que haya sido movida o eliminada.")}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleGoHome}>
                    {t("Volver al inicio")}
                </Button>
            </Box>
        </Container>
    );
}

export default NotFound;
