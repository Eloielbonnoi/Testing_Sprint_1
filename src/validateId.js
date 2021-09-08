function validateId (id) {
    if(/[0-9]/g.test(id))
return true
}
module.exports =validateId  //Amb aquest comando exportem al projecte la funció com una callback