//NIVELL 1.2
//Crea una funció asíncrona que, rebent un id d'empleat, imprimeixi per pantalla el nom de l'empleat i el seu salari
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}]; 

const getEmpleado = (id) => {
    return new Promise(function (resolve, reject) {
        const r = employees.find(e => e.id === id);
        if (r) {
            console.log(r);
            resolve(r);
        } else {
            reject('Treballador desconegut!');
        }
    })
};

const getSalaries = (objEmployee) => {
    return new Promise(function (resolve, reject) {
        const s = salaries.find(v => v.id === objEmployee.id);

        if (s) {
            resolve(s.salary);
        } else {
            reject('Hi ha hagut un error');
        }
    })
};

async function nomId(id) {
    const getNom = await getEmpleado(id);
    const nomEmpleat = getNom.name;
    console.log(nomEmpleat);
    const getSalari = await getSalaries(getNom);
    console.log(getSalari);
}

nomId(1);