// Methods
const fs = require('fs');
const path = require('path');

// Delete directories
function deleteDirectories() {
    fs.rmSync(path.join(__dirname, "raw"), { recursive: true, force: true });
    fs.rmSync(path.join(__dirname, "tmp"), { recursive: true, force: true });
    fs.rmSync(path.join(__dirname, "dist"), { recursive: true, force: true });
}

// Create directories
function createDirectories() {
    fs.mkdirSync(path.join(__dirname, "raw", "xml"), { recursive: true });
    fs.mkdirSync(path.join(__dirname, "tmp", "xml"), { recursive: true });
    fs.mkdirSync(path.join(__dirname, "dist", "json"), { recursive: true });
    fs.mkdirSync(path.join(__dirname, "dist", "res"), { recursive: true });
}

// Clear directories
function clearDirectories() {
    deleteDirectories();
    createDirectories();
}

// Export functions
module.exports = {
    createDirectories,
    deleteDirectories,
    clearDirectories
}