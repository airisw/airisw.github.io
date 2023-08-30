"use strict";

const state = {
    toggleBtn: null,
}

const loadControls = () => {
    state.toggleBtn = document.getElementById('switch');
}

// if checked: show dark mode
// if unchecked: show light mode
const changeTheme = () => {
    console.log('trying to change');

    if (state.toggleBtn.checked) {
        console.log('changing to dark theme...');
        document.body.className = 'dark-theme';
    } else {
        console.log('changing to light theme...');
        document.body.className = 'light-theme';
    }
}

const registerEventHandler = () => {
    state.toggleBtn.addEventListener('click', changeTheme);
}

loadControls();
document.addEventListener('DOMContentLoaded', registerEventHandler);