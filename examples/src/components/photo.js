import CrudCanvas from '../../lib/index';

// Templates
const photoTemplate = x => `
  <div class="card" style="width: 10rem;">
  <img class="card-img-top" src="${x.thumbnailUrl}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${x.id}</h5>
      <p class="card-text">${x.title}</p>
    </div>
  </div>
`;

const photoOptions = {
  name: 'crudcanvas',
  dataUrl: 'https://jsonplaceholder.typicode.com/photos',
  authorisedActions: '',
  itemTemplate: photoTemplate,
  appendElement: 'crudcanvas',
  document:document,
  beforeTemplate: '<div class="card-columns">',
  afterTemplate: '</div>'

};

const photoCrud = new CrudCanvas(photoOptions);

photoCrud.getData();
photoCrud.createItem();
photoCrud.createItem();
