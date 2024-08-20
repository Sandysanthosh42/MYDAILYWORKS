function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function append(character) {
    const display = document.getElementById('display');
    display.value += character;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch (error) {
        display.value = 'Error';
    }
}
