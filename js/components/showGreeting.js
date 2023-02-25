let greeting = document.querySelector('.greeting');

export function showGreeting() {
    let date = new Date();
    let hours = date.getHours();
    let name = document.querySelector('.name');
    name.setAttribute('placeholder', '[Enter name]');

    function getTimeOfDay(){
        if(hours >= 23 && hours < 6){
            return 'night';
        }else if(hours >= 6 && hours < 12){
            return 'morning';
        }else if(hours >= 12 && hours < 18){
            return 'afternoon';
        }else if(hours >= 18 && hours < 23){
            return 'evening';
        }
    };

    function setLocalStorage() {
        localStorage.setItem('name', name.value);
      }
    window.addEventListener('beforeunload', setLocalStorage)

    function getLocalStorage() {
        if(localStorage.getItem('name')) {
          name.value = localStorage.getItem('name');
        }
      }
    window.addEventListener('load', getLocalStorage)

    greeting.innerHTML = `Good ${getTimeOfDay()}`
}