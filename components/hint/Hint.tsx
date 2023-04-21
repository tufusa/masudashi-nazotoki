import React, { ReactElement, createRef, useEffect } from "react"
import "./Hint.scss"
import { hints } from "./hint-source"

class Hint extends React.Component<HintProp, HintState> {
  constructor(props: HintProp) {
    super(props)
    this.state = {
      popupVisible: false
    }
  }

  render() {
    return <this.Hint />
  }

  Hint = () => {
    const hintref = createRef<HTMLDivElement>()

    useEffect(this.ClosePopup, [this.props.currentQuiz])

    useEffect(() => {
      const closeOnClickOutside = (e: MouseEvent) => {
        if (!hintref?.current?.contains(e.target as Node))
          this.ClosePopup()
      }

      document.addEventListener("click", closeOnClickOutside)

      return () => {
        document.removeEventListener("click", closeOnClickOutside)
      }
    }, [hintref])

    return (
      <div className="hint" ref={hintref}>
        <this.HintButton />
        <this.HintPopup />
      </div>
    )
  }

  HintButton = () => {
    return (
      <button
        className={`hint-button ${this.state.popupVisible && "open"}`}
        onClick={() => this.SwitchPopup()}
      >
        HINT
      </button>
    )
  }

  HintPopup = () => {
    return (
      <div
        className={`hint-popup ${this.state.popupVisible ? "visible" : "invisible"}`}
      >
        <p className="hint-text">{ hints[this.props.currentQuiz - 1].h }</p>
      </div>
    )
  }

  SwitchPopup = () => {
    this.setState({
      popupVisible: !this.state.popupVisible
    })
  }

  ClosePopup = () => {
    this.setState({
      popupVisible: false
    })
  } 
}

type HintProp = {
  currentQuiz: number
}

type HintState = {
  popupVisible: boolean,
}

export default Hint