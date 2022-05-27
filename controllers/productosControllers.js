const Local = require('../models/locales');
const Producto = require('../models/productos');

//nuevo producto

exports.nuevoProducto = async (req,res) => {
    const {nombre} = req.body;
    const producto = await Producto.create({nombre});
    res.json({'mensaje':'producto creado'});
};

//mostrar todos los productos

exports.mostrarProductos = async (req,res)=>{
    const productos = await Producto.findAll({});
    if(!productos){
        console.log(error);
        next();
    
    }
    res.json(productos);
}

//mostrar local por id

exports.mostrarProducto = async (req,res)=>{
    let condition =  {where: {id: req.params.idProducto}};
    const producto = await Producto.findOne(condition)
    if(!producto){
        console.log(error);
        next();
    }
    res.json(producto);
}

//update producto

exports.editarProducto = async (req,res) =>{
    const producto = await Producto.update({nombre: req.body.nombre},
    {where: {id: req.params.idProducto}});
    if(!producto){
        console.log(producto);
        next();
    }
    res.json(producto)
}

// borrar producto

exports.borrarProducto = async (req,res)=>{
    const producto = await Producto.destroy({where: {id: req.params.idProducto}});
    if(!producto){
        console.log(error);
        next();
    }
    res.json({'mensaje': 'borrado producto'});
}