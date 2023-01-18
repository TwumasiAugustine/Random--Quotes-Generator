
function refreshQuote(){
    fetch('./app.json')
    .then(response => response.json())
    .then(data => {
        const quotes = data.quotes;
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        const quote = document.getElementById('quote');
        const author = document.getElementById('author');
        quote.innerHTML = "\" " +  randomQuote.quote + " \"";
        author.innerHTML = "- " + randomQuote.author;
    })
}
setInterval(refreshQuote, 5000);
