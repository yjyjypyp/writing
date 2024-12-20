document.addEventListener('DOMContentLoaded', function () {
    const koButton = document.getElementById('ko');
    const enButton = document.getElementById('en');
    
    // 텍스트 및 링크 번역
    const translations = {
        en: {
            description: 'Over the years, I’ve kept journals, reading notes, and sketches—records of my thoughts and daily life. From time to time, I’ve found myself wanting to share some of these with others. After much thought on how to share them, I decided to create this small space. What you’ll find here might be personal reflections, critiques, poetry, short stories, or illustrations—who knows?<br><br>Life is unpredictable, and tomorrow often feels uncertain. But as I continue to gather and organize my thoughts and records, I hope something meaningful will eventually come into focus.',
            instagram: '@yejin.wip',
            website: '▫ yejinschoi.com ↗',
        },
        ko: {
            description: '오랜 기간 일기, 독서노트, 낙서 등의 기록들을 해오면서 때로는 공유하고 나누고 싶은 마음과 생각들이 있었습니다. 어떻게 나눌 수 있을까 그 형태를 오래 고민하다가 이렇게 작은 공간을 만들어봤어요. 사적인 글이 될 수도, 비평이 될 수도, 시나 소설, 그림이 될 수도 있겠네요. <br>당장의 내일도 모르겠는 인생이지만, 생각과 기록이 쌓이게 되면 무언가는 선명해질 수도 있기를 기대해 봅니다.',
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
