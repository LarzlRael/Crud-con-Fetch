"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const indexController_1 = require("../controllers/indexController");
const router = express_1.Router();
router.get('/', indexController_1.indexController.index);
router.post('/', [
    express_validator_1.check('name').not().isEmpty(),
    express_validator_1.check('dir').not().isEmpty(),
    express_validator_1.check('n_trabs').isNumeric().not().isEmpty(),
    express_validator_1.check('n_pac').isNumeric().not().isEmpty(),
    express_validator_1.check('especialidad').isAlphanumeric().not().isEmpty()
], indexController_1.indexController.create);
router.delete('/:id', indexController_1.indexController.delete);
router.put('/:id', indexController_1.indexController.edit);
exports.default = router;
