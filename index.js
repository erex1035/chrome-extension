let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");


inputBtn.addEventListener("click", saveLead);
function saveLead(){
   myLeads.push(inputEl.value)
}
console.log(myLeads)


 