function updateClock() {

    let now = new Date();
    let years = now.getFullYear();
    let month = now.getMonth() + 1;
    let days = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let currentDay = now.toLocaleDateString(undefined, { weekday: "long", });

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    days = days < 10 ? "0" + days : days;
    today = `Today is ${currentDay}`;


    const options = { month: "long" }
    const yearsElement = document.getElementById("years");
    const monthElement = document.getElementById("month");
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const currentDate = document.getElementById("currentDay")

    yearsElement.textContent = years;
    monthElement.textContent = month;
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    currentDate.textContent = today;
}


setInterval(updateClock, 1000);

