/**
 * @fileoverview React application
 * @version 0.0.1
 *
 * @requires react
 * @see https://www.npmjs.com/package/react
 *
 * @requires react-dom
 * @see https://www.npmjs.com/package/react-dom
 */


// ----------------------------------------
// Checks
// ----------------------------------------


if (! window.React) {
  throw new Error('React not found');
}

if (! window.ReactDOM) {
  throw new Error('ReactDOM not found');
}


// ----------------------------------------
// Namespaces
// ----------------------------------------


if (window.hasOwnProperty('App')) {
  throw new Error('App already defined');
}

window.App = (function(React, ReactDOM) {

'use strict';


const {
  createElement: ce,
  StrictMode,
  useState,

} = React;


// ----------------------------------------
// Entities
// ----------------------------------------



// ----------------------------------------
// Services
// ----------------------------------------



// ----------------------------------------
// Hooks
// ----------------------------------------



// ----------------------------------------
// Content components
// ----------------------------------------


/**
 * @description React component
 * @param {import('react').HTMLProps} props
 */
function App(props) {

  const [counterState, setCounterState] = useState(0);

  return ce('div', null,
    ce('h1', null, 'React Application'),
    ce('h2', null, `Counter: ${counterState}`),
    ce('button', { onClick: () => setCounterState(counterState + 1) }, 'Increment'),
    ce('button', { onClick: () => setCounterState(counterState - 1) }, 'Decrement'),
  );

}  //:: App


// ----------------------------------------
// Slotted components
// ----------------------------------------



// ----------------------------------------
// Exports
// ----------------------------------------


const _version = '0.0.1';

function _render(root) {
  ReactDOM.createRoot(root).render(ce(StrictMode, null, ce(App)));
}

return {
  version: _version,
  render: _render,
};


// ----------------------------------------


})(
  window.React,
  window.ReactDOM
);
