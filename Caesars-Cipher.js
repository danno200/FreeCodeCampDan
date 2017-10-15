/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.
this code writes a function which takes a ROT13 encoded string as input and returns a decoded string. */

function rot13(str) { 
  var splitted = str.split("");
  var arrayLength = splitted.length;
  
     var semi = [];
for (var i = 0; i < arrayLength; i++) 
     { 
     semi.push(splitted[i].charCodeAt(0));      

  if (semi[i] >= 65 && semi[i] <= 77) 
  {
    semi[i] += 13;
  }

  else if (semi[i] >= 78 && semi[i] <= 90) 
  {
    semi[i] -= 13; 
  }
     }
  
  var semiLength = semi.length;
  
  var final = '';
   return String.fromCharCode.apply(String, semi);

}
// Change the inputs below to test
rot13("SERR PBQR PNZC");
