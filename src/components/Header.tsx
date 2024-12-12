import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { closeOutline, menuOutline } from "ionicons/icons";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="flex justify-between p-4 md:px-12 items-center h-16 lg:h-20 font-heading text-sm">
          <div>
            <NavLink
              to={"/"}
              className="text-2xl font-bold hover:text-gray-500"
              onClick={() => setIsMenuOpen(false)}
            >
              LA Art
            </NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={handleToggleMenu}>
              <IonIcon
                icon={isMenuOpen ? closeOutline : menuOutline}
                size="large"
              ></IonIcon>
            </button>
          </div>
          <ul className="hidden md:block md:flex md:justify-around md:w-full md:max-w-md font-medium">
            <li className="hover:text-gray-500">
              <NavLink to={"/"}>HEM</NavLink>
            </li>
            <li className="hover:text-gray-500">
              <NavLink to={"/konst"}>KONST</NavLink>
            </li>
            <li className="hover:text-gray-500">
              <NavLink to={"/fotokonst"}>FOTOKONST</NavLink>
            </li>
            <li className="hover:text-gray-500">
              <NavLink to={"/bestall"}>BESTÄLL</NavLink>
            </li>
            <li className="hover:text-gray-500">
              <NavLink to={"/om"}>OM</NavLink>
            </li>
            <li className="hover:text-gray-500">
              <NavLink to={"/kontakt"}>KONTAKT</NavLink>
            </li>
          </ul>
        </nav>

        {isMenuOpen && (
          <ul className="flex-col md:hidden min-h-screen font-heading text-lg">
            <li className="p-4" onClick={handleToggleMenu}>
              <NavLink to={"/"}>HEM</NavLink>
            </li>
            <li className="p-4" onClick={handleToggleMenu}>
              <NavLink to={"/konst"}>KONST</NavLink>
            </li>
            <li className="p-4" onClick={handleToggleMenu}>
              <NavLink to={"/fotokonst"}>FOTOKONST</NavLink>
            </li>
            <li className="p-4" onClick={handleToggleMenu}>
              <NavLink to={"/bestall"}>BESTÄLL</NavLink>
            </li>
            <li className="p-4" onClick={handleToggleMenu}>
              <NavLink to={"/om"}>OM</NavLink>
            </li>
            <li className="p-4" onClick={handleToggleMenu}>
              <NavLink to={"/kontakt"}>KONTAKT</NavLink>
            </li>
          </ul>
        )}
      </header>
    </>
  );
};
