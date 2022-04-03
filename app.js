// document.getElementById('btn').addEventListener('click', play);

const guessesAllowed = 6;
const numOfLettersPerWord = 5;
const board = document.getElementById('board');

for (let i = 0; i < guessesAllowed; i++) {
    const row = document.createElement('div');
    board.appendChild(row)

    for (let j = 0; j < numOfLettersPerWord; j++) {
        const inputEl = document.createElement('input');
        inputEl.setAttribute("maxlength", 1);
        inputEl.setAttribute("type", "text");
        inputEl.setAttribute("pattern", "[^a-zA-Z]+");
        inputEl.addEventListener('change', function() { 
            // if(!isNaN(inputEl.textContent)){
            //     inputEl.textContent = "";
            // }
        });
        inputEl.addEventListener('input', function() { 
            if(!isNaN(parseInt(inputEl.value))){
                console.log(inputEl.value)
                inputEl.value = "";
            }
            else {
            autotab(inputEl, inputEl.nextSibling)
            }
        });
        
        board.appendChild(inputEl);
    }
}

function autotab(current, to) {
    if(current.getAttribute && current.value.length == 
        current.getAttribute("maxlength")) {
            to.focus();
        }
}

function play() {
    
}