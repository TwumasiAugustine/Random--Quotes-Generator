let randomQuotes = [
    '“In three words I can sum up everything I’ve learned about life: it goes on.” —Robert Frost',
    '“It is the province of knowledge to speak, and it is the privilege of wisdom to listen.” —Oliver Wendell Holmes Sr.',
    '“Don’t take life too seriously. You’ll never get out of it alive.” —Elbert Hubbard',
    '“You only live once, but if you do it right, once is enough.” —Mae West',
    '“Many of life’s failures are people who did not realize how close they were to success when they gave up.” —Thomas A. Edison',
    '“If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.” —Nelson Mandela',
    '“If you want to lift yourself up, lift up someone else.” —Booker T. Washington',
    '“I have not failed. I’ve just found 10,000 ways that won’t work.” —Thomas A. Edison',
    '“If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.” —James Cameron',
    '“Life is what happens when you’re busy making other plans.” —John Lennon',
    '“Spread love everywhere you go. Let no one ever come to you without leaving happier.” —Mother Teresa',
    '“When you reach the end of your rope, tie a knot in it and hang on.” —Franklin D. Roosevelt',
    '“Always remember that you are absolutely unique. Just like everyone else.” —Margaret Mead',
    '“The future belongs to those who believe in the beauty of their dreams.” —Eleanor Roosevelt',
    '“Tell me and I forget. Teach me and I remember. Involve me and I learn.” —Benjamin Franklin',
    '“The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.” —Helen Keller',
    '“It is during our darkest moments that we must focus to see the light.” —Aristotle Onassis',
    '“Whoever is happy will make others happy too.” —Anne Frank',
    '“Do not go where the path may lead, go instead where there is no path and leave a trail.” —Ralph Waldo Emerson',
    '“You will face many defeats in life, but never let yourself be defeated.” —Maya Angelou',
    '“In the end, it’s not the years in your life that count. It’s the life in your years.” —Abraham Lincoln',
    '“Never let the fear of striking out keep you from playing the game.” —Babe Ruth',
    '“Life is either a daring adventure or nothing at all.” —Helen Keller',
    '“Many of life’s failures are people who did not realize how close they were to success when they gave up.” —Thomas A. Edison',
    '“If you want to lift yourself up, lift up someone else.” —Booker T. Washington',
    '“I have not failed. I’ve just found 10,000 ways that won’t work.” —Thomas A. Edison',
    '“If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.” —James Cameron',
    '“Life is what happens when you’re busy making other plans.” —John Lennon',
    '“Spread love everywhere you go. Let no one ever come to you without leaving happier.” —Mother Teresa'
]

let quoteContainer = document.getElementById('quote-box')
let nameContainer = document.getElementById('name-box')


window.onload = setInterval(function() {
         let quotes = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
        quoteContainer.innerHTML = quotes;
    }, 5000);