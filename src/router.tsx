import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Start from "../pages/start/Start";
import Game from "../pages/play/Game";
import { Clear } from "../pages/clear/Clear";
import { Credits } from "../pages/credits/Credits";
import { Root } from "./root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Start />} />
      <Route path="play" element={<Game />} />
      <Route path="clear" element={<Clear />} />
      <Route path="credits" element={<Credits />} />
    </Route>
  ),
  {
    basename: "/masudashi-nazotoki/"
  }
);

export default router