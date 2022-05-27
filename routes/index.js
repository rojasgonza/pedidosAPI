const express = require('express');
const router = express.Router();
const unidadController = require('../controllers/unidadController');
const localesController = require('../controllers/localesController');
const productosController = require('../controllers/productosControllers')

module.exports = function(){
    //tipo de unidades de medida
    router.post('/unidad', unidadController.nuevaUnidad);
    router.get('/unidad', unidadController.mostrarUnidades);
    router.get('/unidad/:idUnidad', unidadController.mostrarUnidad);
    router.put('/unidad/editar/:idUnidad', unidadController.editarUnidad);
    router.delete('/unidad/borrar/:idUnidad', unidadController.borrarUnidad);
    

    //locales
    router.post('/locales', localesController.nuevoLocal);
    router.get('/locales', localesController.mostrarLocales);
    router.get('/locales/:idLocal', localesController.mostrarLocal);
    router.put('/locales/editar/:idLocal', localesController.editarLocal);
    router.delete('/locales/borrar/:idLocal', localesController.borrarLocal);

    //productos
    router.post('/productos', productosController.nuevoProducto);
    router.get('/productos', productosController.mostrarProductos);
    router.get('/productos/:idProducto', productosController.mostrarProducto);
    router.put('/productos/editar/:idProducto', productosController.editarProducto);
    router.delete('/productos/borrar/:idProducto', productosController.borrarProducto);
    return router;
}