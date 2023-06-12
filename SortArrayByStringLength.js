// June 12, 2023
// CodeWars: Sort Array By String Length (7 kyu challenge)
// Description: Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest

  for(let i = 0; i < array.length; i++){

    console.log(array[i]);
    
    for(let j = i + 1; j < array.length; j++){

      if(array[i].length > array[j].length){

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;

      }
      
    }
    
  }
  
  return array;
  
};

console.log(sortByLength(["Beg", "Life", "I", "To"]));


// ----- Best Practices ----- //

// function sortByLength(array) {
//   let sorted = [];
  
//   for (let i = 0; true; i++) {
//     for (let j = 0; j < array.length; j++) {
//       let string = array[j];
      
//       if (string.length === i) {
//         sorted.push(string);
//       }

//       if (sorted.length === array.length) {
//           return sorted;
//       }
//     }
//   }
// }

// function sortByLength (array) {
//   for (let i = 0; i < array.length - 1; i++) {
//   	for (let j = 0; j < (array.length - 1) - i; j++) {
//   		if (array[j].length > array[j + 1].length) {
//   			let temp = array[j];
//   			array[j] = array[j + 1];
//   			array[j + 1] = temp;
//   		}
//   	}
//   }
//   return array;
// };

// ----- Best Practices ----- //
