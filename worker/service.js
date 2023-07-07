import { parentPort } from 'worker_threads';

let cnt = 0;
for (let i = 0; i < 10e8; i += 1) {
  cnt += 1;
}
parentPort.postMessage({ data: cnt });
