document.addEventListener('DOMContentLoaded', function () {
    const koButton = document.getElementById('ko');
    const enButton = document.getElementById('en');

    // 텍스트 및 링크 번역
    const translations = {
        en: {
			ep005: 'The Hypocrisy and Rudeness Behind "Poor Thing"',
			ep004: 'Seasonal Musing',
			ep003: 'For the One Who Has Forgotten to Ask',
			ep002: 'The Thread',
            ep001: 'Reflections on Space',
            ep000: 'Our notes',
            instagram: '@sansan.wip',
            website: '▫ yejinschoi.com ↗',
        },
        ko: {
			ep005: '불쌍하는 말에 담긴 위선과 무례함<br>ー「かわいそう」に潜む偽善と無礼',
			ep004: '계절의 단상들ー季節の考察',
			ep003: '나를 더이상 궁금해하지 않는 당신에게',
			ep002: '끈',
            ep001: '공간에 대한 생각',
            ep000: '우리들의 기록',
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
		document.getElementById('ep005').innerHTML = translation.ep005;
		document.getElementById('ep004').innerHTML = translation.ep004;
		document.getElementById('ep003').innerHTML = translation.ep003;
		document.getElementById('ep002').innerHTML = translation.ep002;
        document.getElementById('ep001').innerHTML = translation.ep001;
        document.getElementById('ep000').innerHTML = translation.ep000;
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
