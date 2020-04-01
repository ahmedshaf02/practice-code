
// isPalindrome()
// function isPalindrome(input){
//     input = input.toLowerCase()
//     for(var i=0; i<input.length; i++){
//         if(input[i]!== input[input.length-1-i]){
//             return false
//         }  
//     }
//     return true
// }
// var input = "aabbaa"
// // console.log(isPalindrome(input))


// if(input === input.split("").reverse().join("")){
//        console.log("true")
//    }else{
//        console.log("false")
//    }



// //    min and max of a number
// // for(var i=0; i<ar.length; i++){
// //     if(ar[i]>max){ max = ar[i]}

// //     if(ar[i]<min){min=ar[i]}
// // }


// // var input = "3\n1 2 3"

// // input = input.split("\n")
// // var n = Number(input[0])
// // var ar = input[1].split(" ")

// // var max =0
// // for(var i =0; i<n; i++){
// //    if(Number(ar[i])>max){
// //       max = Number(ar[i])
// //    }
// // }
// // console.log(typeof max)

// // for(var j=0; j<ar.length; j++){
// //    if(true){
// //       Number(ar[j])++
// //    }
// // }


// // isPrimeNumber function

// function isPrimeNumber(n){
//    if(n==2 || n<2){
//       return false
//    }else{
   
//       for (var i=2; i<n; i++){
//          if(n%i==0){
//             return false
//          }
//       }
//       return true
//    }
   
// }
// console.log(isPrimeNumber(1))

// // factorial of a number
// // function fact(n){
// //    if(n==0){
// //       return 1
// //    }else{
// //       return n* fact(n-1)
// //    }
// // }

// // var fn = fact(4)
// // console.log(fn)

// // fibbonacci funct
// // function fibbo(n){
// //    if(n <=1){
// //       return 1
// //    }else{
// //       return fibbo(n-1)+ fibbo(n-2)
// //    }
// // }
// // var fn = fibbo(5)
// // console.log(fn)

// // var input = ""


// // maximum occurance element
// // 5
// // 0 2 0 6 9
// // Sample Output 0

// // 0
// // input = input.split("\n")
// // var len = Number(input[0])
// // var ar = input[1].split(" ")

// // var count = 0;
// // var ele = 0;
// // for(var i=0; i<len; i++){
// //     var temp = ar[i]
// //     var count1 = 0
    
// //     for(var j=0; j<len; j++){
// //         if(Number(ar[j])==Number(temp)){
// //             count1++
// //         }
// //         if(count<count1){
// //             count=count1
// //             ele = temp
// //         }
// //     }
    
// // }
// // console.log(ele)


// // // palindrom substring
// // Sample Input 0

// // thisracecarisgood
// // Sample Output 0

// // 7
  
// // input  =input.toLowerCase()
// // var len = 0;
// // for(var i=0; i<input.length; i++){
// //     var str;
// //     for(var j=0; j<=input.length; j++){
// //         str = input.substr(i,j)
// //         // console.log(str)
// //         if(isPalindrome(str)==true){
// //             if(str.length > len){
// //                 len = str.length;
// //             }
// //         }
// //     }
    
// // }
// // function isPalindrome(input){
// //     input = input.toLowerCase()
// //     for(var i=0; i<input.length; i++){
// //         if(input[i]!== input[input.length-1-i]){
// //             return false
// //         }   
// //     }
// //     return true
// // }

// // console.log(len)




// //     console.log(isPalindrome(input))

// // if(input === input.split("").reverse().join("")){
// //     console.log("true")
// // }else{
// //     console.log("false")
// // }


// // Jee exam
// // 120 90 70
// // 90 80 110
// // Sample Output 0

// // Second
// // input = input.split("\n")
// // var st1 = input[0].split(" ")
// // // console.log(st2)
// // var phySt1 = Number(st1[0])
// // var chemSt1 = Number(st1[1])
// // var mathSt1 = Number(st1[2])

// // // console.log(mathSt1)

// // var st2 = input[1].split(" ")
// // var phySt2 = Number(st2[0])
// // var chemSt2 = Number(st2[1])
// // var mathSt2 = Number(st2[2])
// // // console.log(mathSt2)
// // // console.log(phySt2)

// // var totalSt1 = 0
// // var totalSt2 = 0
// // for(var i=0; i<st1.length; i++){
    
// //     totalSt1+= Number(st1[i])
// //     totalSt2+= Number(st2[i])
// // }

// // if(totalSt1>totalSt2){
// //     console.log("First")
// // }
// // if(totalSt1 < totalSt2){
// //     console.log("Second")   
// // }
// // else if(totalSt1 == totalSt2){
// //     if(mathSt1 > mathSt2){
// //         console.log("First")
// //     }if(mathSt1<mathSt2){
// //          console.log("Second") 
// //     }
// //     else if(mathSt1==mathSt2){
// //         if(phySt1 > phySt2){
// //         console.log("First")
// //     }if(phySt1 < phySt2){
// //          console.log("Second") 
// //     }
// //     }
// // }

// // minimum steps required
// // Sample Input 0

// // 3
// // 1 2 3
// // Sample Output 0

// // 3

// // // same 
// // Sample Input 0

// // 3
// // 4
// // *.*.
// // .*.*
// // *.*.
// // .*.*
// // 3
// // .*.
// // *.*
// // .*.
// // 3
// // ..*
// // **.
// // ..*
// // Sample Output 0

// // NO
// // BOTH
// // HORIZONTAL



// // earning
// // Sample Input 0/
   
//    // console.log(input)
   
// //     var enter1 = input[1].split(" ")
// //     var enter2 = input[2].split(" ") 
// //     // console.log(enter2)
   
// //     var valueAr = []
// //     valueAr.push(enter1[1])
// //     valueAr.push(enter2[1])
// //     // console.log(valueAr)
   
   
   
// //     var instructionAr = []
// //     instructionAr.push(enter1[0])
// //     instructionAr.push(enter2[0])
// //     instructionAr.push(input[3])
// //     instructionAr.push(input[4])
// //     instructionAr.push(input[5])
// //     instructionAr.push(input[6])
// //     // console.log(instructionAr)
   
// //    var solve = []
   
// //    for(var i=0; i<len; i++){
       
// //        var stack = input[i].split(" ")
// //        // console.log(stack)
// //        if(stack[0]=="1"){
// //            solve.push(stack[1])
// //        }
// //        if(stack[0]==2){
// //            if(solve.length>0){
// //                solve.pop()
// //            }    
// //        }
// //        if(stack[0]==3){
// //            if(solve.length==0){
// //                console.log("Empty!")
// //            }else{
// //                console.log(solve[solve.length-1])
// //            }
// //        }
// //        // if(instructionAr[i]==1){
// //        //     solve.push(valueAr[i])
// //        // }
// //        // if(instructionAr[i]==2){
// //        //     solve.pop()
// //        // }
// //        // if(instructionAr[i]==3){
// //        //     if(solve.length==0){
// //        //         console.log("Empty!")
// //        //     }else if(solve.length !=0) {
// //        //         console.log(solve[solve.length-1])
// //        //     }
// //        // }
// //    }

// //    Sample Input 0

// // 6
// // 1
// // 2 5
// // 2 7
// // 2 9
// // 1
// // 1
// // Sample Output 0

// // No Food
// // 9
// // 7
// // input = input.split("\n")
    
// // var len = Number(input.shift())
// // var ar = []
// // // console.log(input)
// // for(var i=0; i<len; i++){
// //     // if(input[i]==1 && ar.length==0){
// //     //     console.log("No Food")
// //     // }     
// //         var stack = input[i].split(" ")
// //         // console.log(stack)
// //         if(stack[0]==2){
// //             ar.push(stack[1])
// //         }
// //         if(stack[0]==1){
// //             if(ar.length>0){
// //                 console.log(ar[ar.length-1])
// //                 ar.pop()
// //             }else{
// //                 console.log("No Food")
// //             }
// //         }
    
// // }

// // Sample Input 0

// // 5
// // E 2
// // D
// // D
// // E 3
// // D
// // Sample Output 0

// // 1
// // 2 0
// // -1 0
// // 1
// // 3 0
// // input = input.split("\n")
// //     var lenth = Number(input.shift())
    
// //     // console.log(input)
// //     var ar = []
    
// //     for(var i=0; i<lenth; i++){
// //         var stack = input[i].split(" ")
// //         if(stack[0]=="E"){
// //             ar.push(stack[1])
// //             console.log(ar.length)
// //         }
// //         if(stack[0]=="D"){
// //             if(ar.length==0){
// //                 console.log("-1"+" "+ar.length)
// //             }else{
// //                 var deque = ar.shift()
// //                 console.log(deque + " "+ar.length)
// //             }
            
// //         }
// //     }
    
// //     // sort
// //     Sample Input 0

// // 5
// // 3 5 0 9 8
// // Sample Output 0

// // 0 3 5 8 9

// // input = input.split("\n")
// // var len = Number(input.shift())
// // var ar = input[0].split(" ").map(function(ele){
// //     return Number(ele)
// // })
// var ar = [2,3,6,5,4,0]

// var minIndx;

// for(var i=0; i<ar.length; i++){
    
//     minIndx = i
//     for(var j=i+1; j<ar.length; j++){
        
//         if(ar[j]<ar[minIndx]){
//             minIndx = j
//         }
        
//     }
//     if(minIndx !== i){
//         var temp
//         temp = ar[minIndx]
//         ar[minIndx] = ar[i]
//         ar[i] = temp
//     }
    
// }
// console.log(ar.join(" "))


// // input = input.split("\n")
// //     var len = Number(input.shift())
    
// //     var ar = input[0].split(" ").map(function(ele){
// //         return Number(ele)
// //     })
// //     for(var i=0; i<ar.length-1; i++){
        
// //         for(var j=0; j<ar.length-i-1; j++){
            
// //             if(ar[j]>ar[j+1]){
// //                 var temp;
// //                 temp = ar[j]
// //                 ar[j] = ar[j+1]
// //                 ar[j+1] = temp
                
// //             }
// //         }
// //     }
// //     console.log(ar.join(" "))

// var input = [4,88,22,63,89]

// for(var i=0; i<input.length-1;i++){

//     for(var j=0;j<input.length-i-1;j++){
//         if(input[j]>input[j+1]){
//             var temp
//             temp = input[j+1]
//             input[j+1]= input[j]
//             input[j]  = temp
//         }
//     }
// }
// console.log(input)


// //     Sample Input 0

// // 5 6
// // 12 18 17 65 46
// // Sample Output 0

// // 12 18 46 17 65
// // var input = input.split("\n")
// // input.pop()
// // var ar1 = input[0].split(" ")
// // var number = Number(ar1[1])

// // var ar = input[1].split(" ")

// // // console.log(ar)
// var number = 6
// var ar = [12,18,17,65,46]

// for(var i=0; i<ar.length-1; i++){
    
//     for(var j=0; j<ar.length-i-1; j++){
//         if((Number(ar[j])%number) > (Number(ar[j+1])%number)){
//             var temp;
//             temp = ar[j]
//             ar[j] = ar[j+1]
//             ar[j+1] = temp
            
//         }
//     }
// }
// console.log(ar.join(" "))
// var input = [2,5,4,0,9,7]

// var min

// for(var i=0; i<input.length; i++){

//      min = i
//     for(j=i+1; j<input.length; j++){
//         if(input[j]<input[min]){
//             min = j
//         }

//     }
//     if(min !==i){
//         var temp
//         temp = input[min]
//         input[min]= input[i]
//         input[i]=temp

//     }

// }
// console.log(input)




// // Sample Input 0

// // 8
// // 39 27 11 4 24 32 32 1
// // Sample Output 0

// // -1 -1 -1 -1 4 24 24 -1
// // input = input.split("\n")
// // var lenth = Number(input.shift())
// // var ar = input[0].split(" ").map(function(ele){
// //     return Number(ele)
// // })

// // var ar1 = []
// // var stack = []

// // if(ar.length>0){
// //     ar1.push(-1)
// //     stack.push(ar[0])
// // }
// // for(var i=1; i<ar.length; i++){
    
// //    while(stack[stack.length-1]>=ar[i] ){
// //        stack.pop()
      
// //    }
// //     if(stack.length==0){
// //         ar1.push(-1)
// //         stack.push(ar[i])
// //     }else{
// //         ar1.push(stack[stack.length-1])
// //         stack.push(ar[i])
        
// //     }
// // }



// // console.log(ar1.join(" "))

// // Sample Input 0

// 11
// PUSH 5
// PUSH 7
// PUSH 3
// PUSH 8
// PUSH 10
// MIN
// POP
// POP
// MIN
// POP
// MIN
// Sample Output 0

// var input = "5\nPUSH 2\nPUSH 4\nPUSH 10\nPOP\nMIN\nPOP\nMIN\nPUSH 0\nMIN"
// input = input.split("\n")
    
// var len = Number(input.shift())
// var ar = []
// var min = 0
// // console.log(input)
// for(var i=0; i<input.length; i++){
        
//         var stack = input[i].split(" ")
//         // console.log(stack)
//         if(stack[0]== "PUSH"){
//             if(ar.length==0){
//                 min = stack[1]
//                 // console.log(min)
//                 ar.push([stack[1],min])
//             }else{
//                 if(stack[1]<min){
//                     min = stack[1]
//                     ar.push([stack[1],min])
//                 }else{
//                     ar.push([stack[1],min])
//                 }
//             }
//          }

//         if(stack[0] == "POP"){
//             if(ar.length == 0){
//                 console.log("EMPTY")
//             }else{
//                 ar.pop()
//                 if(ar.length==0){
                
//                 }else{
//                     min = ar[ar.length-1][1]
//                 }
                
//             }
//         }
      
//         if(stack[0] == "MIN"){
//         if(ar.length == 0){
//             console.log("EMPTY")
//         }else{
            
//             console.log(ar)
//             console.log(min)
           
//         }
//         }
//         }
// //         Sample Input 0

// // 5
// // E 1 1
// // E 2 1
// // E 1 2
// // D
// // D
// // Sample Output 0

// // 1 1
// // 1 2
// // input = input.split("\n")
// //     var lenth = Number(input[0])
// //      var clubMain = []
// //     var club1 = [], club2 =[], club3 =[], club4 = []
    
// //     for(var i=1; i<=lenth; i++){
        
// //          ar = input[i].split(" ")
// //             // console.log(ar)
// //         if(ar[0]=="E"){
// //             enqueue(ar[1],ar[2])
// //         }
// //         if(ar[0]=="D"){
            
// //         if(clubMain.length == 0){
// //             console.log("undefined")
// //             continue;
// //         }
                
// //             // console.log("dequeue")
// //             dequeue()
// //         }
        
// //     }
    
    
   
    
   
// //     function enqueue(club,roll){
        
        
// //         switch(club){
// //             case "1":
// //             if(club1.length==0)clubMain.push(club)
// //             club1.push(roll);
// //             break;
            
// //             case "2":
// //             if(club2.length ==0)
// //             clubMain.push(club)
// //             club2.push(roll)
// //             break;
            
// //             case "3":
// //             if(club3.length ==0)
// //             clubMain.push(club)
// //             club3.push(roll)
// //             break;
            
// //             case "4":
// //             if(club4.length == 0)
// //             clubMain.push(club)
// //             club4.push(roll)
// //             break;
            
// //         }
        
        
        
// //     }
// //     function dequeue(){
// //         var ele  = clubMain[0]
// //         // console.log(ele)
// //         switch(ele){
               
// //             case "1":
// //             var popEle = club1.shift()
// //             if(club1.length == 0)
// //             clubMain.shift()
// //             console.log(ele+ " "+popEle)
// //             break;
                
// //             case "2":
// //             var popEle = club2.shift()
// //             if(club2.length == 0)
// //             clubMain.shift()
// //             console.log(ele+ " "+popEle)
// //             break;
            
// //             case "3":
// //             var popEle = club3.shift()
// //             if(club3.length == 0)
// //             clubMain.shift()
// //             console.log(ele+ " "+popEle)
// //             break;
            
// //             case "4":
// //             var popEle = club4.shift()
// //             if(club4.length == 0) 
// //             clubMain.shift()
// //             console.log(ele+ " "+popEle)
// //             break;
                
                
                
// //                }
        
        
// //     }

// // Sample Input 0

// // 5
// // 5 1 2 4 3 
// // 0
// // Sample Output 0

// // yes

// // Sample Input 0

// // 3
// // {([])}
// // ()
// // ([]
// // Sample Output 0

// // balanced
// // balanced
// // not balanced


// var input = "100 120"

// var ans = "1 1 1 1 3"
// // input = input.split("\n")
// // var lenth = Number(input.shift())
// var ar = input.split(" ").map(function(ele){
//     return Number(ele)
// })

// var ar1 = []
// var stack = []



// // console.log(ar)
// if(ar.length>0){
//     ar1.push(1)
//     stack.push([ar[0],1])
// }
// console.log(stack[stack.length-1][0])
// for(var i=1; i<ar.length; i++){
  
//     while(stack[stack.length-1][0]<ar[i] ){
        
//                stack.pop()
              
//            }
//             if(stack.length==0){
//                 ar1.push(i+1)
//                 stack.push([ar[i],i+1])
//             }else{
//                 ar1.push(i+1 -(stack[stack.length-1][1]))
//                 stack.push([ar[i],i+1])
//                 console.log(stack[stack.length-1][1])
//             }

// }
// // console.log(ar1)

// var input = "[]{}()"
// input = input.split("")
// // console.log(input)
// var stack = []

// function balanced(input){
//     for(var i=0; i<input.length; i++){
//         if(input[i]=="("|| input[i]=="{"|| input[i]=="["){
//             stack.push(input[i])
//         }if(input[i]==")" || input[i]=="}" || input[i]=="]"){
//             if(stack.length==0){
//                 return false
//             }else{
//                var ele =  stack.pop()
//                if(!isMatch(ele,input[i])){
//                    return false
//                }
//             }
//         }
//     }
//     if (!stack.length==0){
//         return false
//     }else{
//         return true
//     }
// }
// function isMatch(x,y){
//     var str = x+y
//     console.log(str)
//     if(str="()"||"{}"||"[]"){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(balanced(input)
