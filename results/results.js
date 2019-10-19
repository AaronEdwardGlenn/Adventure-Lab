import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';


loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

let resultImage = document.getElementById('result-image'); 

const healthResult = user.health;

const progressResult = user.progress;


if (healthResult === 0) {
    storyDisplay.innerHTML = 'You drowned. You suck.';
    resultImage.src = '../assets/drowned.gif'; 
}

if (progressResult === 75) {
    storyDisplay.innerHTML = 'You have found Atlantis!!';
    resultImage.src = '../assets/atlantis.gif'; 
    
    
}

