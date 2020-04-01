
var input = "6\nrancho 45\nchatur 32\nraju 30\nfarhan 28\nvirus 32\njoy 45"

input = input.split("\n")
    var len = Number(input.shift())
    // console.log(input)
    
    var stack = []
    var ar = []
    
    for(var i=0; i<len; i++){
        
        var el = input[i].split(" ")
        // console.log(el)
        stack.push(el)
      
        
    }
    for(var i=0; i<stack.length; i++){
        
         for(var j=i+1; j<stack.length; j++){
            
           if(Number(stack[i][1])> Number(stack[j][1])){
               
               ar.push(stack[i])
           }
           
               
            
            
        }
    
        
        
    }
    console.log(ar)