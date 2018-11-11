let add = require('./add');
let expect = require('chai').expect;
let request = require('superagent');

describe('加法函数的测试', function () {
    it('1 加 1 应该等于 2', function() {
        expect(add(1,1)).to.be.equal(2);
    });
    it('乘法测试', function(){
        expect(5*4).to.be.equal(20);
    });
    it('Type test', function(){
        expect('string').to.be.a('string');
        expect(null).to.not.be.a('string');
        expect({foo:'bar'}).to.be.an('object');
        expect({}).to.be.an.instanceof(Object);
        expect({foo:'bar'}).to.include.keys('foo');
        expect('foobar').to.match(/^foo/);
    });
});

describe('async test', function () {
    it('test the 1ms ', function (done) {
        let x = true;
        let f = function () {
            x = false;
            expect(x).to.be.not.ok;
            done();
        };
        setTimeout(f, 1000);
    });
    it('get request for github', function(done){
        request
            .get('https://api.github.com')
            .end(function(err, res){
                expect(res).to.be.an('object');
                done();
            });
    });
});