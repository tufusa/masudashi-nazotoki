import React from "react"
import { Link as Scroll } from "react-scroll"
import "./NavButton.scss"

export const NavButton = (props: { index: number, currentQuiz: number }) => {
  return (
    <Scroll
      to={props.index <= props.currentQuiz ? `quiz${props.index}` : ""}
      smooth={true}
      duration={600}
      ignoreCancelEvents={true}
      offset={-40}
    >
      <div className={`nav-button-outer ${StateClassName(props.index, props.currentQuiz)}`}>
        <div className={`nav-button-inner ${StateClassName(props.index, props.currentQuiz)}`} />
      </div>
    </Scroll>
  )
}

const StateClassName = (index: number, currentQuiz: number) => {
  if(index < currentQuiz)
    return "cleared"
  else if (index == currentQuiz)
    return "current"
  else
    return ""
}