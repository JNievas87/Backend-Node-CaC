import express from 'express';
import {
    getAllDirectores,
    getDirectorById,
    insertDirector,
    updateDirector,
    deleteDirector
} 
from '../controllers/directoresController.js';

const router = express.Router();

router.get('/getall', getAllDirectores);
router.get('/get/:id', getDirectorById);
router.post('/insert', insertDirector);
router.put('/update/:Id', updateDirector);
router.delete('/delete/:Id', deleteDirector);

export default router;