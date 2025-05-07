let display = document.getElementById('output');
function on() {
    if (display.style.backgroundColor === "rgb(10, 10, 10)") {
        display.style.backgroundColor = "rgb(48, 47, 47)"
    }else{
        display.style.backgroundColor = "rgb(48, 47, 47)"
    }
}
function off() {
    if (display.style.backgroundColor === "rgb(48, 47, 47)") {
        display.style.backgroundColor = "rgb(10, 10, 10)"
        display.value = ""
    } else{
        display.style.backgroundColor = "rgb(10, 10, 10)"
    }
}
function appendValue(event) {
    if (display.style.backgroundColor === "rgb(48, 47, 47)") {
        display.value += event
    } else if (display.value === "0") {
        display.value = ""
    } else if (display.value === "syntax error") {
        display.value = ""
    } else {
        display.style.backgroundColor = "rgb(10, 10, 10)"
        display.value = ""
    }
}

function clearDisplay() {
    if (display.style.backgroundColor === "rgb(48, 47, 47)") {
        display.value = ""
    } else {
        display.style.backgroundColor = "rgb(10, 10, 10)"
    }
}

function deleteDisplay() {
    if (display.style.backgroundColor === "rgb(10, 10, 10)") {
        display.style.backgroundColor = "rgb(10, 10, 10)"
        display.value = ""
    } else {
        display.value = display.value.slice(0, -1)
    }
}
function equal() {
    if (display.style.backgroundColor === "rgb(32, 32, 32)") {
        display.style.backgroundColor = "rgb(32, 32, 32)"
    } else {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "syntax error"
        }
    }

}