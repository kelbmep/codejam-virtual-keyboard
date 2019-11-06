let codes=['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
let smallEnglish=['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ', ', '.', '/', '▲', 'Shift', 'Ctrl', 'Alt', ' ', 'Alt', '◄', '▼', '►'];
let bigEnglish=['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift', 'Ctrl', 'Alt', ' ', 'Alt', '◄', '▼', '►'];
let smallRussian=['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Ctrl', 'Alt', ' ', 'Alt', '◄', '▼', '►'];
let bigRussian=['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ', ', '▲', 'Shift', 'Ctrl', 'Alt', ' ', 'Alt', '◄', '▼', '►'];
let nonTyped=['Tab', 'Backspace', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

let container;
let textArea;
createDocument();
createKeyboard();
createKeys();

function createDocument(){
    container=document.createElement('div');
    container.className="container";
    document.body.append(container);
    textArea=document.createElement('textarea');
    container.append(textArea);
}

function createKeyboard(){
    let keyboard=document.createElement('div');
    keyboard.className="keyboard"
    container.append(keyboard);
    for(let i=1; i<=5; i++){
        let row=document.createElement('div');
        row.className="row "+"row"+i;
        keyboard.append(row);
    }
}

function createKeys(){
    let keyRows=document.querySelectorAll('.row');
    let count=0;
    for(let i=0; i<5;i++){
        let curRow=keyRows[i]; 
        if(i==0){
            for(let j=0; j<14;j++){
                textFill(curRow, count);
                count++; 
            }
        }
        if(i==1){
            for(let j=0; j<15;j++){
                textFill(curRow, count);
                count++;
            }
        }
        if(i==2){
            for(let j=0; j<13;j++){
                textFill(curRow, count);
                count++;
            }
        }
        if(i==3){
            for(let j=0; j<13;j++){
                textFill(curRow, count);
                count++;
            }
        }
        if(i==4){
            for(let j=0; j<7;j++){
                textFill(curRow, count);
                count++;
            }
        }
    }

    function textFill(curRow, count){
        let key=document.createElement('div');
        key.className="key "+codes[count];
        let span=document.createElement('span');
        span.innerHTML=smallRussian[count];
        curRow.append(key);
        key.append(span);      
    }
}
