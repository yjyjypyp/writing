// section-binding 선택
        const binding = document.querySelector('.section-binding');

        // 30개의 구멍과 스프링을 추가하는 함수
        for (let i = 0; i < 30; i++) {
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