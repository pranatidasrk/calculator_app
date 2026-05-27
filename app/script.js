function appendValue(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

function calculate() {
    try {
        document.getElementById("result").value =
            eval(document.getElementById("result").value);
    } catch {
        alert("Invalid Expression");
    }
}