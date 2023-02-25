import { showTime } from './components/showTime.js';
import { showDate } from './components/showDate.js';
import { showGreeting } from './components/showGreeting.js';
import { getWeather } from './components/weather.js';
import {changeQuotes} from './components/changeQoutes.js'


// TIME
showTime();

// DATE
let date = document.querySelector('.date');
date.innerHTML = showDate();

// GREETING
showGreeting()

// WEATHER
getWeather();

// QUOTES
changeQuotes();
