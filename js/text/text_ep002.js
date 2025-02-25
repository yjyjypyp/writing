document.addEventListener('DOMContentLoaded', function () {
    const koButton = document.getElementById('ko');
    const enButton = document.getElementById('en');

    // 텍스트 및 링크 번역
    const translations = {
        en: {
            description: 'The Thread<br><br>There are times when I wish to be endlessly kind to the world,<br>only to let go of that thread without reason,<br>wanting to cry out, "Let it all be."<br><br>This heart, swelling like waves roused by the wind,<br>is a wandering soul trapped in the red light of a crossing,<br>thrashing between paths it cannot take.<br><br>Not knowing what to do with this restless heart,<br>I remain here still,<br>feet hovering, yet never stepping forward.<br><br><br>- 25th Feb 2025 / Originally written in Korean<br><br><br>',
            commentinfo: 'You can check the comments from here',
            messageInput: 'Write your comments',
            submitMessage: 'Add',
            instagram: '@yejin.wip',
            website: '▫ yejinschoi.com ↗',
        },
        ko: {
            description: '끈<br><br>세상에 대해 한없이 다정하고 싶다가도<br>문득 아무 이유 없이 그 끈을 툭 놓아버리듯,<br>될대로 되라며 소리치고 싶을 때가 있다<br><br>바람에 성난 파도처럼 울렁이는 그 마음은<br>이렇게도 저렇게도 살 수 없어 몸부림치는,<br>빨간불의 횡단보도 사이에 갇혀버린 방황 같은 것<br><br>그 마음을 정의내리지도, 어찌할 줄도 몰라<br>끝내 어디로도 나아가지 못한 채<br>여전히 이 자리에서 발만 동동 구를 뿐<br><br>- 2025년 02월 25일<br><br><br>',
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
