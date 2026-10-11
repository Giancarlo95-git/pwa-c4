const express = require('express');
const router = express.Router();

const {
    crearUsuario,
    listarUsuario,
    actualizarUsuario,
    eliminarUsuario
} = require('../controllers/usuarioController');

router.post('/usuarios', crearUsuario);
router.get('/usuarios', listarUsuario);
router.put('/usuarios/:id', actualizarUsuario);
router.delete('/usuarios/:id', eliminarUsuario);

module.exports = router;