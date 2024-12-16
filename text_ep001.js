document.addEventListener('DOMContentLoaded', function () {
    const koButton = document.getElementById('ko');
    const enButton = document.getElementById('en');
    const languageSelector = document.getElementById('language-selector');

    // 텍스트 및 링크 번역
    const translations = {
        en: {
            description: 'For quite some time, I’ve been keeping journals, reading notes, and scribbles – records of thoughts and moments that sometimes felt too precious to keep to myself. I wondered how I might share them, and after much thought, I decided to create a website. The words here may be deeply personal or critical, poetic or visual, or perhaps something else entirely. Life is unpredictable, and tomorrow remains uncertain, but I hope that as these thoughts and records accumulate, something clear and meaningful might emerge.',
            instagram: '@yejin.wip',
            website: '▫ yejinschoi.com ↗',
        },
        ko: {
            description: '공간에 대한 생각<br><br>할머니 할아버지께서 직접 설계하신 집이 있었다. 엄마랑 이모들은 그 집에서 자랐다고 했다. 엄마가 어린 시절을 얘기해줄 떄면, 그 집과 서울의 여러 곳들이 등장했고, 어른이 되어서 나는 그 곳들을 정겹게 느끼게 되었다. 그 근처 동네들의 이름을 들을 때면 아는 것도 없으면서 이상하게 친근감이 느껴졌다. 강남이과는 다르게 아기자기하여 좋아하는 강북의 지역들에 엄마의 자취가 어딘가에는 남아있을거라는 생각에 마음이 벅차곤 했다. <br><br>서울에서의 삶은 조금 이상하다. 비단 서울 뿐만이 아니라 도시의 삶의 특징일 것이다. 도시의 삶은 늘 불안정하다. 불안정한 이유는 다양하겠지만, 나에게는 그 중에서도 내가 돌아갈 곳이 있는가?에 대한 질문을 가져온다. 그런 맥락에서 할아버지 댁은 엄마와 이모들이 모이는 아파트와는 다른 굳건한 공간이었다. 할머니가 일찍 돌아가신 후에도 오랜 기간 할아버지는 그 공간을 굳건히 지켜오셨지만, 건강이 악화되면서 가족들이 더 잘 돌 볼 수 있는 곳으로 결국은 이사를 오셨다. 그 집은 빈 공간이되었다. 자식들이 출가하고 어르신들만이 남아 있던 동네는 조금씩 비워지고 시덥지않은 건물들로 채워지고 있었다. 그리고 결국 우리 가족도 집을 허물고 내놓기로 결정했다. 현실적인 결정이었다. 모두가 각자의 자리에서 가족을 꾸리고 살아가고 있는 지금, 그 집에 갑자기 들어가 산다는 것은 쉬운 결정은 아니었다.<br>당시를 되돌아보면, 엄마는 기분이 이상하다며 말을 멈추곤 했다. 기분이 이상한건 나도 마찬가지였다. 당시 나는 영국으로의 유학을 준비하고 있었고, 20대를 학교에서만 보낸 나는 온전히 나의 몫으로 그 곳을 지키기위해 투자하기에는 턱없이 부족했다. 그 공간이 어떤 형태로든 남아있길 바랬던 나였지만, 결국 나는 그 말을 입밖으로도 꺼내보지 못한 채, 그렇게 집은 허물어졌다. <br>코로나가 터졌음에도 유학을 준비하고 있던 시기였지만, 마음 속에서는 가게될 것이라는 확신이 있었다. 그러니 나는 일을 벌려놓고는 수습하지도 못한 채 가족들에게 그 일을 맡기고는 떠날 사람이었다. <br><br>레트로가 유행하면서 서울에는 다양한 형태의 옛 공간들과 물건들이 존재감을 다시 드러내고 있었다. 그런 공간을 구경하고, 물건들을 만져볼 때마다 허물어버린 할아버지 댁이 가장 먼저 생각난다. 지금까지의 많은 기억들 중에 가장 후회되는  그 기억 말이다. 공간이라는 것은 참 어렵다. 물건과는 다르게 건물과 공간은 그 규모가 달라서, 현실적으로 내가 소유하고 싶다하여 쉽게 소유할 수 있는 것들이 아니다.  장소에 대한 생각은 런던에서 지내고 있는 집을 생각해도 비슷하다. 2년 반 넘게 지내고 있는 지금의 집은, 아이리쉬 할머니 집의 옥탑방이다. 1년이 채 되지 않는 시간 동안 3번이나 이사를 하고 찾은 이 집은 나에게 있어 소중한 보금자리이기도 하다. 하지만 나의 공간이 아니기 때문에, 언젠가 나는 그 곳을 떠날 것이다. 그 후에는 또 다른 사람이 들어와 살겠지. 그 공간은 새로운 사람을 위한 공간이 될 것이다. 후에 내가 다시 돌아와 그 공간에서 지내고 싶다하여, 그 모든 시간과 우연이 맞아 떨어지는 것은 매우 희박한 확률을 가지고 있을 것이다. <br>공간은 한 번 떠나면 다시 소유하기 어려운 것이다. 그러기에 떠난다는 것은 얼마나 서글픈가. 허물어진 집은 돌아오지 않는다. 그 공간을 작은 서점이나 책방으로, 도서관으로라도 지켜내지 못했다는 자책감은 4년이 다되어가는 지금에도 무겁게 다가온다. 살아있던 기억이 온전히 숨쉬는 공간들. 현대식 아파트들은 참 다르다. 아파트의 수많은 가구 중 한 가구는 나의 소유이지만, 그 문 밖을 나가는 순간, 나는 어떠한 힘도 잃는다. 투자 목적으로 사고 파는 아파트. 나이가 들어가는 부모님을 보면서, 부모님이 더 나이가 드셨을 때 지금의 공간은 어떻게 되어있을까 생각해본다. 부모님이 더 행복할 수 있는 곳이 있다면, 그곳으로 이사가길 바라지만, 그렇게 되면 20년 넘게 살아온 이 집에도 우리의 흔적은 한 조각도 없이 사라지겠지. 빈티지나 레트로처럼 유지되지 않는게 일반적인 아파트의 형태이기도 하니까. 그럼에 요즘은 공간의 가변성에 대해 생각하게 된다. 그리고 공간이 갖고 있는 기억들에 대해 말이다. 서도호의 living/loving이라는 작품이 다시 떠오르는 날이다. 공간은 내가 수천번 수만번 만진 그 기억들을 갖고 있다는 말. 나는 어디에 뿌리를 내리고 살아가야 할까. 그것은 단순히 현실적인 장소에 대한 고민이 아닌, 나는 어디에 마음을 두고, 또 그 기억과 마음들을 어느 공간에 어떻게 뿌리내리고 살아가야할까라는 허무맹랑한 고민이기도 하다.<br><br><br><br><br><br><br><br><br><br>',
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
        document.querySelector('p2 a[href="https://www.instagram.com/yejin.wip?igsh=b2xyaHJpeG9zMTlm"]').innerHTML = translation.instagram;
        document.querySelector('p2 a[href="https://yejinschoi.com/"]').innerHTML = translation.website;

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
