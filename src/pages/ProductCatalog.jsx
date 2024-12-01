import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import IMAGES from '../components/images';

const products = [
    {
        id: 1,
        name: 'Auriculares',
        description: 'Nuevos auriculares Noga',
        image: IMAGES.producto1, 
        link: '#',
    },
    {
        id: 2,
        name: 'Luces RGB',
        description: 'Rollo de luces RGB x5mts',
        image: IMAGES.producto2, 
        link: '#',
    },
    {
        id: 3,
        name: 'Mandos',
        description: 'Compra tus mandos nuevos aquí',
        image: IMAGES.producto3,
        link: '#',
    },
    {
        id: 4,
        name: 'Wii',
        description: 'Consola Nintendo Wii más mandos',
        image: IMAGES.producto5, 
        link: '#',
    },
    {
        id: 5,
        name: 'Xbox 360',
        description: 'Consola Xbox 360 más mandos',
        image: IMAGES.producto6, 
        link: '#',
    },
    {
        id: 6,
        name: 'Nuevo teclado Redragon',
        description: 'Teclado semi-mecánico',
        image: IMAGES.producto4,
        link: '#',
    },
];

const ProductCatalog = () => {
    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.image}
                            alt={product.name}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Button size="small" component={Link} to={`/product/${product.id}`}>
                                Ver más
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductCatalog;