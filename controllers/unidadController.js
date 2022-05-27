const Unidad = require('../models/unidad');

// crear nueva unidad
exports.nuevaUnidad = async (req, res) => {
    const { nombre } = req.body;
    const unidad = await Unidad.create({ nombre });
    res.json({ 'mensaje': "enviado el tipo de unidad" })
}

// mostrar todas las unidades
exports.mostrarUnidades = async (req, res) => {
    const unidades = await Unidad.findAll({});
    if (!unidades) {
        console.log(error);
        next();
    } else {
        res.json(unidades);
    }
}

// mostrar unidad por id
exports.mostrarUnidad = async (req, res) => {
    let condition =  {where: {id: req.params.idUnidad}};
    const unidad = await Unidad.findOne(condition)
    if (!unidad) {
        console.log(error);
    }
    res.json(unidad);
}

// editar entrada 
exports.editarUnidad = async (req, res) => {
    const unidad = await Unidad.update({
        nombre: req.body.nombre
    }, { where: { id: req.params.idUnidad } });
    res.json({ 'mensaje': "cambiado correctamente" });
}

//borrar unidad
exports.borrarUnidad = async (req,res) =>{
    const unidad = await Unidad.destroy({where:{id: req.params.idUnidad}})
    if(!unidad){
        console.log(error);
        next();
    }
    res.json({'mensaje:': 'borrado correctamente'});
}