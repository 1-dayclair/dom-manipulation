const first = document.getElementById("start");

first.appendChild(document.createElement("h1")).textContent = "SLIP!"
first.style.color = "green";
first.style.textAlign = "center"

const image = document.createElement("img");  
image.src = "img/IMG_5676_A.jpg";
first.appendChild(image); 
image.style.height = "267px"
image.style.width = "300px"

const action = document.querySelector("#action");

function changeImage() {
    let text = document.createElement("p").textContent = "as in";
    first.appendChild(text)

    // text.style.fontStyle = "italic";
}

// other text and images intended to be changed when the "Click Me!" button is clicked.
    // const image2 = document.createElement("img");
    // image2.src = "img/a-as-in-nuclear-family.jpg";

    // const text1 = document.createElement("p").textContent = "Anchor";
    // text1.style.fontStyle = "strong"; 

    // const image1 = document.createElement("img");
    // image1.src = "img/IMG_5677_B.jpg";  

    // const text2 = document.createElement("p").textContent = "as in";
    // text2.style.fontStyle = "italics"; 

    // const text3 = document.createElement("p").textContent = "Billionaire";
    // text3.style.fontStyle = "strong"; 

    // const text4 = document.createElement("p").textContent = "as in";
    // text4.style.fontStyle = "italics";

    // const text5 = document.createElement("p").textContent = "Celebrity";
    // text5.style.fontStyle = "strong"


action.addEventListener("click", ()=> {
first.appendChild(document.createElement("p").textContent = "as in");
    
}); 

const quickWriting = document.getElementById("diamond-mine");
quickWriting.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(document.querySelector("#reward"));
})