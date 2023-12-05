var buttn = document.getElementById("submit");
var body = document.querySelector("body");

buttn.addEventListener("click", addinfo);

function addinfo() {
  var name = document.getElementById("Name");
  var infoname = document.createElement("li");
  var info1text = document.createElement("li");
  infoname.appendChild(document.createTextNode(name.value + "  "));
  info1text.appendChild(document.createTextNode(name.value));
  name.value = " ";
  body.appendChild(infoname);

  var amount = document.getElementById("amount");
  var info1 = document.createElement("span");
  info1.appendChild(document.createTextNode("$" + amount.value + " - "));
  amount.value = " ";
  infoname.appendChild(info1);

  var catvalue = document.getElementById("categeory");
  var info3 = document.createElement("span");
  info3.appendChild(document.createTextNode(catvalue.value));
  catvalue.value = " ";
  infoname.appendChild(info3);

  var decvalue = document.getElementById("Description");
  var info2 = document.createElement("span");
  info2.appendChild(document.createTextNode(decvalue.value + " "));
  decvalue.value = " ";
  infoname.appendChild(info2);

  var del = document.createElement("button");
  del.textContent = "Delete";
  del.className = "button";
  infoname.appendChild(del);
  del.addEventListener("click", delitem);

  var edit = document.createElement("button");
  edit.textContent = " " + "Edit";
  edit.className = "button";
  infoname.appendChild(edit);
  edit.addEventListener("click", edits);

  var newinfo = {
    name: info1text.textContent,
    amount: info1text.textContent,
    category: info3.textContent,
    description: info2.textContent,
  };
  var infodata = JSON.stringify(newinfo);
  localStorage.setItem("user " + info1text.textContent, infodata);

  function edits() {
    amount.value = info1.textContent;
    decvalue.value = info2.textContent;
    catvalue.value = info3.textContent;
    name.value = info1text.textContent;
    infoname.remove();
    localStorage.removeItem("user " + info1text.textContent);
  }

  function delitem() {
    alert("Are You Sure!");
    infoname.remove();
    localStorage.removeItem("user " + info1text.textContent);
  }
}
