import { saveUser } from '../data/api.js';
import makeUser from './make-user.js';

const userSignUp = document.getElementById('get-user-name');

userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userSignUp);
    const user = makeUser(formData);

    saveUser(user);
    window.location = 'map';
});