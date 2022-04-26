import express from 'express';
import controller from '../controllers/Recipe';

const router = express.Router();

router.post('/create', controller.createRecipe);
router.get('/read/:recipeId', controller.readRecipe);
router.get('/readAll', controller.readAllRecipes);
router.put('/update/:recipeId', controller.updateRecipe);
router.delete('/delete/:recipeId', controller.deleteRecipe);

export = router;
