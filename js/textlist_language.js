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
            description: '공간에 대한 생각',
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
