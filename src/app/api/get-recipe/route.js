import { connectDB } from "@/lib/connectDB";

export async function GET(){
    try {
        const db = await connectDB()
        const recipeCollection = db.collection("my-recipe");

        const result = await recipeCollection.find().toArray()
        return Response.json({data: result},{message: "data get successfully"})
    } catch (error) {
        return Response.json({message: "data fetch have a problems"})
    }
}