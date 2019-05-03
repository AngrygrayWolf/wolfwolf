const makeIterator = require("../src/makeIterator")
const makeGenrator = require('../src/makeIterator').makeGenerator
const myIterable = require('../src/makeIterator').myIterable
const run = require('../src/makeIterator').run
const co = require('../src/makeIterator').co


test("make iterator run normally", () => {
    const data = ["yo", "ya"]
    let it = makeIterator(data)
    expect(it.next().value).toBe("yo")
    expect(it.next().value).toBe("ya")
    expect(it.next().done).toBe(true)
})


test("test the genrator", () => {
    let it = makeGenrator()
    expect(it.next().value).toBe(0)
})


test("test the myIterable", () => {
    let target = [1, 2, 3]
    index = 0
    for (let value of myIterable) {
        expect(value).toBe(target[index])
        index ++
    }
})


test("run the genrator auto ", () => {
    let testData = []
    function* testRun() {
        yield testData.push(1)
        yield testData.push(2)
    }
    run(testRun)
    // False beacuse the `toBe` use Obeject.is
    // expect(testData).toBe([1, 2])
    expect(testData).toEqual([1, 2])
})

test("run the generators auto", () => {
    let test = []
    function* testOne(next){

        yield test.push(1)
        next()
        yield test.push(2)
    }
    
    function* testTwo(next) {
        yield test.push(3)
        next()
        yield test.push(4)
    }
    
    function* testThree(next) {
        yield test.push(5)
        next()
        yield test.push(6)
    }
    let middlware = [testOne, testTwo, testThree]
    co(middlware)
    expect(test).toEqual([1, 3, 5, 6, 4, 2])
})