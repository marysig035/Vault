console.log('You have received this message because you have been chosen to open an important vault. Here is the secret combination:');

// variables and arithmetic operators:
const lock1 = 5 * 2;
const lock2 = 10 + 30;
const lock3 = 40 - 1;
const message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
const final = `You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${lock1} ${lock2} ${lock3}`

console.log(lock1, lock2, lock3);

function displayAlert(){
    alert(final);
}

alert(final);