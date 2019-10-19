function scoreQuest(choice, questId, user) {
    user.health += choice.health;
    user.progress += choice.progress;
  
}

export default scoreQuest;