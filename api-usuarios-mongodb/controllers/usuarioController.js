const Usuario = require('../models/usuarios');

// crear usuario
exports.crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// listar usuario
exports.listarUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// actualizar usuario
exports.actualizarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// eliminar usuario
exports.eliminarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};