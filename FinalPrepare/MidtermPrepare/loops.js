//WHILE LOOPS

/*Suppose we want to ask the user for a bunch 
of different numbers, and when the user 
enters 0 we want to print out the sum of all 
the user entered numbers:*/
function addNum() {
    let userinput = prompt("Enter some numbers, 0 to stop: ");
    let numinput = parseInt(userinput);
    let sum = 0;
    while (numinput !== 0) {
        sum += numinput;
        /*Have to ask every loops integration until the userinput === 0*/
        userinput = prompt("Enter some numbers, 0 to stop: ");
        numinput = +userinput;
    }
    document.getElementById("output1").innerHTML = "The sum is " + sum;
}

/*prompting for the Year value*/
function yearguess() {
    let input = prompt("Enter year 2020 or later");
    let yearinput = parseInt(input);
    while (yearinput < 2020) {
        prompt("Wrong input. Please try again!");
    }
    if (yearinput >= 2020) {
        document.getElementById("output2").innerHTML = "Correct input!";
    }
}



//DO-WHILE LOOPS

function addnumber() {
    let userinput = 0;
    let sum = 0;
    do {
        userinput = +prompt("Enter some numbers, 0 to stop: ");
        sum += userinput;
    } while (userinput !== 0);
    document.getElementById("output3").innerHTML = "The sum is " + sum;
    userinput = 0;
    sum = 0;
}


//FOR LOOPS

/*print the numbers from 1 to n*/
let n;
let ans = "";
function printNum(n) {
    n = +prompt("Enter the max number you want to print: ");
    for (let i = 1; i <= n; i++) {
        ans += i;
        ans += "\n";
    }
    document.getElementById("output4").innerHTML = ans;
    ans = "";
}

/*Write a for loop that will iterate from 0 to n. 
For each iteration, it will check if the current 
number is even or odd, and print that to the 
console.*/
let m = 0;
let ans1 = "";
function checknum(m) {
    m = +prompt("Enter the max number you want to check: ");
    for (let i = 0; i <= m; i++) {
        ans1 += "<p>";
        if (i % 2 === 0) {
            ans1 += i + " is even.";
        }
        else {
            ans1 += i + " is odd.";
        }
        ans1 += "</p>";
    }
    document.getElementById("output5").innerHTML = ans1;
    ans1 = "";
}

/*Write a function that accepts a string as a parameter and returns the reverse of that string*/
/*Method 1: Reverse start from the end character backward*/
let s = "";
let ans2 = "";
function reverseString(s) {
    s = prompt("Please enter the string you want to reverse: ");
    for (let i = s.length - 1; i >= 0; i--) {
        ans2 += s.charAt(i);
    }
    document.getElementById("output6").innerHTML = ans2;
    ans2 = "";
}
/*Method 2: Reverse start from the first character onwards*/
let b = "";
let ans3 = "";
function reverseString1(b) {
    b = prompt("Please enter the string you want to reverse: ");
    for (let i = 0; i < b.length; i++) {
        ans3 = b.charAt(i) + ans3;
    }
    document.getElementById("output7").innerHTML = ans3;
    ans3 = "";
}

/*Write a function that uses nested 
for loops to print a right triangle of asterisks 
to the console, where the height of the 
triangle is specified as a parameter*/
let c = "";
let star = "";
function printTriangle(c) {
    c = +prompt("Please enter the height of the triangle: ");
    for (let i = 1; i <= c; i++) {
        //print the star in each line
        for (let j = 1; j <= i; j++) {
            star += "*";
        }
        //break the line after printing the stars for each line
        star += "<br>";
    }
    document.getElementById("output8").innerHTML = star;
}

/*Write a JavaScript function that accepts a 
string as a parameter and returns true if the 
string is a palindrome.*/
//Method 1: Comparing character by character
let d = "";
function isPalindrome(d) {
    d = prompt("Please enter the word you want to check: ");
    let f = d.length - 1;
    for (let i = 0; i < d.length; i++) {
        let e = d.charAt(i);
        if (e === d.charAt(f - i)) {
            document.getElementById("output9").innerHTML = "The input word is a palindrome";
        } else {
            document.getElementById("output9").innerHTML = "The input word is not a palindrome";
        }
    }
    d = "";
}

//Method 2: Using reverseStr()
function isPalindrome1() {
    let e = prompt("Please enter the word you want to check: ");
    let reverse = "";
    for (let i = 0; i < e.length; i++) {
        reverse = e.charAt(i) + reverse;
    }
    if (reverse == e) {
        document.getElementById("output10").innerHTML = "The input word is a palindrome";
    } else {
        document.getElementById("output10").innerHTML = "The input word is not a palindrome";
    }
    e = "";
    reverse = "";
}
document.getElementById("button10").onclick = isPalindrome1;

//Method 3: Using str.length/2
function isPalindrome2() {
    let e = prompt("Please enter the word you want to check: ");
    let f = e.length / 2;
    for (let i = 0; i < f; i++) {
        if (e.charAt(i) !== e.charAt(e.length - 1 - i)) {
            document.getElementById("output11").innerHTML = "The input word is not a palindrome";
        } else {
            document.getElementById("output11").innerHTML = "The input word is a palindrome";
        }
    }
}
document.getElementById("button11").onclick = isPalindrome2;

//High-Low Guessing Game
function NumGuess() {
    let playagain = true;
    while (playagain) {
        //Pick random number from 1 to 100 (inclusive)
        let max = 100;
        let min = 1;
        let num = Math.floor((Math.random() * ((max - min) + 1) + min));
        let guesscount = 0;
        //Guessing : Prompt to guess
        let guess = +prompt("I have picked the number from 1 to 100. Please enter your guess here: ");
        //report whether high or low
        //Termination condition: Correct guess or want to quit (using sentinel value)
        //Count the number of guesses
        //Prompt to determine whether to play again
        //Stop when the user choose to stop
        while (guess !== num) {
            let askquit;
            if (guess < num) {
                askquit = prompt("Your guess is too low! Would you like to quit? (Y/N)");
                guesscount++;
            } else if (guess > num) {
                askquit = prompt("Your guess is too high! Would you like to quit? (Y/N)");
                guesscount++;
            }
            if (askquit == "Y") {
                break;
            } else {
                guess = +prompt("Please enter your guess here: ");
            }
        }
        if (guess === num) {
            alert("Your guess is correct! You have guessed for " + guesscount + " times");
        }
        again = prompt("Would you like to play again? (Y/N)");
        if (again == "Y") {
            playagain = true;
        } else {
            playagain = false;
        }
    }
}
document.getElementById("button12").onclick = NumGuess;


//PRIME NUMBER
function checkprime() {
    let numbercheck = +prompt("Enter the number you want to check: ");
    let i;
    if (numbercheck === 1){
        document.getElementById("output13").innerHTML = numbercheck + " is not a prime number!";
    }
    for (i = 2; i < numbercheck; i++) {
        if ((numbercheck % i) === 0) {
            document.getElementById("output13").innerHTML = numbercheck + " is not a prime number!";
            break;
        }
    }
    if (i == numbercheck) {
        document.getElementById("output13").innerHTML = numbercheck + " is a prime number!";
    }
}
document.getElementById("button13").onclick = checkprime;


//DECONSTRUCT A NUMBER INTO PRIME NUMBER; output 14; button 14
//check for the first prime number
let number;
let checknumber;
function checkprime1(checknumber) {
    let i;
    for (i = 2; i < checknumber; i++) {
        if ((checknumber % i) === 0) {
            return false;
        }
    }
    //if (i == checknumber) { ====> NO NEED BECAUSE ALREADY USE RETURN IN THE ABOVE IF
    return true;
    //}
}
//use a loop to get number divided by the first prime number as many times as possible
/*when it cannot divided by the first prime num anymore, 
check for the second prime number and divided by the second prime num*/
function deconstructnum() {
    number = +prompt("Please enter the number (except 1): ");
    let num2 = number;
    let primenum = 0;
    let count = 0;
    let ansprime = "";
    for (let i = 2; i <= number; i++) {
        if (checkprime1(i)) {
            primenum = i;
            while ((num2 % primenum) === 0) {
                num2 = num2 / primenum;
                count++
            }
            if (count !== 0) {
                ansprime += "("+ primenum + "^" + count +")" ;
            }
            count = 0;
        }
    }
    document.getElementById("output14").innerHTML = number + " = " + ansprime;
}
document.getElementById("button14").onclick = deconstructnum;


/*Math.random()
returns a floating-point from 0 to 1 (NOT INCLUDE 1);
Getting a random integer between two values (include min and NOT INCLUDE MAX): Math.floor((Math.random()*(max-min)+min);
Getting a random integer between two values (include min and INCLUDE MAX): Math.floor((Math.random()*(max-min+1)+min);
*/



//Math.pow
function sumofCubes(num1, num2){
    return Math.pow(num1,3)+Math.pow(num2,3);
}
console.log(sumofCubes(1,2));

/*Write a function that accepts a string as a 
parameter and returns the string with proper 
capitalization (i.e., the first letter capitalized 
and the rest of the word lowercased)*/
function properCase(str){
    let result = "";
    result += str.charAt(0).toUpperCase();
    result += str.substring(1).toLowerCase();
    return result;
}
console.log(properCase("mIcHael"));