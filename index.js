// Import stylesheets
import './style.css';
import { $ } from 'jquery';

let state = {
  count: 1
};

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
appDiv.innerHTML += `<div class="console">State: <span id="spn-value">${state.count}</span></div>`;

const myVar = setInterval(() => {
  increase()
}, 500);

function increase() {
  state.count++;
  const span = document.getElementById('spn-value');
  span.innerText = state.count;

  if (state.count == 10) {
    clearTimeout(myVar);
  }
}
