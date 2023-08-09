import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'css/start/Start.scss';
import logo from 'assets/images/masuda_logo.png';
import start from 'assets/images/masuda_start.png';

class Start extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="start">
        <this.Header />
        <this.Contens />
        <Outlet />
      </div>
    );
  }

  Header = () => {
    return (
      <header className="header">
        <img src={logo} />
      </header>
    );
  };

  Contens = () => {
    return (
      <main className="contents">
        <this.MasudaInfomation />
        <this.GameDescription />
        <this.GameStart />
      </main>
    );
  };

  MasudaInfomation = () => {
    return (
      <div className="masuda-info">
        <p>
          …<br />
          島根県西部にある市。人口4.3万人。
          <br />
          面積は733.9㎢、島根県の市で最も広い。
          <br />…
        </p>
      </div>
    );
  };

  GameDescription = () => {
    return (
      <div className="game-description">
        <this.Introduction />
        <this.Rule />
        <this.Warning />
      </div>
    );
  };

  GameStart = () => {
    return (
      <div className="game-start">
        <Link to="/play">
          <img src={start} />
        </Link>
      </div>
    );
  };

  Introduction = () => {
    return (
      <div className="introduction">
        <h3>INTRODUCTION</h3>
        <p>
          これは、島根県益田市をテーマにした謎解きゲームです。
          <br />
          謎を解きながら、益田市を知ることができます。
          <br />
          益田市についての事前知識は必要ありません。
          <br />
          すべての謎を解き明かし、クリア画面へ辿り着いてください。
          <br />
        </p>
      </div>
    );
  };

  Rule = () => {
    return (
      <div className="rule">
        <h3>RULE</h3>
        <p>
          表示される問題下部に回答欄があります。
          <br />
          回答は<strong>ひらがな</strong>で入力してください。
          <br />
          謎を解くに当たって、必要そうな知識は
          <br />
          検索して頂いて構いません。
          <br />
        </p>
      </div>
    );
  };

  Warning = () => {
    return (
      <div className="warning">
        <h3>WARNING</h3>
        <p>
          ソースコードを解析して回答する行為は、これを禁じます。
          <br />
          また、最新版のChromeでのプレイを推奨します。
          <br />
        </p>
      </div>
    );
  };
}

export default Start;
