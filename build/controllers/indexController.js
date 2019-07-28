"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hospitalModel_1 = __importDefault(require("../models/hospitalModel"));
const express_validator_1 = require("express-validator");
class IndexController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const allData = yield hospitalModel_1.default.find();
            res.json(allData);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const { name, dir, especialidad, n_trabs, n_pac } = req.body;
            const newData = new hospitalModel_1.default({ name, dir, especialidad, n_trabs, n_pac });
            yield newData.save();
            res.json({ message: 'true' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('estes es el id recibido : ' + id);
            const bookDelete = yield hospitalModel_1.default.findByIdAndDelete(id);
            res.json({ message: 'Eliminado' });
        });
    }
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield hospitalModel_1.default.findByIdAndUpdate({ _id: id }, req.body);
            res.json({ edit: 'true' });
        });
    }
}
exports.indexController = new IndexController();
