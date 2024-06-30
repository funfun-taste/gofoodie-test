import { COLLECTIONS } from "@apis/lib/collections";
import mongoose, { Model } from "mongoose";

export interface FeedSchemaType {
  content: string; // 내용
  isDeleted: boolean; // 삭제 여부
  userId: string; // 등록한 사용자 id
  shopId?: string; // 상점 id
}

export interface FeedDocument extends FeedSchemaType, Document {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const FeedSchema = new mongoose.Schema<FeedDocument>(
  {
    content: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
    userId: {
      type: String,
      required: true,
    },
    shopId: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Feed: Model<FeedDocument> =
  mongoose.models?.Feed || mongoose.model(COLLECTIONS.FEED, FeedSchema);

export default Feed;
