import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="grid grid-cols-2 font-vollkorn px-7 py-5 bg-black text-white">
        <div className="">Logo</div>
        <nav>
          <ul className="flex gap-3.5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            {/* <li>
              <Link href="/clientcomponent">ClientComponent</Link>
            </li> */}
            {/* <li>
              <Link href="/servercomponent">ServerComponent</Link>
            </li> */}
            <li>
              <Link href="/service">Service</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
