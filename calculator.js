const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id; // Get the button ID directly

        switch (id) {
            case 'clear':
                display.textContent = '0';
                break;
            case 'delete':
                display.textContent = display.textContent.slice(0, -1) || '0';
                break;
            case 'equals':
                try {
                    // Evaluate the expression using a safer method
                    const result = Function(`return ${display.textContent}`)();
                    display.textContent = result;
                } catch {
                    display.textContent = 'Error';
                }
                break;
            default:
                appendToDisplay(button.textContent); // Use button text directly
        }
    });
});

function appendToDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}
