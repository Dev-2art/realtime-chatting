import mongoose from 'mongoose';
import { DATABASE_URL } from './env';

const connection = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: 'chatting',
    });
    return Promise.resolve('🚀 Connected to database successfully!');
  } catch (error) {
    const err = error as unknown as Error;
    return Promise.reject(err.message);
  }
};

export default connection;
