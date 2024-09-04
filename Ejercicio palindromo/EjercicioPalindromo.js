function esPalindroma(frase) {
    const fraseLimpia = frase.toLowerCase().replace(/[^a-z0-9]/g, '');

    const fraseInvertida = fraseLimpia.split('').reverse().join('');
    
    if (fraseLimpia === fraseInvertida) {
        return "Es palíndroma";
    } else {
        return "No es palíndroma";
    }
}



console.log(esPalindroma("Hola"));