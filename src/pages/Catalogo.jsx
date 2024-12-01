import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, TextField, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { Link } from 'react-router-dom';
import IMAGES from '../components/images';

const products = [
    { id: 1, name: 'Auriculares', description: 'Nuevos auriculares Noga', image: IMAGES.producto1, type: 'Perifericos' },
    { id: 2, name: 'Luces RGB', description: 'Rollo de luces RGB x5mts', image: IMAGES.producto2, type: 'Otros' },
    { id: 3, name: 'Mandos', description: 'Compra tus mandos nuevos aquí', image: IMAGES.producto3, type: 'Perifericos' },
    { id: 4, name: 'Wii', description: 'Consola Nintendo Wii más mandos', image: IMAGES.producto5, type: 'Consolas' },
    { id: 5, name: 'Xbox 360', description: 'Consola Xbox 360 más mandos', image: IMAGES.producto6, type: 'Consolas' },
    { id: 6, name: 'Nuevo teclado Redragon', description: 'Teclado semi-mecánico', image: IMAGES.producto4, type: 'Perifericos' },
];

const Catalogo = () => {
    const [filter, setFilter] = useState('');
    const [productType, setProductType] = useState('');

    const filteredProducts = products.filter(product => {
        const matchesName = product.name.toLowerCase().includes(filter.toLowerCase());
        const matchesType = productType ? product.type === productType : true;
        return matchesName && matchesType;
    });

    return (
        <Box sx={{ marginTop: '20px', padding: '20px', Color: 'white' }}>
            <TextField 
                label="Buscar productos"
                variant="outlined"
                fullWidth
                onChange={(e) => setFilter(e.target.value)}
                sx={{ 
                    marginBottom: '20px', 
                    '& .MuiInputBase-input': { color: 'white' },
                    '& .MuiInputLabel-root': { color: 'white' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, 
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, 
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }
                }}
            />
            <FormControl fullWidth sx={{ marginBottom: '20px', '& .MuiInputBase-input': { color: 'white' },
                    '& .MuiInputLabel-root': { color: 'white' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, 
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, 
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }}}>
                <InputLabel>Filtrar por tipo</InputLabel>
                <Select
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    label="Filtrar por tipo"
                    sx={{ color: 'white', '& .MuiSelect-icon': { color: 'white' } }}

                >
                    <MenuItem value="">
                        <em>Mostrar Todos</em>
                    </MenuItem>
                    <MenuItem value="Consolas">Consolas</MenuItem>
                    <MenuItem value="Perifericos">Perifericos</MenuItem>
                    <MenuItem value="Otros">Otros</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={2}>
                {filteredProducts.map((product) => (
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
        </Box>
    );
};

export default Catalogo;