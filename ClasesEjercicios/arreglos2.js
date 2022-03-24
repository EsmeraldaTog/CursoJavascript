console.log('Arreglos');

class Grade{
    constructor(name,score){
    this.name= name
    this.score= score
    }
}


const subjects= ['matematicas','fisica','Quimica','Artes']
let grades=[]
for (const subject of subjects) {
    let score= prompt(`Calificacion de ${subject}`)
    grades.push(new Grade(subject,score))
    
}
console.log(grades)


let total = 0
grades.forEach (g => {
    total += g.score
})

console.log ("promedio: ", total/grades.length);
