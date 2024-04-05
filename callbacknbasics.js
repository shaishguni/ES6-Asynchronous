// // Asynchronous
// console.log("I")

// console.log("eat ")

// setTimeout(()=>{console.log('i cream')},4000)

// console.log("with")

// console.log("a spoon")


const one = (call_two)=>{
    console.log('hello completed . call two ');
   call_two()
};
one(two);

// setTimeout(()=>{two()},40000)
function two() {
    console.log("world ");
}
// two()