export default function createStore(initState) {
  let state = initState;
  let handlers = [];

  function getState() {
    return state;
  }

  function subscribe(handler) {
    handlers.push(handler);
  };

  function changeState(newState) {
    state = newState;

    for (let i = 0; i < handlers.length; i++) {
      const handler = handlers[i];
      handler();
    }
  }

  return {
    getState,
    subscribe,
    changeState,
  };
}