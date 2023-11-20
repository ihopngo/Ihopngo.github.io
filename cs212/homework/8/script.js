const textElement = document.getElementById('text')
const buttonsElement = document.getElementById('buttons')
const imageElement = document.getElementById('image')

let collar = {}

function startGame() {
    collar = {}
    showText(1)
}

function showText(textInfo) {
    /* const text = storyInfo.find((item) => item.id === textInfo).text;
    textElement.innerHTML = `<p>${text}</p>`;
    showOptions(textInfo); */
    const currentStoryItem = storyInfo.find((item) => item.id === textInfo);
    const text = currentStoryItem.text;
    textElement.innerHTML = `<p>${text}</p>`;
    
    if (currentStoryItem.end) {
        endingImage(currentStoryItem.endImage);
    } 
    else {
        showOptions(textInfo);
    }
}

function showOptions(textInfo) {
    const options = storyInfo.find((item) => item.id === textInfo).options;
    buttonsElement.innerHTML = '';
    for (const option of options) {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('button')
        button.addEventListener('click', () => buttonOptions(option));
        buttonsElement.appendChild(button);
    }
}

function endingImage(endImage) {
    imageElement.innerHTML = `<img src='endimages/${endImage}' "alt="Ending Image">`;
}


function buttonOptions(option) {
    const hasCollar = storyInfo.find((item) => item.id === 110).options;
    const noCollar = 111

    if (option.setCollar) {
        collar = Object.assign(collar, option.setCollar);
        acceptedCollar = true;
        showText(option.nextText);
    }

    else if (option.collarEnd) {
        if (acceptedCollar) {
            showText(hasCollar)
            endingImage(option.endImage);
        } 
        else {
            showText(noCollar)
            endingImage(option.endImage);
        }
    }

    else if (option.end) {
        
        endingImage(option.endImage);
    } 
    else {
        showText(option.nextText);
    }
}


const storyInfo = [
    {
        id: 1,
        text: 'Your a baby Borzoi in a petsmart and you seen a family come in looking to adopt a dog',
        options: [
            {
                text: 'whimper',
                nextText: 2
            },
            {
                text: 'sleep',
                nextText: 95
            }
        ]
    },
    {
        id: 2,
        text: 'You get adopted by a family for $200 and now they decide to get you a collar, do you want to keep the collar or tear it off?',
        options: [
            {
                text: 'Wear the collar',
                setCollar: { collar: true },
                nextText: 3
            },
            {
                text: 'TEAR IT OFF!!!',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'Eventually after months of being with your family one of the them leave the backyard door is wide open, you start to imagine all the fun that can happen outside, a whole world to explore, just a few steps away',
        options: [
            {
                text: 'Run and enjoy freedom',
                nextText: 4
            },
            {
                text: 'Stay home',
                nextText: 101
            }
        ]
    },
    {
        id: 4,
        text: 'After running outside you have two options, you can go left where you see a road with tons of cars driving by really fast or you can go right where it is just tons of houses for as long as you can see?',
        options: [
            {
                text: 'go left',
                nextText: 5      
            },
            {
                text: 'go right',
                nextText: 20
            },
            {
                text: 'turn around and go back home',
                nextText: 114
            }
        ]
    },
    {
        id: 20,
        text: 'Going right you venture deeper into the neighborhood for 30 minutes seeing tons of people and all kinds of homes, eventually a person sees you and puts you in their vehicle.',
        options: [
            {
                text: 'Enjoy the ride and see where they take you',
                nextText: 104
            },
            {
                text: 'Bite the dognapper',
                nextText: 21
            }
        ]
    },
    {
        id: 21,
        text: 'After you bite the dognapper you have enter a flight or fight scenerio',
        options: [
            {
                text: 'Continue to bite the dognapper',
                nextText: 22
            },
            {
                text: 'Run away as fast as you can',
                nextText: 30
            }
        ]
    },
    {
        id: 22,
        text: 'You continue to bite the dognapper until eventually someone witnesses you attacking and calls the pound on you, they arrive and capture you and bring you to the pound',
        options: [
            {
                text: 'Sleep',
                nextText: 107
            }
       ]
    },
    {
        id: 30,
        text: 'After running away for your life, you get lost and have no idea where you are at, now your hungry and you see a giant truck with food on it drive by',
        options: [
            {
                text: 'Chase the truck',
                nextText: 105
            },
            {
                text: 'Look for food nearby',
                nextText: 31
            }
        ]
    },
    {
        id: 31,
        text: 'After looking around for an hour you finally found food in the trash, theres leftover lasanga and chocolate',
        options: [
            {
                text: 'Eat the lasanga only',
                nextText: 32
            },
            {
                text: 'Eat the chocolate to fill yourself up',
                nextText: 106
            }
        ]
    },
    {
        id: 32,
        text: 'Your still hungry, but you have to keep moving on your adventure',
        options: [
            {
                text: 'keep moving on your amazing journey',
                nextText: 34
            },
            {
                text: 'Try to find home now since you realize the world is dangerous',
                nextText: 33
            }
        ]
    },
    {
        id: 33,
        text: 'You reach a fork in the road where you can go right to where you think home is or you can go left and take a shortcut to home forget the journey',
        options: [
            {
                text: 'Take a right',
                nextText: 115
            },
            {
                text: 'take a left',
                nextText: 116
            }
        ]
    },
    {
        id: 34,
        text: 'Continuing on your amazing journey not long after you run into a orange cat, alerted by the smell of lasanga, the cat is angry ready to strike',
        options: [
            {
                text: 'Run away',
                nextText: 33
            },
            {
                text: 'fight the rascal',
                nextText: 113
            }
        ]
    },
    {
        id: 5,
        text: 'At the road, cars are driving really fast and your really scared, but its the only way to continue on your journey also you a dog that doesn\'t know whats going on',
        options: [
            {
                text: 'find the nearest crosswalk and look both ways before you cross the busy road',
                nextText: 6
            },
            {
                text: 'run as fast as you can like your life depends on it',
                nextText: 103
            },
            {
                text: 'Go home this life is too much for you',
                nextText: 114
            }
        ]
    },
    {
        id: 6,
        text: 'Your little dog heart is going crazy but now there is no turning back, you continue forward and you see cat',
        options: [
            {
                text: 'Chase the cat',
                nextText: 109
            },
            {
                text: 'Don\'t fall victim instincts',
                nextText: 25
            }
        ]
    },
    {
        id: 25,
        text: 'Eventually after resisting the drive to chase the cat you are apprehended by the pound where you can attempt to escape or live',
        options: [
            {
                text: 'attempt to escape',
                nextText: 112
            },
            {
                text: 'enjoy your time',
                nextText: 111
            }
        ]
    },

    {
        id: 95,
        text: 'Your now an older dog still waiting to be adopted at petsmart and you see another family walk in looking for a dog',
        options: [
            {
                text: 'smile with your tounge sticking out',
                nextText: 2
            },
            {
                text: 'sleep through it again',
                nextText: 96
            }
        ]
    },
    {
        id: 96,
        text: 'Your an old dog who still hasn\'t been adopted, so you got moved to the nearest adoption center and you see a family looking to adopt an older dog',
        options: [
            {
                text: 'Smile',
                nextText: 2
            },
            {
                text: 'sleep one last time',
                nextText: 102
            }
        ]
    },
    {   
        id: 101,
        text: 'Ending #1: You live with the family that adopted you for the rest of your life and live a happy existence',
        end: true,
        endImage: 'Happy_Life.jpg',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 102,
        text: 'Ending #2: You never got adopted and never had a family take care of you, it was a hard life and now you go to sleep for the last time',
        end: true,
        endImage: 'Never_adopted.jpg',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 103,
        text: 'Ending #3: You died trying to run across the road with being cautious',
        end: true,
        endImage: 'Borzoi_car.jpg',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 104,
        text: 'Ending #4: The ride ends at a house where you are met with a child who hugs you and evenrtually you get used to this family and you live with them for the rest of your life',
        end: true,
        endImage: 'New_family.jpeg',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 105,
        text: 'Ending #5: After chasing the truck for 15 minutes you eventually lose it, finding yourself lost and exhausted without food you decide to live in a box until you starve without food',
        end: true,
        endImage: 'Borzoi_chase.jpg',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 106,
        text: 'Ending #6: Your filled up and ready to keep moving, but you don\'t feel good the chocolate you ate is posioning to you so you find a place to rest and sleep, you die',
        end: true,
        endImage: 'Borzoi_poison.jpg',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 107,
        collarEnd: true
    },
    {
        id: 109,
        text: 'Ending #12: Chasing the cat you become blinded to your surroundings eventually you realise too late that your on the road, then BAM!!!',
        end: true,
        endImage: 'Borzoi_car.jpg',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 110,
        text: 'Ending #7: After being captured by the pound, you sit in a cage for an hour until your family comes to pick you up, but the trauma still lingers',
        end: true,
        endImage: 'Trauma.jpg',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 111,
        text: 'Ending #8: After being captured by the pound, you get thrown into a cage where you stay for the rest of your life',
        end: true,
        endImage: 'Borzoi_cage.jpg',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 112,
        text: 'Ending #9: You successfully lockpick the cage with your nails, bite your way through the door and hop the fence to freedom.',
        end: true,
        endImage: 'Borzoi_escape.gif',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 113,
        text: 'Ending #13: The orange cat overpowers you and causes blood loss',
        end: true,
        endImage: 'Orange_cat.gif',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 114,
        text: 'Ending #10: You return home with trauma and realize you ain\'t built for these streets',
        end: true,
        endImage: 'Trauma.jpg',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 115,
        text: 'Ending #11: After multiple hours of looking for your home you find that welcome mat at your front door and begin to bark for your family, until they eventually open the door for you to come back in',
        end: true,
        endImage: 'Borzoi_backhome.jpg' ,
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    }
];

startGame()