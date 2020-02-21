
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(queryString);

const detailsContainer = document.querySelector(".detail-container");

let charId;

if (params.has("id")) {
    charId = params.get("id");
}

const charDetailsUrl = `https://rickandmortyapi.com/api/character/${charId}`;
console.log(charDetailsUrl);

fetch(charDetailsUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        loadCharDetails(json);
    })
    .catch(function (error) {
        document.location.href = "error.html";
    });

function loadCharDetails(json) {

    //let newHTML = "";

    const detailsCard = `
                            <img class="details-image" src=${json.image} alt=${json.name} />
                            <div class="detail-details">
                                <h1>${json.name}</h1>
                                <p>Status: <span class="value" id="status">${json.status}</span></p>
                                <p>Species: <span class="value" id="species">${json.species}e</span></p>
                                <p>Origin: <span class="value" id="origin">${json.origin.name}</span></p>
                                <p>Location: <span class="value" id="location">${json.location.name}</span></p>                   
                            </div>`
    ;
    //newHTML += detailsCard;
    detailsContainer.innerHTML = detailsCard;

}
