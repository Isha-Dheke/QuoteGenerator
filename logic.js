const quotes = {
    science: ["Our scientific power has outrun our spiritual power.", "Never memorize something that you can look up.", "Somewhere, something incredible is waiting to be known"],
    inspiration: ["It takes courage to grow up and become who you really are.", "Nothing is impossible.", "You have brains in your head."]
}

let currentCategory = 'science';
let currentQuoteIndex = 0;
let darkModeEnabled = false;
let fontSize = 24;

const quoteText = document.getElementById('quoteText');
const categorySelect = document.getElementById('categorySelect');
const prevButton = document.getElementById('prevButton');
const randomButton = document.getElementById('randomButton');
const nextButton = document.getElementById('nextButton');
const darkModeToggle = document.getElementById('darkModeToggle');
const increaseFontBtn = document.getElementById('increaseFontBtn');
const decreaseFontBtn = document.getElementById('decreaseFontBtn');

updateQuote();

categorySelect.addEventListener('change', () => {
    currentCategory = categorySelect.value;
    currentQuoteIndex = 0;
    updateQuote();
});

prevButton.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    updateQuote();
});

randomButton.addEventListener('click', () => {
    currentQuoteIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    updateQuote();
});

nextButton.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
    updateQuote();
});

darkModeToggle.addEventListener('change', () => {
    darkModeEnabled = darkModeToggle.checked;
    updateDarkMode();
});

increaseFontBtn.addEventListener('click', () => {
    fontSize += 2;
    updateFontSize();
});

decreaseFontBtn.addEventListener('click', () => {
    if (fontSize > 12) {
        fontSize -= 2;
        updateFontSize();
    }
});

function updateQuote() {
    quoteText.textContent = quotes[currentCategory][currentQuoteIndex];
}

function updateDarkMode() {
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function updateFontSize() {
    quoteText.style.fontSize = `${fontSize}px`;
}
