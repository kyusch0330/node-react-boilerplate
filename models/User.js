const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true, //space를 없애주는 역할을 한다.
    unique: 1 //똑같은 이메일 불가능
  },
  password: {
    type: String,
    minlength: 5
  },
  role: { //어떤 사용자인지(관리자,일반유저)
    type: Number,
    default: 0 //기본 값
  },
  image: String,
  token: { //추후 유효성 관리
    type: String
  },
  tokenExp: { //토큰 유효기간
    type: Number
  }
});

//스키마를 모델로 감싸준다.
const User = mongoose.model('User', userSchema);

//이 모델을 다른 곳에서 쓸 수 있도록
module.exports = { User }