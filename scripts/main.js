// Function to load and render markdown content
async function loadContent(path) {
    try {
        const response = await fetch(path);
        const text = await response.text();
        const contentSection = document.getElementById('content');
        contentSection.innerHTML = marked.parse(text);
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// Function to load the intro content
async function loadIntro() {
    try {
        const response = await fetch('content/intro.md');
        const text = await response.text();
        const introSection = document.getElementById('intro');
        introSection.innerHTML = marked.parse(text);
    } catch (error) {
        console.error('Error loading intro:', error);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadIntro();
}); 