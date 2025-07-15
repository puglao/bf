# Brainfuck Compiler

A single-page web application that serves as a Brainfuck compiler/interpreter with a clean, split-screen interface.

## 🎯 Purpose

This project was created to try out [Claude Code](https://claude.ai/code) - Anthropic's AI-powered development tool. The goal was to build a functional web application entirely through AI assistance and see how effectively Claude Code can handle full-stack development tasks.

## 🚀 Features

- **Split-screen interface**: Code editor on the left, output display on the right
- **Real-time execution**: Run Brainfuck code instantly with the click of a button
- **Keyboard shortcuts**: Use Ctrl+Enter (Windows/Linux) or Cmd+Enter (Mac) to execute code
- **Input support**: Handle Brainfuck programs that require user input
- **Sample programs**: Built-in "Hello World" example to get started
- **Dark theme**: VS Code-inspired interface with syntax highlighting aesthetics
- **Error handling**: Execution limits and error messages to prevent infinite loops

## 🎮 Try It Live

Visit the live demo: [https://puglao.github.io/bf/](https://puglao.github.io/bf/)

## 🛠️ Usage

1. Open the application in your web browser
2. Write Brainfuck code in the left editor panel
3. Click "Run" or press Ctrl+Enter (Cmd+Enter on Mac) to execute
4. View the output in the right panel
5. Use the input field at the bottom for programs that need user input

### Sample Programs

**Hello World:**
```brainfuck
++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.
```

**Simple Counter (outputs numbers 1-10):**
```brainfuck
++++++++++[>++++++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.
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

- **Pure HTML/CSS/JavaScript**: No frameworks or build tools required
- **30,000 memory cells**: Standard Brainfuck memory model
- **Execution limits**: Prevents infinite loops with a 1,000,000 step limit
- **Cross-platform**: Works in any modern web browser

## 🤖 Built with Claude Code

This entire project was developed using Claude Code, demonstrating:
- AI-assisted full-stack development
- Natural language to code conversion
- Real-time debugging and iteration
- Complete project setup from scratch

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Claude Code](https://claude.ai/code) by Anthropic
- Inspired by the esoteric programming language community
- Thanks to Urban Müller for creating Brainfuck