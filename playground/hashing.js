const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
}

var token = jwt.sign(data, '123abc'); //第二個參數是salt

console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded',decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(hash);


// var data = {
//   id: 5
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data)+'somesecret').toString()  //salt就是在資料中加一段密碼再hash
// };


// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();

// if(resultHash === token.hash){
//   console.log('data was not changed');
// }else{
//   console.log('data was changed. Do not trust');
// }
