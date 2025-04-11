document.addEventListener('DOMContentLoaded', function () {
    const koButton = document.getElementById('ko');
    const enButton = document.getElementById('en');

    // 텍스트 및 링크 번역
    const translations = {
        en: {
            description: 'Seasional Musings - 계절의 단상들<br><br><br>1<br><br>There are moments when I can no longer keep up with the pace at which seasons slip away. Some say that all one needs to do is smile and step out, yet there are times when even this simple gesture feels too much. I‘m not entirely sure why I started writing this. Perhaps it’s because I feel urge to spit something out-anything at all-so I open a blank note and let the words spill out in a chaotic flow. The scent of winter arriving, the scent of spring creeping in - people often speak of these seasonal fragrances, their words imbued witha kind of carefree excitement, as if drawn from the pages of a long-forgotten movie. And I, too, nod along as though I understand, convinced that I truly know what they mean. But did I truly know it? Maybe half of it was true, and the other half wasn‘t. Perhaps I could sense the subtle shift in the air, the way it tugs at the skin, or maybe I was simply trying too hard to believe in something I couldn’t fully grasp.<Br><br>The word ‘burdensome’-perhaps its true essence is simply ‘effort’. The effort to keep up, to remain tethered to something, even as everything else begins to slip away.<Br><Br><Br>2<Br><Br>Last autumn seemed entangled in a restless warmth, while the spring that has come now is tinged with a biting wind. It’s only now that I understand the saying, “The heart aches as though struck by a knife, even by the gentlest breeze.” In the long, drawn-out winter of London, the arrival of spring should be a cause for joy – so why does my heart hurt even on such clear, bright days? It makes me wonder if this is why people pour their hearts into the word ‘youth’, despite its simplicity. “Blue spring” – it’s a phrase that, no matter how much I reflect on it, seems perfectly crafted.<br>Lately, I’ve been listening to numerous songs that include the word ‘spring’.* I didn’t go searching for them; rather, they’ve come to me, drifting through the tangled algorithms, settling in my ears. “From a distance, it’s a comedy; up close, it’s a tragedy.” Though I understand, in my head, that life is something we live while holding our individual pains close, there are times when I see others smiling, carefree, and my heart quietly sinks. Even though I know I should be embracing a brighter perspective, the weight of my own reality – one I must simply endure – brings tears to my eyes unexpectedly. In those moments of conflicting emotions, I find myself growing weary of my own immaturity. When, I wonder, will I finally become an grown-up? This thought lingers with me, resurfacing multiple times a day as I grow frustrated with myself. If you ask what a “great grown-up” is, well, for now, I suppose it’s someone who remains honest and unshaken, warm in their straightforwardness.<br><br><br><i>＊HANRORO - Let Me Love My Youth<br>＊SE SO NEON - NAN CHUN <br>＊THORNAPPLE - Blue Spring<br><br><br>3<br><br>Last autumn, I found myself surrounded by countless ginkgo trees in the corners of Seoul. Their yellow leaves blanketed both the trees and the ground, evoking a scene from my distant childhood that I can no longer pinpoint to a specific day. It brought back the autumns of Korea, a season I had long forgotten over the past three years. As for autumn in London—well, it feels somewhat like the fleeting disappearance of spring, with green leaves falling away in a matter of days, leaving behind a sense of quiet emptiness. There is hardly any time to think, “Is it autumn now, or the beginning of winter?” before it passes too quickly. In the absence of colours, like the vibrant hues that paint Seoul’s autumn, this season does not feel like autumn at all for me.<Br>So, as I stood before Seoul’s ginkgo trees once again, I thought, “Ah, so this is what autumn is like.” But then a complex thought struck me—can what I know as autumn truly be called autumn? What I consider to be autumn might not be autumn to someone else. And what I take as my everyday, ordinary life might not be so ordinary to another. If that is the case, can my common sense truly be called common? Can my standards truly be considered standards? In the midst of these spiraling thoughts, everything began to waver.<br><br><br>4<br><br>Without even being in a car, it feels as though I’m racing through an empty sky without rails, and my stomach keeps turning.<Br><Br><Br>5<Br><Br>Life is not something to be compared, yet I often find myself repeating, “This isn’t such a bad life, one I cannot complain about.” At times, this thought makes me feel so selfish that a hollow laugh escapes me. The version of myself that once believed in the inherent goodness of people now finds that belief shaken, as I have kindled the flame of doubt in what was once a firm conviction.<Br>What might be enviable in someone else’s life becomes a source of discomfort when it becomes mine. When I look at how weary I am from such modest struggles, I can’t help but think, “I’ve lived a remarkably easy life.” They say that there is a finite amount of happiness and unhappiness in the world. And so, the trials that I’ve managed to avoid until now have come all at once, making me feel that this moment is the first time I am experiencing a bitter spring in my life. It feels so indulgent, I almost feel ashamed. Yet, the reason I call it a bitter spring rather than a dark winter is that I still possess the strength to strive, to search for small joys. In that struggle, I quietly seek reasons to live, to find something in what I’ve lost. One thing is certain: this bitter spring is giving me something in return.<br><br><br>6<br><br>I would like to share the words that have been my phone’s wallpaper for nearly two years.<br><br><i>The oak trees were laden with acorns, and if you stood patiently beneath them, you could expect at least one acorn to fall and strike your head, and if you were lucky, perhaps two would hit you one after another, and if the wind happened to blow, several could come down at once and knock you senseless. After being struck by these acorns, it was even possible to find a strange sort of pleasure in being deliberately hit by the very acorns that had caused the pain. And so, when I found myself feeling down at night, or unable to sleep like the insomniacs all over the world, I felt a sense of solidarity with them—though I knew there was nothing we could do together. There were times when I didn’t know what to do, or when I longed to be punished for things I hadn’t done, or when I simply wanted to be jolted awake by a blow. In those moments, I would sometimes stand beneath the oak tree.</i><br><br>정영문(Jeong Yeong-moon), <강물에 떠내려가는 7인의 사무라이 (Seven Samurai Drifted by the River)><br><br><i>* Since this book does not have an officially translated version, I translated it myself. Therefore, there may be some slightly unnatural parts.</i>',
            commentinfo: 'You can check the comments from here',
            messageInput: 'Write your comments',
            submitMessage: 'Add',
            instagram: '@yejin.wip',
            website: '▫ yejinschoi.com ↗',
        },
        ko: {
            description: '계절의 단상들<br>ー季節についての想い または 季節の考察<br><br>*<i>日本語で書かれた文章は、韓国語の文章の下に記載されています</i><br><br><br>1<br><br>계절이 스쳐가는 속도를 마음이 따라가지 못할 때가 있습니다. 혹자는 같이 나가 웃으면 된다고 하지만, 그조차도 버겁게 느껴질 때가 있습니다. 이 글을 왜 쓰기 시작했는지도 모르겠습니다. 그냥 뭐라도 뱉어내지 않으면 안될 것 같아, 메모장을 켜고 두서없이 글을 써내려갑니다. 겨울이 오는 냄새, 봄이 오는 냄새. 사람들은 계절의 냄새를 이야기하며 들뜨곤 합니다. 마치 언젠가 스쳐 봤던 만화영화 속 한 장면 같은 그런 대사와 함께. 그리고 나도, 그게 뭔지 안다며 고개를 주억입니다. 나는 정말로 그것을 알았던 걸까요. 지금 생각해보면, 반은 맞고 반은 아닌 것도 같습니다. 살에 닿는 미세한 변화를 알아차렸던 것도 같고, 내가 알아차리지 못한 무언가를 애써 ‘안다’고 믿으려 했던 것일지도 모르겠습니다.<br><br>‘버겁다’의 다른 말은 ‘노력하고 있다’일겁니다.<br><br><br>2<br><br>지난 가을은 불안한 온기로 엉킨 듯했고, 다가온 봄은 시린 바람으로 물들어 있습니다. 스치는 바람에도 칼에 베인 것처럼 마음이 아프다는 말을 이제서야 이해합니다. 겨울이 길고도 긴 런던에서, 봄이 돌아온 소식은 반가워해야 마땅한데- 왜 이렇게 맑은 날씨에도 마음이 아린건지요. 이래서 다들, 별다를 것 없는 ‘청춘’이라는 단어에 마음을 주는건가 생각해봅니다. ’푸른 봄’이라ー아무리 생각해도 잘 만든 말입니다.<br>봄이라는 한자가 들어간 곡들을 많이 듣고 있습니다. <i>입춘, 난춘, 시퍼런 봄 *</i>. 부러 찾아 들은 것도 아닌데, 수많은 알고리즘 사이를 헤매다 귀에 감겨오는 곡들이 그렇습니다. ‘멀리서 보면 희극, 가까이서 보면 비극’이라고, 각자의 쓰라림을 그러안고 사는 것이 삶이라는 것을 머리로는 너무나도 잘 알고 있으면서도, 타인의 즐거운 모습을 보고는 마음이 조용히 가라앉을 때가 있습니다. 밝은 모습이 좋다는 생각이 들면서도 버텨내고 있는 내 현실이 떠올라 괜시리 눈물이 차오르는. 그런 양가적인 마음이 들 때면, 아직까지도 마음이 자라지 못한 내 모습에 신물이 납니다. 언제쯤 어른이 될 수 있을까요. 이런 내 모습이 싫어 하루에도 몇 번씩 멋진 어른이 되고 싶다는 생각을 합니다. 멋진 어른이 뭐냐 묻는다면, 글쎄요. 지금까지의 마음으로는 솔직하면서도 뒤틀리지 않은, 올곧기에 따뜻한 그런 사람이랄까요.<br><br><br><i>＊한로로 (HANRORO) - 입춘 (Let Me Love My Youth)<br>＊새소년 (SE SO NEON) - 난춘 (NAN CHUN) <br>＊쏜애플 (THORNAPPLE) - 시퍼런 봄 (Blue Spring)</i><br><br><br>3<br><br>지난 가을, 서울의 구석구석에서 수많은 은행나무를 보았습니다. 나무며 바닥이며, 온통 노란빛으로 물든 그 모습은 언제 어느 날인지도 기억나지 않는,  까마득한 어린 시절의 한 장면을 떠올리게도 했고, 지난 3년 동안 잊고 있던 한국의 가을을 마주하게 했습니다. 런던의 가을은, 봄이 순식간에 사라지는 것처럼, 푸르렀던 잎들이 며칠 사이에 우수수 떨어져 사라져버리는, 저에게는 다소 황망한 계절입니다. ‘이제 가을인가, 아니면 겨울의 시작인가’라는 생각을 할 틈도 없이, 너무나도 빠르게 지나가버리는 그런 계절. 서울의 가을처럼 색색깔로 물들지 않는 시간들에 이 계절이 가을처럼 느껴지지 않는 것 같습니다.<br>그리하여 오랜만에 마주한　서울의 은행나무에 ‘그래, 가을이란 이런 거지’ 생각을 하다 문득, 내가 알고 있는 가을이 정말 가을이 맞는 걸까, 라는 복잡한 생각에 빠졌습니다. 내가 알고 있는 가을이 누군가에게는 가을이 아닐테니까요. 내가 알고 있는 평범한 일상이 누군가에게는 평범하지 않을 테고요. 그렇다면 나의 상식이 정말 상식이 될 수 있는 건지, 나의 기준이 과연 기준이라 불릴 수 있는 건지. 이 꼬리에 꼬리를 무는 복잡한 소용돌이 속에서 모든 것이 흔들려버렸습니다.<br><br><br>4<br><br>차를 탄 것도 아닌데, 레일 없는 허공을 달리는 듯, 자꾸만 속이 울렁입니다.<br><br><br>5<br><br>삶은 비교 대상이 아니지만, ‘이 정도면 나쁘지 않은 삶이다, 불평할 수 없는 삶이다’ 되뇌이곤 합니다. 이런 내가 너무나 이기적이라는 생각이 들어 헛웃음이 나옵니다. 성선설을 믿던 과거의 나는 이제, 꽤나 확고했던 그 믿음에 의심의 불씨를 지폈습니다. <br>누군가에게는 부러움이 될 수 있는 일상도 나의 것이 되면 괴로운건 어쩔 수 없습니다. 이정도에 고달파하는 나를 보면, 한 편으로는 ‘참으로 편안한 인생을 살아왔구나’ 생각합니다. 행복과 불행의 총량이 있다지요. 그리하여 지금까지 나를 빗겨가던 고난들이 한 번에 찾아와, 지금이 인생에서 처음으로 겪는 시린 봄이라는 생각이 듭니다. 사치스럽기가 그지없어 부끄럽기까지 합니다. 그럼에도 스스로 어두운 겨울이 아닌 시린 봄이라고 부르는 이유는, 소소한 행복을 찾으려 아직은 바둥거릴 힘이 있기 때문일겁니다. 그 안에서, 살아갈 이유를, 잃는 것 속에서 얻는 것을, 조용히 찾아가고 있습니다. 분명한건, 내 시린 봄은 나에게 무언가를 주고 있다는 겁니다.<br><br><br>6<br><br>근 2년간 핸드폰 배경화면을 지켜주던 글을 공유하고 싶어 이렇게 남깁니다. <Br><br>상수리나무들에는 도토리가 아주 많이 달려 있어 나무 아래에서 참을성을 갖고 기다리며 서 있으면 떨어지는 도토리에 최소한 하나는 머리에 얻어맞을 수 있었고, 운이 좋으면 두 개 연달아 얻어맞을 수도 있었고, 때마침 바람이라도 불면 여러 개 동시에 두들겨 맞을 수도 있었는데, 도토리들에 머리를 얻어맞고 나면, 다른 것도 아닌 도토리들에 고의로 괜히 머리를 얻어맞는 건 기분 좋은 일이야, 하고 생각할 수도 있었고, 그래서 나는 밤에 기분이 가라앉거나, 역시 밤에 잠을 이루지 못하며 제시간에 잠들지 못하는 전 세계의 불면증 환자들에게 연대감을 느끼며, 하지만 우리가 함께할 수 있는 건 없다는 생각이 들거나, 뭘 해야 좋을지 모를 때나, 죄지은 건 없지만 따끔한 벌을 받고 싶을 때나, 그냥 좀 얻어맞고 정신을 차리고 싶을 때면 가끔 상수리나무 아래에 가 서 있곤 했다.<br><br>정영문, <강물에 떠내려가는 7인의 사무라이><br><br><br><hr><br>1<br><br>季節が過ぎていく速度に心が追いつけない時があります。誰かは「一緒に外に出て笑えばいいよ」と言うのですが、その一歩さえも、どうしてか重たく感じる時があるのです。なぜこの文章を書き始めたのか、自分でもよく分かりません。ただ、何かを吐き出さなければいけない気がして、メモ帳を開いて、取り留めもなく言葉を綴っています。冬の匂い、春の匂い。人々は季節の匂いについて語り、とこか浮き立った様子を見せます。まるでいつか見たアニメのワンシーンのような、そんなセリフとともに。そして私も、「わかる、わかる」と頷いてみせます。しかし、本当にそれを「知っていた」のでしょうか。今改めて考えてみると、半分は本当で、半分はそうでもなかったような気がします。肌に触れる微かな変化を、確かに感じ取っていたようにも思えるし、自分が気づかなかった何かを、必死に「知っている」と思い込もうとしていただけなのかもしれません。<br><br>『重い』という言葉の別の意味は、きっと『努力している』ということなのでしょう。<br><br><br>2<br><br>去年の秋は、不安な温もりで絡み合っていて、迎えた春は、冷たい風で染まっています。風が通り過ぎるたびに、まるで刃で切られたように心が痛いという言葉を、今になって理解します。長くて寒いロンドンの冬の中で、春が戻ってきたと聞けば、喜ばなければならないはずなのに—どうしてこんなに晴れた天気の中でも、心が痛むのでしょうか。だからこそ、みんなが 「青春」 という言葉に心を寄せるのかな、とふと考えてしまうのです。青い春 という言葉—何度考えても、本当に良くできた言葉です。そして韓国語でも日本語でも同じように使われていることに、何かしらみんながつながっている気がして面白く感じるのです。<br>最近は、「春」という字が入った曲をよく聞いています。立春、暖春、青い春。わざわざ探して聞いたわけではないのですが、数多くのアルゴリズムの中で迷いながら、自然に耳に入ってきた曲たちがそうでした。「遠くから見れば喜劇、近くから見れば悲劇」と言うように、各々の苦しみを抱えながら生きることが人生だと、頭ではよく理解しているのですが、他人の楽しそうな姿を見て、心が 静かに沈む 時があるのです。明るい顔を見て、「よかった」と思う一方、自分の痛みが無性に胸に込み上げてくる。そんな 複雑な気持ち が湧いてくるとき、まだ 大人になれない自分 に、強烈な嫌気がさしてきます。一体、いつになったら大人になれるのでしょうか。こんな自分が嫌いでたまらなくて、一日に何度も「素敵な大人になりたい」と思うのです。「素敵な大人って何だろう？」と聞かれれば、そうですねー今の私の心から言うなら、正直で歪みのない、真っ直ぐだからこそ温かい人 でしょう。<br><br><br>3<br><br>昨年の秋、ソウルのあちこちでたくさんのイチョウの木を見ました。木々も地面も、すべてが黄色に染まっていたその姿は、いつ、どこで見たのかも記憶にない、遠い幼少期の一場面を思い出させ、そして過去3年間、忘れかけていた韓国の秋を再び感じることができたのです。ロンドンの秋は、春が一瞬で消えてしまうように、青々とした葉が数日間で一気に散り落ちてしまう、私にはどこか物寂しい季節です。「もう秋なのか、それとも冬の始まりなのか」と考える暇もなく、あっという間に過ぎ去ってしまう、そんな季節。ソウルの秋のように色とりどりに染まることのない時間の中では、この季節が本当に秋らしいとは感じられない自分です。<br>そして、久しぶりに出会ったソウルのイチョウの木を見て「そう、秋ってこういうものだよな」と思った瞬間、ふと、自分が知っている秋が本当に秋と言えるのか、という複雑な思いに囚われました。自分の知っている秋は、誰かにとっては秋ではないかもしれない。自分の知っている日常が、誰かにとっては日常でないかもしれない。それならば、私の常識が本当に常識として通用するのか、私の基準が果たして基準と呼べるものなのか。次々に湧いてくるこの複雑な思考の中で、すべてが揺らぎ始めたのです。<br><br><br>4<br><br>車に乗っているわけでもないのに、レールのない空を走っているかのように、心が何度も揺さぶられるような感覚に襲われます。<br><br><br>5<br><br>人生は比較の対象ではないはずなのに、「これくらいなら悪くない人生だ、文句を言える立場じゃない」と何度も自分に言い聞かせます。そんな自分があまりにも利己的だと感じ、ふと空しく笑ってしまうのです。かつては性善説を信じていた自分も、今ではその確固たる信念に疑念の火種を灯してしまいました。<br>誰かにとっては羨ましく思える日常も、いざ自分のものとなると苦しみに変わる。同意用もないことです。こんなにも疲れを感じている自分を見て、心のどこかで「本当に楽な人生を送ってきたんだな」と思うこともあります。幸せと不幸には総量があると言われる。そうして、今まで自分から遠ざかっていた苦難が一度に押し寄せ、今が人生で初めて経験する「冷たい春」だと感じるのです。それがあまりにも贅沢に思えて、恥ずかしくもなる。<br>それでも、暗い冬ではなく冷たい春と思い込む理由は、まだ小さな幸せを見つけようと足掻く力が自分には残っているからでしょう。その中で、生きる理由を、失う中で得るものを、静かに探し続けています。確かなのは、私の冷たい春から何かを与えられていると言うこと。<br><br><br>6<br><br>ほぼ2年間、携帯電話の壁紙を飾っていた文章です。シェアしたいと思い、残しておきます。<Br><br>「オークの木にはたくさんのどんぐりが実っていて、木の下で忍耐強く待っていると、落ちてくるどんぐりが頭にぶつけられることができ、運が良ければ、連続して2つ頭に当たることもあり、風でも吹けば同時にいくつも頭に当たることもあったのだが、どんぐりに頭をぶつけられた後は、他でもなく、わざとどんぐりで頭をぶつけられるのが気持ちいいことだと思うこともあって、だから私は夜に気分が沈んだり、寝つけなかったりして、世界中の不眠症の患者たちに共感を感じながら、でも一緒にできることは何もないという思いが湧いてきたり、どうしていいのかわからない時や、何も悪いことをしていないのに厳しい罰を受けたくなったり、ただ少し頭をぶつけて目を覚ましたいと思った時は、たまにオークの木の下に立ってはいたのだ。」<br><br>정영문(チョン・ヨンムン), <강물에 떠내려가는 7인의 사무라이(川に流される7人の侍)><br><br>*<i>本書には公式に翻訳されたバージョンが存在しませんので、私自身が翻訳したものです。全体の文章が途切れることなく一文で繋がっている部分をできるだけ活かすように翻訳しましたが、そのために若干不自然な部分が多少あります。</i>',
			commentinfo: '남겨주신 이야기들은 여기서 확인하실 수 있습니다',
			messageInput: '메세지를 입력하세요',
			submitMessage: '추가',
            instagram: '@sansan.wip',
            website: '▫ yejinschoi.com &#x2197;',
        }
    };
// 언어 선택이 변경되었을 때 텍스트 업데이트
    koButton.addEventListener('click', function () {
        updateLanguage('ko');
    });

    enButton.addEventListener('click', function () {
        updateLanguage('en');
    });

    // 언어를 업데이트하는 함수
    function updateLanguage(language) {
        // 번역된 텍스트 적용
        const translation = translations[language];
        document.getElementById('description').innerHTML = translation.description;
        document.getElementById('commentinfo').innerHTML = translation.commentinfo;
        document.getElementById('messageInput').placeholder = translation.messageInput;
        document.getElementById('submitMessage').innerHTML = translation.submitMessage;
        document.querySelector('p2 a[href="https://www.instagram.com/sansan.wip?igsh=b2xyaHJpeG9zMTlm"]').innerHTML = translation.instagram;
        document.querySelector('p2 a[href="https://yejinschoi.com/"]').innerHTML = translation.website;

        // 언어에 맞게 lang 속성 업데이트
        document.documentElement.lang = language;

        // 버튼에 active 클래스를 적용해 밑줄 표시
        if (language === 'ko') {
            koButton.className = koButton.className.replace('active', '') + ' active';
            enButton.className = enButton.className.replace('active', '');
        } else if (language === 'en') {
            enButton.className = enButton.className.replace('active', '') + ' active';
            koButton.className = koButton.className.replace('active', '');
        }

        // 언어 설정을 로컬 스토리지에 저장 (예외 처리 추가)
        try {
            localStorage.setItem('language', language);
        } catch (error) {
            console.error("LocalStorage not available:", error);
        }
    }

    // 페이지가 로드될 때, 로컬 스토리지에서 언어 값 가져오기
    const savedLanguage = localStorage.getItem('language') || 'ko'; // 기본값은 'ko'
    updateLanguage(savedLanguage); // 로컬 스토리지에 저장된 언어로 초기화
});
