import { Worker } from 'worker_threads';
var count = 0;

console.log('Start Program');

const runService = () => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./service.js', {});
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code != 0) {
        reject(new Error('Worker has stopped'));
      }
    });
  });
};

const run = async () => {
  const result = await runService();
  console.log(count++);
  console.log(result);
};

for (let i = 0; i < 50; i++) {
  run().catch((error) => console.log(error));
}

setTimeout(() => console.log('End Program'), 2000);
