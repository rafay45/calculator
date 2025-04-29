let display = document.getElementById('output');
function onOff() {
    if (display.style.backgroundColor = "rgb(32, 32, 32)") {
        display.style.backgroundColor = "rgb(48, 47, 47)";
    }
    else if (display.style.backgroundColor = "rgb(48, 47, 47)") {
        display.style.backgroundColor = "rgb(32, 32, 32)";
    }
}
function appendValue(event) {
    if (display.style.backgroundColor = "rgb(32, 32, 32)") {
        display.style.backgroundColor = "rgb(48, 47, 47)";
    } else if (display.value === "0") {
        display.value = ""
    } else if (display.value === "syntax error") {
        display.value = ""
    } else {
        display.value += event
    }
}

function clearDisplay() {
    if (display.value === "off") {
        display.value = "off"
    } else {
        display.value = "0";
    }
}

function deleteDisplay() {
    if (display.value === "off") {
        display.value = "off"
    } else {
        display.value = display.value.slice(0, -1)
    }
}
function equal() {
    if (display.value === "off") {
        display.value = "off"
    } else {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "syntax error"
        }
    }

}