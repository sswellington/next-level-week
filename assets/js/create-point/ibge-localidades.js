// Localidades - Versão: 1.0.0
//
// Obtenha os dados sobre as divisões administrativas do Brasil
// https://servicodados.ibge.gov.br/api/docs/localidades?versao=1
//
// Outras APIs do IBGE
// https://servicodados.ibge.gov.br/api/docs
//
// --- --- --- --- 
// Ex.: create-point.html            
// <fieldset>
//     <legend>
//         <h2>Dados da entidade</h2>
//     </legend>
// </fieldset>

function getFetch(url, query) {
    const select = document.querySelector(query);

    // update cities according to the state
    if (query == "select[name=city] ") {
        select.innerHTML = ("<option value>Selecione a Cidade</option>");
    }

    // accessing and manipulating parts of the HTTP pipeline
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(url).then(response => response.json())
        .then(list => {
            for (const index of list) {
                select.innerHTML += (`<option value="${index.id}">${index.nome}</option>`);
            }
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });

    return (select);
}

function getState() {
    const query = ("select[name=uf] ");
    const url = ("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
    getFetch(url, query);
}

getState();

function getCity(event) {
    const query = ("select[name=city] ");
    const ufValue = (event.target.value);
    const url = (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`);

    const indexOfSelectedState = (event.target.selectedIndex);
    const stateInput = (document.querySelector("input[name=state] "));

    stateInput.value = (event.target.options[indexOfSelectedState].text);
    getFetch(url, query);
}

document.querySelector("select[name=uf] ").addEventListener("change", getCity);