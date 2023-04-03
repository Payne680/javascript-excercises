// const i = 0;

//     for (let i = 0; i < 100; i++) {
//          if(i % 5 == 0) {
//             console.log("Fizz");
//         } else if (i % 3 == 0){
//             console.log("Buzz");
//         }
//         console.log(i)
//     }

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if(i % 2 == 0 && j % 2 !==0) {
        process.stdout.write('#')
      }
      if(i % 2 !== 0 && j % 2 ==0) {
        process.stdout.write('#')
      }
      process.stdout.write(' ')
    }
    console.log('');
  }