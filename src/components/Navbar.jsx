import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Gaming Store
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Inicio</Button>
                    <Button color="inherit" component={Link} to="/Catalogo">Catálogo</Button>
                    <Button color="inherit">Sobre Nosotros</Button>
                    <Button color="inherit">Contacto</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;