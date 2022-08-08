"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "user_management",
    synchronize: true,
    logging: false,
    entities: ["dist/src/model/*.js"],
    migrations: ["dist/src/migrations/*.js"],
});
//# sourceMappingURL=data-source.js.map