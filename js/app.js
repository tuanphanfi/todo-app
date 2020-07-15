let inputValueSelect = document.getElementById("inputValue");
let resultSelect = document.getElementById('result')

let myCheckBox = `(<span id="status">UnDone</span>) <input type="checkbox" id="myCheckBox" onclick="toggleStatus()"></input>`

let myArray = []

/*
{
    content: "code"
    done: false
}



*/

function renderItem(item, index) {
    let html = ""

    html += "<li>"
    // add checkbox
    if (item.done)
        html += `<input type="checkbox" onclick="toggleStatus(${index})" checked>Done `
    else
        html += `<input type="checkbox" onclick="toggleStatus(${index})">Undone `
    html += item.content
    // add delete button
    html += `<button class="btn btn-danger" onclick="deleteItem(${index})">Delete</button>`
    html += "</li>"
    return html
}



function add() {
    let inputValue = inputValueSelect.value;
    // add into myArray
    myArray.push({
        content: inputValue,
        done: false
    })
    render()
    inputValueSelect.value = ""
}

function render() {
    resultSelect.innerHTML = `<ul>${
        myArray.map((item, index) => {
            return renderItem(item, index)
        }).join('')
        }<ul`
}

inputValueSelect.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        add()

    }
});


// let a = [3,5,6]
//a.splice(2,1) [3,5]

// map no ra. check vao cai index nao, bien cai array do 
function toggleStatus(index) {
    myArray[index].done = !myArray[index].done;
    render()
}

function deleteItem(index){
    // console.log(`delete`)
    myArray.splice(index,1)
    render()
}