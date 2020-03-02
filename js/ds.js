
  
//   logest palindrome substring
//   input  =input.toLowerCase()
//    var len = 0;
//    for(var i=0; i<input.length; i++){
//        var str;
//        for(var j=1; j<input.length; j++){
//            str = input.substr(i,j)
//            if(isPalindrome(str)==true){
//                if(len< str.length){
//                    len = str.length
//                }
//            }
//        }
       
//    }
   
//    console.log(len)
   
//    function isPalindrome(input){
//        input = input.toLowerCase()
//        for(var i=0; i<input.length; i++){
//            if(input[i]!== input[input.length-1-i]){
//                return false
//            }
           
//        }
//        return true
   // }
//     console.log(isPalindrome(input))
   
   // if(input === input.split("").reverse().join("")){
   //     console.log("true")
   // }else{
   //     console.log("false")
   // }

//maximum times number occurs
// input = input.split("\n")
// var len = Number(input[0])
// var ar = input[1].split(" ")

// var count = 0;
// var ele = 0;
// for(var i=0; i<len; i++){
//     var temp = ar[i]
//     var count1 = 0
    
//     for(var j=0; j<len; j++){
//         if(Number(ar[j])==Number(temp)){
//             count1++
//         }
//         if(count<count1){
//             count=count1
//             ele = temp
//         }
//     }
    
// }
// console.log(ele)

// var input = "120 90 80\n90 80 110"

// input = input.split("\n")
// var st1 = input[0].split(" ")
// // console.log(st2)
// var phySt1 = Number(st1[0])
// var chemSt1 = Number(st1[1])
// var mathSt1 = Number(st1[2])

// // console.log(mathSt1)

// var st2 = input[1].split(" ")
// var phySt2 = Number(st2[0])
// var chemSt2 = Number(st2[1])
// var mathSt2 = Number(st2[2])
// // console.log(mathSt2)
// // console.log(phySt2)

// var totalSt1 = 0
// var totalSt2 = 0
// for(var i=0; i<st1.length; i++){
    
//     totalSt1+= Number(st1[i])
//     totalSt2+= Number(st2[i])
// }

// if(totalSt1>totalSt2){
//     console.log("First t")
// }
// if(totalSt1 < totalSt2){
//     console.log("Second t")   
// }
// else if(totalSt1 == totalSt2){
//     if(mathSt1 > mathSt2){
//         console.log("First m")
//     }if(mathSt1<mathSt2){
//          console.log("Second m") 
//     }
//     else if(mathSt1==mathSt2){
//         if(phySt1 > phySt2){
//         console.log("First p")
//     }if(phySt1 < phySt2){
//          console.log("Second p") 
//     }
//     }
// }


   //  You are provided 3 integers: left,
   //   right and k. Your task is to write a
   //    program that finds out count of all such 
   // numbers between left and right (both inclusive) 
   // which are divided by k.


   // aaabbbbcc
   // a3b4c2

   // aaabbbcccaaa
   // a3b3c3a3

//    5
// 2 5 4 4 4

// 7

