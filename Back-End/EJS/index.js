import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
 
app.use(bodyParser.urlencoded({extended :true}));

var lett = "a weekday";
var wor = "it's time work hard";

const today = new Date();
const day = today.getDay();

if(day==0 || day ==6){
    lett = "the weekend";
    adv = "it's time to have some fun";
}
app.post("/",(req,res)=>{
    res.render("index.ejs",{letter : lett,word : wor });
})

app.listen(port,()=>{
    cosole.log(`Port ${port} is running`);
})