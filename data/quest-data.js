const seaMonsters = {
    id: 'sea-monsters', 
    title: 'Pelagic Beasts of the Depth', 
    map: {
        top: '89%',
        left: '44%' 
    }, 
    image: 'seaMonsters.png',
    description: `You have come across a giant sea monster guarding a passage you believe leads in the correct direction to your next destination. The monster looks fierce and ominous. You have read of such creatures in old storybooks of the sea that described them as vicious and melevelant. Were these characterizations correct? The sea monster looms toward you. What will  you do?`,
    choices: [
        {
            id: 'fight',
            description: 'Kick some Ass. Fuck this guy.', 
            result: `What were you thinking? The sea monster snaches you up like a child snatches up a gingerbread man and bites off your foot to teach you a lesson! Ouch!! Swimming will be a lot harder from here on out but now is not the time to lack persistence.`, 
            progress: 0,
            health: -10
        }, 
        {
            id: 'dance', 
            description: 'Initiate dance distraction!', 
            result:`The sea monster settles down and starts bobbing around to your imaginary beat. Looks like you found yourself a dance partner! Way to go, after a few step mins moving to the groove the sea monster heads off. It was having a bad day and this totally turned things around. Time to move forward, this direction feels good.`, 
        },
        {
            id: 'hide',
            description: 'HIDE fo yo LIFE!',
            Result: `You are pathetic. You may have survived but no one will sings songs of your bravery when you die. Are you even worthy of finding Atlantis?`,
        }

    ]

};

const caves = {
    id: 'caves', 
    title: 'What Door to Take?', 
    map: {
        top: '57%',
        left: '67%'
    }, 
    image: 'caves.png',
    description: `A series of caves presents itself on the horizon. As you swim closer, you see three separate entrances. One is in the center, one to the right, and one to the left. You are curious as to what these mysterious inscriptions are above each entrance. One is a tree leaf, the other is a snake, and the last one is three wavy lines. Which entrance do you choose?`,
    choices: [
        {
            id: 'leaf',
            description: 'The leaf',
            result: `You enter in the cave and feel a bit of current taking you forward. You stop swimming but your momentum only increases. What is happening?? Your dive computer starts alerting that you are quickly ascending. Next thing you know you breach the surface! You have entered in to a complex system that ends in a geographic blowhole! After sending it about 50 feet in the air you land on the beach, roughed up and badly bruised. That sucks. Time to head back down and try again!`, 
            progress: 0,
            health: -10
        }, 
        {
            id: 'snake', 
            description: 'The Snake',
            result:`After a few tight corners and questionably narrow passageways, you enter into an open chasm that stretches as far as the eye can see. Though it is all contained, with light penetrating from above through a lightly perforated rock ceiling. Looks magical, I am sure you are on the right track! I bet the snake image was just to trick others as you might have guessed!`, 
        },
        {
            id: 'waves',
            description: 'The Wavey Lines',
            Result: `You move down a long tunnel and the water starts to look strange, almost shimmery. You notice that you keep going down, down, down into the abyss. All of the sudden you start to wonder, is it getting warmer in here? Before you know it, your skin starts to pang with intense feelings of burning heat. Oh no! It seems you have entered into the entrance of a geothermal vent! Your skin has taken all it can handle. Time to hobble back to the start of the caves and try again!`,
        }

    ]

};

const schoolOfSharks = {
    id: 'sharks', 
    title: 'Friend or Foe?', 
    map: {
        top: '31%',
        left: '5%'
    }, 
    image: 'sharks.png',
    description: `All of the sudden a massive school of sharks engulfs you! Terrified you wonder if they are there for a diver feeding frenzy! They move closer and closer to you, what is the best course of action to take? Think fast!`,
    choices: [
        {
            id: 'ignore',
            description: 'They are just curious, ignore them and they will ignore you',
            result: `Sharks are like the cats of the sea, they only like you if you ignore them enough. The sharks stop circling you and start swimming in oddly strange and almost mythodic patterns. You are enthralled by their synchronicity and complex movement. All of the sudden they start to line up and head just to the west of your position. Something in your gut tells you these sharks are under some magical spell. They must have something to do with Atlantis. Follow them, I bet they know the way!`, 
            progress: 25,
            health: 0,
        }, 
        {
            id: 'swim', 
            description: 'Swim as fast as you can out of there.',
            result:`Sharks are like cats, they see you run and they decide you’re something to chase! A few sharks follow you around a couple rocks. You hide out but they are lurking, waiting for you to emerge. After wasting a ton of time, they eventually dissipate and you’ve gotta find your way to to where you started. Not fun. Not smart.`, 
        },
        {
            id: 'punch',
            description: 'Puch the closest one in the nose. I read somewhere that’s what you should do!',
            Result: `You read wronnngggggggg. The sharks were just saying what’s up and you picked a fight. The shark you punched is slightly annoyed and takes a nip at your face. That is gonna leave a scar. Why would you do that.`,
        }

    ]

};


const paths = [seaMonsters, caves, schoolOfSharks]; 

export default paths; 
