let button = document.getElementById("btn");
let text = document.getElementById("content");
let empty = document.getElementById("demo");
let item = document.getElementById("clear");
button.addEventListener("click", addfunction);

function addfunction()
{
    if(text.value===""){
        alert("Text box is empty");
    }

     else{

        let newdiv = document.createElement("div");
        newdiv.setAttribute("id","dust");
        console.log(newdiv);

        let list=document.createElement("p");
        list.innerText=text.value;
        text.value="";

        let delbtn = document.createElement("button");
        delbtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        
        newdiv.append(list,delbtn);
        // newdiv.append(delbtn);
        empty.append(newdiv);

        delbtn.addEventListener("click",delfunction);

        function delfunction(){
            delbtn.parentElement.remove();
        }

        item.addEventListener("click", clearfunction);

        function clearfunction(){
            newdiv.innerHTML="";
        }
    }
}













































































































