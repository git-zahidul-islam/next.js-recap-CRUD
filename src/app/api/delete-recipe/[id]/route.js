import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export async function DELETE(req,{params}){
    const deleteItem = await req.json()
   

    try {
        const db = await connectDB()
        const recipeCollection = db.collection("my-recipe");
        const id = params
        await recipeCollection.deleteOne({_id: new ObjectId(id)});
        return Response.json({message: "the recipe is delate"})
    } catch (error) {
        return Response.json({message: "some problem in delete data"})
    }
}