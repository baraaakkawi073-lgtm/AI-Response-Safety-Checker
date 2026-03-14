# AI Response Safety Checker

## Overview
This project is a **TypeScript-based security tool** designed to audit and validate AI-generated outputs. In the field of AI Quality Assurance, it is critical to ensure that models do not leak sensitive information or provide incomplete "hallucinated" responses. 

This tool serves as a middle-layer validator between the AI model and the end user.

## Key Features & Logic
The script performs three main logical checks (The "Logic A, B, C" approach):
1.  **Empty Response Detection:** Ensures the AI successfully generated content and didn't return a null/empty string.
2.  **Security Keyword Scan:** A proactive scan for sensitive keywords (like passwords or internal keys) to prevent data leaks.
3.  **Length & Quality Validation:** Flags responses that are suspiciously short, which often indicates a model failure or error.

## Why it matters?
Ensuring **AI Safety** and **Data Privacy** is a top priority for modern software companies. This project demonstrates my ability to:
- Identify and document potential product flaws.
- Write clean, maintainable TypeScript code.
- Implement automated safety protocols for AI-driven systems.

## How it Works
The function `checkAiOutput()` analyzes the text and returns a structured `SafetyReport` interface, providing clear feedback on whether the content is safe to publish.
