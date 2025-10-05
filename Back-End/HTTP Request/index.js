import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to the home page!");
});


app.listen(port, ()=>{
    console.log(`Server Started on port ${port}`);
});