const baseUrl = "https://rickandmortyapi.com/api/character/";

console.log(baseUrl);

fetch(baseUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        loadCharacters(json);
    })
    .catch(function (error) {
        console.dir(error);
        window.location.replace("error.html");
    });
//

//function for the character cards 
function loadCharacters(json) {
    const characters = json.results;
    const cardContainer = document.querySelector(".results");
    let newHTML = "";

    for (let i = 0; i < characters.length; i++) {
        const charName = characters[i].name;
        const charImage = characters[i].image;
        const charEpisodes = characters[i].episode.length;
        const charId = characters[i].id;
        let type = "Unknown"
        if (characters[i].type) {
            type = characters[i].type;
        }
        //coded out because it doesnt work for "undefined type"
        //const charType = characters[i].type; 
        const charaterCards = `<div class="col-sm-6 col-md-4 col-lg-3">                
                                <div class="card">
                            
                                    <img class="image" src=${charImage} alt=${charName}>
                                    <div class="details">
                                        <h4 class="name">${charName}</h4>
                                        <p>Type: ${type}</p>    
                                        <p>Episode count: ${charEpisodes}</p>                                       
                                        <a class="btn btn-primary" href="details.html?id=${charId}">Details</a>
                                    </div>

                                </div>
                            </div>`;
        newHTML += charaterCards;
    }

    cardContainer.innerHTML = newHTML;
}
