
var input = "All-convoYs-9-be:Alert1.\n4"

input =  input.split("\n")
var k = Number(input[1])
var ar1 = input[0].split("")
var str = ""

var ar =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

for(var i=0; i<ar1.length;i++){

    if(ar1[i]=="A"){
        str+= "E"
    }
    if(ar1[i]=="Y"){
        str+= "C"
    }
    if(ar1[i]=="9"){
        str+= "3"
    }
    if(ar1[i]==":" || ar1[i]=="-" || ar1[i]=="," || ar1[i]=="," || ar1[i]=="."){
        str+=ar1[i]
    }
    if(ar1[i]=="1" || ar1[i]=="2" || ar1[i]=="3" || ar1[i]=="4" || ar1[i]=="5" || ar1[i]=="6" || ar1[i]=="7" ||ar1[i]=="8" ||ar1[i]=="0"){
        str+=Number(ar1[i])+4
    }

    else{
        for(var j=0; j<ar.length; j++){
            if(ar1[i]==ar[j]){
                str+= ar[j+k]
            }
        }
    }

}
console.log(str)