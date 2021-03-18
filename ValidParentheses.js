var isValid = function(s) {
    if (s === null || s.length <= 0) return true;
    var cArr = s.split('');
    var stack = [];
    
    for ( var i = 0; i <= cArr.length; i++) {
        
        var c = cArr[i];
        
        if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (c === '(') stack.push(')');
        else if (stack.length === 0 || c !== stack.pop()) return false;
    }
    if (stack.length === 0) return true;
    return false;
};

var result = isValid("{[]()}()()");

if ( result ){
    alert("Valid Sequence");
} else {
    alert("Invalid Sequence");
}