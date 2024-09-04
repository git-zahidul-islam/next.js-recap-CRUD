import Link from "next/link";

const Nav = () => {
    return (
        <div className="flex gap-5 bg-neutral-400">
          <Link className="bg-green-200/80 p-2" href={'/recepe'}>Recipe is here</Link>
          <Link className="bg-green-200/80 p-2" href={'/signin'}>SignIn</Link>
          <Link className="bg-green-200/80 p-2" href={'/signup'}>SignUp</Link>
          <Link className="bg-green-200/80 p-2" href={'/'}>Home</Link>
          <Link className="bg-green-200/80 p-2" href={'/my-recipe'}>My Recipe</Link>
      </div>
    );
};

export default Nav;