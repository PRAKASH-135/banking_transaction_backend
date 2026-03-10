const express = require("express")
const cookieParser = require("cookie-parser")



const app = express()


app.use(express.json())
app.use(cookieParser())

const authRouter = require("./routes/userAuthRoutes")
const accountRouter = require("./routes/accountRoutes")
const transactionRoutes = require("./routes/transactionRoutes")



app.get("/", (req, res) => {
    res.send("Ledger Service is up and running")
})

app.use("/api/auth", authRouter)
app.use("/api/accounts", accountRouter)
app.use("/api/transactions", transactionRoutes)

module.exports = app