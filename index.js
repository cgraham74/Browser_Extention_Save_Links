
let myLinks = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const linksFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"))
console.log("LS1"+linksFromLocalStorage)

if(linksFromLocalStorage){
    myLinks = linksFromLocalStorage;
    render(myLinks);
}

/**
 * Creates the list of elements and adds them to the DOM
 */
function render(links){
    let listItems = "";
    for( let i = 0; i < links.length; i++){ 
        listItems += `
        <li>
            <a target='_blank' href='${links[i]}'>
             ${links[i]}
            </a>
        </li>` 
        // console.log(listItems)
    }
    ulEl.innerHTML = listItems;
}
 

/**
 * Event Listener clears the DOM, Links, and removes elements.
 */
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLinks = [];
    render(myLinks)
});


/**
 * Event listener for the Save button
 * It adds links to an array.
 * It then clears the input field
 * Calls the renderLinks() function
 */
inputBtn.addEventListener("click", function(){
    myLinks.push(inputEl.value); 
    inputEl.value = "";
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    render(myLinks)
});
console.log(myLinks)