import express from "express"
import default_router from "./src/routers/default-router.js"
import "dotenv/config"

const env = process.env

const app = express()
app.use(default_router)
app.use("/*", (req, res) => {res.send("404")})
app.set("/static", express.static("public"))

app.listen(env.PORT, e => e ? console.log(e) : console.log(`listening port: ${env.PORT}`))