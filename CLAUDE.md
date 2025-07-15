# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a clean, minimalist web application that serves as a Brainfuck compiler/interpreter. The application features a split-screen interface with an editor on the left and output display on the right.

## Running the Application

Open `index.html` in a web browser - no build process required. The application consists of three main files:
- `index.html` - Main HTML structure
- `style.css` - All styling and themes
- `script.js` - Brainfuck interpreter and UI logic

## Architecture

### File Structure
```
/bf/
├── index.html      # Clean HTML structure with external file references
├── style.css       # Modular CSS with CSS variables for theming
├── script.js       # Complete Brainfuck interpreter and UI interactions
├── CLAUDE.md       # This file
└── README.md       # Project documentation
```

### Key Components

**HTML (`index.html`)**:
- Clean, semantic structure
- Split-screen layout with editor and output panels
- Modal dialog for help system
- External CSS and JS references

**CSS (`style.css`)**:
- CSS variables for light/dark theme system
- Minimalist design with system fonts
- Hidden scrollbars in help dialog
- Responsive layout with flexbox

**JavaScript (`script.js`)**:
- `BrainfuckInterpreter` class with async execution
- Theme management with localStorage persistence
- Interactive input system in output area
- Help modal functionality
- Event listeners for keyboard shortcuts

## Key Features

- **Minimalist Design**: Clean interface with light/dark theme toggle
- **Interactive Input**: Users input directly in output area when programs need input
- **Real-time Execution**: Async interpreter with live output updates
- **Comprehensive Help**: Built-in dialog with language reference and examples
- **Keyboard Shortcuts**: Ctrl+Enter (Cmd+Enter on Mac) to run code
- **Sample Programs**: Hello World example and other demonstrations
- **Error Handling**: Execution limits and graceful error messages
- **Theme Persistence**: User preference saved in localStorage

## Brainfuck Language Support

The interpreter supports all standard Brainfuck commands:
- `>` `<` - Move memory pointer left/right
- `+` `-` - Increment/decrement memory cell value
- `.` `,` - Output/input character
- `[` `]` - Loop brackets (while current cell != 0)

## Development Notes

- **Memory Model**: 30,000 cells (standard Brainfuck)
- **Execution Limits**: 1,000,000 steps to prevent infinite loops
- **Input Method**: Interactive input in output area, processed character by character
- **Theme System**: CSS variables enable seamless light/dark switching
- **No Dependencies**: Pure vanilla JavaScript, no frameworks required

## Common Development Tasks

- **Styling Changes**: Edit `style.css` - uses CSS variables for consistent theming
- **Interpreter Logic**: Edit `script.js` - `BrainfuckInterpreter` class handles execution
- **UI Interactions**: Edit `script.js` - event listeners and DOM manipulation
- **Help Content**: Edit `index.html` - help modal contains language reference