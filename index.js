window.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('user-input');
    const numberButtons = document.querySelectorAll('.number');
    const commandButtons = document.querySelectorAll('.command');

    numberButtons.forEach((numButton) => {
        numButton.addEventListener('click', (event) => {
            if (input.innerText === '0') {
                input.innerText = '';
            }
            input.innerText = input.innerText + event.target.innerText.trim();
        });
    });

    commandButtons.forEach((command) => {
        command.addEventListener('click', (e) => {
            switch (command.innerText) {
                case 'AC':
                    input.innerText = '0';
                    break;
                case 'DEL':
                    input.innerText = input.innerText.substring(0, input.innerText.length - 1);
                    if (input.innerText === '') {
                        input.innerText = '0';
                    }
                    break;
                case '%':
                case '/':
                case '*':
                case '-':
                case '+':
                    input.innerText += command.innerText;
                    break;
                case '=':
                    input.innerText = eval(input.innerText);
                    break;
            }
        });
    });
});
