let form = document.querySelector("#form")
let input = document.querySelector("input[name=pokemon]")
let data



async function getPokemon(event) {
    event.preventDefault()
    let pokemonC = document.querySelector("input[name=pokemon]").value
    if (pokemonC) {
        try {
            const res = await miData(pokemonC)
            if (res.ok) {
                data = await res.json()
                console.log(data);
                console.log(data.pokemonC);
                document.querySelector("#p").innerText = data.pokemonC.name
                let abDiv = document.querySelector("#abilities")
                abDiv.innerHTML = "";
                for (let i = 0; i < data.pokemonC.abilities.length; i++) {
                    let pAb = document.createElement("p")
                    pAb.innerText = data.pokemonC.abilities[i].ability.name
                    console.log(data.pokemonC.abilities[i].ability.name);
                    abDiv.appendChild(pAb)
                }
                let sprite = document.querySelector("#sprite")
                let sprite1 = document.querySelector("#sprite1")
                sprite.src = data.pokemonC.sprites.front_default
                sprite1.src = data.pokemonC.sprites.back_default

            } else {
                document.querySelector("#p").innerText = 'Error fetching Pokémon data'
            }
        } catch (error) {
            document.querySelector("#p").innerText = 'Error: Network issue'
        }
    }
}

async function pokemonFifth() {
    for (let i = 494; i < 650; i++) {
        try {
            const res = await miData(i)
            if (res.ok) {
                data = await res.json()
                console.log(data.pokemonC);
                const div = document.createElement("div")
                div.classList.add("card")
                div.innerHTML = `
                    <img src="${data.pokemonC.sprites.front_default}" class="card-img-top" alt="">
                    <h5 class="card-title border text-center">${data.pokemonC.name}</h5>
                    <div class="card-body">          
                `
    
            } else {
                document.querySelector("#p").innerText = 'Error fetching Pokémon data'
            }
        } catch (error) {
            document.querySelector("#p").innerText = 'Error: Network issue'
        }
        
    }
}

function miData(termino) {
    return fetch(`http://localhost:3000/pokemon/${termino}`)
}
form.addEventListener("submit", getPokemon)

// input.addEventListener('input', async (event) => {
//     event.preventDefault()
//     let terminoSearch = document.querySelector("input[name=pokemon]").value
//     // console.log(terminoSearch);
//     let data = await miData(document.querySelector("input[name=pokemon]").value)
//     // let data = await dataRaw.json();
//     console.log(data);
//     let datas = data
//     console.log(datas);
//     datas.filter(pok => pok.name.includes(terminoSearch))
//     console.log(datas.name);
// })

pokemonFifth()