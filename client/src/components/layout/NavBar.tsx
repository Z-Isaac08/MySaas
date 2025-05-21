import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react"; // Icônes modernes
import Logo from "../../assets/colorkit.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-tertiary px-6 md:px-16 py-4 border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-8 w-8 rounded-full" />
          <span className="text-normal-blue font-semibold text-xl">
            IConverter
          </span>
        </NavLink>

        {/* Burger menu (mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-normal-blue focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu principal (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <ContribuerButton />
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <NavLinks mobile />
          <ContribuerButton />
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const baseClass = "p-2 text-center";
  const activeClass = "text-normal-blue font-semibold";
  const inactiveClass = "hover:text-normal-blue-hover";

  const wrapper = mobile ? "flex flex-col gap-2 items-start" : "flex gap-6 items-center";

  return (
    <div className={wrapper}>
      <NavLink to="/" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
        Accueil
      </NavLink>
      <NavLink to="/convertir" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
        Conversion
      </NavLink>
      <NavLink to="/a-propos" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
        A propos
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
        Contact
      </NavLink>
    </div>
  );
};

const ContribuerButton = () => (
  <NavLink to="">
    <button className="px-4 py-2 mt-1 md:mt-0 bg-normal-blue text-tertiary rounded hover:bg-normal-blue-hover transition-colors">
      Contribuer
    </button>
  </NavLink>
);

export default NavBar;
