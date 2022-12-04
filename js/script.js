const li = document.getElementById('list');

let answer = "Y";
let item;
 
while (answer == "Y") {
    item = prompt("Inserisci articolo")
    li.innerHTML += `<li> ${item} </li>`;
    console.log(li);
    answer = prompt("Vuoi inserire un altro articolo? (Y/N)")
    answer = answer.toUpperCase()
}