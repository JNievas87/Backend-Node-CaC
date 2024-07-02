import express from 'express';
import {
    getAllGeneros,
    getGeneroById,
    insertGenero,
    updateGenero,
    deleteGenero
} 
from '../controllers/generosController.js';

const router = express.Router();

router.get('/getall', getAllGeneros);
router.get('/get/:id', getGeneroById);
router.post('/insert', insertGenero);
router.put('/update/:Id', updateGenero);
router.delete('/delete/:Id', deleteGenero);

export default router;