import { NavLink } from "react-router";
import Logo from "../../assets/colorkit.svg";

const NavBar = () => {
  return (
    <nav className="flex justify-between bg-tertiary px-12 py-7 items-center border-solid sticky top-0 z-50">
      <div>
        <NavLink
          to="/"
          className="flex flex-row justify-between items-center gap-4"
        >
          <img src={Logo} alt="" height={35} width={35} />
          <span className="text-normal-blue font-medium text-2xl">IConverter</span>
        </NavLink>
      </div>
      <div className="flex gap-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-4 text-center ${
              isActive ? "text-normal-blue font-semibold" : "hover:text-normal-blue-hover"
            }`
          }
        >
          <span>Accueil</span>
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) =>
            `p-4 text-center ${
              isActive ? "text-normal-blue font-semibold" : "hover:text-normal-blue-hover"
            }`
          }
        >
          <span>A propos</span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `p-4 text-center ${
              isActive ? "text-normal-blue font-semibold" : "hover:text-normal-blue-hover"
            }`
          }
        >
          <span>Contact</span>
        </NavLink>
      </div>
      <div className="flex">
        <NavLink to="">
          <button className="p-3 border-none bg-normal-blue text-tertiary rounded outline-none">
            Contribuer
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
