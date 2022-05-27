const Local = require('../models/locales');

//nuevo local

exports.nuevoLocal = async(req,res) =>{
    const {nombre} = req.body;
    const local = await Local.create({nombre});
    res.json({ 'mensaje': "enviado el nuevo local" })
}

//mostrar todos los locales

exports.mostrarLocales = async(req,res) =>{
    const locales = await Local.findAll({});
    if(!locales){
        console.log(error);
        next();
    }
    res.json(locales);
}

//mostrar local

exports.mostrarLocal = async(req,res) =>{
    let condition =  {where: {id: req.params.idLocal}};
    const local = await Local.findOne(condition);
    if(!local){
        console.log(error);
        next();
    }
    res.json(local);
}

//actualizar local

exports.editarLocal = async (req,res)=>{
    const local = await Local.update({nombre: req.body.nombre},
        {where: {id: req.params.idLocal}});
    if(!local){
        console.log(error);
        next();
    }
    res.json({'mensaje': 'upgradeado correctamente'});
}

// borrar local

exports.borrarLocal = async (req,res)=>{
    const local = await Local.destroy({where: {id: req.params.idLocal}});
    if(!local){
        console.log(error);
        next();
    }
    res.json({'mensaje': 'borrado el local correctamente'});
}