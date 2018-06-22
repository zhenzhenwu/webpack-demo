import app_css from './app.css';

console.log(app_css);
export default () => {
    return `<p class="${app_css.title} ${app_css.success}">Hello World</p>`;
}

