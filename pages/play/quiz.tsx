import React, { createRef, ReactElement, useState } from "react"
import { QuizInfo } from "./quiz-info"
import { QuizInfoSource } from "./quiz-info-source"
import "./quiz.scss"
import { Link } from "react-router-dom"

class Quiz extends React.Component<QuizProps, QuizState> {
  info: QuizInfo

  constructor(props: QuizProps) {
    super(props)
    this.state = {
      isCleared: false
    }
    this.info = {
      p: String.fromCharCode(...props.info.p),
      a: String.fromCharCode(...props.info.a),
      n: String.fromCharCode(...props.info.n),
      dp: String.fromCharCode(...props.info.dp),
      d: String.fromCharCode(...props.info.d),
    }
  }

  render() {
    return (
      <div className="quiz">
        <this.Image path={this.info.p} />
        <this.Input />
        { this.state.isCleared && <this.Description /> }
      </div>
    )
  }

  Image = (image: { path: string }) => {
    return (
      <img src={image.path} className="quizImage" />
    )
  }

  Input = () => {
    const [input, setInput] = useState("")
    const inputRef = createRef<HTMLInputElement>()
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.currentTarget.blur()
      inputRef.current!.blur()
      this.Judge(input, () => { setInput("") })
    }

    let button: ReactElement
    if (this.props.index != 10 || this.info.a != input)
      button = <button onClick={onClick}>OK</button>
    else
      button = <Link to="/masudashi-nazotoki/clear"><button onClick={onClick}>OK</button></Link>

    return (
      <div className="input">
        <input
          value={input}
          onChange={(event) => { setInput(event.target.value) }}
          readOnly={this.state.isCleared}
          spellCheck="false"
          ref={inputRef}
        />
        {button}
      </div>
    )
  }

  Judge = (input: string, onMistake: () => void) => {
    if (this.state.isCleared) return

    if (this.info.a == input) {
      this.props.onClear()
      this.setState({isCleared: true})
    }
    else {
      onMistake()
    }
  }

  Description = () => {
    const ref = createRef<HTMLDivElement>()
    const scroll = () => ref.current!.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    React.useEffect(() => { scroll() }, [])

    return (
      <div className="description" ref={ref}>
        <img src={this.info.dp} />
        <div className="text">
          <h2 className="title">{this.info.n}</h2>
          <this.DescriptionText text={this.info.d} />
        </div>
      </div>
    )
  }

  DescriptionText = (props: { text: string }) => {
    const texts_st = props.text.split("<s>")
    if (this.props.currentQuiz == 6)
      return (
        <p>{texts_st[0]}<strong><u>{texts_st[1]}</u></strong>{texts_st[2]}</p>
      )

    const text = texts_st.join("")
    const texts_br = text.split("<b>")
    return <>{ texts_br.map((str) => <p key={text}>{str}<br /></p>) }</>
  }
}

type QuizProps = {
  info: QuizInfoSource,
  index: number,
  currentQuiz: number,
  onClear: () => void
}

type QuizState = {
  isCleared: boolean,
}

export default Quiz