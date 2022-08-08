"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = require("./model/user");
const data_source_1 = require("./data-source");
class UserController {
    constructor() {
        this.showListUser = async (req, res) => {
            let users = await this.userRepository.find();
            res.render('user/list');
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.userRepository = connection.getRepository(user_1.USer);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=User-controller.js.map