let box = {
    height: 10,
    width: 20
};

let style = {
    color: 'Red',
    borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox);

let amount = 12,
    volume = 15;
console.log(Object.is(amount, volume));


