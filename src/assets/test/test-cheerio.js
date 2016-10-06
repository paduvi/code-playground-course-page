/**
 * Created by Cho To Xau Tinh on 07-Oct-16.
 */
var cheerio = require('cheerio');
var htmlContent = require('./html-string');

var $ = cheerio.load(htmlContent);

$('*').each(function (index, element) {      // iterate over all elements
    if (element.attribs.hasOwnProperty('class'))
        delete element.attribs.class;
    if (['h1', 'h2', 'h3'].indexOf(element.name) != -1)
        element.name = 'h5';
});

$('pre,code').attr('class', 'prettyprint');

var html = $.html();
console.log(html);