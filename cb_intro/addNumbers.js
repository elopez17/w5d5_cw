const readline = require('readline');
reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsleft, cb){
  
  if (numsleft > 0) {
    reader.question('Give me a number: ', function (res) {
    console.log(`You replied ${res}.`);
    res = parseInt(res);
    sum += res;
    console.log(sum);
    return addNumbers(sum, (numsleft - 1), cb);
  });
  } else {
    reader.close();
    cb(sum);
  }

  
  
}

addNumbers(0, 5, sum => console.log(`Total Sum: ${sum}`));