import Image from "next/image";

async function detailsFetching(id) {
    console.log("fuc", id);
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const result = await response.json()
    return result;
}

export default async function ProductsDetails({ params }) {
    const details = await detailsFetching(params.id)
    console.log(details);
    console.log(params.id);

    return (
        <div className="p-20">
            <Image height={300} width={300} src={details.image} alt="image"></Image>
            <p>{details.name}</p>
            <p>Rating: {details.rating}</p>
        </div>
    )
}