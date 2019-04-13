import CrudCanvas from '../../lib/index';

// Templates
const postTemplate = x => `
  <div class="card" style="width: 10rem;">
    <div class="card-body">
      <h5 class="card-title">${x.title}</h5>
      <p class="card-text">${x.body}</p>
    </div>
  </div>
`;

const postOptions = {
  name: 'crudcanvas',
  dataUrl: 'https://jsonplaceholder.typicode.com/posts',
  authorisedActions: '',
  itemTemplate: postTemplate,
  appendElement: 'crudcanvas',
  document:document,
  beforeTemplate: '<div class="card-columns">',
  afterTemplate: '</div>'
};

const postsCrud = new CrudCanvas(postOptions);

export default postsCrud;
