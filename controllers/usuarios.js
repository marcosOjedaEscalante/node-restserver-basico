const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {  
    const {nombre = 'No Nombre', apellido = 'No Apellido'} = req.query;
    res.json({
        mensaje: 'Api get - controller',
        nombre,
        apellido
    });
}

const usuariosPost = (req = request, res = response) => {
    const body = req.body;
    res.json({
        mensaje: 'Api post - controller',
        body
    });
}

const usuariosPut = (req = request, res = response) => {
    const id = req.params.id;
    res.json({
        mensaje: 'Api put - controller',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        mensaje: 'Api delete - controller'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        mensaje: 'Api patch - controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}