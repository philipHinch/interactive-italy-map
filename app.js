const abruzzo = document.getElementById('abruzzo');
const basilicata = document.getElementById('basilicata');
const calabria = document.getElementById('calabria');
const campania = document.getElementById('campania');
const emilia = document.getElementById('emilia');
const friuli = document.getElementById('friuli');
const lazio = document.getElementById('lazio');
const liguria = document.getElementById('liguria');
const lombardia = document.getElementById('lombardia');
const marche = document.getElementById('marche');
const molise = document.getElementById('molise');
const piemonte = document.getElementById('piemonte');
const puglia = document.getElementById('puglia');
const sardegna = document.getElementById('sardegna');
const sicilia = document.getElementById('sicilia');
const toscana = document.getElementById('toscana');
const trentino = document.getElementById('trentino');
const umbria = document.getElementById('umbria');
const aosta = document.getElementById('aosta');
const veneto = document.getElementById('veneto');
const mainContainer = document.querySelector('.main-container');
const listContainer = document.querySelector('.list');
const svg = document.querySelector('svg');
const info = document.querySelector('.info');
const regionsList = document.querySelectorAll('.region');
const svgPaths = document.querySelectorAll('.regione');

let regionsArr = [];



async function getData() {
    let response = await fetch("./data.json");
    let data = await response.json();
    return data
}



getData()
    .then(data => {
        listContainer.innerHTML = `
        <h2>Italy's Regions & Provinces</h2>
        <ol>
        <li class="region abruzzo" >1. ${ data.regioni[14] } <i class="fas fa-sort-down"></i>
           <ol class=" hidden margin-left">
              <li>${ data.Abruzzo[0].nome }</li>
              <li>${ data.Abruzzo[1].nome }</li>
              <li>${ data.Abruzzo[2].nome }</li>
              <li>${ data.Abruzzo[3].nome }</li>
           </ol>
        </li>
        <li class="region basilicata">2. ${ data.regioni[18] } <i class="fas fa-sort-down"></i>
            <ol class="hidden margin-left">
                <li>${ data.Basilicata[0].nome }</li>
                <li>${ data.Basilicata[1].nome }</li>
            </ol>
        </li>
        <li class="region calabria">3. ${ data.regioni[13] } <i class="fas fa-sort-down"></i>
            <ol class="hidden margin-left">
                <li>${ data.Calabria[0].nome }</li>
                <li>${ data.Calabria[1].nome }</li>
                <li>${ data.Calabria[2].nome }</li>
                <li>${ data.Calabria[3].nome }</li>
                <li>${ data.Calabria[4].nome }</li>
            </ol>
        </li>
        <li class="region campania">4. ${ data.regioni[5] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.Campania[0].nome }</li>
            <li>${ data.Campania[1].nome }</li>
            <li>${ data.Campania[2].nome }</li>
            <li>${ data.Campania[3].nome }</li>
            <li>${ data.Campania[4].nome }</li>
        </ol>
    </li>
        <li class="region emilia">5. ${ data.regioni[9] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.EmiliaRomagna[0].nome }</li>
            <li>${ data.EmiliaRomagna[1].nome }</li>
            <li>${ data.EmiliaRomagna[2].nome }</li>
            <li>${ data.EmiliaRomagna[3].nome }</li>
            <li>${ data.EmiliaRomagna[4].nome }</li>
            <li>${ data.EmiliaRomagna[5].nome }</li>
            <li>${ data.EmiliaRomagna[6].nome }</li>
            <li>${ data.EmiliaRomagna[7].nome }</li>
            <li>${ data.EmiliaRomagna[8].nome }</li>
        </ol>
    </li>
        <li class="region friuli">6. ${ data.regioni[17] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.FriuliVeneziaGiulia[0].nome }</li>
            <li>${ data.FriuliVeneziaGiulia[1].nome }</li>
            <li>${ data.FriuliVeneziaGiulia[2].nome }</li>
            <li>${ data.FriuliVeneziaGiulia[3].nome }</li>
        </ol>
    </li>
        <li class="region lazio">7. ${ data.regioni[15] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.Lazio[0].nome }</li>
            <li>${ data.Lazio[1].nome }</li>
            <li>${ data.Lazio[2].nome }</li>
            <li>${ data.Lazio[3].nome }</li>
            <li>${ data.Lazio[4].nome }</li>
        </ol>
    </li>
        <li class="region liguria">8. ${ data.regioni[16] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.Liguria[0].nome }</li>
            <li>${ data.Liguria[1].nome }</li>
            <li>${ data.Liguria[2].nome }</li>
            <li>${ data.Liguria[3].nome }</li>
        </ol>
    </li>
        <li class="region lombardia">9. ${ data.regioni[8] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.Lombardia[0].nome }</li>
            <li>${ data.Lombardia[1].nome }</li>
            <li>${ data.Lombardia[2].nome }</li>
            <li>${ data.Lombardia[3].nome }</li>
            <li>${ data.Lombardia[4].nome }</li>
            <li>${ data.Lombardia[5].nome }</li>
            <li>${ data.Lombardia[6].nome }</li>
            <li>${ data.Lombardia[7].nome }</li>
            <li>${ data.Lombardia[8].nome }</li>
            <li>${ data.Lombardia[9].nome }</li>
            <li>${ data.Lombardia[10].nome }</li>
            <li>${ data.Lombardia[11].nome }</li>
        </ol>
    </li>
        <li class="region marche">10. ${ data.regioni[2] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.Marche[0].nome }</li>
            <li>${ data.Marche[1].nome }</li>
            <li>${ data.Marche[2].nome }</li>
            <li>${ data.Marche[3].nome }</li>
            <li>${ data.Marche[4].nome }</li>
        </ol>
    </li>
    </li>
        <li class="region molise">11. ${ data.regioni[12] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.Molise[0].nome }</li>
            <li>${ data.Molise[1].nome }</li>
        </ol>
    </li>
        <li class="region piemonte">12. ${ data.regioni[1] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.Piemonte[0].nome }</li>
            <li>${ data.Piemonte[1].nome }</li>
            <li>${ data.Piemonte[2].nome }</li>
            <li>${ data.Piemonte[3].nome }</li>
            <li>${ data.Piemonte[4].nome }</li>
            <li>${ data.Piemonte[5].nome }</li>
            <li>${ data.Piemonte[6].nome }</li>
            <li>${ data.Piemonte[7].nome }</li>
        </ol>
    </li>
        <li class="region puglia">13. ${ data.regioni[6] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.Puglia[0].nome }</li>
            <li>${ data.Puglia[1].nome }</li>
            <li>${ data.Puglia[2].nome }</li>
            <li>${ data.Puglia[3].nome }</li>
            <li>${ data.Puglia[4].nome }</li>
            <li>${ data.Puglia[5].nome }</li>
        </ol>
    </li>
        <li class="region sardegna">14. ${ data.regioni[11] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.Sardegna[0].nome }</li>
            <li>${ data.Sardegna[1].nome }</li>
            <li>${ data.Sardegna[2].nome }</li>
            <li>${ data.Sardegna[3].nome }</li>
            <li>${ data.Sardegna[4].nome }</li>
        </ol>
    </li>
        <li class="region sicilia">15. ${ data.regioni[0] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.Sicilia[0].nome }</li>
            <li>${ data.Sicilia[1].nome }</li>
            <li>${ data.Sicilia[2].nome }</li>
            <li>${ data.Sicilia[3].nome }</li>
            <li>${ data.Sicilia[4].nome }</li>
            <li>${ data.Sicilia[5].nome }</li>
            <li>${ data.Sicilia[6].nome }</li>
            <li>${ data.Sicilia[7].nome }</li>
            <li>${ data.Sicilia[8].nome }</li>
        </ol>
    </li>
        <li class="region toscana">16. ${ data.regioni[4] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.Toscana[0].nome }</li>
            <li>${ data.Toscana[1].nome }</li>
            <li>${ data.Toscana[2].nome }</li>
            <li>${ data.Toscana[3].nome }</li>
            <li>${ data.Toscana[4].nome }</li>
            <li>${ data.Toscana[5].nome }</li>
            <li>${ data.Toscana[6].nome }</li>
            <li>${ data.Toscana[7].nome }</li>
            <li>${ data.Toscana[8].nome }</li>
            <li>${ data.Toscana[9].nome }</li>
        </ol>
    </li>
    <li class="region trentino">17. ${ data.regioni[10] } <i class="fas fa-sort-down"></i>
    <ol class="hidden margin-left">
        <li>${ data.TrentinoAltoAdige[0].nome }</li>
        <li>${ data.TrentinoAltoAdige[1].nome }</li>
    </ol>
    </li>
    <li class="region umbria">18. ${ data.regioni[19] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.Umbria[0].nome }</li>
            <li>${ data.Umbria[1].nome }</li>
        </ol>
    </li>
    <li class="region aosta">19. ${ data.regioni[3] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
        </ol>
    </li>
    <li class="region veneto">20. ${ data.regioni[7] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left">
            <li>${ data.Veneto[0].nome }</li>
            <li>${ data.Veneto[1].nome }</li>
            <li>${ data.Veneto[2].nome }</li>
            <li>${ data.Veneto[3].nome }</li>
            <li>${ data.Veneto[4].nome }</li>
            <li>${ data.Veneto[5].nome }</li>
        </ol>
    </li>
    </ol>
        `
    }
    )


function resetPathStyles(paths) {
    paths.forEach((path) => {
        path.style.fill = '#3E5C73';
        path.style.stroke = 'grey';
    })
}





//EVENT LISTENERS

//listener for each region in list
listContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('region')) {
        //toggle hidden class
        e.target.children[1].classList.toggle('hidden');
        //change icon
        let icon = e.target.firstElementChild;
        if (icon.classList.contains('fa-sort-down')) {
            icon.classList.remove('fa-sort-down')
            icon.classList.add('fa-sort-up')
        } else if (icon.classList.contains('fa-sort-up')) {
            icon.classList.remove('fa-sort-up')
            icon.classList.add('fa-sort-down')
        }
        //if region is clicked, change region path fill
        let name = e.target.className.split(' ');
        svgPaths.forEach((path) => {
            path.style.fill = '#3E5C73';
            path.style.stroke = `#3E5C73`;
            path.style.strokeWidth = "1";
            path.style.strokeMiterlimit = "10";
            if (path.id === name[1]) {
                path.style.fill = `url(#${ name[1] }-pattern)`;
            }
        })
        let regionName = e.target.classList[1]
        info.innerHTML = `
        <div class="region-header">
        <h1>${ regionsInfo[regionName][0] }</h1>
        <div class="image-container"><img src="${ regionsInfo[regionName][2] }" alt="sicily-foto"></div>
     </div>
     <p>${ regionsInfo[regionName][1] }</p>
        <iframe class="song" src="${ regionsInfo[regionName][3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        `
    };
})









// ------------------- REGION MOUSE OVER EVENTS -----------------------
mainContainer.addEventListener('mouseover', (e) => {

    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'piemonte') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#piemonte-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.piemonte[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.piemonte[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.piemonte[1] }</p>
            <iframe class="song" src="${ regionsInfo.piemonte[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'lombardia') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#lombardia-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.lombardia[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.lombardia[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.lombardia[1] }</p>
            <iframe class="song" src="${ regionsInfo.lombardia[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'emilia') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#emilia-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.emilia[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.emilia[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.emilia[1] }</p>
            <iframe class="song" src="${ regionsInfo.emilia[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'toscana') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#toscana-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.toscana[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.toscana[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.toscana[1] }</p>
            <iframe class="song" src="${ regionsInfo.toscana[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'sicilia') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#sicilia-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.sicilia[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.sicilia[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.sicilia[1] }</p>
            <iframe class="song" src="${ regionsInfo.sicilia[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'puglia') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#puglia-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.puglia[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.puglia[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.puglia[1] }</p>
            <iframe class="song" src="${ regionsInfo.puglia[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'lazio') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#lazio-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.lazio[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.lazio[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.lazio[1] }</p>
            <iframe class="song" src="${ regionsInfo.lazio[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'trentino') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#trentino-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.trentino[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.trentino[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.trentino[1] }</p>
            <iframe class="song" src="${ regionsInfo.trentino[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'calabria') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#calabria-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.calabria[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.calabria[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.calabria[1] }</p>
            <iframe class="song" src="${ regionsInfo.calabria[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'campania') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#campania-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.campania[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.campania[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.campania[1] }</p>
            <iframe class="song" src="${ regionsInfo.campania[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'abruzzo') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#abruzzo-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.abruzzo[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.abruzzo[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.abruzzo[1] }</p>
            <iframe class="song" src="${ regionsInfo.abruzzo[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'marche') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#marche-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.marche[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.marche[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.marche[1] }</p>
            <iframe class="song" src="${ regionsInfo.marche[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'basilicata') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#basilicata-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.basilicata[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.basilicata[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.basilicata[1] }</p>
            <iframe class="song" src="${ regionsInfo.basilicata[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'umbria') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#umbria-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.umbria[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.umbria[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.umbria[1] }</p>
            <iframe class="song" src="${ regionsInfo.umbria[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'liguria') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#liguria-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.liguria[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.liguria[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.liguria[1] }</p>
            <iframe class="song" src="${ regionsInfo.liguria[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'molise') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#molise-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.molise[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.molise[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.molise[1] }</p>
            <iframe class="song" src="${ regionsInfo.molise[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'aosta') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#aosta-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.aosta[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.aosta[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.aosta[1] }</p>
            <iframe class="song" src="${ regionsInfo.aosta[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'friuli') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#friuli-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.friuli[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.friuli[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.friuli[1] }</p>
            <iframe class="song" src="${ regionsInfo.friuli[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'veneto') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#veneto-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.veneto[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.veneto[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.veneto[1] }</p>
            <iframe class="song" src="${ regionsInfo.veneto[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'sardegna') {
            resetPathStyles(svgPaths)
            e.target.style.fill = 'url(#sardegna-pattern)';
            info.innerHTML = `
            <div class="region-header">
            <h1>${ regionsInfo.sardegna[0] }</h1>
            <div class="image-container"><img src="${ regionsInfo.sardegna[2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo.sardegna[1] }</p>
            <iframe class="song" src="${ regionsInfo.sardegna[3] }" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `
        }
    }
})

//------------------ REGION MOUSE OUT EVENTS ---------------------------------------------------

//mouse out event reset opacity











// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'piemonte') {
//             e.target.style.fill = '#3E5C73';
//             e.target.style.stroke = 'grey';

//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'lombardia') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'emilia') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'toscana') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'sicilia') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'puglia') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'lazio') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'trentino') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'calabria') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'campania') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'abruzzo') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'marche') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'basilicata') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'umbria') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'liguria') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'molise') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'aosta') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'friuli') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'veneto') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })

// mainContainer.addEventListener('mouseout', (e) => {
//     //console.log(e.target);
//     if (e.target.classList.contains('regione')) {
//         if (e.target.id === 'sardegna') {
//             e.target.style.fill = '#3E5C73';
//         }
//     }
// })