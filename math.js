// export default
// 1 (для одного)
// const sum = (a, b) => a + b;

// export default sum; // коли експортується з файліка щось одне (компонент)

// 2(для кількох)
const sum = (a, b) => a + b;
const mult = (a, b) => a * b;

// export default { sum: sum, mult: mult };
export default { sum, mult }; //якщо одноімена властивість, то можна повтор опустити
// ---------------------------------------------------
// named export
// 1

export const sum = (a, b) => a + b;
export const mult = (a, b) => a * b;
export const PI = 3.14;
