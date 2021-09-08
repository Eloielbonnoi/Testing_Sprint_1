const validateId = require ('./validateId'); //Que serà en modul que crearem


test('Retorna false si la id queda buida', () =>{
    expect(validateId('').toBe(false))
   // console.log(test);
})

test('Retorna true si a la id hi ha un número', () =>{
    expect(validateId('456').toBe(true))
   // console.log(test);
})