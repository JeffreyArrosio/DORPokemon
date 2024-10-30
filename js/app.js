const express = require('express')
const app = express()
const port = 3000
const api = 'https://pokeapi.co/api/v2/'

// Middleware para servir archivos estáticos en el frontend
app.use(express.static('../html'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../html/index.html'))
})

app.get('/pokemon/:pokemon', async (req, res) => {
    const pokemon = req.params.pokemon
    try {
        const cPokemon = await fetch(`${api}pokemon/${pokemon}`)
        const pokemonC = await cPokemon.json()
        res.json({ pokemonC })  // Enviamos solo la habilidad como JSON
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Pokémon data' })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



