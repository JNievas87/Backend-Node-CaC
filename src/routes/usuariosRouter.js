import express from 'express';
import {
    getAllUsuarios,
    getUsuarioById,
    insertUsuario,
    updateUsuario,
    deleteUsuario
} 
from '../controllers/usuariosController.js';

const router = express.Router();

router.get('/getall', getAllUsuarios);
router.get('/get/:id', getUsuarioById);
router.post('/insert', insertUsuario);
router.put('/update/:Id', updateUsuario);
router.delete('/delete/:Id', deleteUsuario);

export default router;