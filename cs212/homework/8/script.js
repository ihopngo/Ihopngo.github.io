const textElement = document.getElementById('text')
const buttonsElement = document.getElementById('buttons')

let collar = {}

function startGame() {
    collar = {}
    showText(1)
}

function showText(textInfo) {
    const text = storyInfo.find((item) => item.id === textInfo).text;
            textElement.innerHTML = `<p>${text}</p>`;
            showOptions(textInfo);
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


function buttonOptions(option) {
    if (option.setCollar) {
        collar = Object.assign(collar, option.setCollar);
    }

    showText(option.nextText);
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
                nextText: 15
            }
        ]
    },
];

startGame()