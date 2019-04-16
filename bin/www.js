const express = require('express');
const app = express();
const loginRouter = require('../router/login');
const userRouter = require('../router/user');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(['/api/logi+n', '/api/log+in'], loginRouter);
app.use('/api/user', userRouter);

const server = app.listen(8000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
app.use(express.static('public'));