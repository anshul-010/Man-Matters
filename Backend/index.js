const express  = require('express');
const { connection } = require('./db');
const cors = require('cors');
const { userRoute } = require('./routes/userRouter');

const app = express();
app.use(express.json());
app.use(cors())
app.use("/user",userRoute)

app.get("/", (req, res) => {
    res.send("Welcome to the page!");
})
app.listen(8080,async()=>{
    try {
        await connection
        console.log(`Connected to DB`)
        console.log(`server is running on port 8080`)
    } catch (error) {
        console.log(error)
    }

})