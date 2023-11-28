var buttn = document.getElementById("submit");
var body = document.querySelector("body");

buttn.addEventListener("click", addinfo);

function addinfo() {
  var amount = document.getElementById("amount");
  var info1 = document.createElement("li");
  var info1text = document.createElement("li");
  info1.appendChild(document.createTextNode("$" + amount.value + " - "));
  info1text.appendChild(document.createTextNode(amount.value));
  amount.value = " ";
  body.appendChild(info1);

  var catvalue = document.getElementById("categeory");
  var info3 = document.createElement("span");
  info3.appendChild(document.createTextNode(catvalue.value));
  catvalue.value = " ";
  info1.appendChild(info3);

  var decvalue = document.getElementById("Description");
  var info2 = document.createElement("span");
  info2.appendChild(document.createTextNode(decvalue.value + " "));
  decvalue.value = " ";
  info1.appendChild(info2);

  let info;
  localStorage.setItem("info", info1.textContent);

  var del = document.createElement("button");
  del.textContent = "Delete";
  del.className = "button";
  info1.appendChild(del);
  del.addEventListener("click", delitem);

  var edit = document.createElement("button");
  edit.textContent = " " + "Edit";
  edit.className = "button";
  info1.appendChild(edit);
  edit.addEventListener("click", edits);

  function edits() {
    amount.value = info1text.textContent;
    decvalue.value = info2.textContent;
    catvalue.value = info3.textContent;
    info1.remove();
    localStorage.removeItem("info");
  }

  function delitem() {
    alert("Are You Sure!");
    info1.remove();
    localStorage.removeItem("info");
  }
}
