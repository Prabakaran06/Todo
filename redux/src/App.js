// //import compose from 'lodash/fp'
// import pipe from 'lodash/fp/pipe'
//import Counter from './features/counter/Counter';

import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";



function App(){
  return(
    <main>
     <AddPostForm />
     <PostsList />
    </main>
  )
}
export default App;









// const person ={
//   name:"prabu",
//   add:{
//     city:"3chy",
//     country:"india",
//     street:{
//       no:"1",
//       side:"west"
//     }
//   }
// }
// const updated={
//   ...person, name:"karan",add:{...person.add,country:"singap"},street:{...person.add.street,no:"2"}
// }
// updated.add.country="singa"

// console.log(person)
// console.log(updated)



// let input ="  LEarning  "

// const trim =str => str.trim()
// const wrap = type => str =>  `<${type}>${str} <${type}>`
// const toLowerCase =str=> str.toLowerCase()

// const transform = pipe(wrap("div"),trim, toLowerCase,); 

// console.log(transform(input));




//let output = " <div> "+input.trim()+ " </div> "
//const result= wrapInDiv (toLowerCase(trim(input)))

//const wrapInSpan = str =>`<span> ${str} </span>`

// function add(a){
//   return function(b){
//     return a+b
//   }
// }
// const add2=a=>b=>c=>(a+b+c)
// console.log(add2(3)(4)(2))


//setTimeout(()=>console.log("hiii"),1000)
// function pressKey(){
//   return function(){
//     console.log("code learn")
//   }
// }
// let fn =pressKey()
// let msg =fn()

// function TestRe() {
//   //return console.log('redux code learning')
//  // return "thanks"
// }

// function sayGood(fn){
//   console.log(fn())
// }

// sayGood(TestRe)

// let pL=TestR()
// pL()
// TestR()
// pL()

