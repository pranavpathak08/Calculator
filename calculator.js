let display = document.getElementById('output-val');
let backspace = document.getElementById('backspace');
let buttons = Array.from(document.getElementsByClassName('button'));
let equalBTN = document.getElementById('equals');
let darkmode = document.getElementById('e1');

buttons.map( button => {
    button.addEventListener('click', (e) => {
        backspace.disabled = false;
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                display.style.color = 'rgb(83, 79, 79)';
                break;
            case 'CE':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '%':
                display.innerText = display.innerText/100;
                break;
            case '=':
                display.innerText = eval(display.innerText);
                display.style.color = 'white';
                backspace.disabled = true;
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})

darkmode.addEventListener('click', () => {
    
})
