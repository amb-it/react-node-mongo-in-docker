import mongoose from 'mongoose';

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
};

export default connectDb;
