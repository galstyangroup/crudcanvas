import textTemplate from './editTemplates/text';
import numberTemplate from './editTemplates/number';

const FormData = require('form-data');
const fetch = require('node-fetch');

export default class CrudCanvas {
  constructor(options) {
    this.name = options.name;
    this.dataUrl = options.dataUrl;
    this.authorisedActions = options.authorisedActions;
    this.itemTemplate = options.itemTemplate;
    this.crudModel = options.crudModel;
    this.g_data = '';
    this.appendElement = options.appendElement;
    this.document = options.document;
    this.beforeTemplate = options.beforeTemplate;
    this.afterTemplate = options.afterTemplate;
  }

  getData() {
    this.document.getElementById(this.appendElement).innerHTML = null;
    return fetch(this.dataUrl)
      .then(res => res.json())
      .then(data => this.createView(data));
  }

  createView(data) {
    this.displayItems(data);
  }

  displayItems(data) {
    // filterOptions for later implementation
    // const OpenMilestones = CrudCanvas.HG_data.filter(x => x.ActualEndDate === null);
    // const ClosedMilestones = CrudCanvas.HG_data.filter(x => x.ActualEndDate !== null);
    this.document.getElementById(this.appendElement).innerHTML += `
      ${this.beforeTemplate}
        ${data.map(this.itemTemplate).join('')}
      ${this.afterTemplate}
      `;
  }

  distroyItems() {
    this.document.getElementById(this.appendElement).innerHTML = null;
  }

  createItem(data) {
    const hgclass = this;
    // CrudCanvas.HG_data.push(data);
    // POST adds a random id to the object sent
    fetch(this.dataUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(() => {
        hgclass.getData();
      });
  }

  // eslint-disable-next-line class-methods-use-this
  editItem(item, template, id, name) {
    debugger;
    const value = item.innerText;
    const editTemplate = template(name, value);
    item.insertAdjacentHTML('afterend', editTemplate);
    const data = {
      name: value
    };
    item.nextElementSibling.setAttribute("onsubmit", `return window.${this.name}.updateItem(${id}, this)`);
  }

  updateItem(id, form) {
    const formData = new FormData(form);
    const data = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const pair of formData.entries()) {
      // eslint-disable-next-line prefer-destructuring
      data[pair[0]] = pair[1];
    }

    const hgclass = this;
    // CrudCanvas.HG_data.push(data);
    // POST adds a random id to the object sent
    fetch(`${this.dataUrl}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((response) => {
        response.json();
      })
      .then(() => {
        hgclass.getData();
      });
  }

  deleteItem(id) {
    const hgclass = this;
    fetch(`${this.dataUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(() => {
        hgclass.getData();
      });
  }
}
