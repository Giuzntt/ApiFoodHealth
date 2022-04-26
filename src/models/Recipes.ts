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
        name: { type: String, required: true },
        description: { type: String, required: true },
        ingredients: { type: [String], required: true },
        instructions: { type: [String], required: true },
        image: { type: String, required: false }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IRecipeModel>('Recipe', RecipeSchema);
