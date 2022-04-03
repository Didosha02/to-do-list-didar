function gg() {
  let li = document.createElement("li");
  let b = document.getElementById("input").value;
  let t = document.createTextNode(b);
  li.appendChild(t);
  if (b === '') {
    alert("Поле пустое!");
  } else {
    document.getElementById("listglavniy").appendChild(li);
  }
  document.getElementById("input").value = "";
}