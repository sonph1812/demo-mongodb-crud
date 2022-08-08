"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const BookController_1 = __importDefault(require("../controller/BookController"));
exports.router = (0, express_1.Router)();
exports.router.get('/book/list', BookController_1.default.showListBook);
exports.router.post('/book/create', BookController_1.default.createBook);
exports.router.get('/book/create', BookController_1.default.showCreateForm);
//# sourceMappingURL=router.js.map