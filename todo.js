let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", addEvent);

function addEvent(){
    let e = inp.value;
    let li = document.createElement("li");
    li.textContent = e;
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("del");
    li.appendChild(delbtn);
    ul.appendChild(li);
    inp.value = "";
}

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
        console.log("deleted");
    }
});

// let delbtns = document.querySelectorAll(".del");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.dir(par);
//         par.remove();
//     });
// } WILL NOT WORK FOR NEWLY ADDED BUTTONS  