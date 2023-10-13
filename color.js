let div1=document.createElement("div")
div1.className="container"

let div2=document.createElement("div")
div2.className="main"


let btn1=document.createElement("button")
btn1.innerText="Change background color"

let btn2=document.createElement("button")
btn2.innerText="Hex color code"

div2.append(btn1,btn2);
div1.append(div2);
document.body.append(div1);



let color=['#000000','#040720',	'#CD5C5C','#F08080'	,
         '#FA8072',	'#E9967A','#FFA07A','#FF0000',
         '#00FF00','#0000FF','#808000',	'#00FF00',
         '#008000','#00FFFF','#008080','#0000FF',
         '#000080','#FF00FF','#800080','#ADFF2F',	
         '#BDF516','#DAEE01','#E2F516',	'#CCFB5D',
         '#FFF8DC','#FFEBCD','#FFE4C4','#FFDEAD',
        '#F5DEB3','#DEB887','#D2B48C','#BC8F8F',	
         '#F4A460','#DAA520','#B8860B','#CD853F',	
         '#D2691E','#8B4513','#A0522D','#A52A2A','#800000']

btn1.addEventListener("click", colorname)
let a=0;
function colorname()
{
    document.body.style.backgroundColor=color[a];
 btn2.innerText=color[a];
 a++;   

}


