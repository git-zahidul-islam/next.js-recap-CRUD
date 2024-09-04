
import { connectDB } from "@/lib/connectDB";

export async function POST(req){
    const newUser = await req.json();

    try {
        // database
        const db = await connectDB()
        const userCollection = db.collection("users");

        // insert user and user check
        const exist = await userCollection.findOne({email: newUser?.email})
        if(exist){
            return Response.json({message: "user already exist"})
        }
        const res = await userCollection.insertOne(newUser)
        return Response.json({message: "user created"})
    } catch (error) {
        return Response.json({message: "have some problems"})
    }

}