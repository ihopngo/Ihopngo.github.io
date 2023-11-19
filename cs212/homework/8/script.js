const textElement = document.getElementById('text');
const buttonsElement = document.getElementById('buttons');
const imageElement = document.getElementById('image');

let collar = {};

function startGame() {
    collar = {};
    showText(1);
}

function showText(textInfo) {
    const text = storyInfo.find((item) => item.id === textInfo).text;
    textElement.innerHTML = `<p>${text}</p>`;
    
    if (option.end == true) {
        textElement.innerHTML = `<p>${text}</p>`;
        /* showText(option.nextText); */
        endingImage(option.endImage);
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

function endingImage() {
    imageElement.innerHTML = '<img src="endimages/${endImage}" alt="Ending Image">';
}

function buttonOptions(option) {
    if (option.setCollar) {
        collar = Object.assign(collar, option.setCollar);
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
                nextText: 20
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
                nextText: 101,
                end: true
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
                nextText: 10
            },
            {
                text: 'turn around and go back home',
                nextText: 14
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
        id: 20,
        text: 'Your now an older dog still waiting to be adopted at petsmart and you see another family walk in looking for a dog',
        options: [
            {
                text: 'smile with your tounge sticking out',
                next: 42
            },
            {
                text: 'sleep through it again',
                nextText: 21
            }
        ]
    },
    {
        id: 21,
        text: 'Your an old dog who still hasn\'t been adopted, so you got moved to the nearest adoption center and you see a family looking to adopt an older dog',
        options: [
            {
                text: 'Smile',
                nextText: 80
            },
            {
                text: 'sleep one last time',
                nextText: 102,
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
    }
];

startGame()