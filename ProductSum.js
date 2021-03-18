

var prodSum = function(arr,num){
    
    var result = 0;
    
    for(var i = 0; i < arr.length; i++){
        
        if (Array.isArray(arr[i])){
            result = result + prodSum(arr[i],num+1);
        } else{
          result = result + arr[i];
        }
    }
    
    return result * num;
    
}

console.log(prodSum([5,2,[7,-1],3,[6,[-13,8],4]],1));

