// Lista de alunos com nome e nota
const alunos = [
    { nome: 'Ana', nota: 7.5 },
    { nome: 'Bruno', nota: 5.8 },
    { nome: 'Carla', nota: 9.2 },
    { nome: 'Daniel', nota: 4.3 },
    { nome: 'Eduarda', nota: 6.0 },
    { nome: 'Felipe', nota: 3.7 },
    { nome: 'Gabriela', nota: 8.1 }
];

// Função que retorna apenas os alunos com nota maior ou igual a 6
const filtrarAprovados = (lista) => {
    return lista.filter(aluno => aluno.nota >= 6);
};

// Exibe os alunos aprovados no console
const aprovados = filtrarAprovados(alunos);
console.log('Alunos aprovados:');
aprovados.forEach(aluno => {
    console.log(`- ${aluno.nome} (Nota: ${aluno.nota})`);
});