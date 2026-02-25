//! object

//new keyword
// const obj = new Object()

// object literal

// let user_name = ''
// let user_email = ''

const user ={
    name:'Ram',
    email:'ram@gmail.com',
    age:28,
    
} 

// accessing object properties
//* dot notation (.)
console.log(user.email)  //
let user_email = user.email
console.log(user_email)  //
// console.log(user.user age)

//* bracket notation ([])
console.log(user['name'])
// console.log(user['user age'])

let key = 'name'
// console.log(user.key) //undefined
console.log(user[key])

//! modify object properties
user.age = 27

//! adding new properties
user.password = '12345'

delete user.age



console.log(user)

// {}
// if({}){
//     console.log('run')
// }

// console.log({} === {})

const user1 ={
    name:'Ram',
    email:'ram@gmail.com',
    age:28,
    address:{
        city:'',
        street:123
    }
    
}

console.log(user1.address.street)
console.log(user1['address']['street'])


// if(user.address){
//     if(user.address.street){
//         console.log(user.address.street)
//     }
// }

//! optional chaining
console.log(user.address?.street)



