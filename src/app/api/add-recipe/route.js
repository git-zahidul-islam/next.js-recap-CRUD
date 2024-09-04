import { connectDB } from "@/lib/connectDB";

export async function POST(req){
    const newRecipe = await req.json()

    try {
        const db = await connectDB()
        const recipeCollection = db.collection("my-recipe")

        // inserted
        try {
            const add = await recipeCollection.insertOne(newRecipe)
            return Response.json({message: "recipe create successfully"},{data: add});
        } catch (error) {
            return Response.json({message: "have a problem in data"}, error);
        }
    } catch (error) {
        return Response.json({message: "have a problems"},error);
    }






}