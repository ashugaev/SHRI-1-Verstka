import {
    changeRoute
} from '../actions/route';

document.querySelector('.header__menu-item:nth-child(5)').addEventListener('click', (event) => {
    event.preventDefault();
    changeRoute(event.target.getAttribute('href'))
})

console.log('zzz')