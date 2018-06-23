import {bar} from './bar.js';
import app from './components/app.js';
import style from './style.css';
import icon from '../public/img/alipay.png';
import printMe from './print.js';

let reander_dom = document.createElement('div');
reander_dom.innerHTML = app();
document.body.appendChild(reander_dom);

// let img = new Image();
// img.src = icon;
// document.body.appendChild(img);

let btn = document.createElement('button');
btn.innerHTML = "Click me！";
btn.onclick = printMe;
document.body.appendChild(btn);


let p = document.createElement(p);
p.innerHTML = bar();
document.body.appendChild(p);


// 懒加载
let btn2 = document.createElement('button');
btn2.innerText = "懒加载";
btn2.onclick = e => { import('./lazyLoadDemo.js').then(module => {
    let lazyLoadDemo = module.default;
    lazyLoadDemo();
}) };
document.body.appendChild(btn2);