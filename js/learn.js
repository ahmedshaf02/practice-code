
// console.log("hello writing js code")
/*
types of objects
1. user defined object- which is prepare by programmer
2. native object -js inbuilt object Math,String Number Boolean Object Date Function Array RegExp Error
3. host object - not support by js but support bu host environment like window
4. document object - dom it is accessed using browser by document property of  the window object like window.document

how to make object
syntax - var objectname  = {};

*/
var fees = {};
fees["name1"] = 100;
fees["name2"] = 200;
fees["name3"] = 300;
fees.name4 = 400;
fees.name5 = 500;
fees.name6 = 600;
fees["shaf awesome"] = 1000;
fees.shaf = 2000;

function sum (){
    return (100 + 200 + 300)
}
// fees.shaf awesome = 3000; not syntax error
fees["total"] = function (){ return (name4 + name5 + name6)}
fees.total_new = function (){return(100+200+300);}
fees["total1"] = sum;
fees.total1new = sum;
fees.name7 = 700;
fees["name8"] = 800;
// fees.name 9 = 900;
fees["name 9"] = 900;
fees.total = function(){ return (100 +200);};
// console.log(fees)

var fees1 = {"num1":100,
             "num2":200,
             "num3": 300,
              "num4":400,
               "num5":500,
                 "total": function(){return (100+200)}
                }
var fees2 = {
                numb1: 100,
                numb2: 200,
                numb3: 300,
                "numb 4": 400,
                total: sum

            }
// console.log(fees2.total())
/*
object using object constructor
 */
var fees3 = new Object();
fees3["name1"] = 100;
fees3["name2"] = 200;
fees3["name3"] = 300;
fees3.name4 = 400;
fees3.name5 = 500;
fees3["total name"] = function(){return (100+200)}
fees3.total = function (){return(100+200)}
fees3["name 6"] = 600;

// console.log(fees3.name2)
// console.log(fees3["total"]())

var fruit = {};

fruit.name1 = "apple";
fruit.name2 = "banana"
fruit["name3"] = "kiwi"
fruit.name4 = "mango"
fruit["name5"] = "watermelon"
// fruit.show = function (){return(100+200)}
// console.log(fruit.show())
// delete then objectname_propertyname to delete
delete fruit.name5
delete fruit.name4
delete fruit.name3
// console.log(fruit)
//factory function -- a function which returns object-- help in making object instances

function mobile(model_number,model_color){

    return{
        model: model_number,
        color:model_color,
        price: function(){
            return("price is 2000rs")
        },
       display: function (){return("display screen is 5'inch")}
    }

}
var redmi = mobile("note 4","black")//object instance
var realme = mobile("smart 1","golden")//object instance
var pixel = mobile("pixel2", "darkgray")//object instance using factory function

// console.log(pixel.price())
// factory function to make object instances
function employer(employee1,employee2){

    return{
        manager: employee1,
        executive: employee2,
        head: function (){return ("he is a head of employees")}
    }
};
var acs = employer("name","name1");
// console.log(acs.head()
// object constructor to make object instances
function Mobile1(model_color,model_num){

    this.model = model_num;
    this.color = model_color;
    this.price = function (){return(this.model + " price is 2000rs")}
};
var redmi = new Mobile1("note 4","black");
var realme = new Mobile1("smartone","darkgray")
// console.log(redmi.color)

// if (typeof redmi.color !== "undefined")
// if ("color" in redmi)
if (redmi.hasOwnProperty("color")){
    // console.log("available")
}
else{
    // console.log("not available")
}
for (var i in redmi){
    if (typeof redmi[i] == "function"){
        // console.log(redmi[i])
    }
}
// console.log(Object.keys(redmi))
for (var i in realme){
    // console.log(i +" "+realme[i])
}
// console.log(Object.keys(realme))

// object literal
// var fees = {};
// fees["name1"] = 200;
// object literals and declare and initialize
// var fees = {name1:200,}
// object constructor
// var fees = new Object();

// -----can make many object------
// factory function
// function mobile (){return{model:"newbrand",}} 
// var feesobj1 = mobile();

// constructor function
// function Mobile(){ this.model= "brandname";}
// var feesobj1 = new Mobile();

// using class constructor 

var Mobile = function (brand_name,model_name,sprice) {
            this.brand = brand_name;
            this.model = model_name;
            this.color = "black";
            this.price = 2000;
            this.sprice = sprice
            this.sellingprice = function (){return(this.price + this.sprice)}    
            this.data = function(){return("model no "+ this.model+ "price "+this.sellingprice())}
}
var redmi = new Mobile("redmi","note 4", 2000)
var realme = new Mobile("realme","smartone",1000)
// console.log(realme.sprice)

var stu = ["name1","name2","name3"]
var a = 10, b =20, c =30;
var num = [a,b,c]
var name = [];
name[0] = "name1";
name[1] = "name2";
name[2] = "name2";
name[3] = "name4";
name[5] = 20;

// console.log(name[0])
var fees = [];
fees[0]= 10;
fees[1]= 20;
fees[2] = 30;

// console.log(fees)
// console.log(fees.length)
// delete fees[1]
// console.log(fees)
// console.log(fees.length)
// console.log(fees[1]=40)
// console.log(fees)

var fees = ["name1", "name2","name3","name4"]
var ln = fees.length
// for loop 
for (let i = 0; i<ln; i+=1){
    // console.log(i + " "+fees[i])
}
// foreach loop
fees.forEach(function(value,index){
    // console.log(value)
})

// for of loop
for (let value of fees){
    // console.log(value)
}

// var input = prompt("enter length in number")

var fees = new Array(2)
// console.log(fees.length)

for(let i = 0; i<=fees.length; i+=1){
    // fees[i] = prompt("please enter a name")
}

for (let i = 0;i<=fees.legnth; i+=1){
    // console.log(fees[i])
}
fees.forEach(function(value){
    console.log(value)
})
for (let value of fees){
    console.log(value)
}

// multidiamentional array
var fees = [[],[],[]]

fees[0][0] = "name1";
fees[0][1] = "name2";
fees[0][2] = "name3";
fees[1][0] = "fruit1";
fees[1][1] = "fruit2";
fees[1][2] = "fruit3";
fees[1][3] = "fruit4";
fees[2][0] = "number1";
fees[2][1] = "number2";
fees[2][2] = "number3"

// console.log(fees[1][3])

// var fees = [["name1","name2","name3"],["fruit1","fruit2","fruit3"],["number1","number2","number2"]]
// console.log(fees)
var fees = new Array(["name1","name2","name3"],["fruit1","fruit2","fruit3"],["number1","number2","number2"])

for (let i = 0; i<3; i+=1){
   
    for (let j = 0; j<3; j+=1){
     
        // console.log(fees[i][j])  
    }
    
}

// how to make multidiamentional array with out value
var fees = [[],[]]
// var fees = new Array([],[])

for (let i =0; i<2; i+=1){
    for (let j =0; j<3; j+=1){
        // console.log(fees[i][j])
    }
}
// how to make mltidimentional array with out value using no of row n cols 
// with out value multidiamentional  array using literals and array constructor

// var fees = [];
var rows = 2;
var cols = 3;
// using array constructor
var fees = new Array(rows)

for (let i = 0; i<rows; i+=1){
    // fees[i] = []
    fees[i] = new Array(cols)
}
// console.log(fees)
for (let i = 0; i<rows; i+=1){
    for(let j=0; j<cols; j+=1){
        // console.log(fees[i][j]+" " + i +" "+j)
    }
   
}
// taking input from user
// var fees = [];
var rows = 2;
var cols = 3;
// using array constructor
var fees = new Array(rows)

for (let i = 0; i<rows; i+=1){
    // fees[i] = []
    fees[i] = new Array(cols)
}
// console.log(fees)
// for input value
for (let i = 0; i<rows; i+=1){
    for(let j=0; j<cols; j+=1){
        // fees[i][j] = prompt("enter a name")
    }
   
}
// for displaying value
for (let i = 0; i<rows; i+=1){
    for (let j =0; j<cols; j+=1){
        // document.write(fees[i][j]+" "+i+ " "+j+ " | ")
    }
    // document.write("<br/>")
}
// array concat() method-- returns new string

// concate element to array
var brand  = ["name1","name2","name3"]
var new_brand = brand.concat("name4","name5","name6")
// console.log(new_brand)

// concat more than one array
var brand1 = ["fruit1","fruit2"]
var brand2 = ["fruit3","fruit4"]
var brand3 = ["fruit5","fruit6"]
var brand4 = brand1.concat(brand3,brand2)
// console.log(brand4)

// join method array----- returns new string
var brand  = ["name1","name2","name3"]
var brand_new = brand.join("")
// console.log(brand_new)
// console.log(brand)
// console.log(typeof(brand_new))

// reverse method array ---- affect array mean change it
var brand  = ["name1","name2","name3","name4","name5"]
 brand.reverse();
//  console.log(brand)

// slice method array--- returns new array ---last position not included
var brand  = ["name1","name2","name3","name4","name5"]
var brand_new = brand.slice(-4,-2)
// console.log(brand_new)

// toString method it is equal to join() with out argument
var brand  = ["name1","name2","name3","name4","name5"]
brand.toString()
// console.log(brand)


// Array.isArray method  return true or false 
var brand  = ["name1","name2","name3","name4","name5"]
var brand_new = Array.isArray(brand)
// console.log(brand_new) 

// array splice method ---it changes array
var brand  = ["name1","name2","name3","name4","name5"]
brand.splice(3,0,"name6", "name8")
// console.log(brand)

// indexOf method--- it takes negative value as well --returns -1 if not found
// lastIndexOf method find last position of specific element
var brand  = ["name1","name2","name3","name4","name5","name3"]
var s = brand.indexOf("name3",0)
// console.log(s)
var s = brand.lastIndexOf("name3",-2)
// console.log(s)

// fill method in array---it affects array--last position not incuded
var brand  = ["name1","name2","name3","name4","name5","name3"]
brand.fill("yups",1,3)
// console.log(brand)
// var new_arr = new Array(3).fill("yups",0,2)
// new_arr.fill("yups")
// console.log(brand)

// unshift method in array ---add element at the start and returns new array length
var brand  = ["name1","name2","name3","name4","name5","name3"]
var s = brand.unshift("name0","name6")
// console.log(brand)
// console.log(s)

// push method --elements add at the end and returns new length of the array
var brand  = ["name1","name2","name3","name4","name5","name3"]
var s = brand.push("name6")
// console.log(brand)
// console.log(s)

// shift method---it removes only first element  and returns removed element
var brand  = ["name1","name2","name3","name4","name5","name3"]
var r = brand.shift()
// console.log(brand)
// console.log(s)

// pop method removes only last element and returns removed element
var brand  = ["name1","name2","name3","name4","name5","name3"]
var r = brand.pop()
// console.log(brand)
// console.log(r)

// Boolean is a function and new Boolean constructor in js
// returns true or false 
var b  = Boolean()
var b  = Boolean(10)
var b  = Boolean(-10)
var b  = Boolean(0)
var b  = Boolean(-0)
var b  = Boolean("")
var b  = Boolean("js")
var b  = Boolean(undefined)
var b  = Boolean(null)
var b  = Boolean(true)
var b  = Boolean(false)
// console.log(b)

// string  and string constructor
var str = "hello string"
var str = 'hello string'
var str = `hello string`
var str1 = new String("hello string")
// console.log(typeof(str))
// console.log(typeof(str1))
var new_str = "hello "
var new_str1 = "string"
var new_str3 = "string"
var new_str2 = new_str.concat(new_str1," concat"," check"," ",new_str3)
//  console.log(new_str2)

// template literals or template string and strind interpolation
var str = "hello string"
var str1 = "string template"
var x = 2+3
function sum(x){return x = x+5 }
// `` used for multinine string
// console.log("hello string")
// console.log(`hello 
// string
// new string`)
// console.log(`${str} it is new ${sum(10)} easy to write string format`)
// tagged template or tagged function -- function called with out ()
// it is used for string
// ex. there are 5 movie tickets, each ticket rs 200, if you buy 5 tickets, you will
// get discount 50 on each ticket.
var ticket = 5
var bticket = 5
var pticket = 200
var dticket = 50
function tickets(theory, ...rest){ 
    if (rest[2]<5){
        rest[3] = 0;
        return `${theory[0]} ${rest[0]} ${theory[1]} ${rest[1]} 
        ${theory[2]} ${rest[2]} ${theory[3]} ${rest[3]} ${theory[4]} `}
    
    else{
        return `${theory[0]} ${rest[0]} ${theory[1]} ${rest[1]} 
        ${theory[2]} ${rest[2]} ${theory[3]} ${rest[3]} ${theory[4]}`
    }
    }
// console.log(tickets`there are ${ticket}movie tickets each ticket rs ${pticket}
// if you buy ${bticket} tickets you will get discount rs ${dticket} on each ticket`)

// string length method returns the length of string
var str = "it is a string to check"
var ln  = str.length
// console.log(ln)

// charAt method -------char at position 
var str = "it is a string to check"
// console.log(str.charAt(10))

// charCodeAt method -- returns unicode of the specific char
var str = "it is a string to check"
// console.log(str.charCodeAt(8))

// toUpperCase and toLowerCase method 
var str = "Hello String Here"
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// trim method to remove space from start and end only
var str = "       it is string to check    "
// console.log(str.trim())

// replace method specific string
var str = "hello string here and string"
// console.log(str.replace("string","replace"))
// console.log(str.replace(/string/i,"replace"))
// console.log(str.replace(/string/g,"replace"))
// console.log(str)

// split method split an array and returns splitted element in array
var str = "this/ is/ one string"
var str1 = str.split("/")
// console.log(str1)
// console.log(str1[0])

// indexOf method in string --to find index position of element
// search method is similar but advance and only first position of element returns
// slice method extract part of the element and returns new string--last element not included
var str = "this is a string to check"
// console.log(str.indexOf("is"))
// console.log(str.indexOf("is",3))
// console.log(str.search("ch"))
// console.log(str.slice(10,20))
// console.log(str.slice(-20,-10))
// substring method similar to slice but negative value are not allowed, and last element not included
var str = "it is string to check"
// console.log(str.substring(10))
// console.log(str.substring(10,20))
// substr method takes how many char to extract from which position
var str = "this is just string to check"
// console.log(str.substr(4,10))
// console.log(str.substr(-8,4))

// Number 
var a = 10;
var b = 2.34;
var c = 5e3;
var x = 34e-5
var y = new Number(100)
var z = "100"
// console.log(b)
// console.log(10+10)
// console.log(10+"10")
// console.log("10"+10)
// console.log(10+10+"10")
// console.log("10"+10+10)
// console.log(10-"2")
// console.log("hello"+10+10)
// console.log(10-"2"+"hello")
// console.log(5/0)
// console.log(-5/0)

// toSting method in Number return string and to know binary ,hex , oct of var
var number = 10;
// console.log(number.toString())
// console.log(number.toString(2))
// console.log(number.toString(8))
// console.log(number.toString(16))

//  toExponential method to show number in exponent as per value
var number = 1042.344252545
// console.log(number.toExponential())
// console.log(number.toExponential(2))
// console.log(number.toExponential(4))

// toFixed method retuns string and round of number
var number = 18.8765
// console.log(number.toFixed())
// console.log(number.toFixed(2))
// console.log(number.toFixed(3))
// console.log(number.toFixed(6))

// toPrecision method start counting from first digit, return full digit with out value
var number = 18.976
// console.log(number.toPrecision())
// console.log(number.toPrecision(1))
// console.log(number.toPrecision(2))
// console.log(number.toPrecision(3))

// Number.isInteger method returns true and false
// console.log(Number.isInteger())
// console.log(Number.isInteger(100))
// console.log(Number.isInteger(-100))
// console.log(Number.isInteger(10.2))
// console.log(Number.isInteger(100-20))
// console.log(Number.isInteger(100-20.2))
// console.log(Number.isInteger("20"))
// console.log(Number.isInteger("hello"))

// Number.isSafeInteger method return true or false if integer is Safe or not
// console.log(Number.isSafeInteger())
// console.log(Number.isSafeInteger(100))
// console.log(Number.isSafeInteger(-100))
// console.log(Number.isSafeInteger(10.2))
// console.log(Number.isSafeInteger(100-20))
// console.log(Number.isSafeInteger(100-20.2))
// console.log(Number.isSafeInteger("20"))
// console.log(Number.isSafeInteger("hello"))
// console.log(Number.isSafeInteger(2776314521351))

// global Number method Number parseFloat parseInt 
// Number method convert to number
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number(100))
// console.log(Number("100"))
// console.log(Number(new Date()))

// parseInt method two input second is redix what base to use 
// console.log(parseInt("20"))
// console.log(parseInt("10 20 30"))
// console.log(parseInt("10.23"))
// console.log(parseInt("10 years"))
// console.log(parseInt(" 10 "))
// console.log(parseInt("020"))
// console.log(parseInt("10", 8))
// console.log(parseInt("0x12"))

// parseFloat method
// console.log(parseFloat("20"))
// console.log(parseFloat("10 20 30"))
// console.log(parseFloat("10.23"))
// console.log(parseFloat("10 years"))
// console.log(parseFloat(" 10 "))
// console.log(parseFloat("020"))
// console.log(parseFloat("10.00"))

// math object  not allowed to make math object like new Math
// console.log(Math.PI)
// console.log(Math.sqrt(16))
// console.log(Math.abs(-64))
// console.log(Math.pow(2,3))
// console.log(Math.trunc(20.34))

// console.log(Math.min(23,43,54,67))
// console.log(Math.max(43,76,54,43,2))

// console.log(Math.floor(2.1))
// console.log(Math.floor(2.8))
// console.log(Math.floor(-2.2))
// console.log(Math.floor(-2.6))

// console.log(Math.ceil(2.6))
// console.log(Math.ceil(2.5))
// console.log(Math.ceil(2.4))
// console.log(Math.ceil(-2.6))
// console.log(Math.ceil(-2.4))
// console.log(Math.ceil(-0.2))
// console.log(Math.ceil(-1.6))


// console.log(Math.round(2.1))
// console.log(Math.round(2.4))
// console.log(Math.round(2.5))
// console.log(Math.round(2.6))
// console.log(Math.round(-2.1))
// console.log(Math.round(-4.6))
// console.log(Math.round(-4.5))
// console.log(Math.round(0.4))
// console.log(Math.round(0.6))

// date object -- it takes from client machine
// days of week and month start with 0 index
// new Date()
// new Date(milliseconds)
// new Date(year,month,day,hours,minutes,seconds,milliseconds)
// new Date(dateString)
var date = new Date()
// console.log(date)
var date = new Date("milliseconds")
var date = new Date(2020,6,4,9,32,42,0)
var date = new Date(2020,6,4,9,32,42)
var date = new Date(2020,6,4,9,32)
var date = new Date(2020,6,4,9)
var date = new Date(2020,6,4)
var date = new Date(2020,6)
console.log(date)

































