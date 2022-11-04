
let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) { //checking if it's a truthy value 
    myLeads = leadsFromLocalStorage;
    renderLeads();
};

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) //After .setItem we need TWO strings, so we conver our variable to string by stringifying it
});

function renderLeads() {
    let listItems = '';

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    };
    ulEl.innerHTML = listItems; 
}






