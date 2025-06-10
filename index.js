const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyPrependCat(name) {
  cats.unshift(name)
}

(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyRemoveLastCat(name) {
  cats.pop(name)
}

(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyRemoveFirstCat(name) {
  cats.shift(name)
}

(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function appendCat(name){
  return[...cats, name];

}

(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function prependCat(name) {
  return[name, ...cats]
}

(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function removeLastCat(name) {
  return cats.slice(0, -1);

}

(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});


function removeFirstCat(name) {
  return cats.slice(1);
}











