let display = document.getElementById('output');
display.value = "off"
function onOff() {
    if(display.value === "off"){
        display.value = "on";
    }else{
        display.value = "off"
    }
}
function appendValue(event) {
    if (display.value === "off") {
        display.value = "off"
    } else if (display.value === "on") {
        display.value = "";
    } else if (display.value === "0") {
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
            alert("Invalid Calculation!");
        }
    }

}