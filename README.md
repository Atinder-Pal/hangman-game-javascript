# javascript-assignment-hangman-Atinder-Pal
**Purpose**: Simple Hangman game where user guesses the letters to complete a word.

**Author**: Atinder Pal

**Requirements**:
1. User is presented with a word they must guess for, but the word is only shown with underscores instead of letters so that “p r o g r a m m i n g” appears as “_ _ _ _ _ _ _ _ _ _ _”
2. The user may guess a letter by typing in the letter and clicking on the Guess button
3. If the word contains that letter, then the letter will appear in the Word section.
I.e.: User guesses ‘m’ so the word appears as “_ _ _ _ _ _ m m _ _ _”
4. If the word does not contain the letter, then the letter will appear in the Previous Guesses section and the Chances will go down by one.
5. If the user runs out of chances then they lose.
6. If the user guesses the whole word and there are no more underscores shown on the screen, then the user wins!When the game is over, the user will be allowed to play a new game with a different word to guess.


Link to Trello Board: https://trello.com/b/YTnDztqX/javascript-assignment-hangman


**Citation Summary**
How to select random word from an array of words
//Citation from https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
Using Math.random() function to get the random number between(0-1, 1 exclusive).
Multiply it by the array length to get the numbers between(0-arrayLength).
Using Math.floor() to get the index ranging from(0 to arrayLength-1).  
    const wordToPlay = listOfWords[Math.floor(Math.random()*listOfWords.length)];
    return wordToPlay;
//End Citation
    
How to find indices of a letter in random word
//Citation from https://stackoverflow.com/questions/10710345/finding-all-indexes-of-a-specified-character-within-a-string
This while loop starts from 0 upto the end of the array to check if the letter is present and if present it pushes the index into another array 'a' and returns the array of indices
    function locations(substring,string)
    {
        var a=[],i=-1;
        while((i=string.indexOf(substring,i+1)) >= 0) a.push(i);
        return a;
    }
//End Citation

Replace element of an array
//Citation from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Here we are removing 1 element starting at index i and then inserting (" "+myLetter+" ") String at that place- That's how splice function works for array in JS
        myArray.splice(i, 1, " "+myLetter+" ");
//End Citation

Adding Confirmation Box 
//Citation from https://www.tutorialsteacher.com/codeeditor?cid=js-2
I did not know how to use confirmaion box, so checked tutorials for format and used the code
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

To validate input is only alphabet
//Citation from https://stackoverflow.com/questions/23556533/how-do-i-make-an-input-field-accept-only-letters-in-javascript
I forgot the regex format- so checked it online
    var alphabets = /^[a-zA-Z]/;
//End Citation

//Credit for Images: Classmate 'Lindsey Graham'
//Images used here are all taken from 'Lindsey Graham" with his consent
    images=["img/right.png","img/0wrong.png","img/1wrong.png","img/2wrong.png","img/3wrong.png","img/4wrong.png","img/5wrong.png","img/6wrong.png"];