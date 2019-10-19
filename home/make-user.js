function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        health: 100,
        progress: 0,
        completed: {}
    };

    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    health: 100,
    progress: 0,
    completed: {}
});

export default makeUser;