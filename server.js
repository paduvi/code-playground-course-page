/**
 * Created by Cho To Xau Tinh on 05-Oct-16.
 */
var express = require('express');
var app = express();
var compression = require('compression');

app.use(compression());
app.use(express.static('static'));

app.listen(2702, function (err) {
    if (err)
        throw err;
    console.log('Example app listening on port 2702!');
});