import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
    if (db) return db;
    
    const uri = process.env.NEXT_MONGODB_KEY;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    
    try {
        // client input here
        db = client.db("next-recap")
        return db;
    } catch (error) {
        console.log(error);
    }
}