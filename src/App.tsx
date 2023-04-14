import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Start from "../pages/start/Start"
import Game from "../pages/play/Game"
import { Clear } from "../pages/clear/Clear"
import { Credits } from "../pages/credits/Credits"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/masudashi-nazotoki/" element={<Start />} />
        <Route path="/masudashi-nazotoki/play" element={<Game />} />
        <Route path="/masudashi-nazotoki/clear" element={<Clear />} />
        <Route path="/masudashi-nazotoki/credits" element={<Credits />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
