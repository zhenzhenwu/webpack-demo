import {bar} from './bar.js'
import app from './components/app.js'
import style from './style.css'
import icon from '../public/img/alipay.png'
import printMe from './print.js'
import Vue from 'vue'
import router from './router'
// 导入公共methods
import Methods from './methods'

// 导入vue组件
import App from './components/app.vue'
import News from './components/news.vue'

// 导入测试ECMA6
import Ecma6Demo from './test/Ecma6Demo'

console.log(Ecma6Demo.demo())

let renderDom = document.createElement('div')
renderDom.innerHTML = app()
document.body.appendChild(renderDom)

// let img = new Image()
// img.src = icon
// document.body.appendChild(img)

let btn = document.createElement('button')
btn.innerHTML = 'Click me！'
btn.onclick = printMe
document.body.appendChild(btn)

let p = document.createElement('p')
p.innerHTML = bar()
document.body.appendChild(p)

// 懒加载
let btn2 = document.createElement('button')
btn2.innerText = '懒加载'
btn2.onclick = e => {
        import('./lazyLoadDemo.js').then(module => {
        let lazyLoadDemo = module.default
        lazyLoadDemo()
    })
}
document.body.appendChild(btn2)

// 创建一个组件构造器Vue.extend(),组建构造器就相当于类，而组件相当于该类的实例化对象
let MyComponentExtend = Vue.extend({
    template: '<div>This is a component extend， the author is {{ author }}</div>',
    data () { // 注意在组件构造器中，data必须是函数
        return {
            author: 'maomao'
        }
    }
})
let myComponentExtendObj = new MyComponentExtend({
    data: {
        author: 'zhenzhen'
    }
})

// 创建另一个组件构造器
let MyComponentExtendDemo = Vue.extend({
    template: '<p>{{ sex }}</p>',
    data () {
        return {
            sex: '男'
        }
    }
})

// 注册为全局组件
Vue.component('myComponentExtendDemo_1', MyComponentExtendDemo)
console.log(MyComponentExtendDemo === Vue.component('myComponentExtendDemo_1'))

// --------------------------
// 定义一个组建
let zujian = {
    template: '<div>{{ url }}</div>',
    data () {
        return {
            url: 'http://www.baidu.com'
        }
    }
}
Vue.component('zujian', zujian)
console.log(Vue.extend(zujian) === Vue.component('zujian'))
console.log(Vue.extend)

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })

Vue.use(Methods)
// 这里传给Vue的值也是一个组件，并挂载到了#app上
/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App, News }, // 这种注册就是局部注册，只能在该Vue势力下使用，而之前我们注册的比如myComponentExtendDemo_1就是全局组件 可以在任意地方使用
    router,
    data: {
        parentData: 1
    },
    methods: {
        handleChangeParentData (val) {
            this.parentData = val
        }
    },
    template: `<div>
                <App/>
                <div id="demo-comp"></div>
                <button-counter></button-counter>
                <myComponentExtendDemo_1></myComponentExtendDemo_1>
                <input type="text" v-model="parentData">
                <News v-bind:parent-data="parentData" @changeData="handleChangeParentData"></News>
                <router-link to="/photos">图片</router-link>
                <div style="border:1px solid #ccc;background-color:green">
                <router-view></router-view>
                </div>
                </div>`
})

myComponentExtendObj.$mount('#demo-comp')
