function validateId(id) {
    if (/[0-9]/g.test(id)) return true //el .g fa que no s'aturi al primer valor de l'array
    if (/[a-z]/g.test(id)) return false
    if (test(id)=== '') return false
}
module.exports = validateId  //Amb aquest comando exportem al projecte la funció com una callback