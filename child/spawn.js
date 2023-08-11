// eslint-disable-next-line @typescript-eslint/no-var-requires
const { spawn } = require('child_process');

const child = spawn('node', ['print-name.js']);

child.on('exit', function (code, signal) {
  console.log(
    'child process exited with ' + `code ${code} and signal ${signal} and process id is - ${process.pid}`,
  );
});

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`child stderr:\n${data}`);
});
