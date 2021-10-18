/******************************************
project 1 - Random Quote Generator
******************************************/
const load_quotes = document.querySelector('.load-quote');
const quote_box = document.querySelector('.quote-box');
const quote = document.querySelector('.quote');
const source = document.querySelector('.source');


/***
 * `quotes` array
 ***/
const quotes = [
    {
        quote : 'The greatest glory in living lies not in never falling, but in rising every time we fall' ,
        source : "Nelson Mandela",
        citation : "blog.hubspot.com",
        year : "1920",
    },
    {
        quote : "The journey of a thousand miles begins with one step.",
        source : "Lao Tzu",
        citation : "keepinspiring.me",
        year : "1983",
    },
    {
        quote : "Insane means fewer cameras!",
        source : "Ally Carter, Only the Good Spy Young",
        citation : "goodreads.com",
        year : "1973",
    },
    {
        quote : "The lampshade on my head is for my bright ideas. I won't be able to convey them until Monday, when my curtain gets out of the dry cleaners",
        source : "Bauvard",
        citation : "goodreads.com",
        year : "1945",
    },
    {
        quote : "Act first, explain later.",
        source : "Dan Brown, Digital Fortress",
        citation : "goodreads.com",
        year : "1964",
    },
    {
        quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
        source : "Steve Jobs",
        citation : "blog.hubspot.com",
        year : "1905",
    },
    {
        quote : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        source : "Oprah Winfrey",
        citation : "blog.hubspot.com",
        year : "1750",
    },
    {
        quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. ",
        source : "James Cameron",
        citation : "blog.hubspot.com",
        year : "1799",
    },
    {
        quote : "Life is what happens when you're busy making other plans",
        source : "John Lennon",
        citation : "blog.hubspot.com",
        year : "1865",
    },
    {
        quote : "The future belongs to those who believe in the beauty of their dreams",
        source : "Eleanor Roosevelt",
        citation : "blog.hubspot.com",
        year : "1901",
    },
];



/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(){
    let randomIndex = Math.floor(Math.random() * 10);

    return quotes[randomIndex];
}

/***
 * `printQuote` function
 ***/
 function printQuote(){
    let color = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#' + color;

    let randomQuoteObject = getRandomQuote(); 
    const citation = document.createElement('span');
    const year = document.createElement('span');
    citation.className = 'citation';
    year.className = 'year';

    // console.log(randomQuoteObject.quote);
    quote.innerText = randomQuoteObject.quote;
    source.innerText = randomQuoteObject.source;
    
    citation.innerText = randomQuoteObject.citation;
    source.appendChild(citation);
    
    year.innerText = randomQuoteObject.year;
    source.appendChild(year);
}


/***
 * click event listener for the print quote button
 ***/
load_quotes.addEventListener('click', printQuote);