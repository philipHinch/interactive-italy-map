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
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const closeBtn = document.querySelector('.close');
const italyBtn = document.querySelector('.italy');


let regionsArr = [];





//--------------------FUNCTIONS-----------------------





//GET DATA FROM JSON
async function getData() {
    try {
        await fetch("./data.json")
            .then(response => response.json())
            .then(data => insertData(data))
    } catch {
        console.log('Error!!! Cannot fetch your data');
    }
}

//CALL GET DATA FUNCTION
getData()

//INSERT DATA TO LIST IN UI
function insertData(data) {
    listContainer.innerHTML = `
    <div class="close"><i class="fas fa-times"></i></div>
        <h2>Italy's Regions & Provinces</h2>
        <ol>
        <li class="region abruzzo" >1. ${ data.regioni[14] } <i class="fas fa-sort-down"></i>
           <ol class=" hidden margin-left provinces">
              <li>${ data.Abruzzo[0].nome }</li>
              <li>${ data.Abruzzo[1].nome }</li>
              <li>${ data.Abruzzo[2].nome }</li>
              <li>${ data.Abruzzo[3].nome }</li>
           </ol>
        </li>
        <li class="region basilicata">2. ${ data.regioni[18] } <i class="fas fa-sort-down"></i>
            <ol class="hidden margin-left provinces">
                <li>${ data.Basilicata[0].nome }</li>
                <li>${ data.Basilicata[1].nome }</li>
            </ol>
        </li>
        <li class="region calabria">3. ${ data.regioni[13] } <i class="fas fa-sort-down"></i>
            <ol class="hidden margin-left provinces">
                <li>${ data.Calabria[0].nome }</li>
                <li>${ data.Calabria[1].nome }</li>
                <li>${ data.Calabria[2].nome }</li>
                <li>${ data.Calabria[3].nome }</li>
                <li>${ data.Calabria[4].nome }</li>
            </ol>
        </li>
        <li class="region campania">4. ${ data.regioni[5] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left provinces">
            <li>${ data.Campania[0].nome }</li>
            <li>${ data.Campania[1].nome }</li>
            <li>${ data.Campania[2].nome }</li>
            <li>${ data.Campania[3].nome }</li>
            <li>${ data.Campania[4].nome }</li>
        </ol>
    </li>
        <li class="region emilia">5. ${ data.regioni[9] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left provinces">
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
        <ol class="hidden margin-left provinces">
            <li>${ data.FriuliVeneziaGiulia[0].nome }</li>
            <li>${ data.FriuliVeneziaGiulia[1].nome }</li>
            <li>${ data.FriuliVeneziaGiulia[2].nome }</li>
            <li>${ data.FriuliVeneziaGiulia[3].nome }</li>
        </ol>
    </li>
        <li class="region lazio">7. ${ data.regioni[15] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left provinces">
            <li>${ data.Lazio[0].nome }</li>
            <li>${ data.Lazio[1].nome }</li>
            <li>${ data.Lazio[2].nome }</li>
            <li>${ data.Lazio[3].nome }</li>
            <li>${ data.Lazio[4].nome }</li>
        </ol>
    </li>
        <li class="region liguria">8. ${ data.regioni[16] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left provinces">
            <li>${ data.Liguria[0].nome }</li>
            <li>${ data.Liguria[1].nome }</li>
            <li>${ data.Liguria[2].nome }</li>
            <li>${ data.Liguria[3].nome }</li>
        </ol>
    </li>
        <li class="region lombardia">9. ${ data.regioni[8] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left provinces">
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
        <ol class="hidden margin-left provinces">
            <li>${ data.Marche[0].nome }</li>
            <li>${ data.Marche[1].nome }</li>
            <li>${ data.Marche[2].nome }</li>
            <li>${ data.Marche[3].nome }</li>
            <li>${ data.Marche[4].nome }</li>
        </ol>
    </li>
    </li>
        <li class="region molise">11. ${ data.regioni[12] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left provinces">
            <li>${ data.Molise[0].nome }</li>
            <li>${ data.Molise[1].nome }</li>
        </ol>
    </li>
        <li class="region piemonte">12. ${ data.regioni[1] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left provinces">
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
        <ol class="hidden margin-left provinces">
            <li>${ data.Puglia[0].nome }</li>
            <li>${ data.Puglia[1].nome }</li>
            <li>${ data.Puglia[2].nome }</li>
            <li>${ data.Puglia[3].nome }</li>
            <li>${ data.Puglia[4].nome }</li>
            <li>${ data.Puglia[5].nome }</li>
        </ol>
    </li>
        <li class="region sardegna">14. ${ data.regioni[11] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left provinces">
            <li>${ data.Sardegna[0].nome }</li>
            <li>${ data.Sardegna[1].nome }</li>
            <li>${ data.Sardegna[2].nome }</li>
            <li>${ data.Sardegna[3].nome }</li>
            <li>${ data.Sardegna[4].nome }</li>
        </ol>
    </li>
        <li class="region sicilia">15. ${ data.regioni[0] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left provinces">
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
        <ol class="hidden margin-left provinces">
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
    <ol class="hidden margin-left provinces">
        <li>${ data.TrentinoAltoAdige[0].nome }</li>
        <li>${ data.TrentinoAltoAdige[1].nome }</li>
    </ol>
    </li>
    <li class="region umbria">18. ${ data.regioni[19] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left provinces">
            <li>${ data.Umbria[0].nome }</li>
            <li>${ data.Umbria[1].nome }</li>
        </ol>
    </li>
    <li class="region aosta">19. ${ data.regioni[3] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left provinces">
        </ol>
    </li>
    <li class="region veneto">20. ${ data.regioni[7] } <i class="fas fa-sort-down"></i>
        <ol class="hidden margin-left provinces">
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

//RESET PATH STYLE
function resetPathStyles(paths) {
    paths.forEach((path) => {
        path.style.fill = '#3E5C73';
        path.style.stroke = 'grey';
    })
}




//----------------EVENT LISTENERS-------------------------




//CLICK LISTENER FOR EACH REGION IN LIST
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
        <div class="close2"><i class="fas fa-times"></i></div>
        <a href="#" class="italy" title="Italy Info"><i class="fas fa-chevron-left"></i>Italy</a>
        <div class="region-header">
        <h1>${ regionsInfo[regionName][0] }</h1>
        <div class="image-container"><img src="${ regionsInfo[regionName][2] }" alt="sicily-foto"></div>
     </div>
     <p>${ regionsInfo[regionName][1] }</p>
        `
    };
})


//REGION PATH CLICK 
svgPaths.forEach((path) => {
    path.addEventListener('click', () => {
        info.style.display = 'block';
        arrowLeft.style.display = 'none';
        info.addEventListener('click', (e) => {
            if (e.target.classList.contains('fa-times')) {
                info.style.display = 'none';
                arrowLeft.style.display = 'flex';
            }
        })
    })
})

//ITALY BTN LISTENER
info.addEventListener('click', (e) => {
    if (e.target.classList.contains('italy')) {
        info.innerHTML = `
        <div class="close2"><i class="fas fa-times"></i></div>
         <div class="region-header starting-header">
            <h1>ITALY</h1>
            <div class="image-container"><img src="https://flagshoppen.com/wp-content/uploads/2021/03/Italy-Flag-600x400.png" alt="italian flag"></div>
         </div>
         <p>Italy, is a country consisting of a peninsula delimited by the Alps and several islands surrounding it. Italy is located in the center of the Mediterranean Sea, in Southern Europe, and is also often considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city, the country covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. With around 60 million inhabitants, Italy is the third-most populous member state of the European Union, after Germany and France. Due to its central geographic location in Southern Europe and the Mediterranean, Italy has historically been home to myriad peoples and cultures. Over 35% of the Italian territory is mountainous.[171] The Apennine Mountains form the peninsula's backbone, and the Alps form most of its northern boundary, where Italy's highest point is located on Mont Blanc (Monte Bianco) (4,810 m or 15,780 ft). The Po, Italy's longest river (652 kilometres or 405 miles), flows from the Alps on the western border with France and crosses the Padan plain on its way to the Adriatic Sea. The largest lake is Lake Garda (367.94 km2 or 142 sq mi)</p>
      </div>
        `
    }
})



//MOUSE OVER EVENTS ON REGIONS
svgPaths.forEach((path) => {
    path.addEventListener('mouseover', (e) => {
        resetPathStyles(svgPaths)
        region = e.target.id;
        e.target.style.fill = `url(#${ region }-pattern)`;
        info.innerHTML = `
            <div class="close2"><i class="fas fa-times"></i></div>
            <a href="#" class="italy" title="Italy Info"><i class="fas fa-chevron-left"></i>Italy</a>
            <div class="region-header">
            <h1>${ regionsInfo[region][0] }</h1>
            <div class="image-container"><img src="${ regionsInfo[region][2] }" alt="sicily-foto"></div>
         </div>
         <p>${ regionsInfo[region][1] }</p>
            `
    })
})

//ARROW LEFT & ARROW RIGHT LISTENERS
arrowRight.addEventListener('click', () => {
    if (info.style.display = 'block') {
        info.style.display = 'none';
        arrowLeft.style.display = 'flex';
    }
    listContainer.style.display = 'block';
    arrowRight.style.display = 'none';
    listContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-times')) {
            listContainer.style.display = 'none';
            arrowRight.style.display = 'flex';
        }
    })
})

arrowLeft.addEventListener('click', () => {
    if (listContainer.style.display = 'block') {
        listContainer.style.display = 'none';
        arrowRight.style.display = 'flex';
    }
    info.style.display = 'block';
    arrowLeft.style.display = 'none';
    info.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-times')) {
            info.style.display = 'none';
            arrowLeft.style.display = 'flex';
        }
    })

})


