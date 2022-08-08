"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
const data_source_1 = require("../data-source");
class UserController {
    constructor() {
        this.showListUser = async (req, res) => {
            let users = await this.userRepository.find();
            res.render('list', {
                users: users
            });
        };
        this.showCreateForm = async (req, res) => {
            res.render('create');
        };
        this.createUser = async (req, res) => {
            let files = req.files;
            console.log(req.body);
            if (files) {
                let user = req.body;
                if (files.image && user.name) {
                    let image = files.image;
                    image.mv('./public/storage/' + image.name);
                    user.avatar = 'storage/' + image.name;
                    await this.userRepository.save(user);
                    res.redirect(301, '/list');
                }
                else {
                    res.render('error');
                }
            }
            else {
                res.render('error');
            }
        };
        this.deleteUser = async (req, res) => {
            let iddelete = req.params.id;
            await this.userRepository.delete(iddelete);
            res.redirect(301, '/list');
        };
        this.showUpdateForm = async (req, res) => {
            let idUpdate = +req.params.id;
            let user = await this.userRepository.findOneBy({ id: idUpdate });
            if (user) {
                res.render('update', { user: user });
            }
        };
        this.updateUser = async (req, res) => {
            let idUpdate = +req.params.id;
            let user = await this.userRepository.findOneBy({ id: idUpdate });
            if (user) {
                let newUser = req.body;
                let files = req.files;
                if (files) {
                    if (files.image) {
                        let image = files.image;
                        image.mv('./public/storage/' + image.name);
                        newUser.avatar = 'storage/' + image.name;
                    }
                }
                else {
                    newUser.avatar = user.avatar;
                }
                let neUser = this.userRepository.merge(user, newUser);
                await this.userRepository.save(neUser);
                res.redirect(301, '/list');
            }
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.userRepository = connection.getRepository(user_1.User);
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map