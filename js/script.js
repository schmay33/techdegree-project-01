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
    quote: 'I wish it need not have happened in my time," said Frodo. "So do I," said Gandalf, "and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.',
    source: 'J.R.R. Tolkien',
    citation: 'The Fellowship of the Ring',
    year: '1954',
    tags: 'movie, book',
    favorite: 'Yes'
  },
  {
    quote: 'How did it get so late so soon?',
    source: 'Dr. Suess'
  },
  {
    quote: 'Big things happen when we take the next best step… over and over again.',
    source: 'Jill Siler',
    citation: 'Thrive Through The Five',
    year: '2020'
  },
  {
    quote: 'Every child has something they were put on Earth to do. Let\'s help them find it.',
    source: 'Dr. Joe Clark',
    citation: 'If the Dance Floor is Empty, Change the Song',
    year: '2020'
  },
  {
    quote: 'The Best Way To Get Started Is To Quit Talking And Begin Doing.',
    source: 'Walt Disney'
  },
  {
    quote: 'Don’t Let Yesterday Take Up Too Much Of Today.',
    source: 'Will Rogers'
  },
  {
    quote: 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',
    source: 'Unknown'
  },
  {
    quote: 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.',
    source: 'Rob Siltanen'
  },
  {
    quote: 'We May Encounter Many Defeats But We Must Not Be Defeated.',
    source: 'Maya Angelou'
  },
  {
    quote: 'We Generate Fears While We Sit. We Overcome Them By Action.',
    source: 'Dr. Henry Link'
  },
  {
    quote: 'The Man Who Has Confidence In Himself Gains The Confidence Of Others.',
    source: 'Hadistic Proverb'
  }
];


/**
 * Retrieves a random quote from an array of quote objects
 * 
 * @param  {array} arr
 * @returns {object} Returns the quote object selected at random.
 */
function getRandomQuote(arr) {
  //checking to see if there are quotes in the array. 
  //If not we return message that says no quotes.
  if (!arr.length > 0) {
    return 'Sorry, there are no quotes to display at this time';
  }

  //gets a random number using the getRandomNumber function
  // using the 0 index as the min and the array length as the max.
  const randomNumber = getRandomNumber(0, arr.length);
  //sets the random quote object to the randomQuote variable
  const randomQuote = quotes[randomNumber];
  //returns a random quote object
  return randomQuote;
}

/**
 * Returns a random number in between and including the two numebrs.
 * 
 * @param  {number} min
 * @param  {number} max
 * @return {number} A random number in between and including min and max.
 * @example getRandomNumber(0, 10)
 */
function getRandomNumber(min, max) {
  //creating the random number to choose from the array
  return randomNumber = Math.floor(Math.random() * (max - min) + min);
}


/**
 * Retrieves a random quote and displays in the element with id quote-box
 */
function printQuote() {
  //retrieves the random quote and stores it in a variable
  const randQuote = getRandomQuote(quotes);

  //sets the html to the necessary paragraphs for the Quote and Source. 
  //Then checks if each of the citation and year are present for the random quote
  //If so, then it will insert those items into the html variable.
  let html = `
    <p class="quote">${randQuote.quote}</p>
    <p class="source">${randQuote.source}
  `;

  //checking if citation is present by checking if it is undefined
  if (randQuote.citation !== undefined) {
    html += `
    <span class="citation"> ${randQuote.citation}</span>
    `;
  }

  //checks if year is present by checking if it is undefined
  if (randQuote.year !== undefined) {
    html += `
    <span class="citation">${randQuote.year}</span>
    `;
  }
  
  //checks if this is my favorite quote in the list
  if (randQuote.favorite === 'Yes') {
    html += `
    <span class="favorite">❤️</span>
    `;
  }

  //check if any tags exist with the quote
  if (randQuote.tags !== undefined) {
    html += `
    <span class="tags">tags: ${randQuote.tags}</span>
    `;
  }

  //add closing paragraph tag to the end of the html element
  html += `</p>`;

  //update the quote-box element's html with the html variable
  document.getElementById('quote-box').innerHTML = html;

  //get random rgb color
  const color = random_rgba();
  
  //set background color to random color
  document.querySelector('body').style = `background-color: ${color}`;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
//finds the element with id load-quote and then adds a listener
// so when the element is clicked it will run the printQuote function.
document.getElementById('load-quote').addEventListener("click", printQuote, false);

//source code: https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
//user: adeneo
/**
 * Creates a random rgba color
 */
function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

//source code: https://stackoverflow.com/questions/18070659/run-javascript-function-at-regular-time-interval
//user: Ry-
/**
 * Changes the quote on the set internval time
 * @param  {string} printQuote
 * @param  {number} 5000
 */
setInterval(printQuote, 5000); //time in milliseconds