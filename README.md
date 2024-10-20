# JavaScript Task Runner

This project is a simple JavaScript task runner built with Node.js. It allows you to execute multiple JavaScript files located in a `scripts` directory and provides error handling and execution time tracking for each task.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Run multiple JavaScript scripts from a single entry point.
- Automatically tracks and logs execution time for each task.
- Handles errors gracefully and provides clear error messages.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or later)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shayan6/letscode.git
   cd letscode
   ```

2. Install dependencies:

   ```bash
   npm install chalk
   ```

3. Create a directory for your scripts:

   ```bash
   mkdir scripts
   ```

4. Create a directory for your helpers:

   ```bash
   mkdir helpers
   ```

5. Add your JavaScript task files in the `scripts` directory and any helper files in the `helpers` directory.

## Usage

1. Add your JavaScript files to the `scripts` directory. Each file should be a valid JavaScript module.

2. To run the task runner, execute the following command in your terminal:

   ```bash
   node runner.js
   ```

3. The runner will execute each JavaScript file in the `scripts` directory and log the execution time for each task.

## Project Structure

```
C:└── Javascript    └── leetcode        ├── runner.js          # The main script that runs scripts
        ├── scripts\             # Directory containing task files
        │   ├── test.js        # Example task file
        │   ├── task1.js
        │   └── ...
        └── helpers\           # Directory containing helper files
            └── errorHandler.js # Example helper file
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
