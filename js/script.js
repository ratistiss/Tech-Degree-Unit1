/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/*
array of my top 5 favorite qoutes, each is built in as an object with 4 key/values
*/

let quotes = [
  {
    quote: 'As a leader, what you allow is the standard you expect',
    source: 'Jocko Willink',
    citation: 'Extreme Ownership',
    year: 2015
  },
  {
    quote: 'The test of Success is not what you do when you are on top. Success is how high you bounce, when you hit bottom',
    source: 'General George Patton',
    citation: 'Goodreads.com',
    year: 1941
  },
  {
    quote: "We're all blind to our own blindspots",
    source: 'Pastor Mark Driscoll',
    citation: "The Most Excellent Way to Lead Conference",
    year: 2017
  },
  {
    quote: 'The only man who never makes a mistake is the man who never does anything',
    source: 'Theodore Roosevelt',
    citation: 'QouteInvestigator.com'
  },
  {
    quote: 'A bend in the road is not the end of the road, unless you forget to make the turn',
    source: 'Helen Keller',
    year: 1924
  }
]
var viewedQuotes = [];                                                       // array for qoutes used

/* function to randomize Qoutes ( after building randomizing function I Found info on not repeating in the forums
   at https://teamtreehouse.com/community/random-quote-generator-not-returning-duplicate-quote).*/

function getRandomQuote() {
  if (quotes.length == 0)                                                   // this conditional statement refills the Quotes array
    quotes = viewedQuotes.splice(0, viewedQuotes.length);                  //.splice to empty viewedQoutes
  var y = Math.floor(Math.random() * quotes.length);                       //  the random number expression
  var splicedQuote = quotes.splice(y, 1)[0];                              // .splice to remove from main list
  viewedQuotes.push(splicedQuote);                                        // .push used to put qoute into the viewedQoute array
  return splicedQuote;                                          
}



// print function below

function printQuote(){
  let z = getRandomQuote();                                                 //varible to run function
 let string = '';                                                           // variable for html string
  string += '<p class="quote">Quote: ' + z.quote + '</p>';                  //Start of string Concatenation
   string += '<p class="source">source: ' + z.source;
    if (z.citation){
  string +='<span class="citation">Citation: ' + z.citation + '</span>';
}
    if (z.year){
      string += '<span class="year">Year: ' + z.year + '</span>'};
    string += '</p>';
  document.getElementById("quote-box").innerHTML = string;                    // Links HTML ID and string
  ranRGB();                                            //nested randomRGB function, so button would change color also
}

setInterval(printQuote, 8000);                                      //setInterval(function, time of 8 seconds)




// random color function
function ranRGB(){                                                             
let r = Math.floor(Math.random() * 256);                                      //for randomized RGB values
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + r + "," + b + "," + g + ")";                          // variables Concatenated
  document.body.style.backgroundColor = bgColor;                              // attaches rgb color to the body element
  console.log(bgColor);
} 



document.getElementById('loadQuote').addEventListener("click", printQuote, false)  //Button on page controls qoute and RGB colors random on each click
