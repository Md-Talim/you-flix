import Logo from './Logo';

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 z-20 shadow-lg px-16 py-2 backdrop-blur-lg">
      <Logo />
    </header>
  );
};

export default Navbar;
