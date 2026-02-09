import User from '../models/user.model.js';

// Get all users
export const getAll = async () => {
    return await User.find();
};

// Filter users based on query parameters
export const filter = async (filters = {}) => {
    const query = {};

    // Filter by isActive status
    if (filters.isActive !== undefined) {
        const boolValue = filters.isActive === "true" || filters.isActive === true;
        query.isActive = boolValue;
    }

    // Filter by name (case-insensitive partial match)
    if (filters.name) {
        query.name = { $regex: filters.name, $options: 'i' };
    }

    return await User.find(query);
};

// Create a new user
export const create = async (data) => {
    const user = await User.create(data);
    return user;
};

// Update a user by ID
export const update = async (id, data) => {
    const user = await User.findByIdAndUpdate(
        id,
        data,
        {
            new: true, // Return the updated document
            runValidators: true // Run schema validators
        }
    );

    if (!user) {
        const error = new Error('User not found');
        error.statusCode = 404;
        throw error;
    }

    return user;
};

// Delete a user by ID
export const remove = async (id) => {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
        const error = new Error('User not found');
        error.statusCode = 404;
        throw error;
    }

    return user;
};
