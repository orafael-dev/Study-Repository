const express = require('express')
const app = express()

app.get('/', function(request, response) {
    return response.send('Olá dev!')
})

app.listen(3000, () => {
    console.log('🔥Server started at 3000! 🔥')
})