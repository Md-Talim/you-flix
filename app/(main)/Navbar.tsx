import Link from "next/link";
import Logo from "@/components/Logo";

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 z-20 shadow-lg px-4 lg:px-16 py-2 backdrop-blur-lg">
      <nav className="flex items-center justify-between">
        <Logo />
        <ul className="flex items-center gap-x-2">
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
