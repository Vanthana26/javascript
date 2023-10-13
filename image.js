let div1=document.createElement("div")
div1.className="container"

let div2=document.createElement("div")
div2.className="main"

let box=document.createElement("img")
box.className="image"

let btn1=document.createElement("button")
btn1.innerText="Previous Image"

let btn2=document.createElement("button")
btn2.innerText="Next Image"

div2.append(btn1,btn2)
div1.append(box)

let images2=["IU1.jpg"]
box.src=images2
document.body.append(div1,div2)

let images=['images.jpg','bts.jpg','bts1.jpg','bts2.jpg','Seventeen.jpg','seventeen1.jpg','got7.jpg',
             'exo.jpg','exo1.jpg','eny.jpg','eny1.jpg','blackpink.jpg','blackpink1.jpg','IU.jpg','Iu.jpg',
             'red.jpg','red1.jpg','twice.jpg',]

let a=0
btn2.addEventListener("click",myimage)
function myimage()
{
    a++;
    box.src=images[a]
} 
btn1.addEventListener("click",preimage)
function preimage()
{
    a--;
    box.src=images[a]

}            