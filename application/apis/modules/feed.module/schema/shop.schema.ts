import { COLLECTIONS } from "@apis/lib/collections";
import mongoose, { Model } from "mongoose";

export interface ShopSchemaType {
  title: string; // 상점 이름
  description: string; // 상정 설명
  salesHours: string; // 엽업 시간
  dayOff: string; // 휴무일
  fullAddress: string; // 주소
  sigungu: string; // 시구군
  sido: string; // 시도
  x: number; // x 좌표
  y: number; // y 좌표
  category: string; // 카테고리
  userId: string; // 등록한 사용자 id
  isDeleted: boolean; // 삭제 여부
}

export interface ShopDocument extends ShopSchemaType, Document {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const ShopSchema = new mongoose.Schema<ShopDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    salesHours: {
      type: String,
      required: true,
    },
    dayOff: {
      type: String,
      required: true,
    },
    fullAddress: {
      type: String,
      required: true,
    },
    sigungu: {
      type: String,
      required: true,
    },
    sido: {
      type: String,
      required: true,
    },
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
    category: {
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
  },
  { timestamps: true }
);

const Shop: Model<ShopDocument> =
  mongoose.models?.Shop || mongoose.model(COLLECTIONS.SHOP, ShopSchema);

export default Shop;
