const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { User } = require('./models/User');

const config = require('./config/key');

//Content-type이 application/x-www-form-urlencoded인 데이터를 분석해서 가져올 수 있도록 해줌
//app.use(bodyParser.urlencoded({extended: true})); //bodyParser는 deprecated 되어있어 수정
app.use(express.urlencoded());

//Content-type이 application/json인 데이터를 분석해서 가져올 수 있게 해줌
//app.use(bodyParser.json());
app.use(express.json());


const mongoose = require('mongoose');
//mongoDB 연결
mongoose.connect(config.mongoURI, 
{
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true, 
  useFindAndModify: false
}).then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log(err));


//기본 출력
app.get('/', (req, res) => {
  res.send('Hello World!!!');
});


app.post('/register', (req, res) => {  //'/register' -> end point
  /* 회원 가입 시 필요한 필요 정보들을 client에서 가져오면
     그것들을 DB에 넣어준다.  */

     /*
     req.body 는
     { 
       id: "hello",
       email: "james@google.com",
       ...
      }
      이런 식으로 되어있다. -> bodyParser가 해주는 역할
      */
    const user = new User(req.body)

    user.save((err, userInfo) => {  // mongoDB에서 온 메소드, 정보들이 유저 모델에 저장됨
      if(err) return res.json({ success: false, err}) //json 형식으로 에러정보 전달
      return res.status(200).json({ 
        success: true
      });
    }); //status(200)는 성공했다는 의미
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

