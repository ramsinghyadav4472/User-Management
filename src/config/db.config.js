import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/user-management',
    options: {
        // useNewUrlParser and useUnifiedTopology are no longer needed in Mongoose 6+
        // They are now always true by default
    }
};

export default dbConfig;
