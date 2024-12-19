const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 text-white p-4 z-50 shadow-lg">
      <div className="flex justify-between max-w-6xl mx-auto">
        <div className="text-lg font-bold">
          <a href="#hero">Kemal's Portfolio</a>
        </div>
        <div className="space-x-4">
          <a href="#about" className="hover:text-teal-400 transition">About</a>
          <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
