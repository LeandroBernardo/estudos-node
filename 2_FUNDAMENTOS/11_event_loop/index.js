function a() {
    console.log(`Executando a função a`)
};

function b() {
    console.log(`Executando a função b`)
};

function c() {
    console.log(`Executando a função c`)
    a()
    b()
}

// a()
// c()
// b()
// Executando a função a
// Executando a função c
// Executando a função b

c()
// Executando a função c
// Executando a função a
// Executando a função b