let io=document.getElementsByClassName("inside");
const input=document.getElementById("input");
const inputbox=document.getElementById("inputbox");
console.log(io.length)
const outbox=document.getElementById("outline");
const create=document.getElementById ("create");
const clear=document.getElementById ("clear");
const warning=document.getElementById("warning");
/* i.addEventListener("mouseover",(event)=>{
    event .target.style.backgroundColor="lightblue";
    console.log("yes");
}); */
create.addEventListener("click",(event)=>{
    const a=document.getElementById("input").value;
    if(a!==0&&a<100){
        warning.innerText="";
        input.style.borderColor="black"
        outbox.innerHTML="";
        outbox.style.maxWidth=a;
        outbox.style.maxHeight=a;
        for(let j=0;j<a;j++){
            
            let out=document.createElement("div");
            for(let i=0;i<a;i++){
                let n =document.createElement("div");
                out.appendChild(n)
                n.setAttribute("class","inside")
        
            }
            outbox.appendChild(out);
        }
        document.getElementById("input").value=""
    }
    else{
        input.style.borderColor="red";
        warning.innerText="*enter number below 100";
        document.getElementById("input").value="";
        outbox.innerHTML="";
    }
})
const on=function(i){
    io[i].style.backgroundColor="red";
    i+=1
    if(i===io.length)window,alert("box is full");
}
clear.addEventListener("click",(event)=>{
    outbox.innerHTML="";
})