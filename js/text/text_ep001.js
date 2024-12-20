document.addEventListener('DOMContentLoaded', function () {
    const koButton = document.getElementById('ko');
    const enButton = document.getElementById('en');
    const languageSelector = document.getElementById('language-selector');

    // 텍스트 및 링크 번역
    const translations = {
        en: {
            description: 'Reflections on Space<br><br>The translation will be updated soon. Sorry for your inconvenience',
			commentinfo: 'You can check the comments from here',
			messageInput: 'Write your comments',
			submitMessage: 'Add',
            instagram: '@yejin.wip',
            website: '▫ yejinschoi.com ↗',
        },
        ko: {
            description: '공간에 대한 생각<br><br>할머니 할아버지께서 직접 설계하여 지으신 집이 있었다. 엄마랑 이모들은 그 집에서 자랐다고 했다. 나의 어린 시절 기억 한 켠에도 그 집은 어렴풋이 존재한다. 엄마가 자라고 연휴에 우리 가족이 가던 그 집은 ‘응답하라 1988’에서나 볼 수 있는, 이제는 찾아보기 힘든 정겨운 우리네 집의 모습이었다.<br>부모님이 젊은 시절 이야기를 해줄 때면, 이야기 속에 자신들이 나고 자란 집과 서울의 여러 곳들이 등장했고, 나는 나이를 먹으며 자연스레 그 장소들을 정겹게 느끼게 되었다. 주변 동네 이름을 들을 때면 그 곳에 대해 아는 것도 없으면서 이상하게 친근감이 느껴졌고, 어쩌다 근처를 지나가기만해도 괜히 커피 한 잔 할 곳을 찾으며 더 머물고 싶어했다. 서울의 역사가 묻어있는 공간 어딘가에 부모님의 자취가 남아있을거라는 생각에 마음이 벅차곤 했다. 공간이 젊은 시절의 부모님을 기억할 것만 같아서, 그리고 그 시절의 부모님과 같은 공간을 걷고 있다는 사실이 괜시리 즐거워서 말이다.<br><br>도시의 삶은 늘 불안정하다. 그러니 서울에서의 삶도 런던에서의 삶도 모두 불안정하고 이상하게 느껴지는 것은 당연할지도 모른다. 그 이유는 다양하겠지만, 나의 경우에는 ‘나에게 돌아갈 곳이 있는가?’라는 질문이 늘 마음 속에 자리 잡고 있기 때문일 것이다. 항상 도시의 아파트에서 살아온 나에게 도시-아파트라는 이 일반적인 공간은 굉장히 익숙하고 안전하며 편리하지만, 동시에 땅에 발을 딛고 있지 않은 듯한 붕 뜬 공간으로도 느껴진다. 규격화된 공간 안에서 언제든 교체될 수 있는 하나의 유닛(unit)처럼 느껴지기도하고, 내 것이 아니거나, 온전히 나만의 것이 아니라는 생각이 들거나, 언젠가 사라질 것이라는 생각이 든다.<br>그런 맥락에서 할아버지 댁은 아파트와는 다른 형태의 굳건한 공간이었다. 아파트라는 건물 안에 붕 떠있는 한 칸이  아닌, 땅에 그 기반을 두고 서있는 공간이었다. 할머니가 일찍 돌아가신 후에도 오랜 기간 할아버지는 집을 지켜오셨지만, 건강이 악화되면서 그것도 계속되지는 못했다. 가족들의 성화에 못이겨 그는 최소한의 짐과 함게 가족들이 더 잘 돌볼 수 있는 곳으로 이사를 오셨다. 당신이 정말로 원하셨는지는 잘 모르겠다.<br><br>집은 빈 공간이 되었다. 자식들이 출가하고 어르신들만이 남아있던 동네는 이제 조금씩 비워지고 시덥지 않은 건물들로 채워지고 있었다. 도시의 모습이었다. 조부모님과 부모님이 이끌던 시대가 지나고, 그들이 활발하게 활동하던 공간과 지역들도 세대가 교체되듯 다른 것들로 교체되고 있엇다. 그리고 우리 가족도 집을 내놓고 허물기로 결정했다. 현실적인 결정이었다. 모두가 각자의 자리에서 가족을 꾸리고 살아가고 있는 지금, 그 집에 갑자기 들어가 산다는 것은 여러모로 쉬운 결정이 아니었으리라.<br>그 무렵 엄마는 기분이 이상하다며 허공을 보며 말을 멈추곤 했다. 기분이 이상한건 나도 마찬가지였다. 당시 나는 영국으로의 유학을 준비하고 있었다. 20대를 학교에서만 보낸 내가 홀로 그 곳을 지켜내기에는 배짱도 자본도 턱없이 부족했다. 그 공간이 어떤 형태로든 남아있길 바랬지만, 결국 나는 그 말을 입밖으로도 꺼내보지 못한 채, 그렇게 집은 허물어졌다. 강렬하게 밀어붙여 그 집을 지킨다하더라도, 결국 나는 일을 벌려놓고는 수습하지도 못한 채 가족들에게 그 일을 떠넘기고는 떠날 사람이었다.<br><br>레트로가 유행하면서 오랜만에 온 서울에는 다양한 형태의 옛 공간들과 물건들이 다시 그 존재감을 드러내고 있었다. 그들을 마주할 때마다 돌이킬 수 없는 후회와 함께 허물어버린 할아버지 댁이 가장 먼저 생각났다. 집을 허물고 머지 않아 돌아가신 할아버지와 함께 단단한 뿌리가 사라진 것만 같은 기분이었다.<br>공간이라는게 참 그렇다. 물건과는 그 규모가 달라서, 현실적으로 내가 소유하고 싶다하여 쉽게 소유할 수 없다. 한 번 떠나면 다시 그 공간에 머물 수 있으리라는 보장도 없다. 그런 맥락에서 내가 지금 지내고 있는 런던의 작은 옥탑방 또한 불안정하다. 1년이 채 되지 않는 시간 동안 3번이나 이사를 하고 찾은 이 집과 옥탑방은 나에게 있어 외로운 타지 생활을 견딜 수 있게 해주는 아늑한 공간이지만, 한 번 떠나면 다시는 돌아올 수 없는 나에게 있어 불완전한 공간이다. 공간은 새로운 사람을 품을 것이다. 후에 다시 돌아와 그 집에서 지내고 싶다 하여, 모든 시간과 우연이 맞아 떨어지는 가능성은 매우 희박하다.<br><br>그러기에 떠난다는 것은 얼마나 서글픈가. 내 시간을 온전히 기억하는 곳은 사라지고, 허물어진 집은 돌아오지 않는다. 엄마와 이모들이 자라고 할머니와 할아버지가 굳건히 지키셨던 그 자리에는 이제 오피스텔이 세워졌다고 들었다. 소중한 공간을 작은 서점이나 책방으로, 도서관으로 만들어서라도 지켜내지 못했다는 자책감은 집이 허물어지고 4년이 넘은 지금에도 무겁게 다가온다. 살아있던 기억이 온전히 숨쉬는 공간은 이제 없다. 그럼에 요즘은 장소와 시간에 대해 생각하게 된다. 그리고 공간이 갖고 있는 기억들에 대해 말이다. 서도호의 <a href="https://art21.org/watch/extended-play/do-ho-suh-rubbing-loving-short/" target="_blank"><i>Rubbing/loving</i>(2014)</a> 이라는 작품이 다시 떠오르는 날이다. 공간은 내가 수천번 수만번 만진 그 기억들을 갖고 있다는 말. 나는 어디에 뿌리를 내리고 살아가야 할까. 그것은 단순히 현실적인 장소에 대한 고민이 아닌, 나는 어디에 마음을 두고, 또 그 기억과 마음들을 어떻게 뿌리내리고 살아가야할까라는 허무맹랑한 고민이기도 하다.<br><br>- 2024년 12월 16일 기록<br><br><br>',
			commentinfo: '남겨주신 이야기들은 여기서 확인하실 수 있습니다',
			messageInput: '메세지를 입력하세요',
			submitMessage: '추가',
            instagram: '@yejin.wip',
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
		document.getElementById('messageInput').innerHTML = translation.messageInput;
		document.getElementById('submitMessage').innerHTML = translation.submitMessage;
        document.querySelector('p2 a[href="https://www.instagram.com/yejin.wip?igsh=b2xyaHJpeG9zMTlm"]').innerHTML = translation.instagram;
        document.querySelector('p2 a[href="https://yejinschoi.com/"]').innerHTML = translation.website;
		
		// 언어에 맞게 lang 속성 업데이트
        document.documentElement.lang = language;

        // 버튼에 active 클래스를 적용해 밑줄 표시
        if (language === 'ko') {
            koButton.classList.add('active');
            enButton.classList.remove('active');
        } else if (language === 'en') {
            enButton.classList.add('active');
            koButton.classList.remove('active');
        }
    }

    // 초기 로딩 시 한국어로 설정
    updateLanguage('ko');
});
