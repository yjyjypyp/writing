// section-binding 선택
const binding = document.querySelector('.section-binding');

// 화면 크기에 따라 다른 개수 생성
const createBindings = () => {
    // 현재 화면 너비 확인
    const screenWidth = window.innerWidth;

    // 기존 요소 모두 제거
    binding.innerHTML = '';

    // 웹 환경: 30개 / 모바일 환경: 20개
    const totalBindings = screenWidth <= 767 ? 25 : 30;

    for (let i = 0; i < totalBindings; i++) {
        // 개별 바인딩 아이템 컨테이너 생성
        const bindingItem = document.createElement('div');
        bindingItem.className = 'binding-item';

        // 구멍 생성
        const hole = document.createElement('div');
        hole.className = 'hole';

        // 스프링 생성
        const spring = document.createElement('div');
        spring.className = 'spring';

        // binding-item에 스프링과 구멍 추가
        bindingItem.appendChild(spring);
        bindingItem.appendChild(hole);

        // section-binding에 binding-item 추가
        binding.appendChild(bindingItem);
    }
};

// 초기 생성
createBindings();

// 창 크기 변경 시 다시 생성
window.addEventListener('resize', createBindings);
