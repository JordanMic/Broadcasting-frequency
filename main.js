//wybór pliku i wcztanie:
let openFile = function(event){
    let input = event.target;
    let reader = newFileReader();

    reader.readAsText(input.tiles[0]);

    reader.onload = function(){
        let text = reader.result;
        parser = new DOMParser();
        gxl = parser.parseFromString(text, "text/xml");
    }
}

//losowanie x y i r
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

//wybor liczby nadajników i stworzenie tablicy z nadajnikami
let transmitersNumber = 3;
let transmiters = new Array();

// wrzucanie nadajników do tablicy
for (let i = 0; i < transmitersNumber; i++) {
    transmiters[i] = new Transmiter(rand(1, 20), rand(1, 20), rand(1, 10));
}

for (i = 0; i < transmitersNumber; i++) {
    for (let j = 0; j < transmitersNumber; j++) {

    }
}
console.log(transmiters);
