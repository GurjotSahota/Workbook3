"use strict";

const now = new Date();

const day = now.getDate();
const month = now.toLocaleString('default', { month: 'long' });
const year = now.getFullYear();
const weekday = now.toLocaleString('default', { weekday: 'long' });

console.log(`${day}-${month}-${year} (${weekday})`);
