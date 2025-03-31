// Fonctions de manipulation de chaînes de caractères

// 1. Reverse a String:
function reverseString(str) {
    return str.split('').reverse().join(''); // Divise la chaîne en tableau, inverse et rejoint
}
console.log(reverseString("javascript")); 


// 2. Count Characters: 
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("programmation"));


// 3. Capitalize Words: 
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("c'est une belle journée"));



// Array Functions __________________________________________________________________________

// 1. Find Maximum and Minimum:

// Trouve la valeur maximale dans un tableau:
function findMax(arr) {
    return arr.length > 0 ? Math.max(...arr) : "Tableau vide"; // Vérifie si le tableau n'est pas vide
}

// Trouve la valeur minimale dans un tableau:
function findMin(arr) {
    return arr.length > 0 ? Math.min(...arr) : "Tableau vide";
}
console.log(findMax([15, 22, 8, 37, 19])); 
console.log(findMin([15, 22, 8, 37, 19])); 



// 2. Sum of Array: 
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([10, 20, 30, 40])); 



// 3. Filter Array:
function filterLongWords(words) {
    return words.filter(word => word.length > 5);
}
console.log(filterLongWords(["soleil", "chat", "éléphant", "table", "ordinateur"])); 


// Mathematical Functions _________________________________________________________________

// 1. Factorial
function factorial(n) {
    if (n < 0) return "Nombre invalide"; // Vérification des cas négatifs
    if (n === 0) return 1;
    return n * factorial(n - 1);  // Appel récursif
}
console.log(factorial(6)); 

// 2.Prime Number Check: 
function isPrime(n) {
    if (n < 2) return false;   // Les nombres inférieurs à 2 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(n); i++) {      // Vérifie la divisibilité jusqu'à la racine carrée
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(11)); 
console.log(isPrime(18)); 

// 3. Fibonacci Sequence:
function fibonacci(n) {
    if (n <= 0) return "Nombre invalide"; // Vérifie que l'entrée est positive
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);   // Ajoute le prochain nombre de Fibonacci
    }
    return fib;
}
console.log(fibonacci(8)); 
