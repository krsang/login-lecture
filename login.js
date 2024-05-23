const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let name2 = "";
let id2 = "";
let password2 = "";

app.post('/register', (req, res) => {
    const { username, id, password } = req.body;

    name2 = username;
    id2 = id;
    password2 = password;

    console.log(`이름: ${username}, 아이디: ${id}, 비밀번호: ${password}`);

    res.send('가입이 완료되었습니다.');
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
