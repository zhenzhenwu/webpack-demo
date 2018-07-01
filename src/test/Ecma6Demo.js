const process = require('process')
const path = require('path')
const Point = require('./Point')

function demo () {
    let buf = Buffer.from('Hello')
    let buf8 = []
    for (let i = 0; i < buf.length; i++) {
       buf8.push(buf[i].toString(16))
    }
    // console.log(buf)
    // console.log(buf8)
    // console.log(buf8.join(''))
    // console.log(Buffer.from(buf8.join(''), 'hex').toString())
    // console.log(Buffer)

    let s = Symbol('demo')
    let obj = {
        [s]: 100
    }

    let s1 = Symbol.for('demo2')
    let s2 = Symbol.for('demo2')
    // console.log(s1 === s2)
    // console.log(Symbol.keyFor(s2))

    // class MyClass {
    //     [Symbol.hasInstance] (foo) {
    //         return foo instanceof Array
    //     }
    // }
    // console.log([1, 2] instanceof new MyClass())

    let p = new Point(100, 200)
    console.log(p.toString())
}

module.exports = {
    demo
}
