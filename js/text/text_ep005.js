document.addEventListener('DOMContentLoaded', function () {
    const koButton = document.getElementById('ko');
    const enButton = document.getElementById('en');

    // 텍스트 및 링크 번역
    const translations = {
        en: {
            description: 'The Hypocrisy and Rudeness Behind "Poor Thing"<br><br><br>How we define the phrase “poor thing” may vary depending on context, but in everyday usage, its tone tends to be one-sided, condescending, and — in some ways — even violent.<br><br>I find that expression deeply unsettling.<br>Am I the only one who senses the aggression it carries? Or is it simply that I’m too sensitive?(Although “poor thing” may not carry the same emotional weight or frequency of use in English, in Korean it’s a commonly used phrase — so the discomfort I explore here may not resonate as immediately with a non-Korean speaking audience.)<br><br>Compassion is a deeply human and necessary emotion.But can “poor thing” really be considered an expression of compassion untainted by pity?<br><br>Who am I to so casually pity someone, or to assume they are a person to be pitied in the first place?<br><br>I live my life judging based on what I’ve seen, what I’ve experienced — and perhaps it’s foolish to feel such indignation over a single phrase like “poor thing”.<br>Even so, I want to live a life where I stop to question these things, one by one.<br><br>I want to reflect on my tendency to judge too quickly.<Br>To refine the words I speak and the thoughts I hold.<br>To live with caution, but with strength.<br>To draw boundaries — gently but firmly — and live with awareness.<br><br>- <i>The Hypocrisy and Rudeness Behind "Poor Thing"</i>, 11th Jun, 2025 -<br><br>',
            commentinfo: 'You can check the comments from here',
            messageInput: 'Write your comments',
            submitMessage: 'Add',
            instagram: '@yejin.wip',
            website: '▫ yejinschoi.com ↗',
        },
        ko: {
            description: '불쌍하다는 말에 담긴 위선과 무례함<br><br><br>불쌍하다는 말을 어떻게 정의 내리느냐에 따라, 상황에 따라 다르게 해석될 수 있지만, 사회적으로 통용되는 이 말의 뉘앙스는 다분히 일방적이고, 동정적이며, 폭력적이다.<br><br>나는 그 말이 불편하다<br>불쌍하다는 말을 갖는 폭력성을 나만 느끼는걸까, 아니면 이런 내가 너무 예민한 걸까<br>연민이란 너무나도 자연스러우며 인간이 가져야 마땅한 감정이지만,<br>불쌍하다라는 표현이 동정 없는 연민을 담은 표현이라고 할 수 있는가<br>내가 감히 뭐라고 누군가를 쉽게 동정하고 동정할 대상이라 판단하는가<br><br>내가 경험한 것, 내 눈에 보이는 것을 근거로 판단하며 사는 내가<br>‘불쌍하다’는 단 하나의 표현에 울분을 토하는 것도 우스운 일이다.<br>하지만 나는 그렇게 하나씩 짚어나가는 삶을 살고 싶다.<br><br>섵불리 판단하는 나를 반성하고<br>내가 뱉는 말과 생각을 다듬으며<br>조심스럽고도 단단하게, 그렇게, 경계하는 삶을 그린다.<br><br><br>- <불쌍하다는 말에 담긴 위선과 무례함>, 2025년 6월 11일의 기록 -<br><br><hr><br>「かわいそう」に潜む偽善と無礼<br><br><br>「かわいそう」という言葉は、その定義の仕方によって、または状況によってさまざまに解釈されうるものだけれど、社会的に一般に使われるその語感は、一方的で、同情的で、そしてどこか暴力的でもあるように思う。<br><br>私はこの言葉に、どこか居心地の悪さを感じる。<br>「かわいそう」という言葉に含まれる暴力性を、私だけが感じているのだろうか。それとも、そう感じる自分が、やっぱり神経質すぎるのだろうか。<br>「かわいそう」という言葉は、果たして“同情“を伴わない“憐み“を表す表現と言えるのだろうか。<br>「憐れみ」という感情は、人間にとってごく自然で、持つべき感情だと思う。<br>でも、私ごときが、誰かを軽々しく同情し、同情の対象だと判断していいのだろうか。<br><br>自分が経験したこと、自分の目に映ったものを基準にして物事を判断しながら生きているちっぽけな私が、<br>たったひと言の「かわいそう」に対して憤りを感じるのは、どこか滑稽かもしれない。<br>だけど私は、そんなふうに一つ一つのことに立ち止まりながら生きていきたい。<br><br>軽率に物事を決めつける自分を省みて、<br>自分が口にする言葉や心の中の思考を、少しずつ整えていく。<br>慎重に、だけどしなやかに。<br>そんなふうに、自分なりに境界線を持って生きることを描く。<br><br>- 「「かわいそう」に潜む偽善と無礼」、2025年06月11日の記録 -<br><br>',
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
        const translation = translations[language];

        // 텍스트 언어 감지 및 span 감싸기
        const styledDescription = wrapByLanguage(translation.description);
        document.getElementById('description').innerHTML = styledDescription;

        // 기존 UI 업데이트
        document.getElementById('commentinfo').innerHTML = translation.commentinfo;
        document.getElementById('messageInput').placeholder = translation.messageInput;
        document.getElementById('submitMessage').innerHTML = translation.submitMessage;
        document.querySelector('p2 a[href="https://www.instagram.com/sansan.wip?igsh=b2xyaHJpeG9zMTlm"]').innerHTML = translation.instagram;
        document.querySelector('p2 a[href="https://yejinschoi.com/"]').innerHTML = translation.website;

        // 언어 설정을 로컬 스토리지에 저장 (예외 처리 추가)
        try {
            localStorage.setItem('language', language);
        } catch (error) {
            console.error("LocalStorage not available:", error);
        }

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
    }

    // 페이지가 로드될 때, 로컬 스토리지에서 언어 값 가져오기
    const savedLanguage = localStorage.getItem('language') || 'ko'; // 기본값은 'ko'
    updateLanguage(savedLanguage); // 로컬 스토리지에 저장된 언어로 초기화

    // 언어별 텍스트 감싸기 함수
    function wrapByLanguage(text) {
    // 각 문장을 \n(줄 바꿈)을 기준으로 분리하여 각각에 span 태그를 적용합니다.
    // 한국어와 영어를 분리하여 각기 다른 스타일로 적용
    return text.split('\n').map(line => {
        // 한국어 텍스트는 'ko' 클래스를, 영어 텍스트는 'en' 클래스를 사용
        if (/[가-힣]/.test(line)) {
            return `<span class="ko">${line}</span>`;
        } else {
            return `<span class="en">${line}</span>`;
        }
    }).join('<br>'); // 줄 바꿈은 <br> 태그로 처리
}
});