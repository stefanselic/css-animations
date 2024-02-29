/** @format */

import TransitionOptions from './TransitionOptions';
import './Transitions.css';
export default function Transitions() {
  return (
    <div class="main-container">
      <TransitionOptions />
      <div class="container">
        <div>
          <button id="btn-1">Css Transition</button>
          <button id="btn-2">Css Transition</button>
          <button id="btn-3">Css Transition</button>
          <button id="btn-4">Css Transition</button>
        </div>
        <div id="ease" class="move">
          Ease (Default)
        </div>
        <div id="linear" class="move">
          Linear
        </div>
        <div id="ease-in" class="move">
          Ease-In
        </div>
        <div id="ease-out" class="move">
          Ease-Out
        </div>
        <div id="ease-in-out" class="move">
          Ease-In-Out
        </div>
      </div>
    </div>
  );
}
