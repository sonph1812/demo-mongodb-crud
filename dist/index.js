"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./src/routes/router");
const PORT = 4500;
const app = (0, express_1.default)();
app.set('views', './src/view/');
app.set('view engine', 'ejs');
mongoose_1.default.connect('mongodb://localhost:27017/book_management').then(() => {
    console.log('connect success!');
}).catch(() => {
    console.log('connect not ok!');
});
app.use('', router_1.router);
app.listen(PORT, () => {
    console.log(`${PORT}`);
});
//# sourceMappingURL=index.js.map