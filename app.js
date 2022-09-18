
const input = document.getElementById("input");
const addList = document.getElementById("listAdd");
const alert_list = document.getElementById("alert_list");
const clear = document.getElementById("clear");
const x = document.getElementById("x");
var index = 0;
clear.addEventListener('click', () => {
    alert_list.innerHTML = ""
})

addList.addEventListener('click', () => {
    if(input.value != "" && input.value != " "){
        alert_list.innerHTML += [`
        <div class="d-flex justify-content-between my-1 box1" id="x${index}">
        <p class="h5" id="text${index}">${input.value}</p>
        <div class="d-flex gap-1">
        <button class="done btn btn-outline-success d-flex align-items-center justify-content-center px-2" onclick="document.getElementById('text${index}').setAttribute('class', 'text-success h5'); document.getElementById('text${index}').style.textDecoration = 'line-through';">✓</button>
        <button class="del btn btn-outline-danger px-2" onclick="document.getElementById('x${index}').remove()">✗</button>
        </div>
        </div>`];
        input.value="";
        index++;
    }
    else{
        alert("lütfen bir değer giriniz.");
    }
})
