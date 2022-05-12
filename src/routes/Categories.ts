import express from 'express';
import controller from '../controllers/Category';

const router = express.Router();

router.post('/create', controller.createCategorie);
router.get('/read/:categoriesId', controller.readCategorie);
router.get('/readAll', controller.readAllCategories);
router.put('/update/:categoriesId', controller.updateCategorie);
router.delete('/delete/:categoriesId', controller.deleteCategorie);

export = router;
