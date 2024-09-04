import AddRecipe from "@/components/AddRecipe";
import GetRecipe from "@/components/GetRecipe";

export default async function MyRecipe() {
    
    return (
        <div className="p-10">
            <div>
                <div className="my-5">
                    <h1>This is add recipe input field</h1>
                    <AddRecipe></AddRecipe>
                </div>
                <h1>My Recipe is Here</h1>
                <div className="py-2">
                    <GetRecipe/>
                </div>
            </div>
        </div>
    )
}