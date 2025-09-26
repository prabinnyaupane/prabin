import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import cookieParser from "cookie-parser";


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.get('/', async(req, res)=>{
    res.render('index')
})



app.listen('3000', ()=>{
    console.log('Server start in http://localhost:3000');
    
})
