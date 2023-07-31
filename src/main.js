import express from 'express';
import indexRoutes from './routes/index.routes.js'
import { create } from 'express-handlebars';
import path from 'path';
import connection from './db/db.js';
import morgan from 'morgan';


const app = express();

connection();
app.set('views', path.join(__dirname, 'views'));

app.engine(".hbs", create({
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        //partials-->nombre de la carpeta se puede cambiar el nombre segun lo tengamos en el proyecto
        defaulLayout: "main",
        extname: ".hbs",
    }).engine
);

app.set('view engine', '.hbs')

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use("/", indexRoutes);

app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, () => {
    console.log("Serever running on http://localhost:3000");
});


