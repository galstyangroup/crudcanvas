import CrudCanvas from '../../lib/index';

// Templates
const productTemplate = x => `
  <div class="card" style="width:45%;">
    <div class="card-body">
      <h5 class="card-title">${x.name}</h5>
      <p class="card-text">${x.price}</p>
      <button class="btn btn-danger btn-sm" onclick="window.productCrud.deleteItem(${x.id})">Delete</button>
    </div>
  </div>
`;

const beforeTemplate = `
  <br>
  <h1>Products</h1>
  <br>
  <p>Add a new product</p>
    <form onsubmit="return window.saveForm(this)";>
    <div class="row">
      <div class="col">
        <label>Name</label>
        <input class="form-control" type="text" name="title" val="">
      </div>
      <div class="col">
        <label>Price</label>
        <input class="form-control" type="number" name="price" val="">
      </div>
      <div class="col">
        <br>
        <input type="submit" class="btn btn-success" onclick="">
      </div>
    </div>
        
    </form>
    <br>
  <div class="card-columns">`;

const productOptions = {
  name: 'crudcanvas',
  dataUrl: 'http://localhost:7070/api/products',
  authorisedActions: '',
  itemTemplate: productTemplate,
  appendElement: 'crudcanvas',
  document:document,
  beforeTemplate:beforeTemplate,
  afterTemplate: '</div>'
};

const productCrud = new CrudCanvas(productOptions);

export const saveForm = _form => productCrud.createItem({
  name: _form.name,
  price: _form.price
});

export default productCrud;
