export default function textTemplate(name, currentValue) {
  return `
  <form class="form" enctype="multipart/form-data" >  
    <div class="input-group">
      <input type="text" class="form-control" name=${name} value="${currentValue}"></input>
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="submit">OK</button>
      </div>
    </div>  
  </form>`;
}
