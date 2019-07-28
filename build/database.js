"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
mongoose_1.connect('mongodb://localhost/hospital', {
    useNewUrlParser: true
})
    .then(db => console.log('Database Conected'))
    .catch(err => console.log(err));
