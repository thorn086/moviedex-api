const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.use((req, res) => {
    res.send('Server working')
})

const PORT = 7000

app.listen(PORT,()=>{
    console.log(`Server is listening at https://localhost:${PORT}`)
})