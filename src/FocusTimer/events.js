import { constrols } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
  constrols.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  });
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });

  el.minutes.addEventListener("input", () => {
    const content = el.minutes.textContent;
    const sanitizedContent = content.replace(/\D/g, ""); // Remove caracteres não numéricos
    el.minutes.textContent = sanitizedContent;

    el.minutes.addEventListener('blur', (event) => {
        let timer = event.currentTarget.textContent
        
        timer = timer > 60 ? 60 : timer
        state.minutes = timer
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })

    el.minutes.addEventListener('keydown', (event) => {
        if(event.key == 'Enter'){
            let timer = event.currentTarget.textContent
        
            timer = timer > 60 ? 60 : timer
            state.minutes = timer
            state.seconds = 0
    
            updateDisplay()
            el.minutes.removeAttribute('contenteditable')
        }
        
    })

  });
}
