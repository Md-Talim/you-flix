const Logo = () => (
  <h1 className="text-red-500 uppercase tracking-tight font-bold text-3xl select-none">
    YouFlix
  </h1>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 shadow-lg px-5 py-2 backdrop-blur-lg">
      <Logo />
    </header>
  );
};

export default Navbar;
