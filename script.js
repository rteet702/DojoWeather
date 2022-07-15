console.log("Starting...");

function updateTemperature(element) {
    var setValue = element.value;
    var currHighs = document.querySelectorAll('.high');
    var currLows = document.querySelectorAll('.low');

    if(setValue == "F") {
        for (var i = 0; i < currHighs.length; i++) {
            currHighs[i].innerText = (convertToF(parseInt(currHighs[i].innerText))).toFixed(1) + "°";
            currLows[i].innerText = (convertToF(parseInt(currLows[i].innerText))).toFixed(1) + "°";
        }
    }

    else {
        for (var i = 0; i < currHighs.length; i++) {
            currHighs[i].innerText = (convertToC(parseInt(currHighs[i].innerText))).toFixed(1) + "°";
            currLows[i].innerText = (convertToC(parseInt(currLows[i].innerText))).toFixed(1) + "°";
        }
    }
}

function convertToC(value) {
    var c = (5/9) * (value - 32);
    return c;
}

function convertToF(value) {
    var f = (value * (9/5)) + 32;
    return f;
}