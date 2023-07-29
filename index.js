// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;
 
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');
console.log(shoutGreetings(greetings)); 
// console.log(shoutGreeting(`${greetings}!`)); 