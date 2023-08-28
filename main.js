const form = document.getElementById("form-deposito");


let linhas = '';

let armazemDeNumero = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    criandoLinha();
    inserindoLinha();
})


function criandoLinha() {
    const inputNomeContato = document.getElementById("nome-contato")
    const inputNumeroContato = document.getElementById("numero-contato")

    if(armazemDeNumero.includes(inputNumeroContato.value)){
        alert(`O número ${inputNumeroContato.value} já foi inserido.`)
    } else {
        armazemDeNumero.push(inputNumeroContato.value)

        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputNumeroContato.value}</td>`
        linha += '</tr>'
        linhas += linha

        inputNomeContato.value = ''
        inputNumeroContato.value = ''
        
    }

}


function inserindoLinha(){
const corpoTabela = document.querySelector('tbody')
corpoTabela.innerHTML = linhas
}
