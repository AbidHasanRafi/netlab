import { createBrowserRouter } from "react-router-dom";
import App from "./../../App";
import CodeIDE from "../../pages/ide/CodeIDE";
import NotFound from "../../pages/not-found/NotFound";
import Home from "../../pages/home/Home";
import Assessments from "../../pages/assessments/Assessments";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Chapter01 from "../chapter 01/Chapter01";
import Chapter02 from "../chapter 02/Chapter02";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/assessments",
        element: <Assessments />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/html",
        element: <Chapter01 />,
      },
      {
        path: "/css",
        element: <Chapter02 />,
      },
      {
        path: "/ide",
        element: <CodeIDE />,
      },
    ],
  },
]);

export default router;
