console.log('Alex Varghese')
console.log(123)

let name1 = 'Alen'
console.log(name1)

let sentence = 'Hello my name is Alex. And I am here to learn JS.'
console.log(sentence)

//Comment
//fruit = prompt('What is your favourite fruit?')
//console.log(fruit)

/*********** Tip Cal App ***********/
/*
food = Number(prompt('How much was the food?'))
tipPercentage = prompt('How much tip percentage?') / 100
tipAmount = Number(food * tipPercentage)
total = tipAmount + food

console.log('Tip Amount =', tipAmount)
console.log('Tatal Amount = ' + total)
alert(tipAmount)
*/
/*********** Tip Cal App ***********/

/*********** Mini Weather App ***********/
/*
console.log(Math.floor(100.03))
console.log(Math.ceil(100.03))

console.log(Math.random())
console.log(Math.random() * 3)
console.log(Math.ceil(Math.random() * 3))
console.log(Math.floor(Math.random() * 3))


let weather = prompt('How is the weather?')
if (weather == 'rainy') {
  console.log('Grab your umbrella')
}
else {
  console.log('Wear your sunglasses')
}
*/
/*********** Mini Weather App ***********/

// Usinf Functions and Template  literals
function sayMyName(name2) {
  greet = `Hi ${name2}, Nice to meet you!`
  console.log(greet)
}
sayMyName('Alex')


function sum(a, b) {
  return a + b
}
//console.log(sum(1,23))
num1 = sum(1, 2)
console.log(num1)


function calculateFootTotal(food, tip) {
  const tipPercentage = tip / 100
  const tipAmount = (food * tipPercentage)
  const total = sum(food, tipAmount)

  return total
}

console.log(calculateFootTotal(300, 20))


//Arrow Functions

// const sumArror = (a, b) => {
//   return a + b
// }
//Implicit Return
const sumArror = (a, b) => a + b
console.log(sumArror(1, 2))


/*********** Array ***********/

/*
const groceries = ['🍌', '🍎', '🍊', '🍐']
console.log(groceries)
console.log(groceries[0])
console.log(groceries[3])
groceries.push('🍪')
console.log(groceries)
groceries.push('🫐')
console.log(groceries)
// groceries.pop()
// console.log(groceries)

//Array Slice
console.log(groceries.slice(0, 2))
console.log(groceries.slice(3, 6))
console.log(groceries.slice(1, 4))
//Array Methods (slice, push, indexOf, length)

console.log(groceries.indexOf('🍐'))
console.log(groceries.length)

*/

/*********** Objects ***********/

const person = {
  name: 'Leonardo',
  shirt: 'white'
}
console.log(person.name)
console.log(person.shirt)
console.log(person['name'])
console.log(person['shirt'])

//person.phone = '9818891452'
person['phone'] = '9818891452'

console.log(person.phone)
console.log(person)

const person2 = {
  name: 'Alen',
  shirt: 'black'
}
console.log(person2)
console.log(person2['name'])
console.log(person2.shirt)

const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liabilities: 50000,
    netWorth: function() {
      return this.assets - this.liabilities
    }
  }

  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.netWorth()} USD`

  return intro
}

console.log(introducer('Alen', 'black'))
//console.log(introducer('Leonardo', 'white'))

/*********** For Loops ***********/

const fruits = ['🍌', '🍎', '🍊', '🍐']
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i])
}

for (const fruit of fruits) {
  console.log(fruit)
}

// const howManyLetters1 = () => {
//   const phrase = 'Hey, can you go to grocery store with me?'

//   for (const letter of phrase) {
//     console.log(letter)
//   }
// }

// howManyLetters1()


// const howManyLetters = () => {
//   const phrase = 'Hey, can you go to grocery store with me?'

//   for (const letter in phrase) {
//     console.log(Number(letter) + 1)
//   }
// }

// //howManyLetters()

// .map
[1, 2, 3, 4].map(number => console.log(number))

// [1, 2, 3, 4].map(number => {
//   console.log(number)
//   console.log('haha')
// })

let result = [1, 2, 3, 4].map(number => number * 2)
console.log(result)

const doubleMap = (numbers) => {
  return numbers.map(number => number * 2)
}
console.log(doubleMap([1, 2, 3]))


// .filter

const filter1 = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    }
  }
  return result
}
console.log(filter1([1, 2, 3, 4, 5, 6], 3))

console.log([1, 2, 3, 4, 5, 6].filter(num => num > 4))

const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.filter(num => num > 4 || num < 2))

const actors = [
  { name: 'johnny', netWorth: 2000000 },
  { name: 'amber', netWorth: 10 },
  { name: 'matt', netWorth: 170000000 },
  { name: 'brad', netWorth: 300000000 },
  { name: 'leonardo', netWorth: 10000000 },
]
let result1 = actors.filter(actor => actor.netWorth > 10)
console.log(result1)
let names = result1.map(actor => actor.name).join(', ')

// playground.innerHTML = `<h1>${JSON.stringify(result1)}</h1>`

// playground.innerHTML = `<h1>${names}</h1>`


// .reduce
// sum all of the net worths
// SUM: Think reduce

// function sum(a, b) {
//   return a + b
// }

// const nums1 = [1, 2, 3]
// const result2 = nums1.reduce(sum)
// console.log(result2)

const nums1 = [1, 2, 3]
const result2 = nums1.reduce((prev, curr) => prev + curr)
console.log(result2)

// const nums1 = [1, 2, 3]
// const result2 = nums1.reduce((prev, curr) => prev * curr)
// console.log(result2)

let result3 = actors.reduce((prev, curr) => prev + curr.netWorth, 0)
console.log(result3)
