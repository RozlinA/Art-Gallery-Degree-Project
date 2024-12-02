import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <div>
            <NavLink to={"/"}>LA Art</NavLink>
          </div>
          <ul>
            <li>
              <NavLink to={"/om-mig"}>Om mig</NavLink>
            </li>
            <li>
              <NavLink to={"/konst"}>Konst</NavLink>
            </li>
            <li>
              <NavLink to={"/bestall"}>Beställ</NavLink>
            </li>
            <li>
              <NavLink to={"/kontakt"}>Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
