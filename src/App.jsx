import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import Catalogo from './pages/Catalogo';

const App = () => {
    return (
        <div className='title'>
            <h1>Bienvenido a Gaming Store</h1>
            <p>Compre sus juegos, consolas y accesorios favoritos</p>
            <h2>Catálogo de Productos</h2>
            <Routes>
                <Route path="/" element={<ProductCatalog />} />
                <Route path="/Catalogo" element={<Catalogo />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </div>
    );
};

export default App;