import { Router } from "express";
import { check } from 'express-validator';
import { indexController } from '../controllers/indexController';
const router: Router = Router();

router.get('/',indexController.index);
router.post('/',[
    check('name').not().isEmpty(),
    check('dir').not().isEmpty(),
    check('n_trabs').isNumeric().not().isEmpty(),
    check('n_pac').isNumeric().not().isEmpty(),
    check('especialidad').isAlphanumeric().not().isEmpty()
    
],indexController.create);

router.delete('/:id',indexController.delete);
router.put('/:id',indexController.edit);

export default router;