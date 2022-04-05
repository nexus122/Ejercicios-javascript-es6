
// Uso adecuado de let y scope para actualizar una variable

// https://www.w3schools.com/react/react_es6_variables.asp

let puedesPasar = true;
edad = 17;

if (edad < 18) {
<<<<<<< HEAD
    puedesPasar = false;
=======
    let puedesPasar = false;
>>>>>>> d781a467eaabf036cf2c42523ff7f1b4a11743b5
}

console.log(puedesPasar) // false

// ✔️ PREGUNTA: ¿Por qué no se actualiza correctamente la variable 'puedesPasar'?

/*
 * Porque la variable puedesPasar ya esta declarada anteriormente con el mismo nombre y en el mismo ambito, solamente hay que quitar la palabra reservada let
 * de la variable puedesPasar que esta dentrode un if para que funcióne, de esta forma no la volvemos a declarar, solo alteramos su valor.
 */