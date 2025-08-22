import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="grid grid-cols-2 font-fugaz">
        <div className="">Logo</div>
        <nav>
          <ul className="flex gap-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
