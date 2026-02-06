import * as userService from "../services/user.services.js";

export const getUsers = async (req, res) => {
    const users = userService.getAll();
    res.json(users);
};

export const createUser = (req, res) => {
    const user = userServices.create(req.body);
    res.status(201).json(user);
}
export const updateUser = (req, res) => {
    const user = userServices.update(req.params.id, req.body);
    res.json(user);
}
export const deleteUser = (req, res) => {
    userServices.remove(req.params.id);
    res.status(204).send;
};


