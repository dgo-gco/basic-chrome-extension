
let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const saveTabBtn = document.getElementById('save-tab-btn');

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) { //checking if it's a truthy value 
    myLeads = leadsFromLocalStorage;
    render(myLeads);
};

saveTabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs){ //This function will execute once chrome finds what we're requiring
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
});

function render(leads) { //le decimos a la funcion cual array utilizar (arguments)
    let listItems = '';

    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    };
    ulEl.innerHTML = listItems; 
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) //After .setItem we need TWO strings, so we conver our variable to string by stringifying it
    render(myLeads);
});






