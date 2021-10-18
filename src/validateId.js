function validateId(id) {
    if (/0*[1-9][0-9]*/g.test(id)) return true //Permet string numèric inclós tipus '043'
    if (/[a-zA-Z]/g.test(id)) return false  //Evita id de lletres
    if (/^\s*$/g.test(id)) return false //Evita id buida
}  
module.exports = validateId  //Amb aquest comando exportem al projecte la funció com una callback


//0*[1-9][0-9]*    [1-9][0-9]*   /^[0]{0,5}[1-9]\d{0,4}$/   /^(?!0$)/  