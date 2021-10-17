const validateId = require ('../src/validateId'); //Que serà en modul que crearem

describe('validació exercici 1.2',() => {
 /* test('Retorna false si la id queda buida', () =>{
    expect(validateId('').toBe(false))
   // console.log(test);
})  */
test('Retorna true si a la id hi ha un número', () =>{
    expect(validateId('654')).toBe(true)
    console.log(test);
})
test('Retorna false si a la id hi ha lletres', () =>{
    expect(validateId('ada')).toBe(false)
   // console.log(test);
})
});