import * as yup from 'yup';
import { model, Schema } from 'mongoose';

export const USER_MODEL_NAME = 'User';

export const userDTO = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export type TypeUser = yup.InferType<typeof userDTO>;
export interface IUser extends TypeUser {
  profilePic: string;
  messages?: string[];
  createdAt?: string;
}

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: '',
    },
    messages: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model(USER_MODEL_NAME, UserSchema);
export default UserModel;
