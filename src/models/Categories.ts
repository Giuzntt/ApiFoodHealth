import mongoose, { Document, Schema } from 'mongoose';
//O que tipar ingredientes
export interface ICategory {
    nameCategory: string;
    descriptionCategory: string;
}

export interface ICategoryModel extends ICategory, Document {}

const CategorySchema: Schema = new Schema(
    {
        nameCategory: { type: String, required: true, ref: 'Recipes' },
        descriptionCategory: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ICategoryModel>('Category', CategorySchema);
