class BrainfuckInterpreter {
    constructor() {
        this.memory = new Array(30000).fill(0);
        this.pointer = 0;
        this.output = '';
        this.inputQueue = [];
        this.inputIndex = 0;
        this.waitingForInput = false;
        this.inputCallback = null;
    }

    setInput(input) {
        this.inputQueue = input.split('').map(c => c.charCodeAt(0));
        this.inputIndex = 0;
    }

    reset() {
        this.memory = new Array(30000).fill(0);
        this.pointer = 0;
        this.output = '';
        this.inputIndex = 0;
        this.waitingForInput = false;
        this.inputCallback = null;
    }

    async execute(code) {
        this.reset();
        const stack = [];
        let codePointer = 0;
        let steps = 0;
        const maxSteps = 1000000;

        while (codePointer < code.length && steps < maxSteps) {
            const command = code[codePointer];
            
            switch (command) {
                case '>':
                    this.pointer = (this.pointer + 1) % 30000;
                    break;
                case '<':
                    this.pointer = (this.pointer - 1 + 30000) % 30000;
                    break;
                case '+':
                    this.memory[this.pointer] = (this.memory[this.pointer] + 1) % 256;
                    break;
                case '-':
                    this.memory[this.pointer] = (this.memory[this.pointer] - 1 + 256) % 256;
                    break;
                case '.':
                    this.output += String.fromCharCode(this.memory[this.pointer]);
                    updateOutput(this.output);
                    break;
                case ',':
                    if (this.inputIndex < this.inputQueue.length) {
                        this.memory[this.pointer] = this.inputQueue[this.inputIndex];
                        this.inputIndex++;
                    } else {
                        this.output += '\n[Enter input]: ';
                        updateOutput(this.output);
                        const input = await this.waitForInput();
                        if (input !== null) {
                            this.memory[this.pointer] = input.charCodeAt(0);
                            this.output += input + '\n';
                            updateOutput(this.output);
                        } else {
                            this.memory[this.pointer] = 0;
                        }
                    }
                    break;
                case '[':
                    if (this.memory[this.pointer] === 0) {
                        let depth = 1;
                        let pos = codePointer + 1;
                        while (depth > 0 && pos < code.length) {
                            if (code[pos] === '[') depth++;
                            else if (code[pos] === ']') depth--;
                            pos++;
                        }
                        codePointer = pos - 1;
                    } else {
                        stack.push(codePointer);
                    }
                    break;
                case ']':
                    if (this.memory[this.pointer] !== 0) {
                        codePointer = stack[stack.length - 1];
                    } else {
                        stack.pop();
                    }
                    break;
            }
            
            codePointer++;
            steps++;
        }

        if (steps >= maxSteps) {
            this.output += '\n\n[Execution stopped: Maximum steps reached]';
        }

        return this.output;
    }

    waitForInput() {
        return new Promise((resolve) => {
            this.waitingForInput = true;
            this.inputCallback = resolve;
            
            const outputElement = document.getElementById('output');
            outputElement.contentEditable = 'true';
            outputElement.focus();
            
            // Move cursor to end
            const range = document.createRange();
            range.selectNodeContents(outputElement);
            range.collapse(false);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        });
    }

    handleInput(input) {
        if (this.waitingForInput && this.inputCallback) {
            this.waitingForInput = false;
            const outputElement = document.getElementById('output');
            outputElement.contentEditable = 'false';
            this.inputCallback(input);
        }
    }
}

const interpreter = new BrainfuckInterpreter();

// Theme management
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = 'Dark';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Light';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Light';
    } else {
        body.removeAttribute('data-theme');
        themeToggle.textContent = 'Dark';
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', loadTheme);

// Help modal functions
function showHelp() {
    document.getElementById('helpModal').style.display = 'block';
}

function closeHelp() {
    document.getElementById('helpModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('helpModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function updateOutput(text) {
    const outputElement = document.getElementById('output');
    outputElement.textContent = text;
}

async function runBrainfuck() {
    const code = document.getElementById('editor').value;
    const outputElement = document.getElementById('output');

    if (!code.trim()) {
        outputElement.textContent = 'Error: No code to execute';
        return;
    }

    try {
        const result = await interpreter.execute(code);
        outputElement.textContent = result || '[No output]';
    } catch (error) {
        outputElement.textContent = `Error: ${error.message}`;
    }
}

function clearEditor() {
    document.getElementById('editor').value = '';
    document.getElementById('output').textContent = 'Ready to execute Brainfuck code...';
}

function loadExample() {
    const helloWorld = `++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.`;
    document.getElementById('editor').value = helloWorld;
}

// Allow Ctrl+Enter or Cmd+Enter to run
document.getElementById('editor').addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        runBrainfuck();
    }
});

// Handle input in output area
document.getElementById('output').addEventListener('keydown', function(e) {
    if (interpreter.waitingForInput && e.key === 'Enter') {
        e.preventDefault();
        const outputElement = document.getElementById('output');
        const text = outputElement.textContent;
        const promptIndex = text.lastIndexOf('[Enter input]: ');
        if (promptIndex !== -1) {
            const input = text.substring(promptIndex + 15).trim();
            if (input.length > 0) {
                interpreter.handleInput(input.charAt(0));
            } else {
                interpreter.handleInput('');
            }
        }
    }
});

// Prevent editing output when not waiting for input
document.getElementById('output').addEventListener('keydown', function(e) {
    if (!interpreter.waitingForInput && e.key !== 'Tab') {
        e.preventDefault();
    }
});