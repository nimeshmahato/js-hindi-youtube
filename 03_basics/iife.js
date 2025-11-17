// immediately Invoked function expression (IIFE)

(function chai(){
    console.log(`DB Connected`)
})();

(() => {
    console.log(`DB Connected two `);
})()