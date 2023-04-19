import React from "react"
import { NavButton } from "./NavButton"
import "./Navigation.scss"

class Navigation extends React.Component<NavigationProps, {}> {
  constructor(props: NavigationProps) {
    super(props)
  }

  render() {
    return (
      <div className="navigation">
        {
          [...Array(this.props.quizCount)].map((_, index) => {
            return (
              <NavButton
                index={index + 1}
                isActive={index < this.props.currentQuiz}
                key={index}
              />
            )
          })
        }
      </div>
    )
  }
}

type NavigationProps = {
  quizCount: number
  currentQuiz: number
}

export default Navigation