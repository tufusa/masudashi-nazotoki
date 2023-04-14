require 'json'

quizzes_info_source = [
  {
    path: '../images/q1.png',
    answer: 'たかつがわ',
    name: '高津川',
    descPath: '../images/q1-desc.png',
    description: '益田市を縦断するように流れる一級河川。全国の一級河川で唯一ダムがない。
                  日本有数の清流として知られ、国土交通省が毎年発表する「水質が最も良好な河川」に
                  過去8回選出されている。また、その水質の良さから中上流域では鮎が獲れ、
                  鮎の「聖地」と言われることもある。'
  },
  {
    path: '../images/q2.png',
    answer: 'かもしま',
    name: '鴨島',
    descPath: '../images/q2-desc.png',
    description: 'かつて高津沖に存在したと云われる島。諸説ある柿本人麻呂の終焉地とされる場所の一つである。
                  1026年(平安時代)の万寿地震によって海中に没したと伝わる。
                  学術調査によって、地震が発生したことはほぼ間違いないことが分かっている。
                  しかしながら直接的な証拠はなく、平安には<s>小鳥<s>が歌うのどかな島であったのか、
                  それとも伝説に過ぎないのかは、今も謎のままである。'
  },
  {
    path: '../images/q3.png',
    answer: 'ひきみ',
    name: '匹見町',
    descPath: '../images/q3-desc.png',
    description: '益田市南部の町。匹見川中流域には匹見峡と呼ばれる渓谷地帯が広がっており、
                  奇岩や滝などを見ることができる。匹見峡は4つのエリアに分かれるが、
                  その中でも「裏匹見」は地形が鋭く、切り立った断崖が魅力的。
                  また、匹見峡温泉という温泉があり、匹見の美しい自然を眺めながら温泉を楽しめる。
                  駐車場横の<s>たぬき<s>の置物はちょっと怖い。'
  },
  {
    path: '../images/q4.png',
    answer: 'まんぷくじ',
    name: '萬福寺',
    descPath: '../images/q4-desc.png',
    description: '平安時代創建の時宗の寺院。国の重要文化財に指定されている。
                  庭園は雪舟の作と伝えられており、雪舟四大庭園の一つである。
                  ちなみに、益田市は雪舟の没地でもある。庭園は仏教世界観の「須弥山世界」を
                  表現した、明るく比較的平坦な庭。無心で眺めていればもしや<s>悟り<s>が開けるかもしれない。'
  },
  {
    path: '../images/q5.png',
    answer: 'はちみつ',
    name: '空港はちみつ',
    descPath: '../images/q5-desc.png',
    description: '益田市の萩・石見空港では「萩・石見空港ミツバチプロジェクト」と称して養蜂が行われており、
                  そのブランドが空港ハチミツ。石見空港の周囲に建物がなく風通しがいい環境が養蜂に適しており、
                  その複雑でフルーティーな味わいが大変人気。
                  はちみつの頂点を決めるコンテスト「ハニー・オブ・ザ・イヤー」で最優秀賞を受賞したこともある。'
  },
  {
    path: '../images/q6.png',
    answer: 'かきのき',
    name: 'ダイニングカフェ柿の木',
    descPath: '../images/q6-desc.png',
    description: '持石海岸沿いに立つレストラン。テラス席からは日本海が一望でき、稀にイルカが見えることも。
                  メニューやドリンク、スイーツも豊富。チキン南蛮が美味しい。カキフライも美味しい。ピザも美味しい。
                  というより何を頼んでも間違いない。
                  自転車スタンドが設置されており、サイクリストにもお勧め。'
  },
  {
    path: '../images/q7.png',
    answer: 'ぐらんとわ',
    name: 'グラントワ',
    descPath: '../images/q7-desc.png',
    description: '正式名称は島根県芸術文化センター。島根県立石見美術館と島根県立いわみ芸術劇場が合体した
                  複合施設であり、美術館と劇場が同じ建物内にある。愛称のグラントワ(\'Grand/s/toit\')は
                  フランス語で広い屋根という意味であり、大きな切妻屋根や、
                  外壁までもが石州瓦で覆われていることに由来する。また、グラントワ・ユース・コールという
                  合唱団が活動しており、グラントワでのコンサートや病院での演奏などにも出演している。'
  },
  {
    path: '../images/q8.png',
    answer: 'かきのもと',
    name: '柿本神社',
    descPath: '../images/q8-desc.png',
    description: '高津町に鎮座する、柿本人麻呂を祀る神社。
                  人麻呂が鴨島で没した際に、その霊を祀るために造営されたが、その後鴨島は沈没。
                  幸いにも御神体が対岸に流れ着き、改めて再建されたと云われている。
                  「人麻呂」を「火止まる」や「人産まる」と解して、火防や安産の神としても崇められている。
                  柿本人麻呂の誕生を祝って毎年陰暦の8月1日に八朔祭という祭りが催され、
                  その際神事として行われる流鏑馬でも有名である。'
  },
  {
    path: '../images/q9.png',
    answer: 'いわみかぐら',
    name: '石見神楽 / 石見かぐら',
    descPath: '../images/q9-desc.png',
    description: '石見神楽は、島根県西部で受け継がれる伝統的な神事。唯の神事の枠を超え、
                  娯楽性を高めた大衆的な芸能として知られる。軽快で激しい舞が特徴である。
                  益田市では、祭事のほかに駅前ビルEAGAで定期公演が行われている。<b><s><b>
                  石見かぐら(@kagura183ch)は、島根県益田市出身のVTuber。名前の由来はもちろん石見神楽。
                  地元を盛り上げるため、配信のみならず益田市のイベントに出たり企業とコラボしたり
                  精力的に活動している。結構伸びてきている。歌が上手い。'
  },
  {
    path: '../images/q10.png',
    answer: 'はくしゅかっさい',
    name: '拍手喝采',
    descPath: '',
    description: 'あなたはすべての謎を解いた。'
  }
]

ts_code = JSON.generate(quizzes_info_source.map{ _1.map.to_h{ |k, v| [k, v.gsub(?\n, '').gsub(?\s, '').gsub('/s/', ?\s).unpack('U*').map{|c| "0x#{c.to_s(16)}" }] } }).to_s
              .gsub!(/"(0x\w+)"/, '\1')
              .gsub!(/"(path|answer|name|descPath|description)"/) do
                {path: 'p', answer: 'a', name: 'n', descPath: 'dp', description: 'd'}[$1.to_sym]
              end
File.open("#{__dir__}/quizzes-info-source.tsx", 'w') do
  _1.write "import { QuizInfoSource } from \"./quiz-info-source\"\nexport const quizzesInfoSource: QuizInfoSource[] = #{ts_code}"
end