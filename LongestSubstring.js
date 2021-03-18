/*

Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0

*/

var str = "tanuja";// prompt("Please enter a string"); //"promise";
console.log(str.substr(2,1));

var lstr = str.substr(0,1); //a
var tstr = "";
var lv_norepeat_flag = true;

for(var i = 0; i < str.length; i++){
    
    var j = i + 1;
    
    tstr = str.substr(i,1);
    
    while( j < str.length){

        if(! tstr.includes(str.substr(j,1) )  ) {

          tstr = tstr + str.substr(j,1);

        } else {
            if (tstr.length > lstr.length ){
                lstr = tstr;
            }
            lv_norepeat_flag = false;
            break;
        }
        
//         if(!lstr.includes(str.substr(j,1))){
            
//             if(tstr == ""){
//               lstr =  tstr = lstr +  (str.substr(j,1)); //ab
//             } else {
//                 tstr = tstr +  (str.substr(j,1)); //abc
//             }
            
//         } else {
            
//             if (tstr.length > lstr.length){
//               lstr = tstr;
//               tstr = "";
//           }
//             break;
//         }
        
        j++;
        
//        if
    }
    
    i = j;
//   When string doesn't have any repetitions
    if (lv_norepeat_flag === true){
        lstr = tstr;
        break;
    }
    
}

if (tstr.length > lstr.length ){
    lstr = tstr;
}

alert(lstr);