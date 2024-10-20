// runner.js
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

/**
 * Helper function to handle errors.
 * @param {Error} error - The error to handle.
 */
function handleError(error) {
    console.error(chalk.red('Error:'), error.message);
}

/**
 * Function to execute a JavaScript file.
 * @param {string} filePath - The path to the JavaScript file to execute.
 */
async function runFile(filePath) {
    try {
        const fullPath = path.resolve(filePath);
        if (!fs.existsSync(fullPath)) {
            throw new Error(`File not found: ${fullPath}`);
        }

        console.time(`Execution Time for ${path.basename(fullPath)}`);
        
        // Convert the full path to a file URL
        const fileUrl = `file://${fullPath.replace(/\\/g, '/')}`;
        await import(fileUrl);
        
        console.timeEnd(`Execution Time for ${path.basename(fullPath)}`);
    } catch (error) {
        handleError(error);
    }
}

/**
 * Function to run all JavaScript files in the tasks directory.
 */
async function runAllTasks() {
    const tasksDir = path.join(process.cwd(), 'tasks');
    
    fs.readdir(tasksDir, (err, files) => {
        if (err) {
            handleError(err);
            return;
        }

        // Filter and run only .js files
        const jsFiles = files.filter(file => file.endsWith('.js'));
        if (jsFiles.length === 0) {
            console.log(chalk.yellow('No JavaScript files found in the tasks directory.'));
            return;
        }

        jsFiles.forEach(file => {
            runFile(path.join(tasksDir, file));
        });
    });
}

// Start running all tasks
runAllTasks();
