import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { About } from "./pages/About";
import { Art } from "./pages/Art";
import { ArtDetails } from "./pages/ArtDetails";
import { Order } from "./pages/Order";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "om-mig",
        element: <About />,
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
