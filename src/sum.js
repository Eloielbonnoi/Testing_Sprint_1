//Si poso tots els moduls en un mateix file, no funciona. 

function sum(a, b) {
  return a + b;
}
module.exports = sum;  //això permet exportar la funció per ser testada

/*
function res(c, d) {
  return c - d;
}
module.exports = res;

function div(e, f) {
  return e / f;
}
module.exports = div;

function mul(g, h) {
  return g * h;
}
module.exports = mul; */


/* "scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}, */