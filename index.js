const first = document.getElementById("start");

first.appendChild(document.createElement("h1")).textContent = "SLIP!"
first.style.color = "green";
first.style.textAlign = "center";

const action = document.querySelector("#action");

function changeImage() {
    const image = document.createElement("img");
    image.src = "img/IMG_5676_A.jpg";
    first.appendChild(image);
    image.style.height = "267px";
    image.style.width = "300px"
}
action.addEventListener("click", changeImage); 

const quickWriting = document.getElementById("diamond-mine");

quickWriting.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(document.querySelector("#reward"));
})