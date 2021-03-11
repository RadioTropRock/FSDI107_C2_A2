var isItImportant = false;
var isDetailsVisible= true;

function toggleDetailsVisibility(){
    
    if(isDetailsVisible) { 
    $("#capture").hide();
    isDetailsVisible = false;
    }
    else {
    $("#capture").show();
    isDetailsVisible = true;
}
}
function toggleImportant(){

    if(!isItImportant){
    $("#iImportant").removeClass('far').addClass('fas');
    isItImportant = true;
    } else {
        isItImportant = false;
        $("#iImportant").removeClass('fas').addClass('far');
    }
}


function saveTask() {
    console.log("Save Clicked");


  var title = $("#txtTitle").val();
  var date = $("#txtDate").val();
  var status = $("#selStatus").val();
  var location = $("#txtLocation").val();
  var color = $("#txtColor").val();
  var desc = $("#txtDesc").val();

  var myTask = new Task(0, title, isItImportant, date, status, location, color, desc);

  console.log(myTask);
displayTask(myTask);
}

function displayTask(task){
var syntax = 
`<div class = "listItem">
<h3>${task.title}</h3>
<label>${task.dueDate}</label>
<p>${task.status}</p>
<p>${task.location}</p>
<p>${task.description}</p>
<i class="!isItImportant"></i>
</div>`;


$("#tasks-list").append(syntax);
}

function retrieveData(){
    $$.ajax({
        url: '/api/postTask',
        type: "POST",
        data: JSON.stringify(myTask),
        contentType: "application/json",
        success: function(res){
            console.log("retrieving", res);
            
            for(let i=0; i < res.length; i++) {
                let task = res[i];
                if(task.use === "Eric"){
                    displayTask(task);
                }
            }
        },
        error: function(errorDet) {
            console.log("Error retrieving", errorDet);
        }
    });
}




function init() {
    console.log("Task Manager");


$("#iImportant").click(toggleImportant);
$("#btnSave").click(saveTask);
$("#btnDetails").click(toggleDetailsVisibility);
}

window.onload = init;