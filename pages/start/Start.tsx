import React from "react"
import { Link } from "react-router-dom"
import "./Start.scss"

function Start() {
  return (
    <div className="start">
      <Header />
      <Contens />
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <img src="images/masuda_logo.png"/>
    </header>
  )
}

function Contens() {
  return (
    <main className="contents">
      <MasudaInfomation />
      <GameDescription />
      <GameStart />
    </main>
  )
}

function MasudaInfomation() {
  return (
    <div className="masuda-info">
      <p>
        …<br />島根県西部にある市。人口4.3万人。<br/>
        面積は733.9㎢、島根県の市で最も広い。<br />…
      </p>
    </div>
  )
}

function GameDescription() {
  return (
    <div className="game-description">
      <Introduction />
      <Rule />
      <Warning />
    </div>
  )
}

function GameStart() {
  return (
    <div className="gamestart">
      <Link to="/play">
        <img src="images/masuda_start.png" />
      </Link>
    </div>
  )
}

function Introduction() {
  return (
    <div className="introduction">
      <h3>INTRODUCTION</h3>
      <p>
        これは、島根県益田市をテーマにした謎解きゲームです。<br />
        謎を解きながら、益田市を知ることができます。<br />
        益田市についての事前知識は必要ありません。<br />
        すべての謎を解き明かし、クリア画面へ辿り着いてください。<br />
      </p>
    </div>
  )
}

function Rule() {
  return (
    <div className="rule">
      <h3>RULE</h3>
      <p>
        表示される問題下部に回答欄があります。<br />
        回答は<strong>ひらがな</strong>で入力してください。<br />
        謎を解くに当たって、必要そうな知識は<br />
        検索して頂いて構いません。<br />
      </p>
    </div>
  )
}

function Warning() {
  return (
    <div className="warning">
      <h3>WARNING</h3>
      <p>
        ソースコードを解析して回答する行為は、これを禁じます。<br />
        また、最新版のChromeでのプレイを推奨します。<br />
      </p>
    </div>
  )
}

export default Start
