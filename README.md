# Brainfuck Playground

A clean, minimalist web application that serves as a Brainfuck compiler/interpreter with an intuitive split-screen interface.

## 🎯 Purpose

This project was created to try out [Claude Code](https://claude.ai/code) - Anthropic's AI-powered development tool. The goal was to build a functional web application entirely through AI assistance and see how effectively Claude Code can handle full-stack development tasks.

## 🚀 Features

- **Split-screen interface**: Code editor on the left, output display on the right
- **Real-time execution**: Run Brainfuck code instantly with the click of a button
- **Keyboard shortcuts**: Use Ctrl+Enter (Windows/Linux) or Cmd+Enter (Mac) to execute code
- **Interactive input**: Input directly in the output area when programs require user input
- **Sample programs**: Built-in "Hello World" example to get started
- **Dark theme default**: Clean, minimalist themes with seamless switching (defaults to dark mode)
- **Comprehensive help**: Built-in dialog with language reference and examples
- **Error handling**: Execution limits and error messages to prevent infinite loops
- **GitHub integration**: Direct link to source code repository in the header
- **Code persistence**: Your code is automatically saved in local storage
- **Modular code**: Clean separation of HTML, CSS, and JavaScript

## 🎮 Try It Live

Visit the live demo: [https://bf.outofwork.dev/](https://bf.outofwork.dev/)

## 🛠️ Usage

1. Open the application in your web browser
2. Write Brainfuck code in the left editor panel
3. Click "Run" or press Ctrl+Enter (Cmd+Enter on Mac) to execute
4. View the output in the right panel
5. When programs need input, type directly in the output area and press Enter

### Sample Programs

**Hello World:**
```brainfuck
++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.
```

**Simple Addition (2 + 3):**
```brainfuck
++       Cell 0 = 2
>+++     Cell 1 = 3
[<+>-]   Add cell 1 to cell 0
<        Move back to cell 0
++++++++++++++++++++++++++++++++++++++++++++++++.  Add 48 and output (to get ASCII '5')
```

**Echo Program:**
```brainfuck
,[.,]    Read input and echo it back until EOF
```

## 🧠 About Brainfuck

Brainfuck is an esoteric programming language created in 1993 by Urban Müller. It consists of only 8 commands:

- `>` - Move pointer right
- `<` - Move pointer left  
- `+` - Increment memory cell
- `-` - Decrement memory cell
- `.` - Output character
- `,` - Input character
- `[` - Jump past matching `]` if current cell is 0
- `]` - Jump back to matching `[` if current cell is not 0

## 🏗️ Technical Details

- **Clean Architecture**: Separated HTML, CSS, and JavaScript files
- **Minimalist Design**: Clean, modern interface with system fonts
- **30,000 memory cells**: Standard Brainfuck memory model
- **Execution limits**: Prevents infinite loops with a 1,000,000 step limit
- **Cross-platform**: Works in any modern web browser
- **No dependencies**: Pure vanilla JavaScript, no frameworks required

## 📁 Project Structure

```
/bf/
├── index.html      # Main HTML structure
├── style.css       # Styling and themes
├── script.js       # Brainfuck interpreter and UI logic
├── CLAUDE.md       # Development documentation
└── README.md       # Project information
```

## 🤖 Built with Claude Code

This entire project was developed using Claude Code, demonstrating:
- AI-assisted full-stack development
- Natural language to code conversion
- Real-time debugging and iteration
- Complete project setup from scratch
- Iterative design improvements

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Claude Code](https://claude.ai/code) by Anthropic
- Inspired by the esoteric programming language community
- Thanks to Urban Müller for creating Brainfuck