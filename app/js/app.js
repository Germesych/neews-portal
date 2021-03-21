// Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
import "../libs/likely/likely";
import "./moduls/maps";
import "./moduls/slider";
import "./moduls/jq-scripts";
document.addEventListener('DOMContentLoaded', () => {
    const pageArticle = document.querySelector('.page-article');
    if(pageArticle){
        console.log('TRUE')
        document.body.classList.add('page');
    }
})
