const express = require('express');
const app = express();
const port = 3000;
const path = require("path");


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/listUsers', function (req, res) {
    res.send('{"user1":{"name":"mahesh","password":"password1","profession":"teacher","id":1},"user2":{"name":"suresh","password":"password2","profession":"librarian","id":2},"user3":{"name":"ramesh","password":"password3","profession":"clerk","id":3}}');
})



app.use('/', express.static(path.join(__dirname, 'views')))