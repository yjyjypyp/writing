// JavaScript Documentdocument.getElementById('submitMessage').addEventListener('click', () => {
      const messageInput = document.getElementById('messageInput');
      const message = messageInput.value.trim();

      if (message === '') {
        alert('메시지를 입력하세요!');
        return;
      }

      // Local Storage에 메시지 저장
      const messages = JSON.parse(localStorage.getItem('guestbookMessages')) || [];
      messages.push(message);
      localStorage.setItem('guestbookMessages', JSON.stringify(messages));

      // 입력 필드 초기화 및 알림
      messageInput.value = '';
      alert('메시지가 추가되었습니다! 방명록 페이지에서 확인하세요.');
    });