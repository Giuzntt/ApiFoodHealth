import { required } from 'joi';
import mongoose, { Document, Schema } from 'mongoose';
import Recipes from './Recipes';
//O que tipar ingredientes
export interface ICategory {
    nameCategorie: string;
    descriptionCategorie: string;
    recipe: [];
}

export interface ICategoryModel extends ICategory, Document {}

const CategorySchema: Schema = new Schema(
    {
        nameCategorie: { type: String, required: true },
        descriptionCategorie: { type: String, required: false },
        //Fazer uma relação de entre categorias e receitas e retornar todas as receitas de uma categoria
        recipe: { type: Array, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<ICategoryModel>('Category', CategorySchema);
