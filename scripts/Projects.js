

function loadJSONAsList() {
    const path = "../resources/files/projects.json";
    return fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load the JSON file');
            }
            return response.json();
        })
        .then(data => {
            if (!Array.isArray(data)) {
                throw new Error('The JSON is not a list');
            }
            return data;
        });
}

function createCard(){
    let a = `
        <div className="col-md-4">
            <div className="card mb-4">
            <img src="imagen3.jpg" className="card-img-top" alt="Proyecto 3">
                <div className="card-body">
                    <h2 className="card-title">Proyecto 3</h2>
                    <p className="card-text">Descripción del proyecto 3.</p>
                </div>
            </div>
        </div>`
}

function createElementHtml(tag, className){
    let nuevoHTML = document.createElement(tag)
    nuevoHTML.setAttribute("class", className)
    return nuevoHTML;
}

function createImageHtml(src, alt, className){
    let nuevoHTML = document.createElement(img)
    nuevoHTML.setAttribute("class", className)
    nuevoHTML.setAttribute("src", src)
    nuevoHTML.setAttribute("alt", alt)
    return nuevoHTML;
}



function createCard(obj){
    const tempDiv = createElementHtml("div","col-md-4");
    let htmlString = `
        <div class="card mb-4">
            <img src="${obj["Source"]}" class="card-img-top" alt="${obj["Alt"]}">
                <div class="card-body">
                    <h2 class="card-title">${obj["Name"]}</h2>
                    <p class="card-text">${obj["Description"]}</p>
                </div>
        </div>
                `;
    tempDiv.innerHTML += htmlString;
    return tempDiv;
}

function main(){
    let projectsHTML = document.getElementById("projects");

    let projects;
    loadJSONAsList()
        .then(list => {
            list.forEach( x => projectsHTML.appendChild(createCard(x)) );
            console.log('JSON file loaded as a list:', list);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

main()


