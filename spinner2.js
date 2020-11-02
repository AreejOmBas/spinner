
const spinners = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   '];
let index = 0;


for (let char of spinners){

  setTimeout(function () {
    process.stdout.write(char);

  }, (index++) * 200);

}

setTimeout(console.log, (index++) * 200, '\n');
