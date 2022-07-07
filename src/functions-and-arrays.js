// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
  if(num1>num2){
    return num1;
  }
  else{
    return num2;
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  if(words.length==0){
    return null;
  }  
  else if(words.length==1){
    return words[0];
  }
  else if(words.length==2){
    if(words[0].length==words[1].length){
      return words[0];
    }
  }
  else if(words.length>2){
    for(i=0;i<words.length;i++){      
      if(words[0].length<words[i].length){
        words[0] = words[i];
      }   
    }
    return words[0];
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  if(numbers.length == 0){
    return 0;
  }
  else if(numbers.length===1){
    return numbers[0]
  }
  else{
    var count=0
    var sum=0
    for(let i=0;i<numbers.length;i++){
      if(numbers[i]===0){
        count ++
      }
    }
    if(count===numbers.length){
      return 0
    }
    for(let i=0;i<numbers.length;i++){
      sum+=numbers[i]
    }
    return sum
  }
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg){
  if (numbersAvg.length===0){
    return null
  }
  
  else {
    var len = numbersAvg.length
    var sum=0
    for(let i =0 ;i<numbersAvg.length;i++){
        sum = sum + numbersAvg[i]
    }
    var avg =sum / len
    return avg
  }
}
function add(numbers){  
   let sum=0;
   for(i=0;i<numbers.length;i++){
     if(typeof numbers[i]=='string'){      
         sum = sum + numbers[i].length;    
     } 
     else if(numbers[i]==true){
       sum = sum+1;
     }
     else if(numbers[i]==false){
       sum = sum +0;
     }
     else if(typeof numbers[i]==="number"){      
         sum = sum + numbers[i];      
     }    
     else throw Error("Unsupported data type sir or ma'am");
   }      
   return sum; 
 }


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  
  if (wordsArr.length===0){
    return null
  }
  
  else {
    var len = wordsArr.length
    var sum=0
    for(let i =0 ;i<wordsArr.length;i++){
        sum = sum + wordsArr[i].length
    }
    var avg =sum / len
    return avg
  }
}

function avg(arr){
  if(arr.length == 0){
    return null;
  }
  let length = arr.length;
  let sum=0;
  for(let i=0;i<length;i++){
    if(typeof arr[i]==="number"){
      sum+=arr[i];
    }
    else if(typeof arr[i]=='string'){      
      sum = sum + arr[i].length;    
    }
    else if(arr[i]==true){
      sum+=1;
    }
  }
  let average = parseFloat((sum/length).toFixed(2));
  return average;
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique){
  if(wordsUnique.length===0){
    return null;
  }
  let unique=[]
  for(let i=0;i<wordsUnique.length;i++){
    if(unique.indexOf(wordsUnique[i])===-1){
      unique.push(wordsUnique[i]);
    }
  }
  return unique;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,search){
  if(wordsFind.length===0){
    return null;
  }
  for(let i=0;i<wordsFind.length;i++){
    if(wordsFind[i]===search){
      return true;
    }
  }
  return false;
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount,word){
  if(wordsCount.length===0){
    return 0;
  }
  let count=0;
  for(let i=0;i<wordsCount.length;i++){
    if(wordsCount[i]==word){
      count+=1;
    }
  }
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix){
  let f=1;
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
      if(matrix[i][j]!==1){
        f=0;
        break;
      }
      else{
        continue;
      }
    }
  }
  if(f==1){
    return 1;
  }
  else{
    return 0;
  }
}