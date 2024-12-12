import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { About } from "./pages/About";
import { Art } from "./pages/Art";
import { ArtDetails } from "./pages/ArtDetails";
import { Order } from "./pages/Order";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { PhotoArt } from "./pages/PhotoArt";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/konst",
        element: <Art />,
      },
      {
        path: "/konst/:artId",
        element: <ArtDetails />,
      },
      {
        path: "/fotokonst",
        element: <PhotoArt />,
      },
      {
        path: "/om",
        element: <About />,
      },
      {
        path: "/bestall",
        element: <Order />,
      },
      {
        path: "/kontakt",
        element: <Contact />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
