import 'bootstrap';
import './scss/app.scss';
import Navigo from 'navigo';
import nav from './components/navigation/nav';
import leftNav from './components/navigation/left-navbar';
import products from './components/products';
import _home from './components/home';
import users from './components/users';


document.getElementById('nav').innerHTML += nav();
document.getElementById('leftNav').innerHTML += leftNav();


const root = null;
const useHash = true; // Defaults to: false
const hash = '#!'; // Defaults to: '#'
const router = new Navigo(root, useHash, hash);

router
  .on({
    'products': function () {
      products();
    },
    'users': function () {
      users();
    },
    '*': function () {
      _home();
    }
  })
  .resolve();

window.router = router;
