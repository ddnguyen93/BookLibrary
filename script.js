let myLibrary = [];

function Book(titleValue, authorValue, pagesValue, statusValue) {
    this.title = titleValue;
    this.author = authorValue;
    this.pages = pagesValue;
    this.status = statusValue;
}

function addBookToLibrary(){
    let titleInput = document.getElementById("title").value;
    let authorInput = document.getElementById("author").value;
    let pagesInput = document.getElementById("pages").value;
    let statusInput = document.getElementById("status").value;

    if (titleInput == '' || authorInput == '' || pagesInput == ''){
        return (alert("Missing Information!"))
    }

    myLibrary[myLibrary.length] = new Book(titleInput, authorInput, pagesInput, statusInput);
    const tableContents = document.getElementById("tableContent")
    const tableRow = document.createElement("tr");
    tableRow.setAttribute("class", "dataRow");
    
    
    for (const [key, value] of Object.entries(myLibrary[myLibrary.length-1])) {
        let tableSlot = document.createElement("td");
        if (key == "status") {
            let statusButton = document.createElement("button");
            statusButton.setAttribute("type", "button");
            statusButton.innerHTML = value;
            statusButton.setAttribute("style", "width:75px");
            statusButton.setAttribute("style", "margin-left:0px")
            statusButton.setAttribute("style", "width:130px")
            statusButton.setAttribute("id", `statusButton${myLibrary.length-1}`)
            statusButton.setAttribute("onclick", `updateStatus(${myLibrary.length-1})`)
            tableSlot.appendChild(statusButton);

        } else {
            let tableInput = document.createTextNode(value);
            tableSlot.appendChild(tableInput);
        }
        tableRow.appendChild(tableSlot);
    }

    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "CheckBox");
    
    let tableSlot = document.createElement("td");
    tableSlot.appendChild(checkBox);
    tableRow.appendChild(tableSlot);

    tableContents.appendChild(tableRow);
    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("pages").value = '';
    document.getElementById("status").value = 'Not Started';
}

function deleteBook(){
    const allBoxes = document.getElementsByClassName("CheckBox");
    const allRows = document.getElementsByClassName("dataRow");
    const tableContents = document.getElementById("tableContent")
    let rowNumber = 0;
    let toBeRemoved = [];
    for (const checkbox of allBoxes){
        if (checkbox.checked == true){
            toBeRemoved.push(rowNumber);
        }
        rowNumber = rowNumber + 1;
    }
    for (rowNum of toBeRemoved.reverse()) {
        tableContents.removeChild(allRows[rowNum]);
    }
}

function updateStatus(indexNum){
    const clickedStatButton = document.getElementById(`statusButton${indexNum}`);
    if (clickedStatButton.innerHTML == "Not Started") {
        clickedStatButton.innerHTML = "In Progress";
    } else if (clickedStatButton.innerHTML == "In Progress") {
        clickedStatButton.innerHTML = "Completed";
    } else if (clickedStatButton.innerHTML == "Completed") {
        clickedStatButton.innerHTML = "Not Started";
    }
    myLibrary[indexNum].status = clickedStatButton.innerHTML;
}

function selectAll(){
    const topBox = document.getElementById("selectAll")
    const allBoxes = document.getElementsByClassName("CheckBox");

    if (topBox.checked == true){
        for (const checkbox of allBoxes){
            checkbox.checked = true;
        }
    } else if (topBox.checked == false){
        for (const checkbox of allBoxes){
            checkbox.checked = false;
        }
    }
}