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
        <Route path="/" element={<Start />} />
        <Route path="/play" element={<Game />} />
        <Route path="/clear" element={<Clear />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
