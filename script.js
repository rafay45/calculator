let display = document.getElementById('output');

function appendValue(event) {
    display.value += event
}
function clearDisplay() {
    display.value = "0"
}
function deleteDisplay() {
    display.value = display.value.slice(0, -1)
}
function equal(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid Calculation!");
    }
}
function onOff() {
    if (display.value === "") {
        display.value = "0";
    } else if (display.value === display.value) {
        display.value = ""
    }
}