// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fork } = require('child_process');
const ls = fork('./fork-child.js');

let count = 0;
//exiting the thread when child process ended
ls.on('exit', (code) => {
  console.log(`child_process exited with code ${code} and process id is - ${process.pid}`);
});

ls.on('message', (msg) => {
  console.log(`PARENT: message from child process is ${msg} and process id is - ${process.pid}`);
  count = parseInt(msg) + 1;
  console.log('PARENT: +1 from parent');
  ls.send(count);
});

// fork vs worker thread - https://github.com/nodejs/help/issues/1920#issuecomment-509090321
