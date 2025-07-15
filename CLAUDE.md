# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page web application that serves as a Brainfuck compiler/interpreter. The application features a split-screen interface with an editor on the left and output display on the right.

## Running the Application

Open `index.html` in a web browser - no build process required.

## Architecture

- **Single HTML file**: `index.html` contains the complete application
- **CSS**: Embedded styles create a VS Code-like dark theme with split layout
- **JavaScript**: Includes a complete Brainfuck interpreter class with:
  - Memory management (30,000 cells)
  - Input/output handling
  - Loop processing with bracket matching
  - Error handling and execution limits

## Key Features

- Real-time Brainfuck code execution
- Input support for programs that require user input
- Sample programs included (Hello World example)
- Keyboard shortcuts (Ctrl+Enter to run)
- Dark theme with syntax highlighting-style interface
- Error handling and execution step limits

## Brainfuck Language Support

The interpreter supports all standard Brainfuck commands:
- `>` `<` - Move memory pointer
- `+` `-` - Increment/decrement memory cell
- `.` `,` - Output/input character
- `[` `]` - Loop brackets