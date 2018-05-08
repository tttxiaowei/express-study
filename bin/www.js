const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.json(req.headers);
    return;
});
const server = app.listen(8000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
app.use(express.static('public'));