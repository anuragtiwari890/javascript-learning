// eslint-disable-next-line @typescript-eslint/no-var-requires
const { exec } = require('child_process');

exec('pwd', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: = ${stdout}`);
  if (stderr != '') {
    console.error(`stderr: ${stderr}`);
  }
});
