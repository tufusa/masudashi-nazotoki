import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Start from "../pages/start/Start";
import Game from "../pages/play/Game";
import { Clear } from "../pages/clear/Clear";
import { Root } from "./root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/root" element={<Root />}>
      <Route index element={<Start />} />
      <Route path="play" element={<Game />} />
      <Route path="clear" element={<Clear />} />
    </Route>
  ),
  {
    basename: "/masudashi-nazotoki/"
  }
);

export default router