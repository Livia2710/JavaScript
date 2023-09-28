document.write('<h2 style="color: blue;">Resolução</h2><br>');



// Digite a resolução do exercício aqui e visualize o resultado no navegador

let nomes = [
    "Pedro", "Sophia", "Gabriela", "Victor", "Rafaela"
];

// Cache do tamanho array
let nome = nomes.length;

for (let i = 0; i < nome; i++){
    document.write(`O valor de carros [${i}]é: <strong>${nomes[i]}<strong/><br>`);
}

