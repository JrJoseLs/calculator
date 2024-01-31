let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
    const result = eval(displayValue);
    document.getElementById("display").value = result;
    displayValue = result.toString();
    } catch (error) {
    document.getElementById("display").value = "Error";
    displayValue = "";
    }
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").value = displayValue;
}
// ... (código anterior)

function appendToDisplay(value) {
  // Verificar si ya hay un punto decimal en el valor actual
    if (value === '.' && displayValue.includes('.')) {
    return; // Evitar agregar más de un punto
    }
    
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

// ... (código anterior)

function clearEntry() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

// ... (código anterior)
