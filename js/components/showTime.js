let time = document.querySelector('.time');

export function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    setTimeout(showTime, 1000);
    time.innerHTML = currentTime;
};