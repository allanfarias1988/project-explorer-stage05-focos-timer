import state from "./state.js";
import * as el from "./elements.js";
import { stopTimer } from "./actions.js";
import { kichenTimerAudio } from "./sounds.js";

export function updateDisplay(minutes, seconds) {
  clearTimeout(state.countDownID)

  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}

export function countdown() {
  if (!state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    stopTimer();
    kichenTimerAudio.play()
    return;
  }

  updateDisplay(minutes, seconds);

  state.countDownID = setTimeout(() => countdown(), 1000);
}
