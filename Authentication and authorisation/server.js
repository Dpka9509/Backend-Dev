import express from 'express';
const app = express();

import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

console.log(salt);
const hash = await bcrypt.hash('123456', salt);
console.log(hash);

const valid = await bcrypt.compare('123456', hash);
console.log(valid);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});