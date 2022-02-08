window.addEventListener("load", function () {
    document.getElementById("button").disabled = true;
});

function validateAxes() { // if x or y is empty - keep button disabled, otherwise make it active
    if (document.getElementById("x").value === "" || document.getElementById("y").value === "") {
        document.getElementById("button").disabled = true;
    } else {
        document.getElementById("button").disabled = false;
    }
}

function validateAxesValues() {  // if table with id "chesstable" exists => remove it
    if (document.contains(document.getElementById("chesstable"))) {
        document.getElementById("chesstable").remove();
    }
    // parse input variables to integer / number
    var xVal = parseInt(document.getElementById('x').value);
    var yVal = parseInt(document.getElementById('y').value);
    // validate if parsed value equals from 1 to 10
    if ((xVal > 0 && xVal <= 10) && (yVal && yVal <= 10)) {
        var table = document.createElement("table");
        table.id = "chesstable";
        // draw a table
        for (var i = 0; i < yVal; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < xVal; j++) {
                var td = document.createElement('td');
                if (i % 2 == j % 2) {
                    td.className = "white";
                    td.setAttribute("onclick", "changeColor()");
                } else {
                    td.className = "black";
                    td.setAttribute("onclick", "changeColor()");
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    } else {
        alert("Input values are incorrect. Please use numbers in between 1 - 10.");
        document.getElementById('x').value = '';
        document.getElementById('y').value = '';
    }
}

function changeColor() { // get all td's and change classname from white to black and vice versa
    cells = document.getElementsByTagName("td")
    for (var i = 0; i < cells.length; i++) {
        if (cells.item(i).className == "white") {
            cells.item(i).className = "black";
        } else if (cells.item(i).className == "black") {
            cells.item(i).className = "white";
        }
    }
}