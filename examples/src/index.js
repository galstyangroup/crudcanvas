import nav from './components/navigation/nav';
import productCrud from './components/products';

document.getElementById('main').innerHTML += nav();

document.getElementById('main').innerHTML += '<div class="container" id="crudcanvas"></div>';

productCrud.getData();

const saveForm = (x) => {
  let name = x[0].value;
  let price = x[1].value;
  productCrud.createItem({
    name: name,
    price: price
  });
};
window.productCrud = productCrud;
window.saveForm = saveForm;
