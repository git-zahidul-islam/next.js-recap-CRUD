import Image from "next/image";
import Link from "next/link"

async function recepieDataFetching(){
    const response = await fetch('https://dummyjson.com/recipes');
    const result = await response.json()
    return result.recipes;
}

export default async function Recipe() {
    const recipesData = await recepieDataFetching()
    // console.log(recipesData);

    return (
        <div className="p-10">
            <h1 className="text-center my-3">All Recipe is here</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {
                    recipesData.map(product => (
                        <div key={product.id} className="p-1 border-2 shadow-md">
                            <Image height={1000} width={1000} src={product.image} alt="image"></Image>
                            <p>{product.item}</p>
                            <Link className="p-1 bg-sky-300" href={`recepe/${product.id}`}>Details</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}