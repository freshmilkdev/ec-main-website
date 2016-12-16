import 'flexboxgrid/dist/flexboxgrid.css';
import './assets/styles/style.scss';
import "./index.html";
import "./services.html";
/*if (process.env.NODE_ENV == 'production') {
    require("./assets/images/" + /^.*$/);
}*/
import materialDesignHamburger from './assets/js/menu-hamburger';

materialDesignHamburger();

var textarea = document.querySelector('#contact-form textarea');
textarea.onkeyup = function (e) {
   if(e.target.value.trim().length > 0){
       e.target.classList.add('valid');
   }else{
       e.target.classList.remove('valid');
   }
};

var select = document.querySelector('#contact-form select');
select.onchange = function (e) {
    if(e.target.value != 0){
        e.target.classList.add('valid');
    }else{
        e.target.classList.remove('valid');
    }
};