//! Connection

const panel = document.querySelectorAll(".colors");
const hexadecimalBox = document.getElementById("hexadecimal-input");
const msgBox = document.getElementById("output-section");

let timeSpan;
//! Action

panel.forEach((panelElement) => {
    panelElement.addEventListener("click", (e) => {
        let color = getComputedStyle(panelElement).backgroundColor;
        applyColorToBody(color);
        giveMessage("Panel Color", true);
    });
});

hexadecimalBox.addEventListener("focusout", (e) => {
    let hexadecimalValue = hexadecimalBox.value.trim();
    if (hexadecimalValue.length > 0) {
        if (hexadecimalValue[0] !== "#") {
            hexadecimalValue = "#" + hexadecimalValue;
        }
        if (hexadecimalValue.length == 4 || hexadecimalValue.length == 7 || hexadecimalValue.length == 9) {
            applyColorToBody(hexadecimalValue);
            giveMessage("#hexadecimal Box", true);

            //! I have to check if the code is valid 

        }
        else {
            giveMessage("Refine Hexadecimal Code", false);
        }
    }
    else {
        giveMessage("Type hexadecimal code", false);
    }
});

//! Helper

function applyColorToBody(color) {
    document.body.style.backgroundColor = color;
}

function giveMessage(message, success) {
    clearMsg();
    if (success) {
        msgBox.classList.add("success");
        setTimeout(() => {
            msgBox.textContent = `Success! Color applied from '${message}'`;
        }, 400);
    }
    else {
        msgBox.classList.add("error");
        setTimeout(() => {
            msgBox.textContent = `${message} & Click OUTSIDE`;
        }, 400);
    }

    timeSpan = setTimeout(() => {
        clearMsg();
    }, 5000);
}

function clearMsg() {
    clearTimeout(timeSpan);
    msgBox.textContent = '';
    msgBox.classList.remove("success");
    msgBox.classList.remove("error");
}