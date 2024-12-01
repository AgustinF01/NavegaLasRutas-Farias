import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import IMAGES from '../components/images';
import { Typography, Button, CircularProgress, Alert, Box, Grid } from '@mui/material';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = () => {
            const products = {
                1: { name: 'Auriculares', title: 'Nuevos auriculares Noga', description: 'Mira los nuevos auriculares Noga Gaming 601MH con sonido envolvente.', image: IMAGES.producto1 },
                2: { name: 'Luces RGB', title: 'Rollo de luces RGB x5mts', description: 'Rollo de luces RGB con colores configurables con un largo de 5 metros.', image: IMAGES.producto2 },
                3: { name: 'Mandos', title: 'Compra tus mandos nuevos aquí', description: 'Compra tu mando para tu Playstation o Xbox con diseños unicos y a un precio increible', image: IMAGES.producto3 },
                4: { name: 'Wii', title: 'Consola Nintendo Wii más mandos', description: 'Consola Nintendo Wii del año 2012, incluye: mandos, accesorios y 2 juegos.', image: IMAGES.producto5 },
                5: { name: 'Xbox 360', title: 'Consola Xbox 360 más mandos', description: 'Consola Xbox 360 Nueva, incluye: mandos, accesorios y 2 juegos.', image: IMAGES.producto6 },
                6: { name: 'Nuevo teclado Redragon', title: 'Teclado semi-mecánico', description: 'Teclado semi-mecanico Redragon XT540 con teclas intercambiables.', image: IMAGES.producto4 },
            };

            const productData = products[id];

            if (productData) {
                setProduct(productData);
                setLoading(false);
            } else {
                setError('Producto no encontrado');
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return (
            <div style={{ marginTop: '20px' }}>
                <Alert severity="error">{error}</Alert>
                <Button variant="contained" color="primary" onClick={() => navigate('/Catalogo')}>
                    Volver al Catálogo
                </Button>
            </div>
        );
    }

    return (
        <Box sx={{ textAlign: 'center', marginTop: '20px', padding: '20px', backgroundColor: '#282c34', color: 'white' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>{product.name}</Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <img src={product.image} alt={product.name} style={{ maxWidth: '100%', borderRadius: '8px' }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ marginBottom: '20px' }}>{product.title}</Typography>
                    <Typography variant="body1" sx={{ marginBottom: '20px' }}>{product.description}</Typography>
                    <Button variant="contained" color="primary" onClick={() => navigate('/Catalogo')}>
                        Volver al Catálogo
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductDetail;