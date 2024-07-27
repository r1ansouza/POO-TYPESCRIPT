"use strict";
let nome;
let sobrenome;
let nomeCompleto;
let idade;
let brasileiro;
let enderecos; // ou let enderecos: Array<string>;
nome = "Will";
sobrenome = "Smith";
idade = 43;
brasileiro = false;
nomeCompleto = nome + " " + sobrenome;
enderecos = ["Rua B, Aracaju", "Rua C, tobias Barreto"];
let exibirNomeCompleto = function () {
    return (`O nome completo é: ${nomeCompleto}`);
};
let recuperarendereco = function (posicao) {
    return enderecos[posicao];
};
console.log(exibirNomeCompleto());
console.log(recuperarendereco(0));
