/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

var nums = nums = [2,7,11,15], 
    target = 17;

function TwoSum(nums,target){
    var aIndices = [];
    
    for(var i = 0; i < nums.length; i++){
        
        var rPtr = nums.length -1 ;
        
        while (rPtr > i){
            
            if( (nums[i] + nums[rPtr]) == target ){
                
                aIndices.push(i);
                aIndices.push(rPtr);
                break;
            } else{
                rPtr--;
            }
            
        }
        
        
        if (aIndices.length > 0){
            break;
        }
        
    }
    
    return aIndices;
}

var result = TwoSum(nums,target);

console.table(result);
