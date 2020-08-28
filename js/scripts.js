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

const guessButton = document.getElementById( 'guess-button' );
console.log( guessButton );

const restartButton = document.getElementById( 'restart' );
console.log( restartButton );

const hangmanImage = document.getElementById( 'image' );
console.log( hangmanImage );

// Citation
//Got words from https://www.wordgenerator.net/random-word-generator.php
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
"dispensable",
"explicate",
"whetile",
"exesion",
"indisciplinable",
"indicatrix",
"pernicion",
"octosyllable",
"frontispiece",
"Spatterdashed",
"glidingly",
"antiphonal",
];
//End Citation

const previousGuessesArray = [];
var chancesVariable = 6;
var arrayOfUnderscores =[];
var randomWord = "";

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

function displayInitial_word()
{    
    arrayOfUnderscores =[];
    randomWord = getRandomWord().toLowerCase();
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

function display_word(myArray)
{
    underscoreWord.textContent="";
    for(const letter of myArray)
    {
        underscoreWord.append( letter );
    }    
    return myArray;
}

function setup()
{
    console.log(displayInitial_word());    
    previousGuessesArray.splice(0, previousGuessesArray.length);
    chancesVariable = 6;
    chances.append( chancesVariable ); 
    inputLetter.value="";   
}

//Find indices of letter in random word
//Citation
//https://stackoverflow.com/questions/10710345/finding-all-indexes-of-a-specified-character-within-a-string
function locations(substring,string)
{
    var a=[],i=-1;
    while((i=string.indexOf(substring,i+1)) >= 0) a.push(i);
    return a;
}

function replaceAt(positions, myArray, myLetter)
{
    for( let i of positions)
    {
        //Citation
        //Replace element of an array 
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        myArray.splice(i, 1, " "+myLetter+" ");
        //End Citation
    }
    return myArray;
}

function showConfirmationBox(message)
{
    //Citation
    //https://www.tutorialsteacher.com/codeeditor?cid=js-2
    //I did not know how to use confirmaion box, so checked tutorials and used the code
    var userPreference;
    if (confirm("You "+ message + "!!!"+
    "  Do you wanna play again?") == true) {
        location.reload();
    } else {
        userPreference = "New game cancelled!";
        inputLetter.diabled=true;
        guessButton.disabled=true;
        document.getElementById("msg").innerHTML = userPreference;
    }
    //End Citation     
}

function validateInput(myLetter, myArray)
{
    errorMessage.textContent=":";
    //To validate input is only alphabet
    //Citation
    //https://stackoverflow.com/questions/23556533/how-do-i-make-an-input-field-accept-only-letters-in-javascript
    var alphabets = /^[a-zA-Z]/;
    //End Citation

    if( myArray.includes( myLetter ))
    {
        errorMessage.textContent="You already guessed this letter, Try a different one";
        return false;
    }
    else if( myLetter=="" || myLetter==" "|| !myLetter.match(alphabets) )
    {
        errorMessage.textContent="Invalid Input. Please enter a letter."
        return false;
    }
    else
    {
        return true;
    }  
}

function changeImage(number)
{
    //Images used here are all taken from 'Lindsey Graham" with his consent
    images=["img/right.png","img/0wrong.png","img/1wrong.png","img/2wrong.png","img/3wrong.png","img/4wrong.png","img/5wrong.png","img/6wrong.png"];

    hangmanImage.src= images[(6-number)];
}

setup();

//Add Event Listener to Form Submission
guessButton.addEventListener('click', (event) => {
    event.preventDefault();
    const inputLetterValue = inputLetter.value.toLowerCase();
    console.log( inputLetterValue );
    //textbox becomes empty after user hits guess button
    inputLetter.value ="";   

    if( validateInput(inputLetterValue, previousGuessesArray))
    {
        previousGuessesArray.push( inputLetterValue );
        console.log( randomWord );
        //Check if chosenrandom word contains the input letter
        if( randomWord.includes( inputLetterValue ) )
        {
            console.log("it is included in random word");
            let indices = locations( inputLetterValue,randomWord);
            console.log(indices);

            display_word(replaceAt(indices,arrayOfUnderscores,inputLetterValue));
            
            previousGuesses.textContent="";
            for(const letter of previousGuessesArray)
            {
                previousGuesses.append( " "+letter );
            } 
            //When the user guesses whole word
            if( !arrayOfUnderscores.includes(" _ "))
            {
                console.log("word is complete");
                showConfirmationBox("win");
            }
        }

        else
        {
            if(chancesVariable>-1)
            {
                chancesVariable--;
                chances.textContent="";
                chances.append( chancesVariable );
                changeImage( chancesVariable );

                previousGuesses.textContent="";
                for(const letter of previousGuessesArray)
                {
                    previousGuesses.append( " "+letter );
                } 
            }
            //When user gets it wrong and user has 0 chances left
            if(chancesVariable ==-1)
            {
                console.log("chances are all used");
                showConfirmationBox("lose");
            }            
        }        
    }
 });

 //Add event listener on Restart Button so user can start afresh anytime
restartButton.addEventListener('click', (event) => {
    event.preventDefault();
    location.reload();
});