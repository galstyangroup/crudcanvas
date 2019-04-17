export default function numberTemplate(name, currentValue) {
  return `
    <form class="form" enctype="multipart/form-data" >  
      <div class="input-group">
        <input type="number" class="form-control" name=${name} value="${currentValue}"></input>
        <div class="input-group-append">
          <button class="btn btn-xs btn-outline-secondary" type="submit">OK</button>
        </div>
      </div> 
    </form>`;
}
