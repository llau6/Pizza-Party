function addToList(name, location, availability) {
    var testTable = document.getElementById('searchTable');
    var newRow = testTable.insertRow(testTable.rows.length);
    var newCell =  newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);
    var newCell3 = newRow.insertCell(2);
    var newText = document.createTextNode(name);
    var newText2 = document.createTextNode(location);
    var newText3 = document.createTextNode(availability);

    newCell.appendChild(newText);
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);
}

addToList("Jerry", "Student Center", "Free");