const inputbox=document.getElementById("inputbox");
const listcontainer=document.getElementById("list-container");
 function addtask(){
    if(inputbox.value==""){
        alert("you must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=documnet.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
 }
 listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classname.toggle("checked");
    }
    else if(e.target.tagName==="span"){
        e.target.parentElement.remove();

    }

 },false)