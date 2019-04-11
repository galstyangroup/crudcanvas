/* eslint-disable no-console */
const CrudCanvas = require('../lib').default;


const MilestoneState =  {
    "id":"",
    "rank":"",
    "project":"",
    "milestone":"",
    "percentage":"",
    "color":"",
    "status":"",
    "IsKey":"",
    "expectedEndDate":"",
    "actualEndDate":"",
    "lastUpdated":"",
    "reviewComments":""
}

if( !$("#CreateMilestoneViewBtn").length ){
    $(".dt-buttons.btn-group").append(`
        <a id="CreateMilestoneViewBtn" onclick="createView()" class="btn btn-default"> <i class="fas fa-list-ul"></i> Click here </a>
    `);
}


//milestoneTemplate
const milestoneTemplate = (milestone) => {
let ModifiedDate =  moment.utc(milestone.ModifiedDate);
debugger;
return `
<div class="card milestone">
    <div class="card-body row">
            <div class="col-sm-1 checkbox">
                <i style="font-size:23px; color:${milestone.ActualEndDate !== null ? "green;" : "#a9a9a9;" } " class="text-center fas fa-check-square"></i>
            </div>
            <div class="col-sm-9">
                <div class="col-sm-6">
                    <b><p class=""> ${milestone.Description}  </p> </b>  
                    <label class="label label-default" style="background-color:${milestone.StatusColor}"> ${milestone.StatusName}</label>
                        <label title="${getText["project"]}" class="label label-default">${milestone.ProjectName}</label> 
                    <br>
                    
                </div>
                <div class="col-sm-6">
                    <p>
                        <label style="border-radius:50%;" class="label label-default status-${milestone.ColorName !== null ? milestone.ColorName: "0" }"  title="${milestone.ColorName}">${milestone.ColorID != null ? milestone.ColorID : 0}</label>        
                        ${milestone.ReviewComments !== null ? milestone.ReviewComments : ""}
                    </p>
                    <p style="font-size:8px" title="${getText["updated"]}">
                        ${ModifiedDate.fromNow()}
                    </p>
                </div>
            </div>
            <div class="col-sm-2 text-center">
                <i class="fas fa-ellipsis-h rank-id-${milestone.Rank}"></i>
                <div class="progress" style="height: 20px;" >
                        <div class="progress-bar" role="progressbar" style="width: ${milestone.CompletedPercentage}%;" aria-valuenow=" ${milestone.CompletedPercentage}" aria-valuemin="0" aria-valuemax="100"> ${milestone.CompletedPercentage}%</div>
                </div>
            </div>
    </div>
</div>  
`;
}

let SampleCrudCanvas = new CrudCanvas(
"MilestoneCrud", 
"/milestone/milestoneAPI", 
"",
milestoneTemplate, 
MilestoneState, 
"milestoneDatatable_wrapper" 
);
