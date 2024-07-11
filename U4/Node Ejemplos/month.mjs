// month.mjs
import fs from 'fs';
import { monthFromDate } from './month-from-date.mjs';

const dateString = process.argv[2] ?? null;
console.log(monthFromDate(dateString));
