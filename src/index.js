class CrudCanvas {

  constructor(name, dataUrl, authorisedActions, itemTemplate, crudModel, appendElement) {

    this.name = name;
    this.dataUrl = dataUrl;
    this.authorisedActions = authorisedActions;
    this.itemTemplate = itemTemplate;
    this.crudModel = crudModel;
    this._data = "";
    this.appendElement = appendElement;
  
  }

  getData() {
      return fetch(this.dataUrl)
          .then( res => res.json())
          .then( data => this.createView(data) ) 
  }


  createView(data) {
          let appendElement = this.appendElement;
          document.getElementById(appendElement).innerHTML = ``;
          
          this.displayItems(data)
  }

  displayItems(data) {

      //filterOptions for later implementation
          //const OpenMilestones = CrudCanvas.HG_data.filter(x => x.ActualEndDate === null);
          //const ClosedMilestones = CrudCanvas.HG_data.filter(x => x.ActualEndDate !== null);
      
      document.getElementById(this.appendElement).innerHTML += `
      <br><br><h3>${getText["open-milestones"]}</h3><br>
      ${data.map(this.itemTemplate).join("")}
      `;
  }

  distroyItems() {
      document.getElementById(this.appendElement).innerHTML = "";
  }

  createItem(data) {
      CrudCanvas.HG_data.push(data);
      this.distroyItems();
      this.displayItems();
  }
  
  deleteItem() {
      
  }

}


const defaultAwesomeFunction = (name) => {
  const returnStr = `I am the Default Awesome Function, fellow comrade! - ${name}`;
  return returnStr;
};

const awesomeFunction = () => 'I am just an Awesome Function';

export default CrudCanvas;

export { awesomeFunction };
