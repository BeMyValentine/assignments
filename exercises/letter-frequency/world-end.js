var timer = document.getElementById("timer");
var countDown = 10;
timer.textContent = countDown + 1;

function updateTime() {
    timer.textContent = countDown;
    countDown--;
    if (countDown < 0) {
        clearInterval(intervalId)
        document.body.style.background = "url(https://i.ytimg.com/vi/gJe7fY-yowk/maxresdefault.jpg)"
    }
}


intervalId = setInterval(updateTime, 1000);