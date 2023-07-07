// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execFile } = require('child_process');

// Executes the exec.js file
execFile('node', ['print-name.js'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  } else if (stderr) {
    console.log(stderr);
  }
  console.log(stdout);
});
