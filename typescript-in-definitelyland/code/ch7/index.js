"use strict";
readFileA('./test.txt', data => {
    console.log(data.toUpperCase());
});
readFileB('./test.txt', data => {
    if (!data) {
        data = 'not found';
    }
    console.log(data.toUpperCase());
});
readFileA('./test.txt', () => {
    console.log('done');
});
readFileB('./test.txt', () => {
    console.log('done');
});
