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
        path.style.stroke = '#3E5C73';
    })
}





//EVENT LISTENERS

//listener for each region in list
listContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('region')) {
        //toggle hidden class
        e.target.children[1].classList.toggle('hidden');
        //if region is clicked, change region path fill
        let name = e.target.className.split(' ');
        svgPaths.forEach((path) => {
            path.style.fill = '#3E5C73';
            path.style.stroke = `#3E5C73`;
            path.style.strokeWidth = "1";
            path.style.strokeMiterlimit = "10";
            if (path.id === name[1]) {
                path.style.fill = `url(#${ name[1] }-pattern)`;
                path.style.stroke = `palegreen`;
                path.style.strokeWidth = `3px`;
            }
        })
    };
})









// ------------------- REGION MOUSE OVER EVENTS -----------------------
mainContainer.addEventListener('mouseover', (e) => {

    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'piemonte') {
            e.target.style.fill = 'url(#piemonte-pattern)';
            e.target.style.stroke = 'palegreen';

        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'lombardia') {
            e.target.style.fill = 'url(#lombardia-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'emilia') {
            e.target.style.fill = 'url(#emilia-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'toscana') {
            e.target.style.fill = 'url(#toscana-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'sicilia') {
            e.target.style.fill = 'url(#sicilia-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'puglia') {
            e.target.style.fill = 'url(#puglia-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'lazio') {
            e.target.style.fill = 'url(#lazio-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'trentino') {
            e.target.style.fill = 'url(#trentino-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'calabria') {
            e.target.style.fill = 'url(#calabria-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'campania') {
            e.target.style.fill = 'url(#campania-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'abruzzo') {
            e.target.style.fill = 'url(#abruzzo-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'marche') {
            e.target.style.fill = 'url(#marche-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'basilicata') {
            e.target.style.fill = 'url(#basilicata-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'umbria') {
            e.target.style.fill = 'url(#umbria-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'liguria') {
            e.target.style.fill = 'url(#liguria-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'molise') {
            e.target.style.fill = 'url(#molise-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'aosta') {
            e.target.style.fill = 'url(#aosta-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'friuli') {
            e.target.style.fill = 'url(#friuli-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'veneto') {
            e.target.style.fill = 'url(#veneto-pattern)';
        }
    }
})

mainContainer.addEventListener('mouseover', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'sardegna') {
            e.target.style.fill = 'url(#sardegna-pattern)';
        }
    }
})

//------------------ REGION MOUSE OUT EVENTS ---------------------------------------------------

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'piemonte') {
            e.target.style.fill = '#3E5C73';
            e.target.style.stroke = 'grey';

        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'lombardia') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'emilia') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'toscana') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'sicilia') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'puglia') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'lazio') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'trentino') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'calabria') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'campania') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'abruzzo') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'marche') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'basilicata') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'umbria') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'liguria') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'molise') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'aosta') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'friuli') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'veneto') {
            e.target.style.fill = '#3E5C73';
        }
    }
})

mainContainer.addEventListener('mouseout', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('regione')) {
        if (e.target.id === 'sardegna') {
            e.target.style.fill = '#3E5C73';
        }
    }
})





// basilicata.addEventListener('mouseover', () => {
//     console.log('Basilicata');
// })
// calabria.addEventListener('mouseover', () => {
//     console.log('Calabria');
// })
// campania.addEventListener('mouseover', () => {
//     console.log('Campania');
// })
// emilia.addEventListener('mouseover', () => {
//     console.log('Emilia');
// })
// friuli.addEventListener('mouseover', () => {
//     console.log('Friuli');
// })
// lazio.addEventListener('mouseover', () => {
//     console.log('Lazio');
// })
// liguria.addEventListener('mouseover', () => {
//     console.log('Liguria');
// })
// lombardia.addEventListener('mouseover', () => {
//     console.log('Lombardia');
// })
// marche.addEventListener('mouseover', () => {
//     console.log('Marche');
// }) -
//     molise.addEventListener('mouseover', () => {
//         console.log('Molise');
//     })
// piemonte.addEventListener('mouseover', () => {
//     console.log('Piemonte');
// })
// puglia.addEventListener('mouseover', () => {
//     console.log('Puglia');
// })
// sardegna.addEventListener('mouseover', () => {
//     console.log('Sardegna');
// })
// sicilia.addEventListener('mouseover', () => {
//     console.log('Sicilia');
// })
// toscana.addEventListener('mouseover', () => {
//     console.log('Toscana');
// })
// trentino.addEventListener('mouseover', () => {
//     console.log('Trentino');
// })
// umbria.addEventListener('mouseover', () => {
//     console.log('Umbria');
// })
// aosta.addEventListener('mouseover', () => {
//     console.log('Aosta');
// })
// veneto.addEventListener('mouseover', () => {
//     console.log('Veneto');
// })
