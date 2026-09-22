import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assert/book.ico';

const Navbar = () => {
 const links = (
   <>
     <li>
       <Link href="/">Home</Link>
     </li>
     <li>
       <Link href="/read-books">Read Book</Link>
     </li>

     <li>
       <Link href="/books">Books</Link>
     </li>

     <li>
       <Link href="/books/listed-books">ListBook</Link>
     </li>
   </>
 );

  return (
    <nav className="sticky top-0 z-50 border-b bg-base-100/95 shadow-sm backdrop-blur">
      <div className="navbar container mx-auto px-4">
        {/* Logo */}
        <div className="navbar-start">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Book Vibe logo" width={42} height={42} />

            <Link href="/" className="text-2xl font-bold">
              Book <span className="text-success">Vibe</span>
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">{links}</ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">
          <button className="btn btn-outline btn-success hidden sm:inline-flex">
            Sign In
          </button>

          <button className="btn btn-success">Sign Up</button>

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              ☰
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-52 rounded-box bg-base-100 p-3 shadow-lg"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
