import { getUser } from '../data/api.js';
import quests from '../data/quest-data.js';
import loadProfile from '../common/load-profile.js';
import createQuestLink from './create-quest-link.js';
import isDead from '../common/is-dead.js';
import hasWon from '../common/hasWon.js'; 

loadProfile();

const user = getUser();

if (hasWon(user)) {
    window.location = '../results';
}
if (isDead(user)) {
    window.location = '../results';
}

const nav = document.getElementById('quests');

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    let questDisplay = createQuestLink(quest);
 
    nav.appendChild(questDisplay); // add the quest display to the nav
}
