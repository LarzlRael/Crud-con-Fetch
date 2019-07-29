import express from 'express';
import indexRoutes from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';
import path from "path";
// importando la base de datos
import './database'

class Server{
    app:express.Application;
    constructor(){
        this.app=express();

        this.config();
        this.middelwares();
        this.routes();
    }

    config(){
        this.app.set('port',process.env.PORT||3000);
    }
    middelwares(){
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(cors());
    }
    routes(){
        this.app.use(indexRoutes);
        this.app.use(express.static(path.join(__dirname,'public')));
    }

    start(){
        this.app.listen(this.app.get('port'),()=>{
            console.log('server on port '+this.app.get('port'));
            
        })
    }
}


const server = new Server();
server.start();