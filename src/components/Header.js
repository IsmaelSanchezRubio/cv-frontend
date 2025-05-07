const Header = () => {
  return (
    <header className="bg-[#1e3a8a] text-white py-5 px-6 shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Ismael Sánchez Rubio</h1>
        <a
          href="/Cv_Ismael_Sanchez.pdf"
          download
          className="text-sm bg-white text-[#1e3a8a] font-semibold px-4 py-2 rounded transition-all duration-200 transform hover:scale-105 hover:bg-gray-100"
        >
          Descargar CV en PDF
        </a>
      </div>
    </header>
  );
};

export default Header;
