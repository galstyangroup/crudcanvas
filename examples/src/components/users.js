import CrudCanvas from '../../lib-dev/index';
import textTemplate from '../../lib-dev/editTemplates/text';
import numberTemplate from '../../lib-dev/editTemplates/number';

export default function () {
  // Templates
  const userTemplate = x => `
  <tr>
      <th scope="row">${x.id}</th>
      <td> <div onclick="window.userCrud.editItem(this, textTemplate, ${x.id}, 'name'  )">${x.name}</div></td>
      <td><div onclick="window.userCrud.editItem(this, textTemplate, ${x.id}, 'username'  )">${x.username}</div></td>
      <td class="text-center" ><button class="btn btn-danger btn-sm" onclick="window.productCrud.deleteItem(${x.id})">Delete</button></td>
  </tr>
  `;

  const beforeTemplate = `
    <h1>Users</h1>
    <br>
    <p>Add a new user</p>
      <form onsubmit="return window.saveForm(this)";>
      <div class="row">
        <div class="col">
          <label><small>Name</small></label>
          <input class="form-control" type="text" name="title" val="">
        </div>
        <div class="col">
          <label><small>Username</small></label>
          <div class="input-group mb-3">
            <input class="form-control" type="text" name="username" val="">
          </div>
        </div>
      </div>
      <input type="submit" class="btn btn-success btn-sm form-control" onclick="">
      </form>
      <br>
      <table class="table table-sm table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th class="text-center" scope="col"></th>
        </tr>
      </thead>`;

  const userOptions = {
    name: 'userCrud',
    dataUrl: 'http://localhost:7070/api/users',
    authorisedActions: '',
    itemTemplate: userTemplate,
    appendElement: 'userCrud',
    document:document,
    beforeTemplate:beforeTemplate,
    afterTemplate: '</tbody></table>'
  };

  const userCrud = new CrudCanvas(userOptions);

  document.getElementById('main').innerHTML = '<div class="container" id="userCrud"></div>';

  userCrud.getData();

  const saveForm = (x) => {
    let name = x[0].value;
    let username = x[1].value;
    userCrud.createItem({
      name: name,
      username: username
    });
    return false;
  };

  window.userCrud = userCrud;
  window.textTemplate = textTemplate;
  window.numberTemplate = numberTemplate;
  window.saveForm = saveForm;
}
