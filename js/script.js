/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

document.getElementById("copyrightYear").innerText = new Date().getFullYear();

/***
 Quotes taken from https://goodreads.com
***/

const quotes = [
  {
    quote: 'I wonder how many people I\'ve looked at all my life and never seen.',
    source: 'John Steinbeck',
    citation: 'The Winter of Our Discontent',
    year: '1961',
    tags: 'mindfulness'
  },
  {
    quote: 'That is part of the beauty of all literature. You discover that your longings are universal longings, that you\'re not lonely and isolated from anyone. You belong.',
    source: 'F. Scott Fitzgerald',
    tags: 'sadlove'
  },
  {
    quote: 'People generally see what they look for, and hear what they listen for.',
    source: 'Harper Lee',
    citation: 'To Kill a Mockingbird',
    year: '1960',
    tags: 'wisdom'
  },
  {
    quote: 'Some old wounds never truly heal, and bleed again at the slightest word.',
    source: 'George R.R. Martin',
    citation: 'A Game of Thrones',
    tags: 'sadlove'
  },
  {
    quote: 'The love that lasts the longest is the love that is never returned',
    source: 'W. Somerset Maugham',
    tags: 'sadlove'
  },
  {
    quote: 'I can, with one eye squinted, take it all as a blessing.',
    source: 'Flannery O\'Connor',
    citation: 'The Habit of Being: Letters of Flannery O\'Connor',
    year: '1978',
    tags: 'humor'
  },
  {
    quote: 'I think... if it is true that there are as many minds as there are heads, then there are as many kinds of love as there are hearts.',
    source: 'Leo Tolstoy',
    citation: 'Anna Karenina',
    year: '1877',
    tags: 'love'
  },
  {
    quote: 'Sometimes losing a pet is more painful than losing a human because in the case of the pet, you were not pretending to love it.',
    source: 'Amy Sedaris',
    citation: 'Simple Times: Crafts for Poor People',
    year: '2010',
    tags: 'humor'
  },
  {
    quote: 'I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be.',
    source: 'Charles Dickens',
    citation: 'Great Expectations',
    year: '1861',
    tags: 'love'
  }
];


/***
 Generate a Random Quote
***/

function getRandomQuote(array) {
  const randomNumber = Math.floor( Math.random() * array.length );
  return array[randomNumber];
}


/***
 Display Quote
***/
function printQuote(){
const printedQuote = getRandomQuote(quotes);
let emptyString = '';
  emptyString +=  `<p class="quote">${printedQuote.quote}</p>
                   <p class="source">${printedQuote.source}`;
    if(printedQuote.citation){
      emptyString += `<span class="citation">${printedQuote.citation}</span>`;
    }
    if(printedQuote.year){
      emptyString += `<span class="year">${printedQuote.year}</span>`;
    }
      if(printedQuote.tags === 'love'){
        emptyString += `<span class="emoji">❤️</span>`;
      }
      if(printedQuote.tags === 'sadlove'){
        emptyString += `<span class="emoji">💙</span>`;
      }
      if(printedQuote.tags === 'humor'){
        emptyString += `<span class="emoji">😏</span>`;
      }
      if(printedQuote.tags === 'mindfulness'){
        emptyString += `<span class="emoji">🙏</span>`;
      }
      if(printedQuote.tags === 'wisdom'){
        emptyString += `<span class="emoji">🦉</span>`;
      }
    emptyString += `</p>`;
document.getElementById('quote-box').innerHTML = emptyString;

/***
 Change Background Color On Button Click
***/

const randomColor = ['sienna', 'black', 'goldenrod', 'tomato', 'slategray', 'chocolate', 'green', 'orchid', 'darkkhaki', 'indianred', 'darkred', 'deeppink', 'darkslateblue', 'darkcyan', 'midnightblue', 'darkslateblue'];
const randomNumber = Math.floor( Math.random() * randomColor.length);

document.querySelector('body').style.backgroundColor = randomColor[randomNumber];
}

/***
 Change Quote Button Event Listener
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 Change Quote and Background Color after 15 seconds
***/

setInterval(() =>  printQuote(), 15000);
