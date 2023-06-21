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
  var result;
  for (var i = 0; i <= queue.length - 1; i++) {
    console.log(i);
    if (queue[i + 1] === "wolf") {
      return `Oi! Sheep number ${i + 1}! You are about to be eaten by a wolf!`;
    }
    if (queue[i] === "wolf") {
      return "Pls go away and stop eating my sheep";
    }
  }
}
