// Firebase 초기화 및 Firestore 설정
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase 구성
const firebaseConfig = {
  apiKey: "AIzaSyBm78bI0dfj02S3Uh-ViSuVTb8hOhz0wIA",
  authDomain: "guest-board-7b132.firebaseapp.com",
  projectId: "guest-board-7b132",
  storageBucket: "guest-board-7b132.appspot.com",
  messagingSenderId: "845298634441",
  appId: "1:845298634441:web:bdcd8639852cb920168718"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 메시지 추가 함수
const addMessage = async (message) => {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      content: message,
      timestamp: new Date()
    });
    console.log("메시지 추가 완료", docRef.id);
    loadMessages(); // 메시지 로드
  } catch (error) {
    console.error("메시지 추가 중 오류:", error);
  }
};

// 메시지 로드 함수
const loadMessages = async () => {
  try {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const querySnapshot = await getDocs(q);
    const postItBoard = document.getElementById('postItBoard');
    postItBoard.innerHTML = ''; // 기존 메시지 지우기

    querySnapshot.forEach((doc) => {
      const message = doc.data().content;
      const messageId = doc.id;

      const postIt = document.createElement('div');
      postIt.classList.add('post-it');
      postIt.textContent = message;

      // 삭제 버튼 추가
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '삭제';
      deleteButton.classList.add('delete-btn');
      deleteButton.addEventListener('click', () => confirmDelete(messageId));

      postIt.appendChild(deleteButton);
      postItBoard.appendChild(postIt);
    });
  } catch (error) {
    console.error("메시지 로드 중 오류:", error);
  }
};

// 삭제 확인 함수
const confirmDelete = (messageId) => {
  const userPassword = prompt('관리자 비밀번호를 입력하세요:');
  const adminPassword = "0125"; // 관리자 비밀번호

  if (userPassword === adminPassword) {
    deleteMessage(messageId);
    alert('메시지가 삭제되었습니다.');
  } else {
    alert('비밀번호가 틀렸습니다. 삭제할 수 없습니다.');
  }
};

// Firestore에서 메시지 삭제
const deleteMessage = async (messageId) => {
  try {
    const docRef = doc(db, "messages", messageId);
    await deleteDoc(docRef);
    console.log("메시지 삭제 완료");
    loadMessages(); // 메시지 로드
  } catch (error) {
    console.error("메시지 삭제 중 오류:", error);
  }
};

// 메시지 추가 이벤트 리스너
document.getElementById('submitMessage').addEventListener('click', () => {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value.trim();

  if (message === '') {
    alert('메시지를 입력하세요!');
    return;
  }

  addMessage(message);
  messageInput.value = ''; // 입력 필드 초기화
});

// 페이지 로드 시 메시지 표시
window.onload = loadMessages;
