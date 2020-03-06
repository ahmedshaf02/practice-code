
//    list dom append using button
    // function show(n){

    //     var show = document.getElementById("showDiv")
    //     console.log(n)
    //     show.innerHTML = n
    // }


    // var btn = document.querySelectorAll("button")
    // // console.log(btn)
    // btn.forEach(function(ele){
    //     // console.log(ele.textContent)
    //     ele.addEventListener("click",function(){
    //         show(ele.innerHTML)
    //     })
    // })

    // input value append using button
     
    // function show(){

        
    //     var input = document.getElementById("input").value
    //     // console.log(n)
    //     var lst = document.getElementById("lst")
    //     var li = document.createElement("li")
    //     li.innerHTML = input
    //     lst.append(li)
    // }


    // var btn = document.querySelector("button")
    // btn.addEventListener("click",function(){
    //         show()})
    

    // store  input value in an array and append
// var ar = []

// function add(n,scr,callack){
//     var obj = {
//         name: n,
//         scr:Number(scr)
//     }
//     // obj["name"]= n;
//     // obj["scr"] = scr
//     ar.push(obj)
//     console.log(ar)
//     callack()
// }

// function display(){
//     var lst = document.getElementById("lst")
//     lst.innerHTML = ""
//     for(var i=0; i<ar.length; i++){
    
//     var li = document.createElement("li")
//     li.innerHTML = ar[i].name + " "+ar[i].scr
//     lst.append(li)
//     // console.log(ar[i].name+ " "+ ar[i].scr)
//     }   
// }

// var btn = document.getElementById("btn")
// btn.addEventListener("click",function(){
// var name = document.getElementById("n").value
// var scr = document.getElementById("s").value
//             add(name,scr,display)})

// make no of button and add function to them
// var st = []
// for(var i=0; i<30; i++){
//     st[i] = i*1+500
// }
// // console.log(st)
// var cd1 = document.getElementById("cd1") 
// function stPrice(i){
//     console.log(i)
//     cd1.innerHTML = st[i]
// }


// var cd2 = document.getElementById("cd2")
// for(var i=0; i<30; i++){
//     var btn = document.createElement("button")
//     btn.textContent = "day "+ (i+1)
//     // btn.setAttribute("onclick","alert("+(i+1)+")")
// btn.setAttribute("onclick","stPrice("+i+")")
    // btn.addEventListener("click",function(){
    //     stPrice(i)
    // })
//     cd2.append(btn)
// }