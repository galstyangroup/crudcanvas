import CrudCanvas from '../../lib/index';
import textTemplate from '../../lib/editTemplates/text';
import numberTemplate from '../../lib/editTemplates/number';

export default function () {
  // Templates
  const productTemplate = x => `
    <div class="card" style="">
      <div class="card-body">
        <h5 class="card-title js-text-edit" onclick="window.productCrud.editItem(this, textTemplate, ${x.id}, 'name'  )">${x.name}</h5>
        <p class="card-text" onclick="window.productCrud.editItem(this, numberTemplate, ${x.id}, 'price'  )" >${x.price}</p>
        <button class="btn btn-danger btn-sm" onclick="window.productCrud.deleteItem(${x.id})">Delete</button>
      </div>
    </div>
  `;

  const beforeTemplate = `
    <h1>Products</h1>
    <br>
    <p>Add a new product</p>
      <form onsubmit="return window.saveForm(this)";>
      <div class="row">
        <div class="col">
          <label><small>Name</small></label>
          <input class="form-control" type="text" name="title" val="">
        </div>
        <div class="col">
          <label><small>Price</small></label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">€</span>
            </div>
            <input class="form-control" type="number" name="price" val="">
          </div>
        </div>
      </div>
      <input type="submit" class="btn btn-success btn-sm form-control" onclick="">
      </form>
      <br>
    <div class="card-columns">`;

  const productOptions = {
    name: 'productCrud',
    dataUrl: 'http://localhost:7070/api/products',
    authorisedActions: '',
    itemTemplate: productTemplate,
    appendElement: 'crudcanvas',
    document:document,
    beforeTemplate:beforeTemplate,
    afterTemplate: '</div>'
  };

  const productCrud = new CrudCanvas(productOptions);

  document.getElementById('main').innerHTML = '<div class="container" id="crudcanvas"></div>';
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
  window.textTemplate = textTemplate;
  window.numberTemplate = numberTemplate;
  window.saveForm = saveForm;
}
