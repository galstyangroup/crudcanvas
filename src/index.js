const fetch = require('node-fetch');

export default class CrudCanvas {
  constructor(name, dataUrl, authorisedActions, itemTemplate, crudModel, appendElement, document) {
    this.name = name;
    this.dataUrl = dataUrl;
    this.authorisedActions = authorisedActions;
    this.itemTemplate = itemTemplate;
    this.crudModel = crudModel;
    this.g_data = '';
    this.appendElement = appendElement;
    this.document = document;
  }

  getData() {
    return fetch(this.dataUrl)
      .then(res => res.json())
      .then(data => this.createView(data));
  }


  createView(data) {
    const { appendElement } = this;
    this.document.getElementById(appendElement).innerHTML = '';
    this.displayItems(data);
  }

  displayItems(data) {
    // filterOptions for later implementation
    // const OpenMilestones = CrudCanvas.HG_data.filter(x => x.ActualEndDate === null);
    // const ClosedMilestones = CrudCanvas.HG_data.filter(x => x.ActualEndDate !== null);
    this.document.getElementById(this.appendElement).innerHTML += `
      <br><br><h3>Items</h3><br>
      ${data.map(this.itemTemplate).join('')}
      `;
  }

  distroyItems() {
    this.document.getElementById(this.appendElement).innerHTML = '';
  }

  createItem(data) {
    CrudCanvas.HG_data.push(data);
    this.distroyItems();
    this.displayItems();
  }
}
