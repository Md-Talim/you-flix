import Logo from "@/components/Logo";

const Footer = () => (
  <footer className="border-t text-zinc-400 border-zinc-800 mt-10 py-8 space-y-6 px-4 lg:px-16">
    <div>
      <Logo />
    </div>

    <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
      <p>
        Built by <a href="https://linkedin.com/in/Md-Talim">Md. Talim</a>
      </p>

      <nav>
        <ul className="flex items-center gap-x-4">
          <li>Repository</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>Copy Email</li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
