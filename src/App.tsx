import React, { createRef } from "react"
import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom"
import Start from "../pages/start/Start"
import Game from "../pages/play/Game"
import { Clear } from "../pages/clear/Clear"
import { Credits } from "../pages/credits/Credits"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/masudashi-nazotoki/"        element={<Start />} />
        <Route path="/masudashi-nazotoki/play"    element={<Game />} />
        <Route path="/masudashi-nazotoki/clear"   element={<Clear />} />
        <Route path="/masudashi-nazotoki/credits" element={<Credits />} />
      </Routes>
      <ScrollRestoration />
    </div>
  )
}
// 
// const Wrapper = (props: { element: JSX.Element }) => {
  // const ref = createRef<HTMLDivElement>()
  // const scroll = () => ref.current!.scrollIntoView({
    // block: "start",
    // behavior: "auto"
  // })
// 
  // React.useEffect(() => { scroll() }, [])
// 
  // return (
    // <div ref={ref}>
      {/* {props.element} */}
    {/* </div> */}
  // )
// }

export default App
