
// function show(){
//     console.log("it's a callback function")
// }
// //calling above function
// function call(callback){
//     callback()
// }
// call(show)

callback with given parameter
function show(a){
    console.log("it's a callback function "+ a)
}
//calling above function
function call(callback){
    var a = 100
    callback(a)
}

call(show)