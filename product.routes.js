import { Router } from 'express';
import { getAll, create, getOne, update, remove } from '../controllers/product.controller.js';

const router = Router();

router.get('/', getAll);
router.post('/', create);
router.get('/:id', getOne);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
