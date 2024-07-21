//Write your solution here!

//appends a cat to the end of the cats array

const cats = ["Milo", "Otis", "Garfield"];

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');


function destructivelyAppendCat(catName){
    cats.push(catName);
   }

destructivelyAppendCat('Ralph');

console.log(cats);

//prepends a cat to the beginning of the cats array

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');


function destructivelyPrependCat(catName){
    cats.unshift(catName);
   }

destructivelyPrependCat('Bob');

console.log(cats);

//removes the last cat from the cats array

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');


function destructivelyRemoveLastCat() {
    cats.pop();
}

destructivelyRemoveLastCat()

console.log(cats);

//removes the first cat from the cats array

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');


function destructivelyRemoveFirstCat() {
    cats.shift();
}

destructivelyRemoveFirstCat();

console.log(cats);

//appends a cat to the catss array and returns a new array, leaving the cats array unchanged

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');


function appendCat(){
    const newCats = [...cats, 'Broom']
    return newCats;
}

const result = appendCat();

console.log(result);

//prepends a cat name to the cats array and returns a new array,leaving the cats array unchanged

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');


function prependCat(){
    const newCats = ["Arnold", ...cats];
    return newCats;
}
const resultForPrepend = prependCat();

console.log(resultForPrepend);

//remove the last cat in the cats array and returns a new array, leaving the cats array unchanged

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');


function removeLastCat(){
    const newCats = cats.slice(0,2);
    return newCats;
}

const resultforremoveLastCat = removeLastCat();

console.log(resultforremoveLastCat);

// removes the first cat from the cats array and returns anew array, leaving the cats array unchanged

function removeFirstCat(){
    const newCats =cats.slice(1);
    return newCats;
}
 
const resultforremoveFirstCat = removeFirstCat();

console.log(resultforremoveFirstCat);