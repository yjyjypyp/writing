// 팝업과 관련된 요소들
const popup = document.createElement('div');
popup.classList.add('popup');
document.body.appendChild(popup);

// 팝업 닫기 버튼 클릭 시
popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-btn') || e.target.tagName === 'IMG') {
        popup.classList.remove('show');
        popup.innerHTML = ''; // 팝업 내용 초기화
    }
});

// 이미지 클릭 시 큰 이미지 보기
const imageContainer = document.querySelector('.bodyimg');

// 이미지 클릭 시 팝업을 띄우고 닫기 버튼을 추가
imageContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const imgSrc = e.target.src;

        // 팝업 내용 초기화 (이전에 열린 이미지가 있을 경우)
        popup.innerHTML = '';

        // 큰 이미지를 생성하여 팝업에 추가
        const largeImage = document.createElement('img');
        largeImage.src = imgSrc;
        popup.appendChild(largeImage);

        // 닫기 버튼 생성
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close-btn');
        closeBtn.textContent = '×';
        popup.appendChild(closeBtn);

        // 팝업을 보이도록 설정
        popup.classList.add('show');
    }
});

// 이미지 추가 함수
function addImage(imgSrc, title) {
    const imageContainer = document.querySelector('.bodyimg');

    // 이미지 컨테이너 만들기
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('image-container');

    // 이미지 추가
    const img = document.createElement('img');
    img.src = imgSrc;

    // 제목 추가
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('image-title');
    titleDiv.textContent = title;

    // 이미지와 제목을 컨테이너에 넣기
    imgDiv.appendChild(img);
    imgDiv.appendChild(titleDiv);

    // 이미지 컨테이너에 추가
    imageContainer.appendChild(imgDiv);
}

 // 최근 이미지를 위에 배치
addImage('../img/episode_img/100_1795.JPG', 'Belongings, 21.12.24');
addImage('../img/episode_img/100_1786.JPG', 'Lost and found, 21.12.24');
addImage('../img/episode_img/100_1806.JPG', 'Life, 21.12.24');
