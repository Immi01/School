/*      Eventlisteners for Functions which could be used some time in future \/ (for saving tasks in cookies)
document.addEventListener("DOMContentLoaded", function(event){   //Load Cookies
    cookieLoader();
}, false);

window.onunload = function(){   //Create Cookies
    cookieCreator();
};
*/

//JSON javascript object notation

const tasks = [];


printTaskList();

document.getElementById("createButton").addEventListener("click",function(){
    addTask();
})

function addTask(){
    let taskName = document.getElementById("txtNewTask").value;
    let taskResponsible = document.getElementById("txtResponsible").value;
    let task = {name:taskName, responsible:taskResponsible, isDone:false}
    tasks.push(task);
    printTaskList();
}

function printTaskList(){
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}

function markTask(element){
    let index = element.attributes["data-index"].value;
    let isChecked = element.checked;

    tasks[index].isDone = isChecked;
    printTaskList();
}

function getHTMLTasks(){
    let html = "";
    let index = 0;
    tasks.forEach(element => {
        let checked="";
        if(element.isDone){
            checked = "checked";
        }
        html += "<li> <input onClick='markTask(this)' name='checkbox' data-index='" + index + "'" + " type='checkbox'" + checked + "/>" + element.name + " - " + element.responsible + "</li>";
        index++;
    });
    return html;
}
/*      functions to implement cookies in the future \/
function cookieCreator(){



    let date = new Date();
    let months = ["Jan", "Feb", "mar", "",];
    let expires = date.getDate
    document.cookie = "test = 3; expires=Fri, 26 Nov 2021 16:20:00 UTC; path=/";
    document.cookie = "nichtTest = 30; expires=Fri, 26 Nov 2021 16:20:00 UTC; path=/";
    console.log("yes");
}

function cookieLoader(){
    let x = document.cookie;
    console.log(x);
}
*/