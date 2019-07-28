"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
require("./database");
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.middelwares();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
    }
    middelwares() {
        this.app.use(express_1.default.json());
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
    }
    routes() {
        this.app.use(indexRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port ' + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
