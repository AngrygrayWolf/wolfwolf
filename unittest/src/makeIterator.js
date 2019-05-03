
// js Iterator
function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ?
                { value: array[nextIndex++], done: false } :
                { done: true };
        }
    }
}


function* makeRangeIterator(start = 0, end = 100, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}

// Use Symbol iterator
var myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}



function* generatorRun() {
    yield 1
    yield 2
    yield 3
    yield 4
}



function co(dispatch) {
    function test(index) {
        if (index === dispatch.length) {
            return console.log
        }
        one = dispatch[index]
        return run(() => one(() => test(++index)))
    }
    test(0)
}

// co(test)


function run(gen) {
    let g = gen()


    function next(data) {
        let result = g.next(data)
        if (result.done) return


        next(result.value)
    }
    next()
}

// run(generatorRun)


module.exports = makeIterator
module.exports.makeGenerator = makeRangeIterator
module.exports.myIterable = myIterable
module.exports.run = run
module.exports.co = co