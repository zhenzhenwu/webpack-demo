import bar from './bar.js';
import app from './components/app.js';
import style from './style.css';
import icon from '../public/img/alipay.png';

let reander_dom = document.createElement('div');
reander_dom.innerHTML = app();
document.body.appendChild(reander_dom);

let img = new Image();
img.src = icon;
console.log(icon);
document.body.appendChild(img);