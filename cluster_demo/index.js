import express from 'express';
import os from 'os';

const port = 3000;
const app = express();

console.log(`worker pid=${process.pid}`);
const cpuCount = os.cpus().length;

app.get('/heavy', (req, res) => {
  let total = 0;
  for(let i = 0; i < 5000000; i++) {
    total++;
  }
  console.log("Processing is completed");
  res.send(`The result of the CPU intensive task is ${total}\n cpu count=${cpuCount}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
