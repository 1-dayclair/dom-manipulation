const first = document.getElementById("start");

first.appendChild(document.createElement("h1")).textContent = "SLIP!"
first.style.color = "green";
first.style.textAlign = "center";

const action = document.querySelector("#action");
const toggle = document.querySelector(".toggle");  

function changeImage() {
    action.removeEventListener("click", changeImage)

    const image = document.createElement("img");
    image.src = "img/IMG_5676_A.jpg"
    first.appendChild(image);
    image.style.height = "267px";
    image.style.width = "300px";
    
    const image1 = document.createElement("img");
    image1.src = "img/a-as-in-nuclear-family.jpg" 
    first.appendChild(image1);
    image1.style.height = "267px";
    image1.style.width = "300px";
    first.appendChild(document.createElement("h5")).textContent = "as in Anchor";
}
action.addEventListener("click", changeImage); 


function secondChangeImage () {


    const imageNow = document.createElement("img");
    imageNow.src = "img/IMG_5677_B.jpg"
    imageNow.style.height = "267px";
    imageNow.style.width = "300px";
    first.appendChild(document.createElement("h5")).textContent = "as in Billionaire"
}


const quickWriting = document.getElementById("diamond-mine");

quickWriting.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("DEFENSE!! *stomp stomp* DEFENSE!! *stomp stomp* DEFENSE!! *boom *" +  
"*boom* there's always some kind of" + 
"problem in this apartment. He wonders," + 
" it must be for the best!...?" + 
		"That's his bestest friend." + 
" Should it be breathing, and stretching, sexy like a cat?" +
" This is good for the the fortification of his Strong Stomach! as in" + 
  " Foreplay for psychological warfare of turning him off" +
	" He looks out for thee," +
" though, must it be for bitter, baby" +
" put me in your drink" +
"!!DEFENSE!! *stomp stomp* DEFENSE!! *boom *" + 
"*boom* !!DEFENSE!! *stomp stomp* DEFENSE!! *boom *" + 
"*boom*");
})

const inner = document.getElementById("reward");

inner.style.textAlign = "right"
inner.innerHTML =  "This is a <strong>future</strong> <i>poem</i> <u>script</u> of shared individual <u>research</u> into the <s>innocence and</s> carelessness of what We describe as <u>Origin</u>."  

const pleasant = document.getElementById("pleasant");
try {
    if(pleasant === true) throw "Okay, let's try it!";
} catch (error) {
    console.error("Hold on, wait a second...")    
}

pleasant.appendChild(quickWriting);

console.log(pleasant.firstChild.nodeName);

const justification = document.querySelector(".turn");
const targets = ["Middlemen", "Landlords", "Gatekeepers" + " " + "... are all reportedly black mold concerning Capitalism"]; 

const dust = new DocumentFragment();

for (const target of targets) {
    const prominent = document.createElement("li");
    prominent.textContent = target;  
    prominent.style.textAlign = "left"
    dust.append(prominent);
}
justification.append(dust);

