let form = document.querySelector("#form")
let input = document.querySelector("input[name=pokemon]")
let data
let aux = "arceus"



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
            document.querySelector("#p").innerText = 'Error fetching'
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
                const table = document.querySelector("#pokedex")

                let aside = document.querySelector("#aside1")

                let divAside = document.createElement("div")

                let asideP = document.createElement("a")
                let spanP = document.createElement("span")

                let imgP = document.createElement("img")
                imgP.src = data.pokemonC.sprites.front_default
                imgP.height = 32
                imgP.width = 32

                asideP.href = `#${data.pokemonC.id}`

                asideP.innerHTML = data.pokemonC.name
                spanP.appendChild(imgP)

                divAside.appendChild(asideP)
                divAside.appendChild(spanP)

                aside.appendChild(divAside)

                let tr = document.createElement("tr")
                let td1 = document.createElement("td")
                let td2 = document.createElement("td")
                let td3 = document.createElement("td")
                let td4 = document.createElement("td")

                for (let i = 0; i < data.pokemonC.types.length; i++) {

                    let badgeType = document.createElement("span")
                    badgeType.classList.add("badge", "m-1", "p-2", "fs-5")
                    badgeType.innerHTML = data.pokemonC.types[i].type.name
                    td4.appendChild(badgeType)
                    switch (data.pokemonC.types[i].type.name.toLowerCase()) {
                        case "fire":
                            badgeType.style.backgroundColor = "#F08030";
                            badgeType.style.color = "#FFFFFF";
                            break;
                        case "water":
                            badgeType.style.backgroundColor = "#6890F0";
                            badgeType.style.color = "#FFFFFF";
                            break;
                        case "grass":
                            badgeType.style.backgroundColor = "#78C850";
                            badgeType.style.color = "#FFFFFF";
                            break;
                        case "electric":
                            badgeType.style.backgroundColor = "#F8D030";
                            badgeType.style.color = "#000000";
                            break;
                        case "psychic":
                            badgeType.style.backgroundColor = "#F85888";
                            badgeType.style.color = "#FFFFFF";
                            break;
                        case "ice":
                            badgeType.style.backgroundColor = "#98D8D8";
                            badgeType.style.color = "#000000";
                            break;
                        case "dragon":
                            badgeType.style.backgroundColor = "#7038F8";
                            badgeType.style.color = "#FFFFFF";
                            break;
                        case "dark":
                            badgeType.style.backgroundColor = "#705848";
                            badgeType.style.color = "#FFFFFF";
                            break;
                        case "fairy":
                            badgeType.style.backgroundColor = "#EE99AC";
                            badgeType.style.color = "#000000";
                            break;
                        case "normal":
                            badgeType.style.backgroundColor = "#A8A878";
                            badgeType.style.color = "#000000";
                            break;
                        case "fighting":
                            badgeType.style.backgroundColor = "#C03028";
                            badgeType.style.color = "#FFFFFF";
                            break;
                        case "flying":
                            badgeType.style.backgroundColor = "#A890F0";
                            badgeType.style.color = "#FFFFFF";
                            break;
                        case "poison":
                            badgeType.style.backgroundColor = "#A040A0";
                            badgeType.style.color = "#FFFFFF";
                            break;
                        case "ground":
                            badgeType.style.backgroundColor = "#E0C068";
                            badgeType.style.color = "#000000";
                            break;
                        case "rock":
                            badgeType.style.backgroundColor = "#B8A038";
                            badgeType.style.color = "#FFFFFF";
                            break;
                        case "bug":
                            badgeType.style.backgroundColor = "#A8B820";
                            badgeType.style.color = "#FFFFFF";
                            break;
                        case "ghost":
                            badgeType.style.backgroundColor = "#705898";
                            badgeType.style.color = "#FFFFFF";
                            break;
                        case "steel":
                            badgeType.style.backgroundColor = "#B8B8D0";
                            badgeType.style.color = "#000000";
                            break;
                        default:
                            badgeType.style.backgroundColor = "#68A090";
                            badgeType.style.color = "#FFFFFF";
                            break;
                    }
                }


                td1.setAttribute("id", data.pokemonC.id)

                let img = document.createElement("img")
                img.src = data.pokemonC.sprites.front_default

                td1.innerHTML = data.pokemonC.id
                td3.innerHTML = data.pokemonC.name



                td2.appendChild(img)

                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                table.appendChild(tr)

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