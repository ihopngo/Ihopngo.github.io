const textElement = document.getElementById('text')
const buttonsElement = document.getElementById('buttons')

let collar = {}

function startGame() {
    collor = {}
    textInfo(1)
}

function textInfo(choices) {
    const textNode = textNodes.find(textNode => textNode.id === choices)
    textElement.innerText = textNode.text
    while (buttonsElement.firstChild) {
        buttonsElement.removeChild(buttonsElement,firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('buttons')
            button.innerText = option.text
            button.classlist.add('buttons')
            button.addEventListener('click', () => buttonClick(buttoninfo))
            buttonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return true
}

function buttonClick(option) {

}

const textNodes = [
    {
        id: 1,
        text: 'Your a baby borzoi at petsmart you can go',
        options: [
            {
                text: 'whimper',
                nextText: 2
            },
            {
                text: 'sleep through it',
                nextText: 2
            }
        ]
    }   
]
  

startGame()