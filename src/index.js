const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*****': ' ',
};

function decode(expr) {
    let setOfNumbers = [];
    let setOfSymbols = [];
    let result = [];
    for (let i = 0; i < expr.length/10; i++) {
        setOfNumbers[i] = expr.slice((i*10),(i*10)+10);
        for (let j = 0; j<setOfNumbers[i].length/2;j++) {
            setOfSymbols[j] = setOfNumbers[i].slice(j*2, (j*2)+2);
                if (setOfSymbols[j]=='10') {
                    setOfSymbols[j]= '.';
                } else if (setOfSymbols[j]=='11') {
                    setOfSymbols[j] = '-';
                } else if(setOfSymbols[j]=='**') {
                    setOfSymbols[j] = '*'
                }else setOfSymbols[j] = '';
        }
        setOfNumbers[i] = setOfSymbols.join('');
        result.push(MORSE_TABLE[setOfNumbers[i]]);
    }
    return result.join('');
}
module.exports = {
    decode
}