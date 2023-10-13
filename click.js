let btn = document.querySelectorAll("button");

console.log(btn);

for(let i=0; i<= btn.length-1;i++)
{
   console.log("loop")
    btn[i].flag = false;
    btn[i].addEventListener("click",function(){
      console.log("Incoming");
      console.log("btn flag check : "+btn[i].flag )
      if(btn[i].flag == false)
      {
         console.log("if block")
         btn[i].style.backgroundColor = "green";
         btn[i].style.color="white";
         btn[i].innerText ="Clicked";

         btn[i].flag = true;
         console.log(btn[i])
      }
      else{
         btn[i].style.backgroundColor = "#9551d4";
         btn[i].style.color="white";
         btn[i].innerText ="Click me";

         btn[i].flag = false;
      }



   });


}

// function testFunction()
// {
//    console.log("External")
// }