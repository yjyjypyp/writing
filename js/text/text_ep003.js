document.addEventListener('DOMContentLoaded', function () {
    const koButton = document.getElementById('ko');
    const enButton = document.getElementById('en');

    // 텍스트 및 링크 번역
    const translations = {
        en: {
            description: '',
            commentinfo: 'You can check the comments from here',
            messageInput: 'Write your comments',
            submitMessage: 'Add',
            instagram: '@yejin.wip',
            website: '▫ yejinschoi.com ↗',
        },
        ko: {
            description: '',
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
