import {sum, product} from './mod1.js';

const a = 3;
const b = 7;

const resultSumEl = document.getElementById("resultSum");
const resultProductEl = document.getElementById("resultProduct");

const resultSum = sum(a, b);
const resultProduct = product(a, b);

resultSumEl.textContent = resultSum;
resultProductEl.textContent = resultProduct;

