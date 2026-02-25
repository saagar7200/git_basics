//! array

// new keyword
// array literal  
// []

let n1 = 1
let n2 = 2

// let arr = new Array()

let numbers = [1,2,3,4,5,3,6]
// 0th index

// reading element
// bracket notation
const first_ele = numbers[0]

console.log(first_ele)
console.log(numbers[5])

//! adding new element

//* from end index
// numbers.push(12,4,5,6)

//* from start index
// numbers.unshift(7,3,9)


//! removing element
//* from end index
//pop
// const popped_el =  numbers.pop()
// console.log(popped_el)
// console.log(numbers)


//* from start index
// shift
// const first = numbers.shift()
// console.log(first)



// includes
// return boolean
console.log(numbers.includes(1))

// indexOf
console.log(numbers.indexOf(3))
console.log(numbers.indexOf(30))

console.log(numbers.lastIndexOf(3))
// console.log(numbers.)

numbers.push(12,34)


// length

console.log(numbers[numbers.length - 1])

console.log(numbers[-1]) //last element

console.log(numbers);
console.log(numbers.length)

console.log(numbers.at(0)) // numbers[0]
console.log(numbers.at(-2)) // numbers[length-2]

//! slice
// console.log(numbers.slice(0,4))

//! splice(startIndex , deleteCount , item1,item2 ,.......itemn)
// 
// const new_arr = numbers.splice(1,3)
// const new_arr = numbers.splice(1,3,65,87,657)
// const new_arr = numbers.splice(1,0,65,87,657)
// console.log(new_arr)

console.log(numbers)

//! array methods


let user = {
    name:'john',
    email:'john@gmail.com',
    age:27
}



//* for in 
// obj
// key

for( let x in user ){
    console.log(x,user[x])

}



// for( let x in numbers ){
//     console.log(x)

// }

// for( let x of user ){
//     console.log(x)

// }



//* for of
// iterables => string , array
// value

for(let value of numbers ){
 console.log(value)
}


for(let value of 'HELLO' ){
 console.log(value)
}


