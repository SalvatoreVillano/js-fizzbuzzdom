const container = document.getElementById('containerFizzBuzz')

for (i = 1; i <= 100; i++){
    let elem = document.createElement("div");

    if (i % 5 == 0 && i % 3 == 0){
        elem.append('fizzbuzz');
        elem.className = 'box fizz_buzz';
    } else if (i % 5 == 0){
        elem.append('buzz');
        elem.className = 'box buzz';
    } else if (i % 3 == 0){
        elem.append('fizz');
        elem.className = 'box fizz';
    } else{
        elem.append(i);
        elem.className = 'box normal';

    }
    container.append(elem);
}