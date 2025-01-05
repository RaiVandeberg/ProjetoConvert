
// cotação de moedas do dia

const USD = 6.3;
const EUR = 6.2;
const GBP = 7.3;


// obtendo os eletementos dos form
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const  currency = document.getElementById("currency");
const  footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amont para receber somente numeros
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");
})


// capturando o evento de submit (enviar) do form
form.onsubmit = (event) => {
event.preventDefault();

switch(currency.value) {
    case "USD":
        convertCurrency(amount.value, USD, "US$");
        break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
            case "GBP":
                convertCurrency(amount.value, GBP, "£");
                break;
                
}

}

// função para converter a moeda
function convertCurrency(amount, price, symbol) {

try{
 // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // calcula o total
    let total = amount * price

    // Verifica se o total é um número
    if(isNaN(total)) {
        return alert("Valor inválido");
    }

    // Formata o total para BRL
    total = formatCurrencyBRL(total).replace("R$", "");
    // Exibe o resultado total
    result.textContent = `${total} Reais`

    // Aplica a classe que exibe o footer com o resultado
    footer.classList.add("show-result");
   
    

} catch (error) {
    console.log(error);
    // remove a classe do footer
    footer.classList.remove("show-result");
    alert ("Erro ao converter moeda");
}
  
// Formata a moeda para o padrão BRL

function formatCurrencyBRL(value){

    // Converte para number para utilizar o toLocaleString e formata para BRL (R$ 0,00)
    return Number (value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
}