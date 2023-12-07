// ----------------------------showuserdetails function -------------------------------------------------------

function saveuserdetails(event){
  event.preventDefault();
const name=event.target.name.value;
const amount=event.target.amount.value;
const catgeory=event.target.categeory.value;

const userobj={
  name,
  amount,
  catgeory,
}
localStorage.setItem(userobj.name,JSON.stringify(userobj));
showuserdetails(userobj);

// ------------------------- free input text data remove
// document.getElementById("name").value=" ";
// document.getElementById("amount").value=" ";
// document.getElementById("categeory").value=" ";

}

// ------------------------showuserdetails on Screen---------------------------------------------------------------

function showuserdetails(userobj){
  const parent=document.getElementById("div");
  const child=document.createElement("li");
  parent.appendChild(child);

  child.textContent = userobj.name+"__"+userobj.amount+"__"+userobj.catgeory+"__";

  // --------------------create delete button
 const deletebtn=document.createElement("input");
 deletebtn.type="button";
 deletebtn.value="Delete";
 child.appendChild(deletebtn);
 deletebtn.onclick=()=>{
  parent.removeChild(child);
  localStorage.removeItem(userobj.name);
 }

//  ----------------------------create Edit Button------------------------------------------------
const editbtn=document.createElement("input");
editbtn.type="button";
editbtn.value="Edit";
child.appendChild(editbtn);
editbtn.onclick=()=>{
  // console.log(document.getElementById("name"));
  document.getElementById("Name").value=userobj.name;
  document.getElementById("amount").value=userobj.amount;
  document.getElementById("categeory").value=userobj.catgeory;
  parent.removeChild(child);
}



}

window.addEventListener("DOMContentLoaded",()=>{
  const localStorageobj=localStorage;
  const localStoragekeys=Object.keys(localStorageobj);

  for(var i=0;i<localStoragekeys.length;i++)
  {
    const keys=localStoragekeys[i];
    const userdetails=localStorageobj[keys];
    const userdetailsobj=JSON.parse(userdetails);
    showuserdetails(userdetailsobj);
  }
})


