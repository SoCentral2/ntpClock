//https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array

var selectHours = document.getElementById("selectHours");
var options = ["-13", "-12", "-11", "-10", "-9", "-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectHours.appendChild(el);
}

var selectMinutes = document.getElementById("selectMinutes");
for(var i = 0; i < 61; i++) {
    var opt = i;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectMinutes.appendChild(el);
}

var selectSeconds = document.getElementById("selectSeconds");
for(var i = 0; i < 61; i++) {
    var opt = i;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectSeconds.appendChild(el);
}