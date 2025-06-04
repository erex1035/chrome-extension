let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
let listItems = ""

inputBtn.addEventListener("click", saveLead);
function saveLead(){
   myLeads.push(inputEl.value)
}
console.log(myLeads)


for(let i = 0; i < myLeads.length; i++){
   listItems += "<li>" + myLeads[i] + "</li>"
   console.log(listItems)
   //method1
   //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
   //method2
   // const li = document.createElement("li")
   // li.textContent = myLeads[i]
   // ulEl.append(li)
}
ulEl.innerHTML = listItems
// method 2
// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
// });

// method 3
// inputBtn.addEventListener("click", () =>
// {
//  myLeads.push(inputEl.value)
// } );
 