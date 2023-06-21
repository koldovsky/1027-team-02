// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
    let getWatter= Math.floor(time * 0.5);
    return getWatter ;
  }

  //https://www.codewars.com/users/RomanButs/completed_solutions

  function stringToArray(string) {
    var words = string.split(" ");
    return words;
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript


function min(arr, toReturn) {
  switch (toReturn) {
    case "value":
      return Math.min(...arr);
    case "index":
      return arr.indexOf(Math.min(...arr));
  }
}

//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  queue.reverse();
  for (var i = 0; i <= queue.length - 1; i++) {
    if (queue[i + 1] === "wolf")
      return `Oi! Sheep number ${i + 1}! You are about to be eaten by a wolf!`;
  
    if (queue[i] === "wolf")
      return "Pls go away and stop eating my sheep";
  }
}

// Beginner - Lost Without a Map https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

function maps(x) {
  var x1 = new Array();
  for (var i = 0; i <= x.length - 1; i++) {
    x1[i] = x[i] * 2;
  }
  return x1;
}

//Find the first non-consecutive number https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1 && i + 1 <= arr.length - 1) return arr[i + 1];
  }
  return null;
}

