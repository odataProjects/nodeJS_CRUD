const app = require('./app')
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.error(err)
    }
    console.log("Listening")
})