import { Router } from "express";
import {
    getexams,
    getexam,
    createxams,
    updateexams,
    deleteexams,
    createpregunta
} from '../controllers/examen.controllers.js'

const router= Router()

router.get('/exam', getexams);

router.get('/exam/:id', getexam);

router.post('/exam', createxams);

router.post('/quest', createpregunta);

router.put('/exam/:id', updateexams);

router.delete('/exam/:id', deleteexams);

export default router;