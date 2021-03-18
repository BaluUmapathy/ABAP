/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    var num = Number.MAX_SAFE_INTEGER;
    var ret = [];
    
        
    for(var i = 0; i < digits.length; i++){
        
        num = parseInt(( num * 10 )) + parseInt(digits[i]);
    }
    
    num = parseInt(num) + parseInt(1);
    
  while( num > 0 ){
  
        ret.unshift( num % 10 );
        num = parseInt(num / 10);
        
    }
    
    return ret;

};

var num = plusOne([4,3,2,1]);

console.table(num);