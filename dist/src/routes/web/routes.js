"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const userController_1 = __importDefault(require("../../controller/userController"));
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.get('/list', userController_1.default.showListUser);
exports.userRoutes.post('/create', userController_1.default.createUser);
exports.userRoutes.get('/create', userController_1.default.showCreateForm);
exports.userRoutes.get('/delete/:id', userController_1.default.deleteUser);
exports.userRoutes.get('/update/:id', userController_1.default.showUpdateForm);
exports.userRoutes.post('/update/:id', userController_1.default.updateUser);
//# sourceMappingURL=routes.js.map