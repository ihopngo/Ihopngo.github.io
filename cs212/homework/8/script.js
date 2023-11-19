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
    
    if (currentStoryItem.end == true) {
        endingImage(currentStoryItem.endImage);
    } else {
        showOptions(textInfo);
    }
}

function showOptions(textInfo) {
    const options = storyInfo.find((item) => item.id === textInfo).options;
    buttonsElement.innerHTML = '';
    for (const option of options) {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.addEventListener('click', () => buttonOptions(option));
        buttonsElement.appendChild(button);
    }
}

function endingImage(endImage) {
    imageElement.innerHTML = `<img src='endimages/${endImage}' "alt="Ending Image">`;
}

function buttonOptions(option) {
    if (option.setCollar) {
        collar = Object.assign(collar, option.setCollar);
    }

    else if (option.end) {
        endingImage(option.endImage);
    } else {
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
                nextText: 101
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
        text: 'Your still still hungry, but you have to keep moving on your adventure',
        options: [
            {
                text: 'IDK',
                nextText: 22
            },
            {
                text: 'IDK 2',
                nextText: 40
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
                next: 103
            },
            {
                text: 'Go home this life is too much for you',
                next: 14
            }
        ]
    },
    {
        id: 6,
        text: 'Your little dog heart is going crazy but now there is no turning back, you continue forward where you see ...',
        options: [
            {
                text: 'die'
            }
        ]
    },
    {
        id: 95,
        text: 'Your now an older dog still waiting to be adopted at petsmart and you see another family walk in looking for a dog',
        options: [
            {
                text: 'smile with your tounge sticking out',
                next: 42
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
                nextText: 80
            },
            {
                text: 'sleep one last time',
                nextText: 102
            }
        ]
    },
    {   
        id: 101,
        text: 'You live with the family that adopted you for the rest of your life and live a happy existence',
        end: true,
        endImage: 'Happy_life.jpg'
    },
    {
        id: 102,
        text: 'You never got adopted and never had a family take care of you, it was a hard life and now you go to sleep for the last time',
        end: true,
        endImage: 'Never_adopted.jpg'
    },
    {
        id: 103,
        text: 'You died trying to run across the road with being cautious',
        end: true,
        endImage: 'Borzoi_car.jpg'
    },
    {
        id: 104,
        text: 'The ride ends at a house where you are met with a child who hugs you and evenrtually you get used to this family and you live with them for the rest of your life',
        end: true,
        endImage: 'New_family.jpeg'
    },
    {
        id: 105,
        text: 'After chasing the truck for 15 minutes you eventually lose it, finding yourself lost and exhausted without food you decide to live in a box until you starve without food',
        end: true,
        endImage: 'Borzoi_chase.jpg'
    },
    {
        id: 106,
        text: 'Your filled up and ready to keep moving, but you don\'t feel good the chocolate you ate is posioning to you so you find a place to rest and sleep, you die',
        end: true,
        endImage: 'Borzou_poison.webp'
    },
    {
        id: 107,
        text: '',
        end: true,
        endingImage: 1
    },
    {
        id: 108,
        text: '',
        end: true,
        endingImage: 1
    },
];

startGame()