/**
 * Created by beebe on 3/6/2017.
 */
/*----- Today March 6th, 2017 -----
 Brett Gardiner [9:19 AM]
 ```
 Consider an array of sheep where some sheep
 may be missing from their place. We need a
 function that counts the number of sheep present
 in the array (true means present).

 [9:19]
 ```for example:
 arr = [true,  true,  true,  false,
 true,  true,  true,  true ,
 true,  false, true,  false,
 true,  false, false, true ,
 true,  true,  true,  true ,
 false, false, true,  true]
 The correct answer would be 17.```*/
/*
function countSheep(arr){
    var count=0;
    for (var i =0;i<arr.length;i++){
        if (arr[i]===true){
            count++
        }
    }
    return count;
}
console.log(countSheep([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));





 ```Make function that takes a string with parens, brackets, braces, carrot({[]})<> checks to see if they close
 "(string{string})" --true // "([string]}" -- false```*/
/*

function params(str){
    var regexleft = /([(<\[\{])+/g
    var regexright = /([)>\]\}])+/g
    str.split
}
console.log(params("(string)()"));
*/
