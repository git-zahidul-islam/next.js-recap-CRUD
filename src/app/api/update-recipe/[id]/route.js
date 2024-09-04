import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export async function PUT(req,{params}){
    const bodyData = await req.json();
    const id = params;

    try {
        const db = await connectDB()
        const recipeCollection = db.collection("my-recipe");

        const filter = {_id: new ObjectId(id)}
        const updateData = {
            $set: {
                ...bodyData
            }
        }
        const reqUpdate = await recipeCollection.updateOne(filter,updateData);
        return Response.json({message: "the data is updated"},reqUpdate)
    } catch (error) {
        return Response.json({message: "there is a problem in update"},error)
    }
}