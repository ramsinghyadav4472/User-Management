import * as userService from "../services/user.services.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getUsers = asyncHandler(async (req, res) => {
    const { isActive, name } = req.query;

    // If there are query parameters, use filter function
    if (isActive !== undefined || name) {
        const users = await userService.filter({ isActive, name });
        return res.json({
            success: true,
            count: users.length,
            data: users
        });
    }

    // Otherwise, get all users
    const users = await userService.getAll();
    res.json({
        success: true,
        count: users.length,
        data: users
    });
});

export const createUser = asyncHandler(async (req, res) => {
    const user = await userService.create(req.body);
    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: user
    });
});

export const updateUser = asyncHandler(async (req, res) => {
    const user = await userService.update(req.params.id, req.body);
    res.json({
        success: true,
        message: 'User updated successfully',
        data: user
    });
});

export const deleteUser = asyncHandler(async (req, res) => {
    await userService.remove(req.params.id);
    res.json({
        success: true,
        message: 'User deleted successfully'
    });
});
