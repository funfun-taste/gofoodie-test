import { COLLECTIONS } from "@apis/lib/collections";
import mongoose, { Model } from "mongoose";

export interface UsersSchemaType {
  creatorId: string;
  username: string;
  description: string;
  nickname: string;
  profileImage: string;
  type: string;
}

export interface UsersDocument extends UsersSchemaType, Document {
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema<UsersDocument>(
  {
    creatorId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

const Users: Model<UsersDocument> =
  mongoose.models?.Users || mongoose.model(COLLECTIONS.USERS, UserSchema);

export default Users;
