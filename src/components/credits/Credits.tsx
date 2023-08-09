import 'css/credits/Credits.scss';

export const Credits = () => {
  return (
    <div className="Credits">
      <CreditsText />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <img src="../images/masuda_logo.png" />
    </header>
  );
};

const CreditsText = () => {
  return (
    <div className="text">
      <h3>CREDITS</h3>
      <h4>制作</h4>
      <p>Tungsten</p>
      <br />
      <p>以下 敬称略</p>
      <h4>紹介させていただいた場所・人物・事柄</h4>
      <p>
        <a href="https://masudashi.com/kankouspot/kankouspot-1218/" target="_blank">
          高津川
        </a>
      </p>
      <p>
        <a href="https://www.kankou-shimane.com/destination/21144" target="_blank">
          鴨島跡展望地
        </a>
      </p>
      <p>
        <a href="https://www.all-iwami.com/spot/detail_1054.html" target="_blank">
          匹見峡
        </a>
      </p>
      <p>
        <a href="https://yasuragi-onsen.jp/" target="_blank">
          匹見峡温泉
        </a>
      </p>
      <p>
        <a href="https://masudashi.com/kankouspot/kankouspot-716/" target="_blank">
          萬福寺
        </a>
      </p>
      <p>
        <a href="https://hagiiwami.jp/" target="_blank">
          萩・石見空港
        </a>
      </p>
      <p>
        <a href="https://hagi-iwami.com/SHOP/197539/list.html" target="_blank">
          空港はちみつ
        </a>
      </p>
      <p>
        <a href="https://www.all-iwami.com/gourmet/detail_1673.html" target="_blank">
          ダイニングカフェ柿の木
        </a>
      </p>
      <p>
        <a href="https://www.grandtoit.jp/" target="_blank">
          島根県芸術文化センター グラントワ
        </a>
      </p>
      <p>
        <a href="https://masudashi.com/kankouspot/kankouspot-727/" target="_blank">
          柿本神社
        </a>
      </p>
      <p>
        <a href="https://masudashi.com/iwami-kagura/" target="_blank">
          石見神楽
        </a>
      </p>
      <p>
        石見かぐら(
        <a href="https://twitter.com/kagura183ch" target="_blank">
          @kagura183ch
        </a>
        )
      </p>

      <h4>テストプレイ</h4>
      <p>Teselapfer_</p>
      <p>WD_Kazu</p>

      <h4>フォント</h4>
      <p>
        <a href="https://booth.pm/ja/items/3723139" target="_blank">
          数式フォント(キユマヤ園)
        </a>
      </p>
      <p>
        <a href="https://moji-waku.com/makinas/index.html" target="_blank">
          マキナス 4(もじワク研究)
        </a>
      </p>
      <p>
        <a href="https://booth.pm/ja/items/687528" target="_blank">
          GLT-ごぬんね(noraglyphs)
        </a>
      </p>

      <h4>Special Thanks</h4>
      <p>
        ぐずりあ(
        <a href="https://twitter.com/guzuria_vtuber" target="_blank">
          @guzuria_vtuber
        </a>
        )
      </p>
    </div>
  );
};
