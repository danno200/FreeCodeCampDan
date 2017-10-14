//Returns the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.


function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var arry = arr;
  var numm = num;
  
   arry.push(numm);
  
   

 
var final = arry.sort(function(a, b) {
  return a - b;
});
  
  return final.indexOf(num);

}

getIndexToIns([5, 3, 20, 3], 5);
