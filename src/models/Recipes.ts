import mongoose, { Document, Schema } from 'mongoose';

export interface IRecipe {
    name: string;
    description: string;
    ingredients: string;
    instructions: string;
    image: string;
}

export interface IRecipeModel extends IRecipe, Document {}

const RecipeSchema: Schema = new Schema(
    {
        category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
        name: { type: String, required: true },
        description: { type: String, required: false },
        ingredients: { type: [String], required: false },
        instructions: { type: [String], required: false },
        image: { type: String, required: false }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IRecipeModel>('Recipe', RecipeSchema);
