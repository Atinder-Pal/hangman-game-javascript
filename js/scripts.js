//alert("Welcome to Hangman");

//Grab all the necessary fields we want to manipulate later
const gameForm = document.getElementById( 'form' );
console.log( gameForm );

const inputLetter = document.getElementById( 'inputLetter' );
console.log( inputLetter );

const underscoreWord = document.getElementById( 'underscoreWord' );
console.log( underscoreWord );

const chances = document.getElementById( 'chances' );
console.log( chances );

const previousGuesses = document.getElementById( 'previous-guesses' );
console.log( previousGuesses );

const errorMessage = document.getElementById( 'error-message' );
console.log( errorMessage );

// Citation
//Got words from https://www.randomlists.com/random-words
const listOfWords = ["label",
"dinner",
"distinct",
"colour",
"chief",
"radiate",
"normal",
"harsh",
"flashy",
"cat",
"dispensable"];
//End Citation

const previousGuessesArray = ["d"];
var chancesVariable = 6;
var arrayOfUnderscores =[];

function getRandomWord()
{
    //Choose a Random word from our list of words for the game
    //Citation
    //https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
    //Using Math.random() function to get the random number between(0-1, 1 exclusive).
    // Multiply it by the array length to get the numbers between(0-arrayLength).
    // Using Math.floor() to get the index ranging from(0 to arrayLength-1).    
    const wordToPlay = listOfWords[Math.floor(Math.random()*listOfWords.length)];
    return wordToPlay;
    //End Citation
}
//console.log(getRandomWord());

function display_word()
{    
    arrayOfUnderscores =[];
    let randomWord = getRandomWord();
    let lengthOf_word = randomWord.length;
    console.log( randomWord );
    for (let i=0;i<lengthOf_word;i++)
    {
        arrayOfUnderscores.push(" _ ");
    }
    for(const letter of arrayOfUnderscores)
    {
        underscoreWord.append( letter );
    }    
    return arrayOfUnderscores;
}

function setup()
{
    console.log(display_word());
    //display_word();
    //previousGuessesArray.splice(0, previousGuessesArray.length);
    chancesVariable = 6;
    chances.append( chancesVariable );    
}

setup();

//Add Event Listener to Form Submission
gameForm.addEventListener('click', (event) => {
    event.preventDefault();
    const inputLetterValue = inputLetter.value;
    console.log( inputLetterValue );

    inputLetter.value ="";
    errorMessage.innerHTML="";
    if( previousGuessesArray.includes( inputLetterValue ))
    {
        errorMessage.innerHTML="You already guessed this letter, Try a different one";
    }

 });