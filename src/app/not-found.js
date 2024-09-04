import Link from "next/link";

export default function NotFound(){

    return (
        <div>
            <h1>The Data Is not found</h1>
            <p>back here</p>
            <Link href={'/'}>Go To Home</Link>
        </div>
    )
}