let jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM(`<!DOCTYPE html>`);
let $ = require('jquery')(dom.window);

let mock = require('mockjs');
mock.mock(/\.json/, {
    'list|1-10': [{
        'id|+1': 1,
        'email': '@EMAIL'
    }]
});
$.ajax({
    url: 'hello.json',
    dataTyle: 'json'
}).done(function(data, status, jqXHR){
    cosnole.log(JSON.stringify(data, null, 0));
});