

function isValidSubsequence(array, sequence) {
  // Write your code here.
	var numFound = false;
    
	var isValidSubsequence = true;
    var lastIndex = 0;
    
	for( var i = 0; i < sequence.length; i++){
		
		for(var j = lastIndex; j < array.length; j++){
			
			if (sequence[i] == array[j]){
                lastIndex = j;
				numFound = true;
				break;
			}
			
		}
		
		if(!numFound){
			isValidSubsequence = false;
			break;
		}
        
        numFound = false;
	}
	
	return isValidSubsequence;
	
}

var result = isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]);

alert(result ? "Valid SubSeq" :"Not a Subseq");