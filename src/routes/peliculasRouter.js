import express from 'express';
import {
    getAllPeliculas,
    getPeliculaById,
    insertPelicula,
    updatePelicula,
    deletePelicula
} 
from '../controllers/peliculasController.js';

const router = express.Router();

router.get('/getall', getAllPeliculas);
router.get('/get/:id', getPeliculaById);
router.post('/insert', insertPelicula);
router.put('/update/:Id', updatePelicula);
router.delete('/delete/:Id', deletePelicula);

export default router;
