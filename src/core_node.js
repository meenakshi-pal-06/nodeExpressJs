const fs = require('fs');
//crerate a new file
//fs.writeFileSync('read.txt','welcome to my page');

//add text in already crrated file
//fs.writeFileSync('read.txt',"Hello everyone how r you,welcome to my page");

//append new text in already created file
//fs.appendFileSync('read.txt','i am fine wat about you?');

//read text
// const buf_data = fs.readFileSync('read.txt');
// org_data = buf_data.toString();
// console.log(org_data);

//file rename

fs.renameSync('read.txt','readWrite.txt');