//! loops
// {}
//! do while
// do{}while(condition)

// let i = 11;
// do {
//   // logic
//   console.log('do while',i);
//   // i = i +1
//   i++;
// } while (i <= 10);

//! while
// while(condition){}

// let j = 11;
// while (j <= 10) {
//   // logic
//   console.log('while',j);

//   j++;
// }

//! for
// for(initialize;condition;inc/dcr){}

// for(let i=0; i<=10 ; i++ ){
//     // logic
//     console.log(i)
// }

//! control tranfer statements
// break , continue 

// for(let i=0; i<=10 ; i++ ){
//     // logic
//     // if(i == 5){
//     //     break;
//     // }

//      if(i == 5){
//         continue;
//     }
//     console.log(i)
// }

// print enven number 1-10
for(let i = 0 ; i <=10 ; i++){
    if(i % 2 === 1){
        continue
    }
    console.log(i)
}

// for in
// for of
