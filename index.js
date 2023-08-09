// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    return [...cats, name]
}

function removeFirstCat(){
    let copy = [...cats];
    copy.shift();
    return copy;
}

function prependCat(name){
    return [name, ...cats]
}

function removeLastCat(){
    let copy = [...cats];
    copy.pop();
    return copy;
}