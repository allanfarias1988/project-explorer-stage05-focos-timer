import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'


export function togglePlay() {
    state.isRunning = document.querySelector('html').classList.toggle('running')
    timer.countdown()
    sounds.buttonPressAudio.play()

}

export function setTimer() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
    sounds.buttonPressAudio.play()
    
}

export function stopTimer() {
    state.isRunning = false
    document.documentElement.classList.remove('running') // class selector of html element
    timer.updateDisplay() // set the time with the same initial value

}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('onMusic')
    
    if(state.isMute) {
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()
}

