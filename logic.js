const quotes = {
    science:["Our scientific power has outrun our spiritual power.", 
    "Never memorize something that you can look up.",
     "Somewhere, something incredible is waiting to be known"],

    inspiration:["It takes courage to grow up and become who you really are.",
     "Nothing is impossible.",
      "You have brains in your head."]
}

let currentCategory = 'science';
let currentQuoteIndex = 0;


const quoteContainer = document.getElementById('quoteContainer');
const quoteText = document.getElementById('quoteText');
const categorySelect = document.getElementById('categorySelect');
const prevButton = document.getElementById('prevButton');
const randomButton = document.getElementById('randomButton');
const nextButton = document.getElementById('nextButton');

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




function updateQuote() {
    quoteText.textContent = quotes[currentCategory][currentQuoteIndex];
}