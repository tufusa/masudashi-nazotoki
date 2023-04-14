import React from "react"
import Quiz from "./quiz"
import "./Game.scss"
import { quizzesInfoSource } from "./quizzes-info-source";

class Game extends React.Component<{}, GameState> {
  constructor(props: any) {
    super(props)
    this.state = {
      clear: 0,
    };
  }

  render() {
    return (
      <div className="Game">
        {
          quizzesInfoSource.slice(0, this.state.clear + 1).map((info, index) => {
            return <Quiz
              info={info}
              index={index + 1}
              currentQuiz={this.state.clear + 1}
              onClear={() => { this.setState({ clear: this.state.clear + 1 }) }}
              key={index} />
          })
        }
      </div>
    )
  }
}

type GameState = {
  clear: number
}

export default Game