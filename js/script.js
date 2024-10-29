const express = require('express')
const app = express()
const port = 3000
const api = 'https://pokeapi.co/api/v2/'

app.get('/', (req, res) => {
    res.send('Hello World!')
})

async function main() {

    app.get('/pokemon/:pokemon', async (req, res) => {
        const pokemon = req.params.pokemon;
        const cPokemon = await fetch(`${api}pokemon/${pokemon}`)

        const data = await cPokemon.json()
        const dataString = JSON.stringify(data.abilities[0].ability.name)
        res.send(`<p style="background-color:red; display:inline">${dataString}</p>`)
    })

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

main()
