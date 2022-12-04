const li = document.getElementById('list');

let answer = "Y";
let item;
 
while (answer == "Y") {
    item = prompt("Inserisci articolo")
    li.innerHTML += `<div class="d-flex align-items-center">
                        <input type="checkbox">
                        <label class="items fw-semibold ms-1 mb-1"> ${item} </label><br>
                    </div>`;
    console.log(li);
    answer = prompt("Vuoi inserire un altro articolo? (Y/N)")
    answer = answer.toUpperCase()
}