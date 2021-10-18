const validateId = require ('../src/validateId'); //Que serà en modul que crearem

describe('validació id',() => {
it('Hauria de retornar true si a la id hi ha un número', () =>{
    expect(validateId('643')).toBe(true)
    console.log(test);
})
it('Hauria de retornar false si a la id hi ha lletres', () =>{
    expect(validateId('Ada')).toBe(false)
   // console.log(test);
})
it('Hauria de retornar false si la id queda buida', () =>{
  expect(validateId('')).toBe(false)
  console.log(test);
})
// it('Hauria de retornar false si a la id hi ha lletres i números', () =>{
//   expect(validateId('A3a')).toBe(false)
//  // console.log(test);
// })
});