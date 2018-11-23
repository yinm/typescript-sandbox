"use strict";
async function main() {
    const sub = await Promise.resolve().then(() => require('./sub'));
    console.log(sub.hello());
}
function mainAnother() {
    Promise.resolve().then(() => require('./sub')).then(sub => {
        console.log(sub.hello());
    });
}
main();
mainAnother();
