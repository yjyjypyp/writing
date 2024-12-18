const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// JSON 파일 경로
const DATA_FILE = './messages.json';

// JSON 파일에서 데이터 읽기
const readMessages = () => {
  if (fs.existsSync(DATA_FILE)) {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  }
  return [];
};

// JSON 파일에 데이터 저장하기
const saveMessages = (messages) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2), 'utf-8');
};

// 미들웨어 설정
app.use(express.json());
app.use(express.static('public'));

// 메시지 가져오기
app.get('/api/messages', (req, res) => {
  res.json(readMessages());
});

// 메시지 추가하기
app.post('/api/messages', (req, res) => {
  const messages = readMessages();
  const newMessage = req.body.message;

  if (!newMessage || newMessage.trim() === '') {
    return res.status(400).json({ error: '메시지는 비어 있을 수 없습니다.' });
  }

  messages.push(newMessage);
  saveMessages(messages);

  res.status(201).json({ success: true, messages });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
// JavaScript Document
