import 'css/clear/Clear.scss';
import { Link } from 'react-router-dom';
import { Credits } from 'components/credits/Credits';
import logo from 'assets/images/masuda_logo.png';
import clear from 'assets/images/clear.png';
import { gameClearAtom } from 'states/gameClear';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAtomValue } from 'jotai';

export const Clear = () => {
  const isGameClear = useAtomValue(gameClearAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isGameClear) {
      navigate('/');
    }
  }, []);

  return (
    <div className="Clear">
      <Header />
      <ClearText />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <img src={logo} />
    </header>
  );
};

const ClearText = () => {
  return (
    <div className="text">
      <img src={clear} />
      <h3 className="gratz">Congratulations!</h3>
      <p>あなたは全ての謎を解き明かした。</p>
      <Credits />
      <Postscript />
      <BackToTitle />
      <Thanks />
    </div>
  );
};

const Postscript = () => {
  return (
    <div className="ps">
      <h3>Postscript</h3>
      <p>
        クリアおめでとうございます！
        <br />
        ここまでプレイしてくださったあなたに<strong>拍手</strong>を！
        <br />
        Web謎初挑戦でした。
        <br />
        私がWeb謎をやる切っ掛けになったのは
        <br />
        ぐずりあ(
        <a href="https://twitter.com/guzuria_vtuber" target="_blank">
          @guzuria_vtuber
        </a>
        )さんの 「Quick+Lazy」でして、
        <br />
        おこがましいことにかなり似せています。
        <br />
        <span className="trans">オマージュの範疇だと思いたい。</span>
        <br />
        この謎解きを楽しんでいただけたのなら、
        <br />
        ぐずりあさんの作品も絶対に楽しめると思うので
        <br />
        是非とも
        <a href="https://sukuranburu.net/riddle" target="_blank">
          プレイ
        </a>
        してみてください。
        <br />
        <br />
        …あと益田市のこともよろしくお願いします。
        <br />
      </p>
    </div>
  );
};

const BackToTitle = () => {
  return (
    <div className="back">
      <Link to="/">トップへ戻る</Link>
    </div>
  );
};

const Thanks = () => {
  return <h2 className="thanks">THANK YOU FOR PLAYING!</h2>;
};
