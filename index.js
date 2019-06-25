// Import stylesheets
import './style.css';
import { createStore } from './redux';

let state = {
  count: 1
};

let store = createStore(state);

const myVar = setInterval(() => {
  // increase()
  redux_increase()
}, 500);

store.subscribe(function() {
  const span = document.getElementById('spn-value');
  const count = store.getState().count;
  span.innerText = count;
  if (count == 10) {
    clearTimeout(myVar);
  }
});

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
appDiv.innerHTML += `<div class="console">State: <span id="spn-value">${state.count}</span></div>`;



/**
 * 
 */
function increase() {
  state.count++;
  const span = document.getElementById('spn-value');
  span.innerText = state.count;

  if (state.count == 10) {
    clearTimeout(myVar);
  }
}

function redux_increase() {
  const newState = {
    count: store.getState().count + 1
  };
  store.changeState(newState);
}