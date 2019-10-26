/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'I wonder how many people I\'ve looked at all my life and never seen.',
    source: 'John Steinbeck',
    citation: 'The Winter of Our Discontent',
    year: '1961'
  },
  {
    quote: 'That is part of the beauty of all literature. You discover that your longings are universal longings, that you\'re not lonely and isolated from anyone. You belong.',
    source: 'F. Scott Fitzgerald'
    // citation: '',
    // year: ''
  },
  {
    quote: 'People generally see what they look for, and hear what they listen for.',
    source: 'Harper Lee',
    citation: 'To Kill a Mockingbird',
    year: '1960'
  },
  {
    quote: 'Some old wounds never truly heal, and bleed again at the slightest word.',
    source: 'George R.R. Martin',
    citation: 'A Game of Thrones'
    // year: '1960'
  },
  {
    quote: 'I think... if it is true that there are as many minds as there are heads, then there are as many kinds of love as there are hearts.',
    source: 'Leo Tolstoy',
    citation: 'Anna Karenina',
    year: '1877'
  },
  {
    quote: 'I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be.',
    source: 'Charles Dickens',
    citation: 'Great Expectations',
    year: '1861'
  }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(array) {
  const randomNumber = Math.floor( Math.random() * array.length );
  return array[randomNumber];
};


/***
 * `printQuote` function
***/
function printQuote(){
const printedQuote = getRandomQuote(quotes);
let emptyString = '';
  emptyString +=  `<p class="quote">${printedQuote.quote}</p>
                   <p class="source">${printedQuote.source}`
    if(printedQuote.citation){
      emptyString += `<span class="citation">${printedQuote.citation}</span>`
    }
    if(printedQuote.year){
      emptyString += `<span class="year">${printedQuote.year}</span></p>`
}
document.getElementById('quote-box').innerHTML = emptyString;
// console.log(emptyString);
};




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);