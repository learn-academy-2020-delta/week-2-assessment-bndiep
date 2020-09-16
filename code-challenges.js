// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

// declare a function called isDivisibleBy3 that accepts an argument called num
const isDivisibleBy3 = (num) => {
    // check if num is divisble by 3 otherwise return that it doesn't
    // return a statement that says the number is divisible by three
    return num % 3 === 0 ? `${num} is divisble by three` : `${num} is not divisible by three`
}
// call the function and test on given variables
// console.log(isDivisibleBy3(num1))
// console.log(isDivisibleBy3(num2))
// console.log(isDivisibleBy3(num3))



// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

// declare function called firstCharUpperCase that takes an array as argument
const firstCharUpperCase = (array) => {
    // split each word into its own array and declare it to new variable called nouns
    let arrayOfNouns = array.map(noun => {
        // split each letter in the array so we can access them
        let nounLetters = noun.split("")
        // console.log(nounLetters)
        // look at only the first character and capitalize it and declare a new variable to hold that value
        let upperCaseChar = nounLetters[0].toUpperCase()
        // console.log(upperCaseChar)
        // slice out the lowercase letters of noun and join them into a string
        let lowerCaseChar = nounLetters.slice(1).join("")
        // console.log(lowerCaseChar)
        // piece back together the first capitalized letter to the end of remaining word
        let finalNoun = upperCaseChar + lowerCaseChar
        // console.log(finalNoun)
        // return the final capitalized noun
        return finalNoun
    })
    // return the array that contains the modified nouns
    return arrayOfNouns
}


// console.log(firstCharUpperCase(randomNouns))



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]
// declare a function called findNumbers that accepts an array as a argument
const findNumbers = (array) => {
    // create a variable that will hold only numbers
    // filter out only number data types
    let onlyNum = array.filter(value => {
        // if data type is a number, then return its value
        return typeof value === "number"
    })
    // order the only numbers array in increasing order - use sort method
    let ascendingOrderOfNum = onlyNum.sort((a, b) => a - b)
    // return the array of nums in increasing order
    return ascendingOrderOfNum
}

console.log(findNumbers(mixedDataArray))


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3
// declare a function called indexOfFirstVowel that takes a string argument
const indexOfFirstVowel = (string) => {
    // declare a variable that holds the string argument and lowercases it
    // split the string into an array to access the letters
    let lowerCaseLetters = string.toLowerCase().split("")
    // console.log(lowerCaseLetters)
    // go through all the letters in the string using map
    let arrayOfVowels = lowerCaseLetters.filter((value) => {
        // only return an array of vowels
        return value == 'a' || value == 'e' || value == 'i' || value == 'o' || value == 'u'
    })
    // the first vowel will be at the first index of an only vowel array
    let firstVowel = arrayOfVowels[0]
    // get the character of firstVowel from the string (that is passed as an argument)
    let firstVowelIndex = string.indexOf(firstVowel)
    // console.log(firstVowelIndex)
    return firstVowelIndex
}
// console.log(indexOfFirstVowel(vowelTester1))
// console.log(indexOfFirstVowel(vowelTester2))




// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

// declare a function called calculator that takes 3 arguments (num1, mathOperator, num2)
const calculator = (num1, mathOperator, num2) => {
    // check num2 first; if num2 is strictly equal to 0, then return "Can't divide by 0!"

    return num2 === 0 && mathOperator === "/" ? "Can't divide by 0!"
        // if the operator is "+", then the return should add both nums to get them
        : mathOperator === "+" ? num1 + num2
            // if operator is "-". then return should subtract both nums to get difference
            : mathOperator === "-" ? num1 - num2
                // if operator is "*", then return should multiply both nums to get product
                : mathOperator === "*" ? num1 * num2
                    // if operator is "/", then return should divide both nums to get quotient
                    : mathOperator === "/" ? num1 / num2
                        // else return ERROR
                        : "ERROR"
}



// Uncomment and use the following console logs to test your function
// console.log(calculator(3, "*", 9))
// Expected output: 27

// console.log(calculator(16, "+", 3))
// Expected output: 19

// console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"



// --------------------6) Create a function that takes in the following variable and returns only the websites that end in ".io".

var websites = ["codepen.io", "codecademy.com", "coursera.org", "EXAMPLE.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]
// Expected output: "codepen.io" "codepen.io"
// declare function called onlyDotIO that accepts an array as an argument
const onlyDotIO = (array) => {
    // filter through all elements in the array
    let allDotIOArray = array.filter(value => {
        // if the string element in array contains ".io", only those elements will appear in the array
        // also lowercase the website if it is capitalized
        return value.toLowerCase().includes(".io")
    })
    // console.log(allDotIOArray)
    // return only strings
    return allDotIOArray.join(" ")
}

// console.log(onlyDotIO(websites))



// --------------------7) STRETCH: Write a function that takes a number as an argument and uses a WHILE loop to count up to that number from 0.

// make a while loop with a condition that starts at zero and increments to the number
// declare a function that accepts number as argument
const incrementTo = (num) => {
    // declare a starting variable equal to zero
    let startNum = 0
    // declare array to hold all numbers
    let numArray = []
    // while loop where condition is start variable less than num argument
    while (startNum < num) {
        // inside loop increment by 1
        startNum++
        // console.log(startNum)
        // push the updated start to new array
        numArray.push(startNum)
    }
    // return the number array and join them to show in string format
    return numArray.join(", ")
}

// console.log(incrementTo(10))