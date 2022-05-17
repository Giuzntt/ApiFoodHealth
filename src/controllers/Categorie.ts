import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Categories from '../models/Categories';
import Categorie from '../models/Categories';

const createCategorie = (req: Request, res: Response, next: NextFunction) => {
    const { nameCategorie, descriptionCategorie, recipe } = req.body;
    const categories = new Categories({
        _id: new mongoose.Types.ObjectId(),
        nameCategorie,
        descriptionCategorie,
        recipe
    });

    return categories
        .save()
        .then((categories) => res.status(201).json({ categories }))
        .catch((error) => res.status(500).json({ error }));
};
const readCategorie = (req: any, res: any, next: NextFunction) => {
    const categoriesId = req.params.categoriesId;

    return Categorie.findById(categoriesId)
        .then((categories) => (categories ? res.status(200).json({ categories }) : res.status(404).json({ message: 'Categorie not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const readAllCategories = async (req: any, res: any, next: NextFunction) => {
    //Fazer uma relação de entre categorias e receitas e retornar todas as receitas de uma categoria

    const categories = await Categories.find();

    if (categories) {
        return res.status(200).json({ categories });
    } else {
        return res.status(404).json({ message: 'Categories not found' });
    }
};
const updateCategorie = (req: any, res: any, next: NextFunction) => {
    const categoriesId = req.params.categoriesId;
    return Categorie.findById(categoriesId).then((categories) => {
        if (categories) {
            categories.set(req.body);
            return categories
                .save()
                .then((categories) => res.status(201).json({ categories }))
                .catch((error) => res.status(500).json({ error }));
        } else {
            res.status(404).json({ message: 'Categorie not found' });
        }
    });
};
const deleteCategorie = (req: any, res: any, next: NextFunction) => {
    const categoriesId = req.params.categoriesId;
    return Categorie.findByIdAndDelete(categoriesId)
        .then((categories) => (categories ? res.status(201).json({ message: 'Deleted ' }) : res.status(404).json({ message: 'Categorie not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createCategorie, readCategorie, readAllCategories, updateCategorie, deleteCategorie };
