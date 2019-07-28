"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const hospitalSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    dir: { type: String, required: true },
    especialidad: { type: String, required: true },
    n_trabs: { type: Number, required: true },
    n_pac: { type: Number, required: true },
});
exports.default = mongoose_1.model('hospital', hospitalSchema);
