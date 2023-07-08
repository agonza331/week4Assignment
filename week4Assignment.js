//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the
// value in the last element of the array.
let agesArray= [3, 9, 23, 64, 2, 8, 28, 93]
//length.-1 to access the last element(93) [0] for first element
console.log(agesArray[agesArray.length-1]-agesArray[0])
//1b. Add a new age to your array and repeat the step above to ensure it is dynamic.
agesArray.push(25)
//checking to ensure 25 was added
console.log(agesArray)
console.log(agesArray[agesArray.length-1]-agesArray[0])

//1c.Use a loop to iterate through the array and calculate the average age
var sum=0
for(var i=0; i<agesArray.length; i++){
    sum = sum + agesArray[i];
}
average=sum/agesArray.length
console.log("The average age is:" average)
//28.333


//2a. map method- creating a new array w/ new elements from every element in original array
let names=["Sam", "Tommy", "Sally", "Buck", "Bob"]
let lengths= names.map(function(element){
    return element.length;
})
console.log("Letters in each name:", lengths)
//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
var conNames= names[0];
for(i=1; i<names.length; i++){
conNames = conNames.concat(" ", names[i])
}console.log(conNames)

//3.How do you access the last element of any array?
let myArray= [1,3,5,6,8]
console.log(myArray[myArray.length - 1])

//4.How do you access the first element of any array?
console.log(myArray[0])

//5.Create a new array called nameLengths. Write a loop to iterate over the previously created names 
//array and add the length of each name to the nameLengths array
let nameLengths= names.map(function(element){
    return element.length;
})
console.log(nameLengths)
//20 (added 3, 5, 5, 4, 3)//

//6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
sum=0
for(i=0; i<nameLengths.length; i++){
    sum= sum + nameLengths[i];
}
console.log(sum)

//7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to
// itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function myFunction(word, n){
    var variable=word
    for (i=1; i<n; i++){
        variable=variable.concat(word)
    } return variable
} console.log(myFunction("Hello",3))

// 8. Write a function that takes two parameters, firstName and lastName, and returns a 
//full name. The full name should be the first and the last name separated by a space.
function fullName (firstName, lastName) { 
    return (firstName+" "+lastName)
}console.log(fullName("Anayeli", "Gonzalez"))

// 9. Write a function that takes an array of numbers and returns true
// if the sum of all the numbers in the array is greater than 100.
let numbers =[8, 14, 50, 23, 10]
let total=0;
function isGreaterThan100(numbers){
    for (let i=0; i<numbers.length; i++)
        total=total+numbers[i];{
        if(total>100){
            return true
        }else{
            return false
        }
    }
} console.log(isGreaterThan100(numbers))
//total was 105

//10. Write a function that takes an array of numbers and returns
// the average of all the elements in the array.
let aveNumbers=[1, 4 , 7, 8, 12]
var ave=0
for(var i=0; i<aveNumbers.length; i++){
    ave = ave + aveNumbers[i];
}
averageArray=ave/aveNumbers.length
console.log("The Average of the array is: ",averageArray)



//11. Write a function that takes two arrays of numbers and returns 
//true if the average of the elements in the first array is greater
// than the average of the elements in the second array.
let array1=[59, 16, 25, 47, 28]
var ave1=0
for(var i=0; i<array1.length; i++){
    ave1 = ave1 + array1[i];
}
array1=ave1/array1.length
let array2=[14, 23, 25, 55, 70]
var ave2=0
for(var i=0; i<array2.length; i++){
    ave2 = ave2 + array2[i];
}
array2=ave2/array2.length

function averages(array1, array2){
if (array1>array2){
    return true
} else{
    return false
}
} console.log("Is array1 greater than array2?", averages(array1,array2))
//array1=35  array2=37.4



//12.Write a function called willBuyDrink that takes a boolean 
//isHotOutside, and a number moneyInPocket, and returns true if
// it is hot outside and if moneyInPocket is greater than 10.50

function willBuyDrink(isHotOutside, moneyInPocket){
if((isHotOutside) && (moneyInPocket > 10.50)){
    return true;
} else{
    return false
}
}
//Printing willBuyDrink function
console.log("Will Buy a Drink:", willBuyDrink(true,10))



//13. Create a function of your own that solves a problem. In 
//comments, write what the function does and why you created it.
//Jane has cash saved up & wants to buy a new TV for 175 dollars, Does she have enough?
let myMoney=[20, 50, 100, 5]
let total1=0
function tvMoney(myMoney){
    for(i=0; i<myMoney.length; i++)
    total1= total1 + myMoney[i];{
        if (total1>=175){
            return true
        } else{
            return false
        }
    }
} console.log("Jane has enough TV money:", tvMoney(myMoney))
