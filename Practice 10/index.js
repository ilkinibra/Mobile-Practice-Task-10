//n-nin dəyişən olduğu n giriş massivini birləşdirən funksiya yaradın.
//Nümunələr
//concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]


function concatArrays() {
    const result = [];
    for (let i = 0; i < arguments.length; i++) {
      result.push(...arguments[i]);
    }
    return result;
  }
  
  console.log(concatArrays([1, 2, 3], [4, 5], [6, 7])); 
  console.log(concatArrays([1, 2], [3, 4]));
  console.log(concatArrays([4, 4, 4, 4, 4]));
  console.log(concatArrays());
