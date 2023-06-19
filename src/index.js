import "./styles.css";

document.getElementById("my-button").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("Hello").innerHTML = "My notebook";
  console.log("Hello world");
}
document.getElementById("add-data").addEventListener("click", addition);

function addition() {
  const list = document.getElementById("list");
  var li = document.createElement("li");
  let newParagraph = document.createElement("p");
  newParagraph.innerText = document.getElementById("text").value;

  li.appendChild(newParagraph);
  list.appendChild(li);
}
