var express = require('express');
var app = express();

app.get('/index', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.listen(process.env.PORT || 8080);
