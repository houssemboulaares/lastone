const express = require("express")
const connect = require("./back end/helpers/dbconnect")
const userRouter=require("./back end/routes/userRouter")
const skinRouter=require("./back end/routes/skinRouter")

const cors=require('cors')
const app=express()
const port=7000
connect()
app.use(express.json())
app.use(cors())
app.use("/user",userRouter)
app.use("/skin",skinRouter)




app.listen(port, () => console.log(`Example app listening on port ${port}!`))