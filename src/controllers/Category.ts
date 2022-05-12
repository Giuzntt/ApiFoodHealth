import { NextFunction } from 'express';
import mongoose from 'mongoose';
import Categorie from '../models/Categories';

const createCategorie = (req: any, res: any, next: NextFunction) => {
    const { nameCategory, descriptionCategory } = req.body;
    const categories = new Categorie({
        _id: new mongoose.Types.ObjectId(),
        nameCategory,
        descriptionCategory
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
const readAllCategories = (req: any, res: any, next: NextFunction) => {
    return Categorie.find()
        .then((categoriess) => res.status(200).json({ categoriess }))
        .catch((error) => res.status(500).json({ error }));
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
