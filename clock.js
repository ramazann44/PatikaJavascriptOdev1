
function setName() {
    var name = prompt('Lutfen Adinizi Giriniz');

    if (name != "") {
        name = name + "!"
        document.getElementById("MyName").innerText = name;
        document.getElementById("MyName").textContent = name;
    } else {
        setName();
    }
}

function showTime() {

    var date = new Date();

    var hour = date.getHours();
    if (hour < 10) {
        hour = "0" + hour;
    }
    var minute = date.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    var second = date.getSeconds();
    if (second < 10) {
        second = "0" + second;
    }
    var day = date.getDay();
    var dayString = '';

    if (day == 1) {
        dayString = "Pazartesi";
    } else if (day == 2) {
        dayString = "Salı";
    } else if (day == 3) {
        dayString = "Çarşamba";
    } else if (day == 4) {
        dayString = "Perşembe";
    } else if (day == 5) {
        dayString = "Cuma";
    } else if (day == 6) {
        dayString = "Cumartesi";
    } else if (day == 7) {
        dayString = "Pazar";
    }

    var time = hour + ":" + minute + ":" + second + " " + dayString;

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}
setName();
showTime();