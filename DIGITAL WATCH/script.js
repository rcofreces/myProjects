let actualizarHora = () => {
    let date = new Date();
    let hours = date.getHours();
    let ampm = "";
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let weekDay = date.getDay();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let pHours = document.querySelector(".hours");
    let pAmpm = document.querySelector(".ampm");
    let pMinutes = document.querySelector(".minutes");
    let pSeconds = document.querySelector(".seconds");
    let pWeekDay = document.querySelector(".weekDay");
    let pDay = document.querySelector(".day");
    let pMonth = document.querySelector(".month");
    let pYear = document.querySelector(".year");

    let weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    pWeekDay.textContent = weekArray[weekDay];

    pDay.textContent = day;

    let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    pMonth.textContent = monthArray[month];

    pYear.textContent = year;

    if (hours >= 12) {
        hours = hours - 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    if (hours == 0) {
        hours = 12;
    }

    pHours.textContent = hours;
    pAmpm.textContent = ampm;

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    pMinutes.textContent = minutes;
    pSeconds.textContent = seconds;

}

actualizarHora();
let interval = setInterval(actualizarHora, 1000);