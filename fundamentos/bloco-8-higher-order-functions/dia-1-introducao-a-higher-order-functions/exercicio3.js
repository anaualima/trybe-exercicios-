const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkCorrect = (a, b) => {
    if(a===b){
        return 1
    } else if(a==='NA'){
        return 0
    }
    return -0.5
}
const CHECK_ANWERS = (rAwers, sAwers) => {
    let grade = 0;
    for (let i=0; i < rAwers.length; i+=1){
        grade+= checkCorrect(rAwers[i], sAwers[i])
    };
    return grade
};

console.log(CHECK_ANWERS(rAwers, sAwers, checkCorrect));