let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", saveLead);
function saveLead(){
   if (inputEl.value === ""){
      inputEl.placeholder = "Please write something"
   }
   else{
   myLeads.push(inputEl.value)
   inputEl.value = ""
   renderLeads()
   }
}
function renderLeads() {
   let listItems = ""
   for(let i = 0; i < myLeads.length; i++){
   //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
     listItems += 
     `<li>
         <a href="${myLeads[i]}" target="_blank">
            ${myLeads[i]}
         </a>
      </li>`
   }
   ulEl.innerHTML = listItems
}

