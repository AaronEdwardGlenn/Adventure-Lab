import { getUser } from '../data/api.js';
import isDead from './is-dead.js';

function loadProfile() {
    const name = document.getElementById('name');
    const health = document.getElementById('health');
    const progress = document.getElementById('progress');
    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    progress.textContent = user.progress;

    if (isDead(user)) {
        health.textContent = 'You Drowned';
    }
    else {
        health.textContent = user.health;
    }

}

export default loadProfile;