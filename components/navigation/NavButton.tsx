import React from "react"
import { Link as Scroll } from "react-scroll"
import "./NavButton.scss"

export const NavButton = (props: { index: number, isActive: boolean }) => {
  return (
    <Scroll
      to={props.isActive ? `quiz${props.index}` : ""}
      smooth={true}
      duration={600}
      ignoreCancelEvents={true}
      offset={-40}
    >
      <div className="nav-button-outer">
        <div className={`nav-button-inner ${props.isActive && "active"}`} />
      </div>
    </Scroll>
  )
}