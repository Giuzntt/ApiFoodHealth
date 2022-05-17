import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Categories from '../models/Categories';
import Recipe from '../models/Recipes';
import Categorie from './Categorie';

const createRecipe = (req: any, res: any, next: NextFunction) => {
    const { name, description, category, ingredients, instructions, image } = req.body;
    const recipe = new Recipe({
        _id: new mongoose.Types.ObjectId(),
        name,
        description,
        category,
        ingredients,
        instructions,
        image
    });
    return recipe
        .save()
        .then((recipe) => res.status(201).json({ recipe }))
        .catch((error) => res.status(500).json({ error }));
};
const readRecipe = (req: any, res: any, next: NextFunction) => {
    const recipeId = req.params.recipeId;

    return Recipe.findById(recipeId)

        .then((recipe) => (recipe ? res.status(200).json({ recipe }) : res.status(404).json({ message: 'Recipe not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const readAllRecipes = (req: Request, res: Response, next: NextFunction) => {
    return Recipe.find()

        .then((recipes) => res.status(200).json({ recipes }))
        .catch((error) => res.status(500).json({ error }));
};
const updateRecipe = (req: any, res: any, next: NextFunction) => {
    const recipeId = req.params.recipeId;
    return Recipe.findById(recipeId).then((recipe) => {
        if (recipe) {
            recipe.set(req.body);
            return recipe
                .save()
                .then((recipe) => res.status(201).json({ recipe }))
                .catch((error) => res.status(500).json({ error }));
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    });
};
const deleteRecipe = (req: any, res: any, next: NextFunction) => {
    const recipeId = req.params.recipeId;
    return Recipe.findByIdAndDelete(recipeId)
        .then((recipe) => (recipe ? res.status(201).json({ message: 'Deleted ' }) : res.status(404).json({ message: 'Recipe not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createRecipe, readRecipe, readAllRecipes, updateRecipe, deleteRecipe };
