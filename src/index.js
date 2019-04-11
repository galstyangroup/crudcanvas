const fetch = require('node-fetch');

class CrudCanvas {
  constructor(name, dataUrl, authorisedActions, itemTemplate, crudModel, appendElement) {
    this.name = name;
    this.dataUrl = dataUrl;
    this.authorisedActions = authorisedActions;
    this.itemTemplate = itemTemplate;
    this.crudModel = crudModel;
    this.g_data = '';
    this.appendElement = appendElement;
  }

  getData() {
    return fetch(this.dataUrl)
      .then(res => res.json())
      .then(data => this.createView(data));
  }


  createView(data) {
    // eslint-disable-next-line prefer-destructuring
    const appendElement = this.appendElement;
    // eslint-disable-next-line no-undef
    document.getElementById(appendElement).innerHTML = '';
    this.displayItems(data);
  }

  displayItems(data) {
    // filterOptions for later implementation
    // const OpenMilestones = CrudCanvas.HG_data.filter(x => x.ActualEndDate === null);
    // const ClosedMilestones = CrudCanvas.HG_data.filter(x => x.ActualEndDate !== null);
    // eslint-disable-next-line no-undef
    document.getElementById(this.appendElement).innerHTML += `
      <br><br><h3>Items</h3><br>
      ${data.map(this.itemTemplate).join('')}
      `;
  }

  distroyItems() {
    // eslint-disable-next-line no-undef
    document.getElementById(this.appendElement).innerHTML = '';
  }

  createItem(data) {
    CrudCanvas.HG_data.push(data);
    this.distroyItems();
    this.displayItems();
  }

  // eslint-disable-next-line class-methods-use-this
  deleteItem() {

  }
}

export default CrudCanvas;
