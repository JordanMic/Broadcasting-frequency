function rand(min, max) {
    min = parseInt(min, 10);
    max = parseInt(max, 10);

    if (min > max) {
        let tmp = min;
        min = max;
        max = tmp;
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Transmiter(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

let transmitersNumber = 3;
let transmiters = new Array();

for (let i = 0; i < transmitersNumber; i++) {
    transmiters[i] = new Transmiter(rand(1, 20), rand(1, 20), rand(1, 10));
}

for (i = 0; i < transmitersNumber; i++) {
    for (let j = 0; j < transmitersNumber; j++) {

    }
}
console.log(transmiters);
