"use client"
import { useEffect, useState } from "react";

const GetRecipe = () => {
    const [recipes,setRecipes] = useState([])

    
    const recipeDataGet = async () =>{
        const res = await fetch('http://localhost:3000/api/get-recipe');
        const result = await res.json()
        setRecipes(result.data)
    }
    console.log(recipes);

    useEffect(()=>{
        recipeDataGet()
    },[])

    const handleDelete = async (id) =>{
        const res = await fetch(`http://localhost:3000/api/delete-recipe/${id}`,{
            method: "DELETE"
        })
        const result = await res.json()
        console.log(result);
    }

    // update
    const handleUpdate = async(recipe) => {
        console.log("from update",recipe);
        const res = await fetch(`http://localhost:3000/api/update-recipe/${recipe?.id}`,{
            method: "PUT",
            body: JSON.stringify(recipe)
        })
    }

    return (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
            {
                 recipes && recipes.length > 0 && recipes.map((recipe)=> {
                            return(
                                <div key={recipe._id} className="border-2 bg-yellow-200 p-2 space-y-[2px]">
                                    <p>Name: {recipe.name}</p>
                                    <p>description: {recipe.description}</p>
                                    <p>Category: {recipe.category ? `${recipe.category}` : `Empty`}</p>
                                    <div className="flex gap-3 py-2">
                                    <button onClick={()=> handleDelete(recipe._id)} className="p-1 bg-red-300/80">Delete</button>
                                    <button onClick={()=> handleUpdate(recipe)} className="p-1 bg-green-300/80">Update</button>
                                    </div>
                                </div>
                            )
                        })
                    }
        </div>
    );
};

export default GetRecipe;