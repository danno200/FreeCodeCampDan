
//Returning the remaining elements of an array after chopping off n elements from the head.


function chunkArrayInGroups(arr, size) {
 var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0)
    result.push(temp);
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);