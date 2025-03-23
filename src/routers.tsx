import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProuductDetail";
import UnAuthLayout from "./components/layout/UnAuthLayout";
const routes: RouteObject[] = [
  {
    path: "/",
    Component: UnAuthLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "product",
        Component: Home,
      },
      {
        path: "product/:productId",
        Component: ProductDetail,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "admin/",
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
];

export const routers = createBrowserRouter(routes);
