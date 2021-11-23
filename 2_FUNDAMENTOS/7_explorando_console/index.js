// Impressão de mais de um valor
const x = 10;
const y = 'Texto qualquer';
const z = [1, 2, 3];

console.log(x, y, z);
//10 Texto qualquer [ 1, 2, 3 ]



// Contagem de impressões - Bom para utilizar em loops
console.count(`O valor de x e = ${x}, contador`);
console.count(`O valor de x e = ${x}, contador`);
console.count(`O valor de x e = ${x}, contador`);
console.count(`O valor de x e = ${x}, contador`);
console.count(`O valor de x e = ${x}, contador`);
console.count(`O valor de x e = ${x}, contador`);
console.count(`O valor de x e = ${x}, contador`);
// O valor de x e = 10, contador: 1
// O valor de x e = 10, contador: 2
// O valor de x e = 10, contador: 3
// O valor de x e = 10, contador: 4
// O valor de x e = 10, contador: 5
// O valor de x e = 10, contador: 6
// O valor de x e = 10, contador: 7



// Outra possibilidade de interpolação
console.log(`A informação %s`, y)


// Limpar o console
setTimeout(() => {
    console.clear()
}, 2000);